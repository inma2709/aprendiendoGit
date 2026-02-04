import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  BookOpen, 
  GitBranch, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Home,
  Play,
  BookText
} from 'lucide-react'

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { path: '/', label: 'Inicio', icon: Home },
    { path: '/capitulo/1', label: 'Lecciones', icon: BookText },
    { path: '/simulador', label: 'Simulador', icon: Play },
  ]

  const isActivePath = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      darkMode 
        ? 'bg-gray-800 border-gray-700' 
        : 'bg-white border-gray-200'
    } border-b shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo y título */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <GitBranch className={`w-8 h-8 transition-all duration-300 ${
                darkMode ? 'text-orange-400' : 'text-orange-500'
              } group-hover:scale-110 group-hover:rotate-12`} />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full opacity-75 animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl ${
                darkMode ? 'text-white' : 'text-gray-900'
              } group-hover:text-orange-500 transition-colors`}>
                Git Manual
              </h1>
              <p className={`text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Aprende Git desde cero
              </p>
            </div>
          </Link>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              const IconComponent = item.icon
              const isActive = isActivePath(item.path)
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? darkMode
                        ? 'text-orange-400 bg-gray-700'
                        : 'text-orange-600 bg-orange-50'
                      : darkMode
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Controles de la derecha */}
          <div className="flex items-center space-x-4">
            
            {/* Toggle modo oscuro */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Cambiar tema"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Menú"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="space-y-2">
              {navigationItems.map((item) => {
                const IconComponent = item.icon
                const isActive = isActivePath(item.path)
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      isActive
                        ? darkMode
                          ? 'text-orange-400 bg-gray-700'
                          : 'text-orange-600 bg-orange-50'
                        : darkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation