import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Download, Terminal, Settings, Clock, BookOpen, Monitor, Apple, Smartphone } from 'lucide-react'

const InstalacionPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [selectedOS, setSelectedOS] = useState('windows')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/instalacion'))
    
    // Detectar SO automáticamente
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('mac')) {
      setSelectedOS('mac')
    } else if (userAgent.includes('linux')) {
      setSelectedOS('linux')
    }
  }, [])

  const handleComplete = () => {
    markLessonCompleted('/instalacion')
    setIsCompleted(true)
  }

  const osOptions = [
    { id: 'windows', name: 'Windows', icon: Monitor, color: 'blue' },
    { id: 'mac', name: 'macOS', icon: Apple, color: 'gray' },
    { id: 'linux', name: 'Linux', icon: Terminal, color: 'green' }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <BookOpen className="w-4 h-4" />
          <span>Fundamentos</span>
          <ArrowRight className="w-4 h-4" />
          <span>Lección 2</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          ⚡ Instalar Git
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            10 minutos
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
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 mb-8">
        <div className="text-center">
          <div className="text-6xl mb-4">⚡</div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            ¡Hora de configurar tu máquina!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            En 10 minutos tendrás Git funcionando perfectamente en tu sistema. ¡Empezemos!
          </p>
        </div>
      </div>

      {/* OS Selector */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          🖥️ Selecciona tu sistema operativo
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {osOptions.map((os) => {
            const IconComponent = os.icon
            const isSelected = selectedOS === os.id
            return (
              <button
                key={os.id}
                onClick={() => setSelectedOS(os.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  isSelected
                    ? `border-${os.color}-500 bg-${os.color}-50 dark:bg-${os.color}-900/20`
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${
                  isSelected ? `text-${os.color}-600 dark:text-${os.color}-400` : 'text-gray-500'
                }`} />
                <div className={`font-semibold ${
                  isSelected ? `text-${os.color}-700 dark:text-${os.color}-300` : 'text-gray-700 dark:text-gray-300'
                }`}>
                  {os.name}
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="mb-12">
        {selectedOS === 'windows' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Monitor className="w-6 h-6 text-blue-600" />
              Instalación en Windows
            </h3>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">Método 1: Instalador oficial (Recomendado)</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Ve a la página oficial de Git y descarga el instalador:
                    </p>
                    <a 
                      href="https://git-scm.com/download/win" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Descargar Git para Windows
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Ejecuta el archivo descargado y sigue el asistente de instalación.
                    </p>
                    <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
                      <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                        💡 <strong>Tip:</strong> Puedes usar las opciones por defecto, están muy bien configuradas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300">
                      Abre una nueva ventana de <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Command Prompt</code> o <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">PowerShell</code> y verifica la instalación:
                    </p>
                    <div className="mt-3 bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Terminal className="w-4 h-4" />
                        <span>Terminal</span>
                      </div>
                      git --version
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      Deberías ver algo como: <code className="text-green-600 dark:text-green-400">git version 2.42.0</code>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                Método 2: Windows Package Manager (winget)
              </summary>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Si tienes Windows 10/11 con winget instalado:
                </p>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  winget install --id Git.Git -e --source winget
                </div>
              </div>
            </details>
          </div>
        )}

        {selectedOS === 'mac' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Apple className="w-6 h-6 text-gray-600" />
              Instalación en macOS
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-300 mb-4">Método 1: Homebrew (Recomendado)</h4>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Si no tienes Homebrew, instálalo primero:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Instala Git con Homebrew:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      brew install git
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Verifica la instalación:
                    </p>
                    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                      git --version
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <summary className="p-4 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
                Método 2: Instalador oficial
              </summary>
              <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Descarga el instalador desde:
                </p>
                <a 
                  href="https://git-scm.com/download/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar Git para macOS
                </a>
              </div>
            </details>
          </div>
        )}

        {selectedOS === 'linux' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <Terminal className="w-6 h-6 text-green-600" />
              Instalación en Linux
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-4">Ubuntu/Debian:</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  sudo apt update && sudo apt install git
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h4 className="font-semibold text-red-800 dark:text-red-300 mb-4">CentOS/RHEL/Fedora:</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  # CentOS/RHEL<br/>
                  sudo yum install git<br/><br/>
                  # Fedora<br/>
                  sudo dnf install git
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-300 mb-4">Arch Linux:</h4>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  sudo pacman -S git
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  ✓
                </div>
                <div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Verifica la instalación:
                  </p>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    git --version
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Verification */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          ✅ Verificación de la instalación
        </h2>
        
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Para asegurarte de que Git está correctamente instalado, abre tu terminal y ejecuta:
          </p>
          
          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4" />
              <span>Terminal</span>
            </div>
            git --version
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>✅ Si ves algo como:</strong>
            </p>
            <code className="text-green-600 dark:text-green-400">git version 2.42.0</code>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              ¡Perfecto! Git está instalado correctamente.
            </p>
          </div>
        </div>
      </section>

      {/* What's Next */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 ¡Git está listo!</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Excelente trabajo. Ya tienes Git instalado en tu sistema. El siguiente paso es configurarlo con tu información personal para que tus commits estén correctamente identificados.
          </p>
          
          {!isCompleted && (
            <button
              onClick={handleComplete}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors mb-4"
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
          to="/introduccion"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Anterior: Introducción
        </Link>
        
        <Link 
          to="/configuracion"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Siguiente: Configuración
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default InstalacionPage