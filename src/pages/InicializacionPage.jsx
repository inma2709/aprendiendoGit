import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, FolderPlus, Terminal, FileText, Clock, BookOpen, Copy, Zap, GitBranch, AlertCircle } from 'lucide-react'

const InicializacionPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('init')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/inicializacion'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/inicializacion')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'init', name: 'Inicializar', icon: FolderPlus },
    { id: 'structure', name: 'Estructura', icon: FileText },
    { id: 'first-commit', name: 'Primer Commit', icon: GitBranch },
    { id: 'practice', name: 'Práctica', icon: Zap }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <FolderPlus className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Mi Primer Repositorio
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>15 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Principiante</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Aprende a crear tu primer repositorio Git, entiende su estructura interna y realiza tu primer commit.
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
                    ? 'border-orange-500 text-orange-600 dark:text-orange-400'
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
        {activeTab === 'init' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Inicializando un Repositorio
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Un repositorio Git es un directorio donde Git rastrea y gestiona los cambios de tus archivos.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-orange-500" />
                  Paso 1: Crear un directorio
                </h3>
                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300">
{`# Crear un nuevo directorio
mkdir mi-primer-proyecto

# Navegar al directorio
cd mi-primer-proyecto`}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(`mkdir mi-primer-proyecto
cd mi-primer-proyecto`, 'create-dir')}
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GitBranch className="w-5 h-5 mr-2 text-orange-500" />
                  Paso 2: Inicializar Git
                </h3>
                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300">
{`# Inicializar el repositorio Git
git init

# Verificar el estado
git status`}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(`git init
git status`, 'git-init')}
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  ✅ El comando <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">git init</code> crea un directorio oculto <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.git</code> que contiene toda la información del repositorio.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200">
                      ¡Importante!
                    </h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                      El directorio <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">.git</code> es donde Git almacena toda la historia de tu proyecto. 
                      ¡No lo borres ni modifiques manualmente!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'structure' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Estructura de un Repositorio Git
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Directorio de trabajo
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <pre className="text-sm text-gray-700 dark:text-gray-300">
{`mi-primer-proyecto/
├── .git/           # Repositorio Git (oculto)
├── archivo1.txt    # Tus archivos
├── archivo2.js
└── carpeta/
    └── otro.md`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    Contenido de .git/
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <pre className="text-sm text-gray-700 dark:text-gray-300">
{`.git/
├── HEAD            # Referencia actual
├── config          # Configuración local
├── objects/        # Base de datos de objetos
├── refs/           # Referencias (branches, tags)
└── index           # Staging area`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Working Directory</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Los archivos tal como los ves y editas en tu sistema.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">Staging Area</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Preparación de cambios antes del commit.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Repository</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    Historial permanente de commits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'first-commit' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tu Primer Commit
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    1. Crear un archivo
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Crear un archivo README
echo "# Mi Primer Proyecto" > README.md

# O crear con editor
touch index.html`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`echo "# Mi Primer Proyecto" > README.md`, 'create-file')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    2. Verificar estado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`git status`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git status', 'check-status')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  <div className="mt-3 bg-gray-800 rounded p-3">
                    <pre className="text-xs text-red-400">
{`On branch main
No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    3. Agregar al staging area
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Agregar archivo específico
git add README.md

# O agregar todos los archivos
git add .`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`git add README.md`, 'git-add')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    4. Realizar el commit
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`git commit -m "Mi primer commit: agregar README"`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`git commit -m "Mi primer commit: agregar README"`, 'git-commit')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-green-800 dark:text-green-200">
                        ¡Felicitaciones!
                      </h3>
                      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                        Has creado tu primer commit. Tu archivo ahora está guardado permanentemente en el historial de Git.
                      </p>
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
                Ejercicio Práctico
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Crear un repositorio completo con múltiples archivos y commits.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 1: Configurar el proyecto</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`mkdir mi-sitio-web
cd mi-sitio-web
git init`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 2: Crear archivos</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html>
<head><title>Mi Sitio</title></head>
<body><h1>¡Hola Mundo!</h1></body>
</html>
EOF

# Crear styles.css
echo "body { font-family: Arial; }" > styles.css

# Crear README.md
echo "# Mi Sitio Web Personal" > README.md`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 3: Commits por separado</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`git add README.md
git commit -m "Agregar README con descripción del proyecto"

git add index.html
git commit -m "Crear página principal HTML"

git add styles.css
git commit -m "Agregar estilos básicos"`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 4: Ver el historial</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`git log --oneline`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                  Comandos útiles para verificar tu trabajo:
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git status</code>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Ver estado actual</p>
                  </div>
                  <div>
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git log</code>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Ver historial completo</p>
                  </div>
                  <div>
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git log --oneline</code>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Historial resumido</p>
                  </div>
                  <div>
                    <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git show HEAD</code>
                    <p className="text-gray-600 dark:text-gray-400 mt-1">Ver último commit</p>
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
              : 'bg-orange-600 text-white hover:bg-orange-700'
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
          to="/configuracion" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Configuración</span>
        </Link>
        
        <Link 
          to="/staging-area" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Staging Area</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default InicializacionPage