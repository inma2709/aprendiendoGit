import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FolderPlus,
  Terminal,
  FileText,
  Clock,
  BookOpen,
  Copy,
  Github,
  GitBranch,
  AlertCircle,
  Globe,
  Lock,
  Download,
  MonitorSmartphone
} from 'lucide-react'

const InicializacionPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('conceptos')
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

  const copyToClipboard = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(''), 1800)
    } catch (error) {
      console.error('No se pudo copiar el texto:', error)
    }
  }

  const CodeBlock = ({ code, id }) => (
    <div className="bg-gray-900 rounded-lg p-4 relative">
      <pre className="text-sm text-gray-300 whitespace-pre-wrap break-words">{code}</pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="absolute top-2 right-2 p-2 rounded hover:bg-gray-700 transition-colors"
        title="Copiar código"
      >
        <Copy className={`w-4 h-4 ${copiedCode === id ? 'text-green-400' : 'text-gray-400'}`} />
      </button>
    </div>
  )

  const tabs = [
    { id: 'conceptos', name: 'Conceptos clave', icon: BookOpen },
    { id: 'github-first', name: 'Opción A: GitHub primero', icon: Github },
    { id: 'local-first', name: 'Opción B: Local primero', icon: FolderPlus },
    { id: 'git-vs-github', name: 'Git vs GitHub', icon: GitBranch },
    { id: 'practice', name: 'Práctica guiada', icon: MonitorSmartphone }
  ]

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <FolderPlus className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Mi primer repositorio
            </h1>
            <div className="flex items-center justify-center flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-2">
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

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          En esta lección vas a entender qué es un repositorio, qué diferencia hay entre Git y GitHub,
          y cómo puedes empezar de dos formas: creando primero el repositorio en GitHub o creando primero
          el proyecto en tu ordenador con <code>git init</code>.
        </p>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          🎯 Objetivo de esta lección
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Al terminar, sabrás crear y enlazar correctamente un repositorio evitando los errores más típicos
          de principiante: confundir Git con GitHub, no entender qué hace <code>git init</code>,
          no saber qué es <code>origin</code> o tener problemas al conectar un proyecto local con un repositorio remoto.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Ruta 1</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Crear el repositorio directamente en GitHub y después traerlo al ordenador.
            </p>
          </div>
          <div className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">Ruta 2</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Crear el proyecto en local con <code>git init</code> y después enlazarlo con GitHub.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600 dark:text-orange-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {activeTab === 'conceptos' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Conceptos clave antes de empezar
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué es un repositorio?</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Un repositorio es el lugar donde Git guarda y controla la historia de un proyecto.
                    Ahí se almacenan los cambios, los commits, las ramas y toda la evolución del trabajo.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué es Git?</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Git es un sistema de control de versiones que funciona en tu ordenador.
                    Te permite guardar versiones del proyecto y volver atrás si hace falta.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué es GitHub?</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    GitHub es una plataforma online donde puedes alojar repositorios Git,
                    compartirlos y trabajar con otras personas.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">¿Qué significa enlazar?</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Enlazar un repositorio significa conectar tu proyecto local con su versión remota en GitHub
                    para poder subir y bajar cambios.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                Dos formas válidas de empezar
              </h3>
              <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
                <p>
                  <strong>Opción A:</strong> creas primero el repositorio en GitHub. Es la más sencilla para empezar.
                </p>
                <p>
                  <strong>Opción B:</strong> creas primero el proyecto en tu ordenador con <code>git init</code>.
                  Es muy importante porque enseña cómo funciona Git en local.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                    Idea fundamental del tema
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Git puede funcionar sin GitHub. GitHub no sustituye a Git.
                    Git controla versiones en tu ordenador; GitHub te permite guardar ese repositorio en internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'github-first' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Opción A — Crear primero el repositorio en GitHub
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Esta es la ruta más cómoda para empezar porque GitHub puede crear algunos archivos por ti y,
                después, tú simplemente clonas el repositorio en tu ordenador.
              </p>

              <div className="space-y-5">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Paso 1. Crear el repositorio</h3>
                  <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Entra en GitHub y pulsa <strong>New repository</strong>.</li>
                    <li>Escribe un nombre corto y claro para el proyecto.</li>
                    <li>Opcionalmente añade una descripción.</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-900 dark:text-green-100">Repositorio público</h4>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      Todo el mundo puede verlo. Es ideal para ejercicios, portfolio y proyectos de aprendizaje.
                    </p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-5 border border-purple-200 dark:border-purple-800">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="w-5 h-5 text-purple-600" />
                      <h4 className="font-semibold text-purple-900 dark:text-purple-100">Repositorio privado</h4>
                    </div>
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      Solo lo ven tú y las personas autorizadas. Útil para proyectos personales o de empresa.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 2. Entender las opciones de creación
                  </h3>

                  <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Add README</p>
                      <p>
                        Si lo activas, GitHub crea automáticamente el archivo <code>README.md</code>.
                        Ese archivo suele contener la descripción del proyecto, instrucciones y notas importantes.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Add .gitignore</p>
                      <p>
                        Si lo activas, GitHub crea automáticamente un archivo <code>.gitignore</code>,
                        que sirve para indicar qué archivos no deben subirse al repositorio.
                      </p>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900 dark:text-white mb-1">Add license</p>
                      <p>
                        Permite definir cómo otras personas pueden usar tu código. Para empezar en el curso,
                        se puede dejar en <strong>No license</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Recomendación para este curso
                  </h3>
                  <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>Visibilidad: <strong>Public</strong></li>
                    <li>README: <strong>Activado</strong></li>
                    <li>.gitignore: <strong>Activado si ya sabes el tipo de proyecto</strong></li>
                    <li>License: <strong>No license</strong></li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 3. Clonar el repositorio en tu ordenador
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Después de crear el repositorio, GitHub te dará una URL. Esa URL se usa para descargar
                    el repositorio en local.
                  </p>
                  <CodeBlock
                    id="clone-repo"
                    code={`git clone https://github.com/tu-usuario/mi-primer-repositorio.git`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Este comando crea la carpeta del proyecto en tu ordenador y la deja ya conectada con GitHub.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 4. Abrir el proyecto en Visual Studio Code
                  </h3>
                  <CodeBlock
                    id="open-vscode"
                    code={`cd mi-primer-repositorio
code .`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Una vez abierto en VS Code, ya podrás editar archivos, hacer commits y subir cambios.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 5. Hacer cambios y subirlos a GitHub
                  </h3>
                  <CodeBlock
                    id="commit-push-after-clone"
                    code={`git status
git add .
git commit -m "Actualizar el proyecto"
git push`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Como el repositorio fue clonado desde GitHub, la conexión remota ya está creada.
                    Por eso no hace falta usar <code>git remote add origin</code> en este caso.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'local-first' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Opción B — Crear primero el proyecto en local con git init
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Esta opción es esencial para entender cómo funciona Git en tu ordenador.
                Aquí tú creas la carpeta del proyecto, activas Git y más tarde lo conectas con GitHub.
              </p>

              <div className="space-y-5">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 1. Crear la carpeta del proyecto
                  </h3>
                  <CodeBlock
                    id="mkdir-local"
                    code={`mkdir mi-proyecto-local
cd mi-proyecto-local`}
                  />
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 2. Inicializar Git
                  </h3>
                  <CodeBlock
                    id="git-init-local"
                    code={`git init`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Este comando crea la carpeta oculta <code>.git</code>. Ahí Git guarda la información interna del repositorio.
                  </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-5 border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        Qué hace exactamente git init
                      </h3>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        <code>git init</code> no crea el proyecto ni los archivos de tu web. Lo que hace es convertir
                        la carpeta actual en un repositorio Git local.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 3. Crear archivos del proyecto
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Ahora puedes crear tus archivos manualmente en VS Code, por ejemplo:
                  </p>
                  <CodeBlock
                    id="local-files"
                    code={`README.md
index.html
styles.css
.gitignore`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Aquí el README y el .gitignore los creas tú en local, no GitHub.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 4. Guardar el primer commit en local
                  </h3>
                  <CodeBlock
                    id="first-local-commit"
                    code={`git add .
git commit -m "Primer commit del proyecto"`}
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 5. Crear un repositorio vacío en GitHub
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Ahora entra en GitHub y crea un nuevo repositorio, pero en este caso conviene dejarlo vacío:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>puede ser público o privado;</li>
                    <li><strong>no marques README</strong>;</li>
                    <li><strong>no marques .gitignore</strong> si ya lo has creado tú en local;</li>
                    <li>puedes dejar <strong>No license</strong>.</li>
                  </ul>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Lo dejamos vacío para evitar conflictos iniciales.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 6. Enlazar el repositorio local con GitHub
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Copia la URL del repositorio de GitHub y enlázala con este comando:
                  </p>
                  <CodeBlock
                    id="remote-add-origin"
                    code={`git remote add origin https://github.com/tu-usuario/mi-proyecto-local.git`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Aquí <code>origin</code> es el nombre que Git da normalmente al repositorio remoto principal.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Paso 7. Subir el proyecto por primera vez
                  </h3>
                  <CodeBlock
                    id="push-u-origin-main"
                    code={`git push -u origin main`}
                  />
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Con este comando subes la rama <code>main</code> al repositorio remoto y, además,
                    dejas establecida la relación entre la rama local y la remota.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                    Resumen paso a paso de la opción local
                  </h3>
                  <CodeBlock
                    id="local-full-flow"
                    code={`mkdir mi-proyecto-local
cd mi-proyecto-local
git init
git add .
git commit -m "Primer commit del proyecto"
git remote add origin https://github.com/tu-usuario/mi-proyecto-local.git
git push -u origin main`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'git-vs-github' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Diferencia entre Git en local y GitHub
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-5 border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">Git</h3>
                  <ul className="list-disc list-inside text-sm text-orange-800 dark:text-orange-200 space-y-2">
                    <li>funciona en tu ordenador;</li>
                    <li>guarda historial, commits y ramas;</li>
                    <li>puede usarse sin internet;</li>
                    <li>se activa con <code>git init</code> o al clonar un repo.</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 border border-blue-200 dark:border-blue-800">
                  <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">GitHub</h3>
                  <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-200 space-y-2">
                    <li>es una plataforma online;</li>
                    <li>alojar repositorios remotos;</li>
                    <li>permite compartir y colaborar;</li>
                    <li>se conecta con Git mediante URL remotas.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Idea resumen que el alumno debe recordar
                </h3>
                <CodeBlock
                  id="git-vs-github-summary"
                  code={`Git = control de versiones en tu ordenador
GitHub = plataforma online para alojar repositorios Git`}
                />
              </div>

              <div className="mt-6 bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                  Flujo típico de trabajo
                </h3>
                <CodeBlock
                  id="common-flow"
                  code={`GitHub -> clonar o enlazar -> trabajar en local -> git add -> git commit -> git push -> GitHub actualizado`}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Práctica guiada
              </h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 mb-6 border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Ejercicio
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Vas a crear un repositorio de práctica y lo vas a conectar correctamente.
                </p>
              </div>

              <div className="space-y-5">
                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-4 pr-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Ruta recomendada para principiantes
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Crea un repositorio nuevo en GitHub llamado <strong>mi-primer-repo</strong>.</li>
                    <li>Márcalo como <strong>Public</strong>.</li>
                    <li>Activa <strong>Add README</strong>.</li>
                    <li>Si quieres, añade <strong>.gitignore</strong> según el tipo de proyecto.</li>
                    <li>Crea el repositorio.</li>
                    <li>Clónalo en tu ordenador.</li>
                    <li>Ábrelo con VS Code.</li>
                    <li>Modifica el README o añade un archivo nuevo.</li>
                    <li>Haz <code>git add</code>, <code>git commit</code> y <code>git push</code>.</li>
                  </ol>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Comandos de la práctica
                  </h4>
                  <CodeBlock
                    id="practice-clone"
                    code={`git clone https://github.com/tu-usuario/mi-primer-repo.git
cd mi-primer-repo
code .
git status
git add .
git commit -m "Actualizar README del proyecto"
git push`}
                  />
                </div>

                <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 pl-4 py-4 pr-4 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Ruta alternativa para practicar git init
                  </h4>
                  <ol className="list-decimal list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Crea una carpeta en tu ordenador.</li>
                    <li>Haz <code>git init</code>.</li>
                    <li>Crea un README.</li>
                    <li>Haz el primer commit.</li>
                    <li>Crea después un repositorio vacío en GitHub.</li>
                    <li>Enlázalo con <code>git remote add origin ...</code>.</li>
                    <li>Sube el proyecto con <code>git push -u origin main</code>.</li>
                  </ol>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Comandos útiles para comprobar que todo va bien
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git status</code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Ver el estado actual</p>
                    </div>
                    <div>
                      <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git remote -v</code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Ver si el repo está enlazado con GitHub</p>
                    </div>
                    <div>
                      <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git branch</code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Ver la rama actual</p>
                    </div>
                    <div>
                      <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git log --oneline</code>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">Ver historial resumido</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border border-green-200 dark:border-green-800">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        Lo que debes saber al terminar esta práctica
                      </h4>
                      <ul className="list-disc list-inside text-sm text-green-700 dark:text-green-300 space-y-1">
                        <li>qué es un repositorio;</li>
                        <li>qué diferencia hay entre Git y GitHub;</li>
                        <li>qué hace <code>git init</code>;</li>
                        <li>cómo clonar un repositorio;</li>
                        <li>cómo enlazar un proyecto local con GitHub;</li>
                        <li>cómo subir cambios con <code>git push</code>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Completion */}
      <div className="flex items-center justify-center pt-8">
        <button
          onClick={handleComplete}
          disabled={isCompleted}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
            isCompleted
              ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
              : 'bg-orange-600 text-white hover:bg-orange-700'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? '¡Lección completada!' : 'Marcar como completada'}</span>
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