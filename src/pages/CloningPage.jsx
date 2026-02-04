import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Download, GitBranch, Globe, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Github, Server, Cloud } from 'lucide-react'

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
    { id: 'cloning', name: 'Clonado', icon: Download },
    { id: 'platforms', name: 'Plataformas', icon: Github },
    { id: 'practice', name: 'Práctica', icon: CheckSquare }
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
              Repositorios Remotos
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>18 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Principiante</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Aprende a trabajar con repositorios remotos, clonar proyectos y colaborar con otros desarrolladores.
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
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué son los Repositorios Remotos?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Los repositorios remotos son versiones de tu proyecto alojadas en servidores 
                que permiten la colaboración entre múltiples desarrolladores.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Arquitectura Local vs Remoto
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Server className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Repositorio Local</h4>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• En tu computadora</li>
                    <li>• Working Directory</li>
                    <li>• Staging Area</li>
                    <li>• Historial local (.git)</li>
                    <li>• Desarrollo privado</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Cloud className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-medium text-gray-900 dark:text-white">Repositorio Remoto</h4>
                  </div>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• En servidor (GitHub, GitLab)</li>
                    <li>• Backup central</li>
                    <li>• Colaboración</li>
                    <li>• Historial compartido</li>
                    <li>• Acceso público/privado</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Flujo de Colaboración
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-2">
                    <Download className="w-8 h-8 text-green-500" />
                  </div>
                  <p>Clone</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-gray-400" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-2">
                    <CheckSquare className="w-8 h-8 text-blue-500" />
                  </div>
                  <p>Develop</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-gray-400" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-2">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                  <p>Push</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-gray-400" />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-2">
                    <Globe className="w-8 h-8 text-orange-500" />
                  </div>
                  <p>Collaborate</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cloning' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Comandos de Clonado
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Clonar repositorio
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Clonar por HTTPS
git clone https://github.com/usuario/repositorio.git

# Clonar por SSH
git clone git@github.com:usuario/repositorio.git

# Clonar en carpeta específica
git clone https://github.com/usuario/repositorio.git mi-proyecto

# Clonar solo una rama
git clone -b rama-especifica https://github.com/usuario/repositorio.git`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git clone https://github.com/usuario/repositorio.git', 'clone')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Gestionar remotos
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver remotos configurados
git remote -v

# Agregar remoto
git remote add origin https://github.com/usuario/repositorio.git

# Cambiar URL del remoto
git remote set-url origin https://github.com/usuario/nuevo-repositorio.git

# Eliminar remoto
git remote remove origin`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git remote -v', 'remote')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Opciones de clonado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Clonado superficial (último commit)
git clone --depth 1 https://github.com/usuario/repositorio.git

# Clonar sin checkout (solo .git)
git clone --bare https://github.com/usuario/repositorio.git

# Clonar recursivamente con submódulos
git clone --recursive https://github.com/usuario/repositorio.git`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git clone --depth 1 https://github.com/usuario/repositorio.git', 'shallow')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'platforms' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Plataformas de Git Hosting
              </h2>

              <div className="grid gap-6">
                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Github className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">GitHub</h3>
                      <p className="text-gray-300">La plataforma más popular</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-white mb-2">Características:</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Repositorios públicos ilimitados</li>
                        <li>• GitHub Actions (CI/CD)</li>
                        <li>• Issues y Pull Requests</li>
                        <li>• GitHub Pages</li>
                        <li>• Integración con VS Code</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Mejores para:</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>• Proyectos open source</li>
                        <li>• Colaboración global</li>
                        <li>• Portfolio de desarrollador</li>
                        <li>• Documentación técnica</li>
                        <li>• Comunidad activa</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Server className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">GitLab</h3>
                      <p className="text-orange-100">DevOps completo</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-white mb-2">Características:</h4>
                      <ul className="text-orange-100 space-y-1">
                        <li>• CI/CD integrado</li>
                        <li>• Container Registry</li>
                        <li>• Kubernetes integration</li>
                        <li>• Issue tracking avanzado</li>
                        <li>• Self-hosted option</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Mejores para:</h4>
                      <ul className="text-orange-100 space-y-1">
                        <li>• Empresas</li>
                        <li>• DevOps workflows</li>
                        <li>• Proyectos privados</li>
                        <li>• Deployment automation</li>
                        <li>• Control total</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-600 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Bitbucket</h3>
                      <p className="text-blue-100">Atlassian ecosystem</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-white mb-2">Características:</h4>
                      <ul className="text-blue-100 space-y-1">
                        <li>• Integración con Jira</li>
                        <li>• Pipelines built-in</li>
                        <li>• Branch permissions</li>
                        <li>• Smart Mirroring</li>
                        <li>• Trello integration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Mejores para:</h4>
                      <ul className="text-blue-100 space-y-1">
                        <li>• Teams usando Atlassian</li>
                        <li>• Equipos pequeños</li>
                        <li>• Project management</li>
                        <li>• Enterprise features</li>
                        <li>• Repositorios privados</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ejercicio: Clonar y Configurar
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Clonar un repositorio público y configurar tu entorno local para contribuir.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 1: Explorar repositorio</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Visita un repositorio público interesante en GitHub (ej: facebook/react)
                  </p>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Clonar repositorio público
git clone https://github.com/facebook/react.git
cd react`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 2: Explorar estructura</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Ver información del repositorio
git remote -v
git branch -a
git log --oneline -n 10

# Explorar archivos
ls -la
cat README.md`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 3: Fork y configuración</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Para contribuir, necesitas hacer fork del repositorio
                  </p>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Después de hacer fork en GitHub
git remote add upstream https://github.com/facebook/react.git
git remote add origin https://github.com/tu-usuario/react.git

# Verificar remotos
git remote -v`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 4: Crear rama de desarrollo</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear rama para tu contribución
git switch -c feature/mi-contribucion

# Hacer cambios y commit
echo "# Mi contribución" > CONTRIBUTING.md
git add CONTRIBUTING.md
git commit -m "docs: add contribution guidelines"

# Push a tu fork
git push origin feature/mi-contribucion`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                      💡 Consejos para Contribuir
                    </h3>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• Lee CONTRIBUTING.md antes de hacer cambios</li>
                      <li>• Mira los issues abiertos para ver qué necesitan</li>
                      <li>• Crea branches descriptivas (feat/fix/docs/)</li>
                      <li>• Haz commits pequeños y descriptivos</li>
                      <li>• Sincroniza con upstream regularmente</li>
                    </ul>
                  </div>
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