import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from '../Sidebar'
import Footer from './Footer'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [completedLessons, setCompletedLessons] = useState([])

  // Initialize dark mode from localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Load completed lessons from localStorage
  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setCompletedLessons(completed)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const markLessonCompleted = (lessonPath) => {
    const updatedCompleted = [...completedLessons, lessonPath]
    setCompletedLessons(updatedCompleted)
    localStorage.setItem('completedLessons', JSON.stringify(updatedCompleted))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      
      {/* Header */}
      <Header 
        onToggleSidebar={toggleSidebar}
        onToggleSidebarCollapse={toggleSidebarCollapse}
        sidebarOpen={sidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      <div className="flex flex-1">
        
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen}
          isCollapsed={sidebarCollapsed}
          completedLessons={completedLessons}
          onClose={() => setSidebarOpen(false)}
          onToggleCollapse={toggleSidebarCollapse}
        />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-8 min-h-full">
            <Outlet context={{ markLessonCompleted, completedLessons }} />
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout