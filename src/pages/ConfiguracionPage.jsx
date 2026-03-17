import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Clock,
  BookOpen,
  Terminal,
  Copy,
  AlertTriangle,
  CheckCircle
} from 'lucide-react'

const ConfiguracionPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [copied, setCopied] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/configuracion'))
  }, [])

  const handleComplete = () => {
    markLessonCompleted('/configuracion')
    setIsCompleted(true)
  }

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(id)
      setTimeout(() => setCopied(''), 1500)
    } catch (error) {
      console.error('No se pudo copiar el texto:', error)
    }
  }

  const CodeBlock = ({ code, id }) => (
    <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm flex items-start justify-between gap-3">
      <pre className="whitespace-pre-wrap break-words">{code}</pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="p-2 hover:bg-gray-700 rounded transition-colors flex-shrink-0"
        title="Copiar comando"
      >
        {copied === id ? <CheckCircle className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )

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

        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 flex-wrap">
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
            Vamos a dejar Git listo para trabajar
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            En esta lección vas a configurar tu nombre, tu correo y la rama inicial por defecto.
            Así evitarás problemas habituales al empezar, especialmente la diferencia entre
            <strong> main</strong> y <strong>master</strong>.
          </p>
        </div>
      </div>

      {/* Antes de empezar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          🖥️ Antes de escribir comandos
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Vamos a escribir los comandos en la <strong>terminal integrada de Visual Studio Code</strong>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <p className="text-blue-800 dark:text-blue-300 font-medium mb-2">
              Paso a paso
            </p>
            <ol className="list-decimal list-inside text-blue-900 dark:text-blue-200 space-y-2 text-sm">
              <li>Abre <strong>Visual Studio Code</strong>.</li>
              <li>En el menú superior, pulsa <strong>Terminal</strong>.</li>
              <li>Después pulsa <strong>Nueva Terminal</strong>.</li>
              <li>
                También puedes usar el atajo:
                <code className="ml-2 bg-white dark:bg-gray-800 px-2 py-1 rounded border border-blue-200 dark:border-blue-700">
                  Ctrl + Shift + Ñ
                </code>
                <span className="block mt-1 text-xs opacity-80">
                  En algunos teclados puede variar ligeramente, pero el objetivo es abrir la terminal inferior de VS Code.
                </span>
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Cuando la terminal esté abierta, verás una zona en la parte inferior donde podrás escribir comandos.
              Ahí es donde vamos a introducir la configuración de Git.
            </p>
          </div>
        </div>
      </section>

      {/* Por qué configurar */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          🎯 ¿Por qué hay que configurar Git?
        </h2>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <p className="text-blue-800 dark:text-blue-300 mb-2 font-medium">
            Git guarda información sobre quién hace cada cambio
          </p>
          <p className="text-blue-700 dark:text-blue-200">
            Cada commit incluirá tu nombre y tu correo electrónico. Eso permite identificar quién hizo cada cambio,
            mantener un historial claro y trabajar correctamente con GitHub, GitLab o proyectos en equipo.
          </p>
        </div>
      </section>

      {/* Paso 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          1️⃣ Configurar tu nombre y tu correo
        </h2>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Comando para tu nombre
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Escribe este comando en la terminal y sustituye <strong>"Tu Nombre"</strong> por tu nombre real:
            </p>

            <CodeBlock
              id="user-name"
              code={`git config --global user.name "Tu Nombre"`}
            />

            <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                <strong>Ejemplo:</strong> <code>git config --global user.name "Ana Pérez"</code>
              </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Este nombre será el que aparezca en tus commits.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <Mail className="w-5 h-5 text-green-600" />
              Comando para tu correo
            </h3>

            <p className="text-gray-600 dark:text-gray-300 mb-3">
              Ahora escribe este comando y sustituye <strong>"tu.correo@ejemplo.com"</strong> por tu correo:
            </p>

            <CodeBlock
              id="user-email"
              code={`git config --global user.email "tu.correo@ejemplo.com"`}
            />

            <div className="mt-4 bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded border-l-4 border-yellow-500">
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                <strong>Importante:</strong> si vas a usar GitHub, conviene poner el mismo correo que usas en tu cuenta.
              </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Este correo también quedará asociado a tus commits.
            </p>
          </div>
        </div>
      </section>

      {/* Rama main */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          2️⃣ Evitar el problema entre master y main
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 space-y-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-700 dark:text-gray-300">
                Uno de los errores más frecuentes al empezar es que Git cree repositorios con la rama inicial
                llamada <strong>master</strong>, mientras que en muchos tutoriales, plataformas y proyectos se usa
                <strong> main</strong>.
              </p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-300">
            Para evitar esa confusión desde el principio, vamos a decirle a Git que cree los nuevos repositorios con
            <strong> main</strong> como rama inicial por defecto.
          </p>

          <CodeBlock
            id="default-branch"
            code={`git config --global init.defaultBranch main`}
          />

          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
            <p className="text-green-800 dark:text-green-300 text-sm">
              A partir de ese momento, cuando crees un repositorio nuevo con <code>git init</code>,
              la rama inicial será <strong>main</strong>.
            </p>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Esto no cambia repositorios antiguos; afecta sobre todo a los que crees a partir de ahora.
          </p>
        </div>
      </section>

      {/* Resumen práctico */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          3️⃣ Los tres comandos que debes introducir ahora
        </h2>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800 rounded-xl p-6 space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Introduce en la terminal esta configuración, cambiando los datos de ejemplo por los tuyos:
          </p>

          <CodeBlock
            id="all-config"
            code={`git config --global user.name "Tu Nombre"
git config --global user.email "tu.correo@ejemplo.com"
git config --global init.defaultBranch main`}
          />

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Con estos comandos estás estableciendo tu nombre, tu correo electrónico y la rama inicial por defecto
              a nivel global en tu ordenador.
            </p>
          </div>
        </div>
      </section>

      {/* Verificación */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          ✅ Verificar que se ha guardado correctamente
        </h2>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 space-y-5">
          <p className="text-gray-700 dark:text-gray-300">
            Para comprobar que Git ha guardado bien tu información, ejecuta estos comandos uno por uno:
          </p>

          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Para ver tu nombre:
            </p>
            <CodeBlock
              id="verify-name"
              code={`git config --global user.name`}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Para ver tu correo electrónico:
            </p>
            <CodeBlock
              id="verify-email"
              code={`git config --global user.email`}
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
              Para comprobar la rama inicial por defecto:
            </p>
            <CodeBlock
              id="verify-branch"
              code={`git config --global init.defaultBranch`}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Si todo ha ido bien:</strong>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>verás tu nombre al consultar <code>user.name</code>,</li>
              <li>verás tu correo al consultar <code>user.email</code>,</li>
              <li>y verás <code>main</code> al consultar <code>init.defaultBranch</code>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ver configuración completa */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          🔎 Ver toda tu configuración de Git
        </h2>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
          <p className="text-gray-600 dark:text-gray-300 mb-3">
            Si quieres ver toda la configuración guardada por Git:
          </p>

          <CodeBlock
            id="git-config-list"
            code={`git config --list`}
          />

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            Este comando muestra muchas opciones, así que para empezar no hace falta memorizarlo.
            Lo importante ahora es que tu nombre, tu email y <code>main</code> estén bien configurados.
          </p>
        </div>
      </section>

      {/* Opcional */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          🎨 Configuración adicional (opcional)
        </h2>

        <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg mb-4">
          <summary className="p-4 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
            Usar Visual Studio Code como editor por defecto
          </summary>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
            <p className="text-gray-700 dark:text-gray-300">
              Esto es útil cuando Git necesite abrir un editor para ciertos mensajes:
            </p>
            <CodeBlock
              id="core-editor"
              code={`git config --global core.editor "code --wait"`}
            />
          </div>
        </details>

        <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
          <summary className="p-4 font-semibold text-gray-800 dark:text-gray-200 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg">
            Activar colores en la terminal
          </summary>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <CodeBlock
              id="color-ui"
              code={`git config --global color.ui auto`}
            />
          </div>
        </details>
      </section>

      {/* Cierre */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Git ya está configurado</h2>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Ya has preparado Git correctamente. Tienes tu nombre, tu correo y la rama inicial
            configurados. Con esto evitamos desde el principio uno de los fallos más comunes:
            trabajar unas veces con <strong>master</strong> y otras con <strong>main</strong>.
          </p>

          {!isCompleted && (
            <button
              onClick={handleComplete}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors mb-4"
            >
              <CheckCircle2 className="w-5 h-5" />
              Marcar como completado
            </button>
          )}
        </div>
      </section>

      {/* Navegación */}
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
          Siguiente: Mi primer repositorio
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default ConfiguracionPage