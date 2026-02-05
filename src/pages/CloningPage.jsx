import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Download,
  Globe,
  BookOpen,
  Copy,
  Clock,
  AlertCircle,
  CheckSquare,
  Github,
  Server,
  Cloud
} from 'lucide-react'

const CloningPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/cloning'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/cloning')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: 'Concepto', icon: Globe },
    { id: 'cloning', name: 'Clonar', icon: Download },
    { id: 'npm', name: '¿npm install?', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Download className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Clonar un Repositorio
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>10 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Principiante</span>
              </div>
            </div>
          </div>
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Aprende qué significa clonar un repositorio, para qué sirve y qué hacer justo después (incluyendo cuándo usar <code className="font-mono">npm install</code>).
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
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
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
        {/* TAB 1: CONCEPTO */}
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ¿Qué significa “clonar”?
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Clonar</strong> es <strong>copiar un repositorio remoto</strong> (por ejemplo, de GitHub) a tu ordenador.
                Al clonar, te traes el proyecto con su historial y el remoto ya configurado (normalmente llamado <code className="font-mono">origin</code>).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Local vs Remoto (idea básica)
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Server className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Repositorio Local</h4>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Está en tu ordenador</li>
                    <li>• Puedes editar archivos</li>
                    <li>• Puedes hacer commits</li>
                    <li>• Guardas tu historial en <code className="font-mono">.git</code></li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Repositorio Remoto</h4>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Está en un servidor</li>
                    <li>• Ej: GitHub</li>
                    <li>• Sirve de copia de seguridad</li>
                    <li>• Permite compartir el proyecto</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                ¿Para qué sirve clonar? (3 usos súper típicos)
              </h3>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    <p className="font-medium text-gray-900 dark:text-white">Traer un proyecto</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Te descargas el proyecto completo en tu ordenador para trabajar con él.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <p className="font-medium text-gray-900 dark:text-white">Practicar y aprender</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Clonas repos de ejemplo y practicas sin empezar desde cero.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    <p className="font-medium text-gray-900 dark:text-white">Continuar en otro PC</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Si cambias de ordenador, clonas y sigues donde lo dejaste.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Consejo
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Si vas a trabajar en dos ordenadores: <strong>pull al empezar</strong> y <strong>push al terminar</strong> (cuando ya sepas push/pull).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CLONAR */}
        {activeTab === 'cloning' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Cómo se clona un repositorio?
              </h2>

              <div className="space-y-5">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    1) Clonar por HTTPS (lo más fácil para empezar)
                  </h3>

                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`git clone https://github.com/usuario/repositorio.git`}
                    </pre>

                    <button
                      onClick={() => copyToClipboard('git clone https://github.com/usuario/repositorio.git', 'clone-https')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar comando git clone"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>

                    {copiedCode === 'clone-https' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">
                        ¡Copiado!
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Esto crea una carpeta nueva con el nombre del repositorio y te descarga todo dentro.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    2) Entrar en la carpeta del proyecto
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`cd repositorio`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('cd repositorio', 'cd')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar comando cd"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    {copiedCode === 'cd' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">
                        ¡Copiado!
                      </span>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    3) Comprobar que el remoto está configurado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`git remote -v`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git remote -v', 'remote')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar comando git remote -v"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    {copiedCode === 'remote' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">
                        ¡Copiado!
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Deberías ver <code className="font-mono">origin</code> apuntando al enlace del repositorio.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-5">
              <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                Mini-checklist después de clonar
              </h3>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• ✅ He clonado (ya tengo carpeta nueva)</li>
                <li>• ✅ He entrado con <code className="font-mono">cd</code></li>
                <li>• ✅ Veo el remoto con <code className="font-mono">git remote -v</code></li>
              </ul>
            </div>
          </div>
        )}

        {/* TAB 3: NPM INSTALL */}
        {activeTab === 'npm' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Cuándo hay que hacer <code className="font-mono">npm install</code>?
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-5 mb-5">
                <p className="text-gray-700 dark:text-gray-300">
                  Regla de oro:
                  <strong className="ml-2">
                    si hay <code className="font-mono">package.json</code> → hay que hacer <code className="font-mono">npm install</code>
                  </strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    ❌ NO (HTML + JS simple)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Si el proyecto tiene solo archivos típicos del navegador:
                  </p>
                  <div className="bg-black rounded-lg p-3">
                    <pre className="text-xs text-gray-300 overflow-x-auto">
{`index.html
script.js
style.css`}
                    </pre>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    No hay dependencias: abre el <code className="font-mono">index.html</code> o usa Live Server.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    ✅ SÍ (proyecto con Node / React / Vite / Express)
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Si ves <code className="font-mono">package.json</code>, el proyecto usa dependencias:
                  </p>
                  <div className="bg-black rounded-lg p-3">
                    <pre className="text-xs text-gray-300 overflow-x-auto">
{`package.json
package-lock.json`}
                    </pre>
                  </div>

                  <div className="bg-black rounded-lg p-4 mt-3 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`npm install`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('npm install', 'npm')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar comando npm install"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    {copiedCode === 'npm' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">
                        ¡Copiado!
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Esto descarga dependencias en <code className="font-mono">node_modules</code> (esa carpeta NO se sube al repo).
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Error típico del alumnado
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Ejecutar <code className="font-mono">npm install</code> en un proyecto solo con HTML/JS “por costumbre”.
                    Antes de ejecutar comandos, mira la estructura del proyecto.
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
          to="/merging"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Fusiones y Conflictos</span>
        </Link>

        <Link
          to="/remotes"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Push, Pull, Fetch</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default CloningPage
