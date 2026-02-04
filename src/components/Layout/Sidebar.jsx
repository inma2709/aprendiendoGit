import { Link, useLocation } from 'react-router-dom'
import { 
  BookOpen,
  Settings,
  GitBranch,
  MessageCircle,
  GitCommit,
  GitMerge,
  Globe,
  Terminal,
  Users,
  Shield,
  Zap,
  Code,
  FileText,
  ChevronRight,
  CheckCircle
} from 'lucide-react'

const navigationData = [
  {
    title: "Fundamentos",
    items: [
      {
        path: "/introduccion",
        title: "¿Qué es Git?",
        icon: BookOpen,
        description: "Conceptos básicos y historia",
        difficulty: "Principiante",
        duration: "15 min"
      },
      {
        path: "/instalacion", 
        title: "Instalación y Configuración",
        icon: Settings,
        description: "Prepara tu entorno de trabajo",
        difficulty: "Principiante", 
        duration: "20 min"
      },
      {
        path: "/conceptos-fundamentales",
        title: "Conceptos Fundamentales", 
        icon: GitBranch,
        description: "Working Directory, Staging Area, Repository",
        difficulty: "Principiante",
        duration: "25 min"
      }
    ]
  },
  {
    title: "Workflow Básico",
    items: [
      {
        path: "/commits-profesionales",
        title: "Commits Profesionales",
        icon: MessageCircle, 
        description: "Comunicación efectiva en el código",
        difficulty: "Principiante",
        duration: "30 min"
      },
      {
        path: "/comandos-basicos",
        title: "Comandos Básicos",
        icon: Terminal,
        description: "add, commit, status, log",
        difficulty: "Principiante",
        duration: "35 min"
      },
      {
        path: "/gestion-archivos",
        title: "Gestión de Archivos",
        icon: FileText,
        description: "Seguimiento y control de cambios",
        difficulty: "Intermedio",
        duration: "25 min"
      }
    ]
  },
  {
    title: "Ramas y Fusiones",
    items: [
      {
        path: "/ramas",
        title: "Trabajando con Ramas",
        icon: GitBranch,
        description: "Branching y workflows",
        difficulty: "Intermedio", 
        duration: "40 min"
      },
      {
        path: "/merging",
        title: "Fusiones y Conflictos",
        icon: GitMerge,
        description: "Merge, rebase y resolución de conflictos",
        difficulty: "Intermedio",
        duration: "45 min"
      }
    ]
  },
  {
    title: "Colaboración",
    items: [
      {
        path: "/repositorios-remotos",
        title: "Repositorios Remotos",
        icon: Globe,
        description: "push, pull, fetch, remote",
        difficulty: "Intermedio",
        duration: "35 min"
      },
      {
        path: "/colaboracion-equipos",
        title: "Colaboración en Equipos",
        icon: Users,
        description: "GitHub, GitLab, workflows colaborativos",
        difficulty: "Intermedio",
        duration: "50 min"
      }
    ]
  },
  {
    title: "Técnicas Avanzadas",
    items: [
      {
        path: "/historial-avanzado",
        title: "Manipulación del Historial",
        icon: GitCommit,
        description: "rebase, reset, cherry-pick",
        difficulty: "Avanzado",
        duration: "40 min"
      },
      {
        path: "/hooks-automatizacion",
        title: "Hooks y Automatización",
        icon: Zap,
        description: "Git hooks, CI/CD, automatización",
        difficulty: "Avanzado", 
        duration: "35 min"
      },
      {
        path: "/seguridad-buenas-practicas",
        title: "Seguridad y Buenas Prácticas",
        icon: Shield,
        description: "GPG, security, best practices",
        difficulty: "Avanzado",
        duration: "30 min"
      }
    ]
  }
]

const Sidebar = ({ isOpen, completedLessons = [] }) => {
  const location = useLocation()

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Principiante':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Intermedio':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
      case 'Avanzado':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => {}}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-16 left-0 bottom-0 w-80 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 
        transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:static lg:transform-none
      `}>
        <div className="h-full overflow-y-auto py-6">
          
          {/* Progress Overview */}
          <div className="px-6 mb-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                Tu Progreso
              </h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">
                  {completedLessons.length} de {navigationData.reduce((acc, section) => acc + section.items.length, 0)} lecciones
                </span>
                <span className="font-medium text-orange-600 dark:text-orange-400">
                  {Math.round((completedLessons.length / navigationData.reduce((acc, section) => acc + section.items.length, 0)) * 100)}%
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(completedLessons.length / navigationData.reduce((acc, section) => acc + section.items.length, 0)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-6">
            {navigationData.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-8">
                
                {/* Section title */}
                <h2 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                  {section.title}
                </h2>
                
                {/* Section items */}
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => {
                    const isActive = location.pathname === item.path
                    const isCompleted = completedLessons.includes(item.path)
                    const IconComponent = item.icon
                    
                    return (
                      <li key={itemIndex}>
                        <Link
                          to={item.path}
                          className={`
                            group flex items-start p-3 rounded-lg transition-all duration-200 hover:shadow-sm
                            ${isActive 
                              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white'
                            }
                          `}
                        >
                          <div className="flex items-start flex-1">
                            
                            {/* Icon */}
                            <div className={`
                              flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mr-3 mt-0.5
                              ${isActive 
                                ? 'bg-white/20' 
                                : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                              }
                            `}>
                              <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`} />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className={`text-sm font-medium ${isActive ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                  {item.title}
                                </h3>
                                {isCompleted && (
                                  <CheckCircle className={`w-4 h-4 ${isActive ? 'text-white' : 'text-green-500'}`} />
                                )}
                              </div>
                              
                              <p className={`text-xs mt-1 ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                                {item.description}
                              </p>
                              
                              <div className="flex items-center justify-between mt-2">
                                <span className={`
                                  text-xs px-2 py-0.5 rounded-full font-medium
                                  ${isActive 
                                    ? 'bg-white/20 text-white' 
                                    : getDifficultyColor(item.difficulty)
                                  }
                                `}>
                                  {item.difficulty}
                                </span>
                                <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                                  {item.duration}
                                </span>
                              </div>
                            </div>

                            {/* Arrow */}
                            <ChevronRight className={`
                              w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity
                              ${isActive ? 'text-white' : 'text-gray-400'}
                            `} />
                          </div>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar