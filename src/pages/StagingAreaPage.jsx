import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Package, Plus, Eye, Clock, BookOpen, Copy, FileText, AlertCircle, CheckSquare } from 'lucide-react'

const StagingAreaPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/staging-area'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/staging-area')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: 'Concepto', icon: Package },
    { id: 'commands', name: 'Comandos', icon: Plus },
    { id: 'practice', name: 'Práctica', icon: CheckSquare },
    { id: 'tips', name: 'Consejos', icon: Eye }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Package className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Staging Area
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>12 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Principiante</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Descubre cómo usar el área de preparación de Git para controlar exactamente qué cambios incluir en cada commit.
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
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué es el Staging Area?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                El Staging Area (área de preparación) es una zona intermedia donde Git prepara los cambios 
                antes de confirmarlos permanentemente con un commit.
              </p>
            </div>

            {/* Espacio para imagen personalizada */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Flujo Visual del Staging Area
                </h3>
                {/* Tu imagen personalizada */}
                <div className="flex justify-center">
                  <img 
                    src="./public/git.png" 
                    alt="Flujo Visual del Staging Area - Working Directory, Staging Area y Repository" 
                    className="w-full max-w-3xl mx-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Los Tres Estados de Git
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 dark:bg-red-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 dark:text-red-100 mb-2 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Working Directory
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Archivos modificados pero no preparados para commit.
                  </p>
                  <div className="mt-2 text-xs bg-red-100 dark:bg-red-800 px-2 py-1 rounded">
                    git status: "modified"
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2 flex items-center">
                    <Package className="w-4 h-4 mr-2" />
                    Staging Area
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Archivos preparados para el próximo commit.
                  </p>
                  <div className="mt-2 text-xs bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">
                    git status: "staged"
                  </div>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Repository
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Archivos confirmados permanentemente.
                  </p>
                  <div className="mt-2 text-xs bg-green-100 dark:bg-green-800 px-2 py-1 rounded">
                    git status: "committed"
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Flujo de Trabajo Visual
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-2">
                    <FileText className="w-8 h-8 text-red-500" />
                  </div>
                  <p>Working<br/>Directory</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-green-500" />
                  <span className="text-xs mt-1">git add</span>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-2">
                    <Package className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p>Staging<br/>Area</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                  <span className="text-xs mt-1">git commit</span>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                  <p>Repository</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commands' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Comandos Principales
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ver estado actual
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`git status`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git status', 'status')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Muestra qué archivos están modificados, en staging o sin seguimiento.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Agregar archivos al staging
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Agregar archivo específico
git add archivo.txt

# Agregar múltiples archivos
git add archivo1.txt archivo2.js

# Agregar todos los archivos modificados
git add .

# Agregar todos los archivos de un tipo
git add *.js`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git add archivo.txt', 'add-file')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Quitar archivos del staging
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Quitar archivo específico del staging
git reset HEAD archivo.txt

# Git 2.23+ (más claro)
git restore --staged archivo.txt

# Quitar todos los archivos del staging
git reset HEAD`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git restore --staged archivo.txt', 'unstage')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ver diferencias
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver cambios no staged
git diff

# Ver cambios en staging
git diff --staged

# Ver cambios de un archivo específico
git diff archivo.txt`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git diff --staged', 'diff')}
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

        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ejercicio Práctico
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Practicar el uso del staging area con múltiples archivos y cambios parciales.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 1: Preparar archivos</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear archivos de prueba
echo "Función principal" > main.js
echo "Estilos CSS" > styles.css
echo "Documentación" > README.md
echo "Configuración" > config.json`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 2: Modificar archivos</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Modificar algunos archivos
echo "console.log('Hello');" >> main.js
echo "body { margin: 0; }" >> styles.css
echo "## Descripción" >> README.md`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 3: Uso selectivo del staging</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Ver estado
git status

# Agregar solo archivos JS y CSS
git add *.js *.css

# Ver estado nuevamente
git status

# Hacer commit parcial
git commit -m "Agregar lógica JavaScript y estilos"

# Agregar archivos restantes
git add README.md
git commit -m "Actualizar documentación"`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Consejos y Mejores Prácticas
              </h2>

              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-800 dark:text-green-200">
                        ✅ Buenas Prácticas
                      </h3>
                      <ul className="text-sm text-green-700 dark:text-green-300 mt-2 space-y-1">
                        <li>• Revisa siempre con `git status` antes de commit</li>
                        <li>• Usa `git diff --staged` para ver qué vas a commitear</li>
                        <li>• Agrupa cambios relacionados en el mismo commit</li>
                        <li>• Usa commits atómicos (un cambio lógico por commit)</li>
                        <li>• Evita `git add .` sin revisar qué incluyes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                        ⚠️ Errores Comunes
                      </h3>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-2 space-y-1">
                        <li>• Olvidar agregar archivos al staging antes de commit</li>
                        <li>• Incluir archivos temporales o de configuración personal</li>
                        <li>• No revisar qué cambios están en staging</li>
                        <li>• Mezclar cambios no relacionados en un commit</li>
                        <li>• Commitear archivos con errores de sintaxis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-3">
                    🔧 Comandos Útiles
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">git add -p</code>
                      <p className="text-blue-700 dark:text-blue-300 mt-1">Agregar cambios parciales interactivamente</p>
                    </div>
                    <div>
                      <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">git reset --soft HEAD^</code>
                      <p className="text-blue-700 dark:text-blue-300 mt-1">Deshacer último commit, mantener staging</p>
                    </div>
                    <div>
                      <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">git stash</code>
                      <p className="text-blue-700 dark:text-blue-300 mt-1">Guardar cambios temporalmente</p>
                    </div>
                    <div>
                      <code className="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">git clean -n</code>
                      <p className="text-blue-700 dark:text-blue-300 mt-1">Ver archivos que serían eliminados</p>
                    </div>
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
          to="/inicializacion" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Mi Primer Repositorio</span>
        </Link>
        
        <Link 
          to="/commits" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Commits</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default StagingAreaPage