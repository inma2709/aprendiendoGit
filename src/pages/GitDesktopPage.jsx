import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Download, Monitor, Mouse, Terminal, Eye, GitBranch, Copy, Clock, BookOpen, Zap, Star, Users } from 'lucide-react'

const GitDesktopPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('intro')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/git-desktop'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/git-desktop')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'intro', name: '¿Qué es?', icon: Eye },
    { id: 'desktop', name: 'GitHub Desktop', icon: Monitor },
    { id: 'vscode', name: 'Git en VSCode', icon: Terminal },
    { id: 'comparison', name: 'Comparación', icon: Star }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Monitor className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Git Visual: ¡Sin Terminal!
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>20 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Principiante</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          ¿Te da miedo la terminal? ¡No hay problema! Aprende Git con interfaces gráficas súper fáciles de usar.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2
                  ${activeTab === tab.id
                    ? 'border-green-500 text-green-600 dark:text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'intro' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🖱️ Git con Interfaz Gráfica
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                No necesitas ser un experto en terminal para usar Git. ¡Hay herramientas visuales increíbles!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2" />
                  Línea de Comandos
                </h3>
                <ul className="space-y-3 text-sm text-red-700 dark:text-red-300">
                  <li>😰 "¿Qué comando era?"</li>
                  <li>🤯 "¡Pantalla negra da miedo!"</li>
                  <li>😵 "¿Dónde están mis archivos?"</li>
                  <li>🙈 "Un error y no sé qué pasó"</li>
                  <li>😭 "Es muy complicado"</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                  <Mouse className="w-5 h-5 mr-2" />
                  Interfaz Visual
                </h3>
                <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                  <li>😊 ¡Solo haz clic!</li>
                  <li>👀 Ves todo claramente</li>
                  <li>🎯 Botones para cada acción</li>
                  <li>🛡️ Difícil romper algo</li>
                  <li>⚡ Súper fácil de aprender</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                🎯 ¿Para Quién Son Las Herramientas Visuales?
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Principiantes</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Perfecto para empezar sin miedo</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Diseñadores</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Les encanta lo visual y intuitivo</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Productivos</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Más rápido para tareas comunes</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'desktop' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                💜 GitHub Desktop: La Herramienta Oficial
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                La aplicación oficial de GitHub. Gratis, fácil y perfecta para principiantes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                📥 Cómo Instalarlo
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">Paso 1: Descargar</span>
                    <button
                      onClick={() => copyToClipboard('https://desktop.github.com/', 'download-link')}
                      className="p-2 text-gray-400 hover:text-gray-200"
                      title="Copiar enlace"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="bg-black rounded-lg p-3">
                    <pre className="text-green-400 text-sm">
🌐 Visita: https://desktop.github.com/
⬇️ Descarga para tu sistema operativo
                    </pre>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    ✅ Disponible para Windows, Mac y Linux
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <span className="font-medium text-gray-900 dark:text-white">Paso 2: Instalar y Configurar</span>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                    <li>🔧 Ejecuta el instalador</li>
                    <li>📧 Inicia sesión con tu cuenta de GitHub</li>
                    <li>⚙️ Configura tu nombre y email</li>
                    <li>🎉 ¡Listo para usar!</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                ✨ Funciones Principales
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">📂 Ver Cambios</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Ve exactamente qué archivos cambiaron con colores y resaltado
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">💾 Commits Fáciles</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Escribe tu mensaje y haz clic en "Commit". ¡Así de simple!
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-4 py-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">🌿 Branches Visuales</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Crea, cambia y fusiona branches con menús desplegables
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">☁️ Sync Automático</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Push y pull automático con GitHub.com
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 pl-4 py-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">⚔️ Resolver Conflictos</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Interface visual para resolver conflictos sin quebraderos de cabeza
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-900/20 pl-4 py-3">
                    <h4 className="font-medium text-gray-900 dark:text-white">📊 Historial Completo</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Ve todos los commits en una línea de tiempo súper clara
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                💡 Flujo de Trabajo Típico en GitHub Desktop
              </h3>
              <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <div>
                    <strong>Abre tu proyecto:</strong> File → Add Local Repository
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <div>
                    <strong>Haz cambios:</strong> Edita archivos en tu editor favorito
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <div>
                    <strong>Ve los cambios:</strong> Aparecen automáticamente en la app
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <div>
                    <strong>Haz commit:</strong> Escribe mensaje y clic en "Commit to main"
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <div>
                    <strong>Sube cambios:</strong> Clic en "Push origin"
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'vscode' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                💙 Git Integrado en VSCode
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Si ya usas VSCode, ¡ya tienes Git visual integrado! No necesitas descargar nada más.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GitBranch className="w-5 h-5 mr-2" />
                🎯 Funciones de Git en VSCode
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">📍 Panel de Control de Git</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div>
                      <strong>Ubicación:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Barra lateral izquierda</li>
                        <li>• Icono de rama (Git branch)</li>
                        <li>• Atajo: <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Ctrl+Shift+G</code></li>
                      </ul>
                    </div>
                    <div>
                      <strong>Qué puedes hacer:</strong>
                      <ul className="mt-2 space-y-1">
                        <li>• Ver archivos modificados</li>
                        <li>• Hacer staging de cambios</li>
                        <li>• Escribir commits</li>
                        <li>• Ver historial</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">🎨 Vista Visual de Cambios</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span><strong>Verde:</strong> Líneas agregadas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span><strong>Rojo:</strong> Líneas eliminadas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span><strong>Amarillo:</strong> Líneas modificadas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded"></div>
                      <span><strong>Azul:</strong> Archivos nuevos</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">⚡ Flujo Rápido en VSCode</h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <div>
                        <strong>Haz cambios:</strong> Edita archivos normalmente
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <div>
                        <strong>Ve cambios:</strong> Aparece número en el icono de Git
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <div>
                        <strong>Stage archivos:</strong> Clic en "+" junto al archivo
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</span>
                      <div>
                        <strong>Escribe mensaje:</strong> En el cuadro de texto superior
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">5</span>
                      <div>
                        <strong>Commit:</strong> Clic en "✓" o <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">Ctrl+Enter</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                🚀 Extensiones Útiles para Git en VSCode
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-300">
                <div>
                  <strong>GitLens:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Ve quién escribió cada línea</li>
                    <li>• Historial detallado</li>
                    <li>• Comparar versiones</li>
                  </ul>
                </div>
                <div>
                  <strong>Git Graph:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Árbol visual de commits</li>
                    <li>• Ve branches como diagrama</li>
                    <li>• Súper intuitivo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparison' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ⚖️ ¿Cuál Elegir?
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Cada herramienta tiene sus ventajas. Te ayudo a decidir cuál es mejor para ti.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="text-left p-4 font-semibold text-gray-900 dark:text-white">Característica</th>
                    <th className="text-center p-4 font-semibold text-purple-600 dark:text-purple-400">GitHub Desktop</th>
                    <th className="text-center p-4 font-semibold text-blue-600 dark:text-blue-400">VSCode Git</th>
                    <th className="text-center p-4 font-semibold text-gray-600 dark:text-gray-400">Terminal</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Facilidad para principiantes</td>
                    <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Integración con editor</td>
                    <td className="text-center p-4">⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Velocidad</td>
                    <td className="text-center p-4">⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Funciones avanzadas</td>
                    <td className="text-center p-4">⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Vista visual de cambios</td>
                    <td className="text-center p-4">⭐⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <td className="p-4 font-medium text-gray-900 dark:text-white">Manejo de conflictos</td>
                    <td className="text-center p-4">⭐⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐⭐</td>
                    <td className="text-center p-4">⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 text-center">
                  💜 GitHub Desktop
                </h3>
                <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
                  <div><strong>Perfecto si:</strong></div>
                  <ul className="space-y-2">
                    <li>✅ Eres completamente nuevo en Git</li>
                    <li>✅ Prefieres aplicaciones dedicadas</li>
                    <li>✅ Trabajas principalmente con GitHub</li>
                    <li>✅ Quieres la mejor experiencia visual</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-center">
                  💙 VSCode Git
                </h3>
                <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                  <div><strong>Perfecto si:</strong></div>
                  <ul className="space-y-2">
                    <li>✅ Ya usas VSCode para programar</li>
                    <li>✅ Quieres todo integrado</li>
                    <li>✅ Te gusta la eficiencia</li>
                    <li>✅ Usas extensiones adicionales</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                  🖥️ Terminal
                </h3>
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div><strong>Perfecto si:</strong></div>
                  <ul className="space-y-2">
                    <li>✅ Ya tienes experiencia</li>
                    <li>✅ Necesitas máximo control</li>
                    <li>✅ Automatizas con scripts</li>
                    <li>✅ Trabajas en servidores remotos</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                💡 Mi Recomendación Personal
              </h3>
              <div className="space-y-4 text-sm text-green-700 dark:text-green-300">
                <div className="bg-white dark:bg-green-900/30 rounded-lg p-4">
                  <strong>🌟 Para Principiantes Absolutos:</strong>
                  <p className="mt-2">
                    Empezar con <strong>GitHub Desktop</strong>. Es súper amigable y te permite aprender Git sin miedo. 
                    Una vez que te sientas cómodo, puedes explorar otras opciones.
                  </p>
                </div>
                <div className="bg-white dark:bg-green-900/30 rounded-lg p-4">
                  <strong>⚡ Para Programadores que usan VSCode:</strong>
                  <p className="mt-2">
                    Usar <strong>Git integrado en VSCode</strong>. Te ahorras cambiar entre aplicaciones y tienes todo 
                    en un lugar. Instala GitLens para una experiencia aún mejor.
                  </p>
                </div>
                <div className="bg-white dark:bg-green-900/30 rounded-lg p-4">
                  <strong>🚀 El Enfoque Híbrido (Recomendado):</strong>
                  <p className="mt-2">
                    <strong>80% visual, 20% terminal</strong>. Usa herramientas visuales para el día a día y aprende 
                    comandos básicos de terminal para situaciones especiales. ¡Lo mejor de ambos mundos!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Completion Button */}
      <div className="flex items-center justify-center pt-8">
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`
            flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all
            ${isCompleted 
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-green-600 text-white hover:bg-green-700'
            }
          `}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? '¡Lección Completada!' : 'Marcar como Completada'}</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to="/advanced" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Técnicas Avanzadas</span>
        </Link>
        
        <Link 
          to="/cheat-sheet" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Chuleta de Comandos</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default GitDesktopPage