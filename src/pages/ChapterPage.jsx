import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Target, 
  CheckCircle, 
  BookOpen,
  Trophy,
  Code,
  Lightbulb,
  Activity
} from 'lucide-react'
import { chaptersData } from '../data/chapters'
import { useProgress } from '../components/ProgressProvider'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const ChapterPage = () => {
  const { chapterNumber } = useParams()
  const navigate = useNavigate()
  const chapterId = parseInt(chapterNumber)
  const chapter = chaptersData.find(ch => ch.id === chapterId)
  const [activeSection, setActiveSection] = useState(0)
  const [completedActivities, setCompletedActivitiesLocal] = useState(new Set())
  
  const { 
    markChapterCompleted, 
    markActivityCompleted,
    isChapterCompleted, 
    isActivityCompleted 
  } = useProgress()

  useEffect(() => {
    if (!chapter) {
      navigate('/')
      return
    }
    // Scroll to top when chapter changes
    window.scrollTo(0, 0)
  }, [chapter, navigate])

  if (!chapter) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Capítulo no encontrado
        </h1>
        <Link to="/" className="text-orange-500 hover:underline">
          Volver al inicio
        </Link>
      </div>
    )
  }

  const nextChapter = chaptersData.find(ch => ch.id === chapterId + 1)
  const prevChapter = chaptersData.find(ch => ch.id === chapterId - 1)
  const isCompleted = isChapterCompleted(chapterId)

  const handleCompleteActivity = (activityIndex, points) => {
    if (!isActivityCompleted(chapterId, activityIndex)) {
      markActivityCompleted(chapterId, activityIndex, points)
      setCompletedActivitiesLocal(prev => new Set([...prev, activityIndex]))
    }
  }

  const handleCompleteChapter = () => {
    if (!isCompleted) {
      markChapterCompleted(chapterId)
    }
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'practical':
        return Code
      case 'reflection':
        return Lightbulb
      case 'research':
        return BookOpen
      case 'exploration':
        return Activity
      default:
        return Activity
    }
  }

  // Función para procesar el contenido markdown/HTML
  const processContent = (content) => {
    return content
      // Preservar saltos de línea
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n/g, '<br/>')
      // Formateo de texto
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Código inline
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded text-sm">$1</code>')
      // Separadores
      .replace(/---/g, '<hr class="border-gray-200 dark:border-gray-600 my-4"/>')
      // Bloques de código
      .replace(/```(bash|javascript|html|css)?\n([\s\S]*?)```/g, (match, lang, code) => {
        return `<pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto my-4"><code>${code.trim()}</code></pre>`;
      })
      // Títulos
      .replace(/(#{1,6})\s+(.*)/g, (match, hashes, title) => {
        const level = hashes.length;
        const sizes = {
          1: 'text-3xl',
          2: 'text-2xl', 
          3: 'text-xl',
          4: 'text-lg',
          5: 'text-base',
          6: 'text-sm'
        };
        return `<h${level} class="${sizes[level]} font-bold text-gray-900 dark:text-white mt-6 mb-4">${title}</h${level}>`;
      })
      // Blockquotes con iconos
      .replace(/> \*\*(.*?)\*\* (.*)/g, '<blockquote class="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3 italic text-blue-700 dark:text-blue-300 my-4 rounded-r-lg"><strong>$1</strong> $2</blockquote>')
      .replace(/> (.*)/g, '<blockquote class="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-4 py-3 italic text-purple-700 dark:text-purple-300 my-4 rounded-r-lg">💡 $1</blockquote>')
      // Espacios para imágenes
      .replace(/\*\*🖼️ \[ESPACIO PARA IMAGEN: (.*?)\]\*\*/g, '<div class="image-placeholder my-6"><strong>ESPACIO PARA IMAGEN:</strong><br/>$1</div>')
      // Elementos especiales con emojis
      .replace(/\*\*✅(.*?)\*\*/g, '<span class="inline-flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">✅$1</span>')
      .replace(/\*\*❌(.*?)\*\*/g, '<span class="inline-flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">❌$1</span>')
      .replace(/\*\*⚠️(.*?)\*\*/g, '<span class="inline-flex items-center gap-1 text-yellow-600 dark:text-yellow-400 font-semibold">⚠️$1</span>')
      // Envolver en párrafos
      .replace(/^(?!<[h1-6]|<div|<blockquote|<pre|<hr|<ul|<ol|<details)(.+)$/gm, '<p>$1</p>');
  };

  return (
    <div className="min-h-screen">
      
      {/* Header del capítulo */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          
          {/* Navegación */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>

            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Capítulo {chapterId} de {chaptersData.length}</span>
              {isCompleted && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </div>
          </div>

          {/* Título principal */}
          <div className={`bg-gradient-to-r ${chapter.color} rounded-2xl p-8 text-white mb-8`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center font-bold text-xl">
                {chapterId}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  {chapter.title}
                </h1>
                <p className="text-xl opacity-90">
                  {chapter.subtitle}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center space-x-1">
                <Target className="w-4 h-4" />
                <span>{chapter.difficulty}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{chapter.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="w-4 h-4" />
                <span>{chapter.content.activities?.reduce((sum, act) => sum + act.points, 0) || 0} puntos</span>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Contenido */}
            <div className="lg:col-span-3">
              
              {/* Introducción */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <div 
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: processContent(chapter.content.introduction)
                    }}
                  />
                </div>
              </div>

              {/* Secciones del contenido */}
              {chapter.content.sections?.map((section, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span>{section.title}</span>
                  </h2>
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <div 
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: processContent(section.content)
                      }}
                    />
                  </div>
                </div>
              ))}

              {/* Actividades prácticas */}
              {chapter.content.activities && (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                    <Activity className="w-6 h-6 text-orange-500" />
                    <span>Actividades Prácticas</span>
                  </h2>

                  <div className="space-y-6">
                    {chapter.content.activities.map((activity, index) => {
                      const IconComponent = getActivityIcon(activity.type)
                      const colorClass = getActivityColor(activity.type)
                      const activityCompleted = isActivityCompleted(chapterId, index)
                      
                      return (
                        <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${colorClass} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                  {activity.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                                  {activity.type} • {activity.points} puntos
                                </p>
                              </div>
                            </div>
                            {activityCompleted && (
                              <CheckCircle className="w-6 h-6 text-green-500" />
                            )}
                          </div>

                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {activity.description}
                          </p>

                          {activity.commands && (
                            <div className="mb-4">
                              <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                                Comandos a ejecutar:
                              </h4>
                              <SyntaxHighlighter
                                language="bash"
                                style={tomorrow}
                                className="rounded-lg"
                              >
                                {activity.commands.join('\n')}
                              </SyntaxHighlighter>
                            </div>
                          )}

                          <button
                            onClick={() => handleCompleteActivity(index, activity.points)}
                            disabled={activityCompleted}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              activityCompleted
                                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 cursor-not-allowed'
                                : `bg-gradient-to-r ${colorClass} text-white hover:shadow-lg`
                            }`}
                          >
                            {activityCompleted ? 'Completada' : 'Marcar como completada'}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Puntos clave */}
              {chapter.content.keyTakeaways && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                    <Lightbulb className="w-6 h-6 text-blue-500" />
                    <span>Puntos Clave para Recordar</span>
                  </h2>
                  <ul className="space-y-3">
                    {chapter.content.keyTakeaways.map((takeaway, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Botón completar capítulo */}
              <div className="text-center mb-8">
                <button
                  onClick={handleCompleteChapter}
                  disabled={isCompleted}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all ${
                    isCompleted
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  {isCompleted ? '¡Capítulo Completado!' : 'Completar Capítulo'}
                </button>
              </div>
            </div>

            {/* Sidebar de navegación */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                
                {/* Navegación entre capítulos */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Navegación
                  </h3>
                  
                  <div className="space-y-3">
                    {prevChapter && (
                      <Link
                        to={`/capitulo/${prevChapter.id}`}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors p-2 rounded"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm">Capítulo anterior</span>
                      </Link>
                    )}
                    
                    {nextChapter && (
                      <Link
                        to={`/capitulo/${nextChapter.id}`}
                        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors p-2 rounded"
                      >
                        <span className="text-sm">Siguiente capítulo</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Índice de secciones */}
                {chapter.content.sections && (
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                      En este capítulo
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {chapter.content.sections.map((section, index) => (
                        <li key={index}>
                          <a
                            href={`#section-${index}`}
                            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors block p-1 rounded"
                          >
                            {section.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChapterPage