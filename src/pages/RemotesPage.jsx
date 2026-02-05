import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Globe,
  BookOpen,
  Copy,
  Clock,
  AlertCircle,
  CheckSquare,
  ArrowUpCircle,
  ArrowDownCircle,
  Download
} from 'lucide-react'

const RemotesPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/remotes'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/remotes')
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
    { id: 'push', name: 'Push', icon: ArrowUpCircle },
    { id: 'fetchpull', name: 'Fetch vs Pull', icon: ArrowDownCircle },
    { id: 'practice', name: 'Práctica', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
            <RefreshCw className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Push, Pull y Fetch
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
          Entiende sin agobios cómo se sincroniza tu proyecto con GitHub:
          <strong className="ml-2">push</strong> (subir), <strong>pull</strong> (traer y aplicar) y <strong>fetch</strong> (traer sin tocar).
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
        {/* TAB: CONCEPTO */}
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                La idea clave: Local vs Remoto
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Tu repositorio <strong>local</strong> está en tu ordenador. El repositorio <strong>remoto</strong> está en GitHub.
                Estos comandos sirven para que ambos estén sincronizados.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Traducción rápida (sin tecnicismos)
              </h3>

              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <ArrowUpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <p className="font-medium text-gray-900 dark:text-white">PUSH</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Subo</strong> mis commits a GitHub.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <ArrowDownCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    <p className="font-medium text-gray-900 dark:text-white">PULL</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Traigo y aplico</strong> cambios de GitHub a mi carpeta.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <p className="font-medium text-gray-900 dark:text-white">FETCH</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    <strong>Traigo</strong> cambios pero <strong>no toco</strong> tus archivos todavía.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    ¿Lo vas a usar si trabajas solo?
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Sí, pero con una regla simple: <strong>pull antes de empezar</strong> (si usas más de un ordenador)
                    y <strong>push al terminar</strong>. <code className="font-mono">fetch</code> es más típico cuando trabajas en equipo o quieres “mirar antes de tocar”.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Pull = Fetch + Aplicar cambios
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Piensa así: <strong>fetch</strong> “descarga información”, y <strong>pull</strong> además “actualiza tu carpeta”.
                Por eso <strong>pull puede generar conflictos</strong> (si tú y GitHub tocáis el mismo archivo).
              </p>
            </div>
          </div>
        )}

        {/* TAB: PUSH */}
        {activeTab === 'push' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Push (subir tus cambios)
              </h2>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Push</strong> se usa cuando ya has hecho <strong>add</strong> + <strong>commit</strong> y quieres
                  subir esos commits a GitHub.
                </p>
              </div>

              <div className="bg-black rounded-lg p-4 relative">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Lo normal en el día a día
git push

# La primera vez (vincula la rama con origin)
git push -u origin main`}
                </pre>
                <button
                  onClick={() => copyToClipboard('git push -u origin main', 'push')}
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar comando git push -u origin main"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'push' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Si el push es rechazado
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Normalmente significa: “En GitHub hay cambios que tú no tienes”. Lo típico es hacer primero:
                    <code className="font-mono ml-1">git pull</code> y luego volver a <code className="font-mono">git push</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: FETCH VS PULL */}
        {activeTab === 'fetchpull' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Fetch vs Pull (sin agobios)
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    📥 FETCH = “Traer sin tocar”
                  </h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                    Descarga información del remoto pero <strong>no modifica tus archivos</strong>.
                    Es ideal si quieres “ver qué ha pasado” antes de actualizar tu carpeta.
                  </p>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">{`git fetch origin`}</pre>
                    <button
                      onClick={() => copyToClipboard('git fetch origin', 'fetch')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar git fetch origin"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    {copiedCode === 'fetch' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                    )}
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
                    🔄 PULL = “Traer y aplicar”
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                    Descarga cambios y además <strong>actualiza tu carpeta</strong>.
                    Es el comando más habitual en proyectos sencillos.
                  </p>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">{`git pull`}</pre>
                    <button
                      onClick={() => copyToClipboard('git pull', 'pull')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar git pull"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    {copiedCode === 'pull' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 dark:bg-gray-700 rounded-lg p-5">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                  ¿Cuándo usar cada uno? (regla práctica)
                </h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Usa pull</strong> cuando quieres actualizar tu proyecto para seguir trabajando (lo normal).
                  </li>
                  <li>
                    <strong>Usa fetch</strong> cuando estás en equipo o cuando quieres comprobar cambios antes de aplicarlos
                    (modo “seguro”: mirar antes de tocar).
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    ¿Esto es “solo para trabajo en equipo”?
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    <strong>Push y pull</strong> sí los vas a usar aunque trabajes solo (por ejemplo, desde dos ordenadores o para tener copia en GitHub).
                    <strong>Fetch</strong> es más habitual cuando hay más gente tocando el repo o cuando quieres ser más cuidadoso.
                  </p>
                </div>
              </div>

              <details className="mt-4 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <summary className="cursor-pointer font-medium text-gray-900 dark:text-white">
                  Ver ejemplo muy simple (escenario real)
                </summary>
                <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-3">
                  <p>
                    Estás trabajando y tu compañero ha subido cambios a GitHub.
                    Antes de hacer nada, puedes:
                  </p>
                  <pre className="bg-black text-gray-300 rounded-lg p-3 text-xs overflow-x-auto">
{`git fetch origin
# (todavía no se toca tu carpeta)
git pull
# ahora sí se actualiza tu proyecto`}
                  </pre>
                  <p>
                    En proyectos sencillos, muchos alumnos harán directamente <code className="font-mono">git pull</code>.
                    Lo importante es entender la diferencia.
                  </p>
                </div>
              </details>
            </div>
          </div>
        )}

        {/* TAB: PRACTICA */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Práctica (sin agobios)
              </h2>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Entender el orden típico: <strong>pull</strong> (si hace falta) → trabajar → commit → <strong>push</strong>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Caso A: Trabajas tú solo (lo más común en clase)
                  </h4>
                  <div className="bg-black rounded-lg p-4">
                    <pre className="text-xs text-gray-300 overflow-x-auto">
{`# Si trabajas desde un único ordenador
# normalmente NO necesitas pull cada minuto, solo cuando lo requieras

# 1) haces cambios...
git add .
git commit -m "cambio en mi web"
git push`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Caso B: Dos ordenadores o trabajo en equipo (lo importante)
                  </h4>
                  <div className="bg-black rounded-lg p-4">
                    <pre className="text-xs text-gray-300 overflow-x-auto">
{`# 1) Antes de empezar (para traer lo último)
git pull

# 2) trabajas...
git add .
git commit -m "nuevo contenido"
git push`}
                    </pre>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                    Regla de oro: <strong>pull al empezar</strong>, <strong>push al terminar</strong>.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    ¿Y el fetch?
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    En esta fase no es obligatorio. Solo recuérdalo como “mirar antes de tocar”.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Pregunta típica
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    ¿Cuál es la diferencia entre <code className="font-mono">git pull</code> y <code className="font-mono">git push</code>?
                  </p>
                </div>
              </div>

              <details className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <summary className="cursor-pointer font-medium text-yellow-800 dark:text-yellow-200">
                  Ver respuesta
                </summary>
                <div className="mt-3 text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                  <p>
                    <strong>Pull</strong> trae cambios de GitHub a tu ordenador.
                    <strong className="ml-2">Push</strong> sube tus cambios de tu ordenador a GitHub.
                  </p>
                  <p>
                    Pull = “me actualizo”. Push = “publico lo mío”.
                  </p>
                </div>
              </details>
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
          to="/first-upload"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Subir por primera vez</span>
        </Link>

        <Link
          to="/revert-reset"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Revert & Reset</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default RemotesPage
