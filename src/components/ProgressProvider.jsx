import { createContext, useContext, useState, useEffect } from 'react'

const ProgressContext = createContext()

export const useProgress = () => {
  const context = useContext(ProgressContext)
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider')
  }
  return context
}

const ProgressProvider = ({ children }) => {
  const [completedChapters, setCompletedChapters] = useState(() => {
    const saved = localStorage.getItem('git-manual-progress')
    return saved ? JSON.parse(saved) : []
  })
  
  const [completedActivities, setCompletedActivities] = useState(() => {
    const saved = localStorage.getItem('git-manual-activities')
    return saved ? JSON.parse(saved) : {}
  })

  const [totalPoints, setTotalPoints] = useState(() => {
    const saved = localStorage.getItem('git-manual-points')
    return saved ? parseInt(saved) : 0
  })

  useEffect(() => {
    localStorage.setItem('git-manual-progress', JSON.stringify(completedChapters))
  }, [completedChapters])

  useEffect(() => {
    localStorage.setItem('git-manual-activities', JSON.stringify(completedActivities))
  }, [completedActivities])

  useEffect(() => {
    localStorage.setItem('git-manual-points', totalPoints.toString())
  }, [totalPoints])

  const markChapterCompleted = (chapterId) => {
    if (!completedChapters.includes(chapterId)) {
      setCompletedChapters([...completedChapters, chapterId])
    }
  }

  const markActivityCompleted = (chapterId, activityIndex, points = 0) => {
    const key = `${chapterId}-${activityIndex}`
    if (!completedActivities[key]) {
      setCompletedActivities({
        ...completedActivities,
        [key]: true
      })
      setTotalPoints(prev => prev + points)
    }
  }

  const isChapterCompleted = (chapterId) => {
    return completedChapters.includes(chapterId)
  }

  const isActivityCompleted = (chapterId, activityIndex) => {
    const key = `${chapterId}-${activityIndex}`
    return !!completedActivities[key]
  }

  const getProgressPercentage = (totalChapters) => {
    return Math.round((completedChapters.length / totalChapters) * 100)
  }

  const resetProgress = () => {
    setCompletedChapters([])
    setCompletedActivities({})
    setTotalPoints(0)
    localStorage.removeItem('git-manual-progress')
    localStorage.removeItem('git-manual-activities')
    localStorage.removeItem('git-manual-points')
  }

  const value = {
    completedChapters,
    completedActivities,
    totalPoints,
    markChapterCompleted,
    markActivityCompleted,
    isChapterCompleted,
    isActivityCompleted,
    getProgressPercentage,
    resetProgress
  }

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  )
}

export default ProgressProvider