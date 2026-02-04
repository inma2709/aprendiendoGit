import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, User, Mail, Settings, Clock, BookOpen, Terminal, Copy } from 'lucide-react'

const ConfiguracionPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: ''
  })

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/configuracion'))
  }, [])

  const handleComplete = () => {
    markLessonCompleted('/configuracion')
    setIsCompleted(true)
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <BookOpen className="w-4 h-4" />
          <span>Fundamentos</span>
          <ArrowRight className="w-4 h-4" />
          <span>Lección 3</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          ⚙️ Configurar Git
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            8 minutos
          </span>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
            Principiante
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-4 h-4" />
              Completado
            </span>
          )}
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 mb-8">
        <div className="text-center">
          <div className="text-6xl mb-4">⚙️</div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Personaliza tu Git
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Vamos a configurar Git con tu información para que todos tus commits estén correctamente identificados.
          </p>
        </div>
      </div>

      {/* Configuration Form */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          👤 Configuración básica
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
          <p className="text-blue-800 dark:text-blue-300 mb-2 font-medium">
            🎯 ¿Por qué es importante?
          </p>
          <p className="text-blue-700 dark:text-blue-200">
            Cada commit que hagas incluirá tu nombre y email. Esto es crucial para el trabajo en equipo y para mantener un historial limpio del proyecto.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              1. Configurar tu nombre
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Este es el nombre que aparecerá en todos tus commits:
            </p>
            
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3 relative">
              <div className="flex items-center justify-between">
                <span>git config --global user.name "Tu Nombre Completo"</span>
                <button
                  onClick={() => copyToClipboard('git config --global user.name "Tu Nombre Completo"')}
                  className="p-1 hover:bg-gray-700 rounded"
                  title="Copiar comando"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                💡 <strong>Ejemplo:</strong> <code>git config --global user.name "Juan Pérez"</code>
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-600" />
              2. Configurar tu email
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Usa el mismo email que usas en GitHub, GitLab o tu plataforma de Git:
            </p>
            
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-3 relative">
              <div className="flex items-center justify-between">
                <span>git config --global user.email "tu@email.com"</span>
                <button
                  onClick={() => copyToClipboard('git config --global user.email "tu@email.com"')}
                  className="p-1 hover:bg-gray-700 rounded"
                  title="Copiar comando"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                💡 <strong>Ejemplo:</strong> <code>git config --global user.email "juan.perez@email.com"</code>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          ✅ Verificar configuración
        </h2>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para verificar que todo está configurado correctamente:
          </p>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Ver tu configuración completa:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm flex items-center justify-between">
                <span>git config --list</span>
                <button
                  onClick={() => copyToClipboard('git config --list')}
                  className="p-1 hover:bg-gray-700 rounded"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Ver solo nombre y email:</p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                <div className="mb-1 flex items-center justify-between">
                  <span>git config user.name</span>
                  <button
                    onClick={() => copyToClipboard('git config user.name')}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span>git config user.email</span>
                  <button
                    onClick={() => copyToClipboard('git config user.email')}
                    className="p-1 hover:bg-gray-700 rounded"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Config */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          🎨 Configuración adicional (Opcional)
        </h2>
        
        <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
          <summary className="p-4 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
            Editor de texto por defecto
          </summary>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              Configura tu editor favorito para mensajes de commit:
            </p>
            <div className="space-y-2">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Visual Studio Code:</div>
                <code className="text-sm">git config --global core.editor "code --wait"</code>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Vim:</div>
                <code className="text-sm">git config --global core.editor vim</code>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Nano:</div>
                <code className="text-sm">git config --global core.editor nano</code>
              </div>
            </div>
          </div>
        </details>

        <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <summary className="p-4 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
            Configuraciones útiles
          </summary>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-3">
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Colores en la terminal:</div>
                <code className="text-sm">git config --global color.ui auto</code>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded">
                <div className="font-medium text-gray-800 dark:text-gray-200 mb-1">Rama por defecto:</div>
                <code className="text-sm">git config --global init.defaultBranch main</code>
              </div>
            </div>
          </div>
        </details>
      </section>

      {/* Completion */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 ¡Git configurado!</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Perfecto. Ya tienes Git configurado con tu información personal. Ahora estás listo para crear tu primer repositorio y hacer tu primer commit.
          </p>
          
          {!isCompleted && (
            <button
              onClick={handleComplete}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors mb-4"
            >
              <CheckCircle2 className="w-5 h-5" />
              Marcar como Completado
            </button>
          )}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to="/instalacion"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Anterior: Instalación
        </Link>
        
        <Link 
          to="/inicializacion"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Siguiente: Mi Primer Repositorio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default ConfiguracionPage