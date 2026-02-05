import { Link, useLocation } from 'react-router-dom'
import { 
  BookOpen,
  CheckCircle2,
  Clock,
  Star,
  ChevronRight,
  Home
} from 'lucide-react'

const Sidebar = ({ isOpen, isCollapsed, completedLessons, onClose, onToggleCollapse }) => {
  const location = useLocation()

  const menuItems = [
    {
      category: "🎯 ESENCIALES (EMPIEZA AQUÍ)",
      items: [
        { path: "/introduccion", title: "¿Qué es Git?", time: "5 min", difficulty: "Principiante", icon: "🚀" },
        { path: "/instalacion", title: "Instalación", time: "10 min", difficulty: "Principiante", icon: "⚡" },
        { path: "/configuracion", title: "Configuración", time: "8 min", difficulty: "Principiante", icon: "⚙️" },
        { path: "/inicializacion", title: "Mi Primer Repositorio", time: "15 min", difficulty: "Principiante", icon: "🎯" },
        { path: "/staging-area", title: "Staging Area", time: "12 min", difficulty: "Principiante", icon: "📦" },
        { path: "/commits", title: "Commits", time: "20 min", difficulty: "Principiante", icon: "💾" }
      ]
    },
    {
      category: "🌱 COLABORACIÓN BÁSICA",
      items: [
        { path: "/branching", title: "Trabajando con Ramas", time: "25 min", difficulty: "Principiante", icon: "🌿" },
        { path: "/cloning", title: "Repositorios Remotos", time: "20 min", difficulty: "Principiante", icon: "📥" },
        { path: "/remotes", title: "Push, Pull, Fetch", time: "25 min", difficulty: "Principiante", icon: "🌐" }
      ]
    },
    {
      category: "⚠️ CUANDO TENGAS PROBLEMAS",
      items: [
        { path: "/conflictos", title: "Resolver Conflictos", time: "25 min", difficulty: "Intermedio", icon: "⚔️" },
        { path: "/revert-reset", title: "Deshacer Cambios", time: "20 min", difficulty: "Intermedio", icon: "↩️" }
      ]
    },
    {
      category: "🚀 HERRAMIENTAS ÚTILES",
      items: [
        { path: "/git-desktop", title: "Git Visual (Sin Terminal)", time: "20 min", difficulty: "Principiante", icon: "🖥️" },
        { path: "/workflow", title: "Flujo Profesional", time: "30 min", difficulty: "Intermedio", icon: "🏢" },
        { path: "/cheat-sheet", title: "Chuleta de Comandos", time: "Referencia", difficulty: "Todos", icon: "📖" },
        { path: "/advanced", title: "Resumen subir archivos", time: "40 min", difficulty: "Todos", icon: "🚀" }
      ]
    }
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Principiante': return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30'
      case 'Intermedio': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30'
      case 'Avanzado': return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
      case 'Todos': return 'text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/30'
      default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700'
    }
  }

  return (
    <>
      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 z-50
        ${isCollapsed ? 'w-16' : 'w-80'} bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-r border-gray-200 dark:border-gray-700
        transform transition-all duration-300 ease-in-out overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:block shadow-lg
      `}>
        <div className={`${isCollapsed ? 'p-2' : 'p-6'} transition-all duration-300`}>
          
          {/* Home link */}
          <Link 
            to="/" 
            className={`
              flex items-center ${isCollapsed ? 'justify-center p-2' : 'space-x-3 p-3'} rounded-lg mb-6 transition-all duration-200 group border-l-4
              ${location.pathname === '/' 
                ? 'bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 text-emerald-700 dark:text-emerald-300 border-l-emerald-500 shadow-md transform scale-[1.02]' 
                : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 text-gray-700 dark:text-gray-300 border-l-transparent hover:border-l-gray-300 hover:shadow-sm hover:transform hover:scale-[1.01] bg-white dark:bg-gray-900/50'
              }
            `}
            title={isCollapsed ? "Inicio" : ""}
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span className="font-medium">Inicio</span>}
          </Link>

          {/* Menu sections */}
          <nav className="space-y-6">
            {menuItems.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                {!isCollapsed && (
                  <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                    {section.category}
                  </h3>
                )}
                <ul className={`${isCollapsed ? 'space-y-2' : 'space-y-1'}`}>
                  {section.items.map((item, itemIndex) => {
                    const isActive = location.pathname === item.path
                    const isCompleted = completedLessons.includes(item.path)
                    
                    return (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`
                            flex items-center ${isCollapsed ? 'justify-center p-2' : 'space-x-3 p-3'} rounded-lg transition-all duration-200 group relative border-l-4
                            ${isActive 
                              ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border-l-blue-500 shadow-md transform scale-[1.02]' 
                              : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800 dark:hover:to-gray-750 text-gray-700 dark:text-gray-300 border-l-transparent hover:border-l-gray-300 hover:shadow-sm hover:transform hover:scale-[1.01] bg-white dark:bg-gray-900/50'
                            }
                          `}
                          title={isCollapsed ? item.title : ""}
                        >
                          {/* Icon and completion indicator */}
                          <div className={`flex items-center ${isCollapsed ? 'relative' : 'space-x-2'}`}>
                            <span className="text-lg flex-shrink-0">{item.icon}</span>
                            {isCompleted && (
                              <CheckCircle2 className={`w-4 h-4 text-green-500 animate-pulse ${isCollapsed ? 'absolute -top-1 -right-1' : ''}`} />
                            )}
                          </div>
                          
                          {/* Content - only show when not collapsed */}
                          {!isCollapsed && (
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium truncate">
                                  {item.title}
                                </p>
                                <ChevronRight className={`
                                  w-4 h-4 transition-all duration-200 group-hover:translate-x-1
                                  ${isActive ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'}
                                `} />
                              </div>
                              
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3 text-gray-400" />
                                  <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {item.time}
                                  </span>
                                </div>
                                <span className={`
                                  text-xs px-2 py-0.5 rounded-full font-medium
                                  ${getDifficultyColor(item.difficulty)}
                                `}>
                                  {item.difficulty}
                                </span>
                              </div>
                            </div>
                          )}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Progress summary - only show when not collapsed */}
          {!isCollapsed && (
            <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  Tu progreso
                </span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {completedLessons.length}/14
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.round((completedLessons.length / 14) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                {Math.round((completedLessons.length / 14) * 100)}% completado
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

export default Sidebar