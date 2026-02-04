import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Users, GitBranch, GitMerge, Shield, Workflow, Code, Copy, Clock, BookOpen, Target, AlertCircle, CheckSquare, Zap } from 'lucide-react'

const WorkflowPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('intro')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/workflow'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/workflow')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'intro', name: 'Mundo Real', icon: Users },
    { id: 'gitflow', name: 'GitFlow', icon: GitBranch },
    { id: 'practices', name: 'Buenas Prácticas', icon: Shield },
    { id: 'simulation', name: 'Simulación', icon: Workflow }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Git en el Mundo Profesional
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>30 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Intermedio-Avanzado</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Prepárate para trabajar en equipo. Aprende los flujos de trabajo que usan las empresas y proyectos reales.
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
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
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
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🏢 Cómo Trabajan las Empresas con Git
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En el mundo real, NO trabajas solo. Hay equipos, reglas, y procesos que debes conocer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  ❌ Cómo NO Trabajar
                </h3>
                <ul className="space-y-3 text-sm text-red-700 dark:text-red-300">
                  <li>🚫 "Trabajo directamente en main"</li>
                  <li>🤯 "Hago commit de todo junto"</li>
                  <li>😱 "No reviso el código de otros"</li>
                  <li>💥 "Subo cambios sin probar"</li>
                  <li>🙈 "Mensajes: 'fix', 'update', 'stuff'"</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                  <CheckSquare className="w-5 h-5 mr-2" />
                  ✅ Cómo SÍ Trabajar
                </h3>
                <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                  <li>✨ "Creo una rama para cada feature"</li>
                  <li>🎯 "Commits pequeños y específicos"</li>
                  <li>👥 "Code reviews obligatorios"</li>
                  <li>🧪 "Pruebo antes de hacer merge"</li>
                  <li>📝 "Mensajes claros y descriptivos"</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🎯 Realidades del Trabajo en Equipo
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    👥 Múltiples Desarrolladores
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p><strong>La realidad:</strong> 5-50+ personas trabajando en el mismo código</p>
                    <p><strong>El desafío:</strong> ¿Cómo evitar que se pisen entre ellos?</p>
                    <p><strong>La solución:</strong> Ramas de trabajo (branches) y procesos definidos</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    🛡️ Código en Producción
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p><strong>La realidad:</strong> Tu código lo usan miles/millones de personas</p>
                    <p><strong>El desafío:</strong> Un error puede costar mucho dinero</p>
                    <p><strong>La solución:</strong> Reviews, testing, y despliegues controlados</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    🎯 Releases Programados
                  </h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p><strong>La realidad:</strong> "El viernes lanzamos la versión 2.1"</p>
                    <p><strong>El desafío:</strong> Coordinar features de diferentes equipos</p>
                    <p><strong>La solución:</strong> Ramas de release y versionado semántico</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                💼 Roles en un Equipo de Desarrollo
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-300">
                <div>
                  <strong>👨‍💻 Developer/Programador:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Crea features en ramas</li>
                    <li>• Hace pull requests</li>
                    <li>• Revisa código de otros</li>
                  </ul>
                </div>
                <div>
                  <strong>👨‍💼 Tech Lead:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Aprueba pull requests grandes</li>
                    <li>• Decide arquitectura</li>
                    <li>• Resuelve conflictos técnicos</li>
                  </ul>
                </div>
                <div>
                  <strong>🚀 DevOps/Release Manager:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Maneja ramas de release</li>
                    <li>• Despliega a producción</li>
                    <li>• Monitorea la estabilidad</li>
                  </ul>
                </div>
                <div>
                  <strong>🧪 QA/Tester:</strong>
                  <ul className="mt-2 space-y-1">
                    <li>• Prueba en ramas de desarrollo</li>
                    <li>• Reporta bugs encontrados</li>
                    <li>• Valida antes de releases</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gitflow' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🌊 GitFlow: El Flujo Más Popular
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                GitFlow es el estándar de la industria. Te enseño cómo funciona paso a paso.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🌳 Las 5 Ramas Principales
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <div className="w-3 h-3 bg-gray-800 dark:bg-gray-200 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">main (master)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Qué es:</strong> El código en producción - lo que ven los usuarios<br/>
                      <strong>Regla de oro:</strong> NUNCA toques main directamente
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">develop</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Qué es:</strong> Donde se integran todas las features<br/>
                      <strong>Su trabajo:</strong> Ser la "zona de staging" antes de producción
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">feature/nombre-feature</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Qué es:</strong> Tu espacio personal para desarrollar<br/>
                      <strong>Ejemplos:</strong> feature/login, feature/shopping-cart
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">release/v1.2.0</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Qué es:</strong> Preparar una versión para lanzar<br/>
                      <strong>Su trabajo:</strong> Testing final y arreglos pequeños
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">hotfix/fix-critical-bug</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      <strong>Qué es:</strong> Arreglos urgentes para producción<br/>
                      <strong>Cuándo:</strong> "¡Houston, tenemos un problema!"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔄 Ciclo de Vida de una Feature
              </h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Crear rama de feature</h4>
                        <div className="bg-black rounded-lg p-3 mt-2 relative">
                          <pre className="text-green-400 text-sm">
# Partir desde develop (siempre!)
git checkout develop
git pull origin develop

# Crear tu rama de work
git checkout -b feature/login-system
                          </pre>
                          <button
                            onClick={() => copyToClipboard(`git checkout develop
git pull origin develop
git checkout -b feature/login-system`, 'create-feature')}
                            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                          >
                            <Copy className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Desarrollar la feature</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Trabaja normalmente: edita archivos, haz commits pequeños y frecuentes
                        </p>
                        <div className="bg-black rounded-lg p-3 mt-2 relative">
                          <pre className="text-green-400 text-sm">
# Commits frecuentes y descriptivos
git add .
git commit -m "Add login form validation"
git commit -m "Connect login form to API"
git commit -m "Add error handling for login"
                          </pre>
                          <button
                            onClick={() => copyToClipboard(`git add .
git commit -m "Add login form validation"
git commit -m "Connect login form to API"
git commit -m "Add error handling for login"`, 'develop-feature')}
                            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                          >
                            <Copy className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Subir a repositorio remoto</h4>
                        <div className="bg-black rounded-lg p-3 mt-2 relative">
                          <pre className="text-green-400 text-sm">
# Primera vez subiendo la rama
git push -u origin feature/login-system

# Las siguientes veces
git push
                          </pre>
                          <button
                            onClick={() => copyToClipboard(`git push -u origin feature/login-system`, 'push-feature')}
                            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                          >
                            <Copy className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Crear Pull Request (PR)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Desde GitHub/GitLab/Bitbucket: feature/login-system → develop
                        </p>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <strong>Incluye en tu PR:</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Descripción clara de qué hace la feature</li>
                            <li>Screenshots/GIFs si es UI</li>
                            <li>Instrucciones para testing</li>
                            <li>Links a issues relacionados</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Code Review</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Otros desarrolladores revisan tu código y te dan feedback
                        </p>
                        <div className="mt-2 text-sm text-orange-600 dark:text-orange-400">
                          <strong>Posibles resultados:</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>✅ "LGTM" (Looks Good To Me) → ¡Aprobado!</li>
                            <li>🔄 "Request Changes" → Arregla y vuelve a subir</li>
                            <li>💬 "Comment" → Solo sugerencias, tú decides</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 dark:text-white">Merge a develop</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Una vez aprobado, se fusiona con develop y se borra la rama de feature
                        </p>
                        <div className="bg-black rounded-lg p-3 mt-2 relative">
                          <pre className="text-green-400 text-sm">
# Limpiar después del merge
git checkout develop
git pull origin develop
git branch -d feature/login-system
                          </pre>
                          <button
                            onClick={() => copyToClipboard(`git checkout develop
git pull origin develop
git branch -d feature/login-system`, 'cleanup-feature')}
                            className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                          >
                            <Copy className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practices' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                💎 Buenas Prácticas Profesionales
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Los hábitos que separan a un principiante de un profesional. ¡Adóptalos desde el día 1!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  📝 Mensajes de Commit
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 pl-4 py-3">
                    <h4 className="font-medium text-red-800 dark:text-red-200 mb-2">❌ MAL</h4>
                    <div className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      <div className="font-mono bg-red-100 dark:bg-red-900/40 p-2 rounded">fix</div>
                      <div className="font-mono bg-red-100 dark:bg-red-900/40 p-2 rounded">update</div>
                      <div className="font-mono bg-red-100 dark:bg-red-900/40 p-2 rounded">changes</div>
                      <div className="font-mono bg-red-100 dark:bg-red-900/40 p-2 rounded">final version</div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 pl-4 py-3">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ BIEN</h4>
                    <div className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <div className="font-mono bg-green-100 dark:bg-green-900/40 p-2 rounded">Add user authentication system</div>
                      <div className="font-mono bg-green-100 dark:bg-green-900/40 p-2 rounded">Fix memory leak in image upload</div>
                      <div className="font-mono bg-green-100 dark:bg-green-900/40 p-2 rounded">Update API documentation for v2.0</div>
                      <div className="font-mono bg-green-100 dark:bg-green-900/40 p-2 rounded">Remove deprecated jQuery dependencies</div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">🎯 Fórmula Ganadora</h4>
                    <div className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>[Verbo] + [Qué haces] + [Por qué si es necesario]</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Add:</strong> Nuevas funcionalidades</li>
                        <li><strong>Fix:</strong> Correcciones de bugs</li>
                        <li><strong>Update:</strong> Cambios en existente</li>
                        <li><strong>Remove:</strong> Eliminar algo</li>
                        <li><strong>Refactor:</strong> Mejorar código sin cambiar funcionalidad</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GitBranch className="w-5 h-5 mr-2" />
                  🌿 Nombres de Ramas
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">✅ Convención Estándar</h4>
                    <div className="text-sm text-green-700 dark:text-green-300 space-y-2">
                      <div><strong>Features:</strong> <code className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">feature/user-profile</code></div>
                      <div><strong>Bugs:</strong> <code className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">bugfix/login-error</code></div>
                      <div><strong>Hotfix:</strong> <code className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">hotfix/security-patch</code></div>
                      <div><strong>Release:</strong> <code className="bg-green-100 dark:bg-green-900/40 px-2 py-1 rounded">release/v2.1.0</code></div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">💡 Consejos</h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 list-disc list-inside space-y-1">
                      <li>Usa kebab-case (guiones)</li>
                      <li>Sé descriptivo pero conciso</li>
                      <li>Incluye número de ticket: feature/JIRA-123-user-profile</li>
                      <li>Evita caracteres especiales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔍 Pull Request Best Practices
              </h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">📋 Checklist Antes de Crear PR</h4>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm text-gray-600 dark:text-gray-400">
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <span>☐</span>
                          <span>Código compilar sin errores</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span>☐</span>
                          <span>Tests pasan localmente</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span>☐</span>
                          <span>Funcionalidad probada manualmente</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span>☐</span>
                          <span>No hay código comentado/debug</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <span>☐</span>
                          <span>Documentación actualizada</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">✍️ Descripción de PR Template</h4>
                    <div className="bg-black rounded-lg p-3 text-sm relative">
                      <pre className="text-green-400">
{`## What does this PR do?
Brief description of the feature/fix

## Screenshots/GIFs
[Add visual evidence if UI changes]

## How to test
1. Go to /login page
2. Try invalid credentials
3. Check error message displays

## Related tickets
- Closes #123
- Related to #456`}
                      </pre>
                      <button
                        onClick={() => copyToClipboard(`## What does this PR do?
Brief description of the feature/fix

## Screenshots/GIFs
[Add visual evidence if UI changes]

## How to test
1. Go to /login page
2. Try invalid credentials
3. Check error message displays

## Related tickets
- Closes #123
- Related to #456`, 'pr-template')}
                        className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-6">
              <h3 className="font-semibold text-orange-800 dark:text-orange-200 mb-4">
                🚨 Reglas de Oro del Trabajo en Equipo
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-orange-700 dark:text-orange-300">
                <div>
                  <h4 className="font-medium mb-2">🔒 Protección de Ramas</h4>
                  <ul className="space-y-1">
                    <li>• main/master: NUNCA push directo</li>
                    <li>• develop: Solo via PR aprobados</li>
                    <li>• release: Solo hotfixes críticos</li>
                    <li>• Tu feature: Tu reino personal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">⏰ Timing y Comunicación</h4>
                  <ul className="space-y-1">
                    <li>• Pull frecuente de develop</li>
                    <li>• PRs pequeños y frecuentes</li>
                    <li>• Reviews en máximo 24h</li>
                    <li>• Comunica bloqueos ASAP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'simulation' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🎮 Simulación: Tu Primer Sprint
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Vamos a simular un escenario real de trabajo. Tú eres el desarrollador junior en el equipo.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-4">
                📋 Contexto del Proyecto
              </h3>
              <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                <p><strong>Proyecto:</strong> "ShopEasy" - Una tienda online</p>
                <p><strong>Tu equipo:</strong> 5 developers, 1 tech lead, 1 designer, 1 QA</p>
                <p><strong>Sprint actual:</strong> Implementar sistema de carrito de compras</p>
                <p><strong>Tu tarea:</strong> Crear la página de checkout (TICKET-456)</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                📅 Día a Día del Sprint (2 semanas)
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">🌅 Lunes - Inicio del Sprint</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p><strong>9:00 AM - Sprint Planning:</strong></p>
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                      <p>Tech Lead: "María, tu tarea es TICKET-456: Checkout page. Estimación: 5 story points."</p>
                      <p>Tú: "Perfect, voy a crear la rama feature/checkout-page."</p>
                    </div>
                    
                    <div className="bg-black rounded-lg p-3 mt-2 relative">
                      <pre className="text-green-400 text-sm">
# Tu primer paso
git checkout develop
git pull origin develop
git checkout -b feature/TICKET-456-checkout-page
                      </pre>
                      <button
                        onClick={() => copyToClipboard(`git checkout develop
git pull origin develop
git checkout -b feature/TICKET-456-checkout-page`, 'day1-start')}
                        className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">🏗️ Martes - Miércoles - Desarrollo</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p>Trabajas en tu feature, haciendo commits frecuentes:</p>
                    
                    <div className="bg-black rounded-lg p-3 relative">
                      <pre className="text-green-400 text-sm">
# Progreso día a día
git commit -m "Add checkout page basic structure"
git commit -m "Implement payment form validation"  
git commit -m "Connect checkout form to payment API"
git commit -m "Add loading states and error handling"

# Subir progreso
git push -u origin feature/TICKET-456-checkout-page
                      </pre>
                      <button
                        onClick={() => copyToClipboard(`git commit -m "Add checkout page basic structure"
git commit -m "Implement payment form validation"  
git commit -m "Connect checkout form to payment API"
git commit -m "Add loading states and error handling"
git push -u origin feature/TICKET-456-checkout-page`, 'development-progress')}
                        className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">⚠️ Jueves - Plot Twist!</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                      <p><strong>Slack notification:</strong></p>
                      <p>Tech Lead: "Team, Pedro pushed cambios grandes a develop. Everyone needs to merge latest changes to avoid conflicts."</p>
                    </div>
                    
                    <p><strong>¡Tu primera sincronización con el equipo!</strong></p>
                    
                    <div className="bg-black rounded-lg p-3 relative">
                      <pre className="text-green-400 text-sm">
# Sincronizar con develop
git checkout develop
git pull origin develop

# Volver a tu feature y mergear cambios
git checkout feature/TICKET-456-checkout-page
git merge develop

# Si hay conflictos, resolverlos y hacer commit
git add .
git commit -m "Merge develop into feature/checkout-page"
git push
                      </pre>
                      <button
                        onClick={() => copyToClipboard(`git checkout develop
git pull origin develop
git checkout feature/TICKET-456-checkout-page
git merge develop
git add .
git commit -m "Merge develop into feature/checkout-page"
git push`, 'sync-with-team')}
                        className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">✅ Viernes - Ready for Review</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <p>Feature completa. Tiempo de crear el Pull Request:</p>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                      <strong>PR Title:</strong> "TICKET-456: Add checkout page with payment integration"<br/>
                      <strong>Description:</strong>
                      <div className="mt-2 text-xs font-mono bg-white dark:bg-gray-800 p-2 rounded">
{`## What does this PR do?
Implements the checkout page for the shopping cart feature. Users can now:
- Review their cart items
- Enter shipping information  
- Process payments via Stripe API
- Receive order confirmation

## Screenshots
[Attach screenshots of the new checkout page]

## How to test
1. Add items to cart
2. Go to /checkout
3. Fill out the form
4. Try both valid and invalid payment info
5. Verify confirmation page shows

## Related tickets
- Implements TICKET-456
- Depends on TICKET-445 (Stripe integration)`}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">🔍 Lunes Siguiente - Code Review</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <div className="space-y-3">
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                        <p><strong>Ana (Senior Dev):</strong> "LGTM! Nice error handling. Just one small suggestion: consider extracting the payment logic to a custom hook for reusability."</p>
                        <p className="text-xs text-green-600 dark:text-green-400">✅ Approved</p>
                      </div>
                      
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded">
                        <p><strong>Carlos (Tech Lead):</strong> "Good work! Please add unit tests for the payment validation function before we merge."</p>
                        <p className="text-xs text-yellow-600 dark:text-yellow-400">🔄 Changes Requested</p>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded">
                        <p><strong>Laura (Designer):</strong> "The spacing looks a bit off on mobile. Check line 45 in checkout.css"</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">💬 Comment</p>
                      </div>
                    </div>
                    
                    <p><strong>Tu respuesta:</strong> Implementas los cambios sugeridos:</p>
                    
                    <div className="bg-black rounded-lg p-3 relative">
                      <pre className="text-green-400 text-sm">
# Hacer los ajustes solicitados
git add .
git commit -m "Add unit tests for payment validation"
git commit -m "Fix mobile spacing issues in checkout form"
git push

# Comentar en el PR
"Thanks for the feedback! I've added the tests and fixed the mobile spacing. Ready for another look."
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">🎉 Martes - Merge Day!</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                      <p><strong>Carlos (Tech Lead):</strong> "Perfect! Tests look good and the mobile fix works great. Merging to develop now. Great job María! 🚀"</p>
                    </div>
                    
                    <p>Tu feature oficialmente se integra al proyecto:</p>
                    
                    <div className="bg-black rounded-lg p-3 relative">
                      <pre className="text-green-400 text-sm">
# Limpiar después del merge
git checkout develop
git pull origin develop  # Ahora incluye tu feature!
git branch -d feature/TICKET-456-checkout-page

# Celebrar 🎉
echo "¡Mi primera feature en producción!"
                      </pre>
                      <button
                        onClick={() => copyToClipboard(`git checkout develop
git pull origin develop
git branch -d feature/TICKET-456-checkout-page
echo "¡Mi primera feature en producción!"`, 'merge-celebration')}
                        className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      >
                        <Copy className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                🏆 Lecciones Aprendidas de tu Primer Sprint
              </h3>
              <div className="space-y-4 text-sm text-green-700 dark:text-green-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">💪 Lo que Hiciste Bien:</h4>
                    <ul className="space-y-1">
                      <li>✅ Commits frecuentes y descriptivos</li>
                      <li>✅ Sincronizaste proactivamente con develop</li>
                      <li>✅ PR bien documentado con contexto</li>
                      <li>✅ Respondiste al feedback constructivamente</li>
                      <li>✅ Testing antes de solicitar review</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">📚 Lo que Aprendiste:</h4>
                    <ul className="space-y-1">
                      <li>🧠 El trabajo en equipo requiere comunicación</li>
                      <li>🔄 Los cambios de otros afectan tu trabajo</li>
                      <li>👥 Code review mejora la calidad del código</li>
                      <li>⚡ PRs pequeños se aprueban más rápido</li>
                      <li>🎯 La documentación es tan importante como el código</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-green-900/30 rounded-lg p-4 mt-4">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">🚀 Siguiente Nivel</h4>
                  <p className="text-green-700 dark:text-green-300">
                    Ahora que dominas el flujo básico, puedes empezar a contribuir en proyectos open source, 
                    proponer mejoras técnicas, y eventualmente liderar tus propias features. ¡Welcome to the team! 🎉
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
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
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
          to="/git-desktop" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Git Visual (Sin Terminal)</span>
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

export default WorkflowPage