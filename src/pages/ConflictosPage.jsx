import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  BookOpen,
  Copy,
  Clock,
  AlertCircle,
  CheckSquare,
  GitMerge,
  Settings,
  FileX,
  Zap
} from 'lucide-react'

const ConflictosPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/conflictos'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/conflictos')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: 'Concepto', icon: AlertTriangle },
    { id: 'detection', name: 'Detección', icon: Zap },
    { id: 'resolution', name: 'Resolución', icon: Settings },
    { id: 'practice', name: 'Práctica', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Conflictos en Git (sin miedo)
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
          Un conflicto no es un “error”: es Git diciendo{" "}
          <strong>“no sé cuál de estos dos cambios quieres”</strong>. Tú decides.
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
        {/* TAB: CONCEPTO */}
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ¿Qué es un conflicto en Git?
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Un conflicto aparece cuando Git intenta juntar cambios (merge/pull) y ve que{" "}
                <strong>dos versiones han tocado la misma zona del mismo archivo</strong> y no puede decidir automáticamente.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                ¿Por qué pasan? (ejemplo súper típico)
              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">Tú cambias:</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    En <code className="font-mono">config.txt</code> pones <strong>Descuento: 15%</strong>
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="font-medium text-gray-900 dark:text-white mb-2">Tu compañero cambia:</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    En el mismo archivo pone <strong>Descuento: 20%</strong>
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Mensaje mental para recordar
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Conflicto = “Hay dos respuestas posibles y Git no sabe cuál quieres”.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Cómo se ve un conflicto por dentro
              </h3>

              <div className="bg-black rounded-lg p-4">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`<<<<<<< HEAD
Descuento: 15%
=======
Descuento: 20%
>>>>>>> feature-branch`}
                </pre>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <strong className="text-blue-700 dark:text-blue-300">{'<<<<<<< HEAD'}</strong>
                  <p className="text-blue-600 dark:text-blue-400">Tu versión (lo que tenías)</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">
                  <strong className="text-gray-700 dark:text-gray-200">{'======='}</strong>
                  <p className="text-gray-600 dark:text-gray-300">Separador</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <strong className="text-green-700 dark:text-green-300">{'>>>>>>> rama'}</strong>
                  <p className="text-green-600 dark:text-green-400">La otra versión (lo que llega)</p>
                </div>
              </div>

              <div className="mt-5 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Resolver un conflicto significa:{" "}
                  <strong>elegir una versión o combinar ambas</strong> y borrar los marcadores.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB: DETECCIÓN */}
        {activeTab === 'detection' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Cómo sé que tengo un conflicto?
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    1) Git te lo dice
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Verás mensajes tipo <strong>CONFLICT</strong> y el merge/pull se para.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    2) <code className="font-mono">git status</code> lo confirma
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Te listará los archivos en conflicto.
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-black rounded-lg p-4 relative">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`# El comando nº1 cuando algo va raro:
git status

# Ver lista de archivos con conflicto:
git diff --name-only --diff-filter=U`}
                </pre>
                <button
                  onClick={() => copyToClipboard('git status\ngit diff --name-only --diff-filter=U', 'detect')}
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar comandos de detección"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'detect' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>

              <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <FileX className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-red-800 dark:text-red-200 mb-1">
                      Señal clara
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Si abres un archivo y ves <code className="font-mono">{'<<<<<<< ======= >>>>>>>'}</code>,
                      estás dentro de un conflicto.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: RESOLUCIÓN */}
        {activeTab === 'resolution' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Cómo resolver un conflicto (en 4 pasos)
              </h2>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <ol className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li><strong>1)</strong> Abre el archivo con conflicto</li>
                  <li><strong>2)</strong> Decide qué texto/código debe quedar</li>
                  <li><strong>3)</strong> Borra los marcadores <code className="font-mono">{'<<<<<<< ======= >>>>>>>'}</code></li>
                  <li><strong>4)</strong> Guarda, luego <code className="font-mono">git add</code> y <code className="font-mono">git commit</code></li>
                </ol>
              </div>

              <div className="mt-4 bg-black rounded-lg p-4 relative">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`# 1) comprobar qué pasa
git status

# 2) cuando lo hayas dejado bien en el archivo...
git add archivo.txt

# 3) terminar el merge
git commit -m "merge: resolve conflict"`}
                </pre>
                <button
                  onClick={() => copyToClipboard('git status\ngit add archivo.txt\ngit commit -m "merge: resolve conflict"', 'resolve')}
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar pasos de resolución"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'resolve' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    ¿Qué decisión tomo?
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    En clase, lo normal es: <strong>quedarme con una opción</strong> o <strong>combinar</strong>.
                    Lo importante es que el archivo quede <strong>coherente</strong> y sin marcadores.
                  </p>
                </div>
              </div>

             <details className="mt-4 bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
  <summary className="cursor-pointer font-medium text-gray-900 dark:text-white">
    Si quiero cancelar el merge (volver atrás)
  </summary>

  <div className="mt-3 text-sm text-gray-600 dark:text-gray-300 space-y-3">
    <p>
      <strong>Primero: ¿qué es un merge?</strong><br />
      Un <code className="font-mono">merge</code> es la acción de <strong>unir cambios</strong> de dos “líneas de trabajo”
      (normalmente dos ramas) en una sola. Es decir: Git intenta juntar lo que tú tienes con lo que viene de otra rama
      (o de GitHub cuando haces un pull).
    </p>

    <p className="italic">
      Piensa en un merge como: “quiero mezclar dos versiones del mismo proyecto”.
    </p>

    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <p className="font-medium text-gray-900 dark:text-white mb-2">Ejemplos típicos de merge:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Cuando haces <code className="font-mono">git merge feature</code> para unir una rama a <code className="font-mono">main</code>.
        </li>
        <li>
          Cuando haces <code className="font-mono">git pull</code> y Git necesita unir lo remoto con lo local (porque pull trae cambios y los mezcla).
        </li>
      </ul>
    </div>

    <p>
      <strong>¿Cuándo me interesa “cancelar el merge”?</strong><br />
      Cuando has intentado mezclar cambios y <strong>algo sale mal</strong>:
      porque aparecen conflictos, porque no entiendes qué cambios están entrando,
      porque te das cuenta de que <strong>no era el momento</strong> de hacer ese merge,
      o porque prefieres revisar primero y luego intentarlo con más calma.
    </p>

    <div className="mt-2 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
      <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
      <div>
        <p className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Señal típica de que puedes abortar</p>
        <p className="text-sm text-yellow-700 dark:text-yellow-300">
          Has hecho un merge y Git se ha quedado “a medias”, por ejemplo, con mensajes de conflicto o con{" "}
          <code className="font-mono">Unmerged paths</code> en <code className="font-mono">git status</code>.
        </p>
      </div>
    </div>

    <p>
      <strong>¿Qué es exactamente lo que se anula?</strong><br />
      Se anula el <strong>intento de merge que está en progreso</strong>. Es decir:
    </p>

    <ul className="list-disc pl-5 space-y-1">
      <li>Git deja de intentar mezclar los cambios.</li>
      <li>Se eliminan los “estados intermedios” del merge (la operación a medias).</li>
      <li>Tu repositorio vuelve al punto en el que estabas <strong>antes de ejecutar el merge</strong>.</li>
    </ul>

    <p>
      Importante: <strong>no borra tus commits anteriores</strong>. Solo deshace la operación de mezcla que todavía no se terminó.
    </p>

    <div className="bg-black text-gray-300 rounded-lg p-3 text-xs overflow-x-auto">
      <pre>{`git merge --abort`}</pre>
    </div>

    <p>
      <strong>¿Cómo funciona por dentro?</strong><br />
      Cuando haces un merge y hay conflictos, Git crea un “estado de merge en curso”.
      En ese estado:
    </p>

    <ul className="list-disc pl-5 space-y-1">
      <li>Git marca archivos como en conflicto.</li>
      <li>Puede dejar archivos con marcadores <code className="font-mono">{'<<<<<<< ======= >>>>>>>'}</code>.</li>
      <li>Git espera a que tú resuelvas y hagas <code className="font-mono">git add</code> + <code className="font-mono">git commit</code>.</li>
    </ul>

    <p>
      <code className="font-mono">git merge --abort</code> lo que hace es decirle a Git:
      <strong> “olvida este merge a medias y vuelve al estado anterior”</strong>.
      Así recuperas un repositorio limpio y puedes intentar el merge más tarde o con otra estrategia.
    </p>

    <details className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
      <summary className="cursor-pointer font-medium text-gray-900 dark:text-white">
        Mini-guía: ¿lo necesito de verdad?
      </summary>
      <div className="mt-3 space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          ✅ Úsalo si: te aparece conflicto y no sabes resolverlo todavía, o quieres parar y volver luego.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          ❌ No lo uses si: ya resolviste el conflicto y solo te falta hacer <code className="font-mono">git add</code> y <code className="font-mono">git commit</code>.
        </p>
      </div>
    </details>

    <p className="text-sm text-gray-500 dark:text-gray-400">
      Consejo de profe: si te atascas, aborta el merge, respira, y repite el proceso con calma.
      Es mejor volver a un estado limpio que “romper” el proyecto por prisas.
    </p>
  </div>
</details>

            </div>
          </div>
        )}

        {/* TAB: PRÁCTICA */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Práctica guiada: provocar y resolver un conflicto
              </h2>

              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-orange-800 dark:text-orange-200 text-sm">
                  Ver un conflicto de verdad en un archivo de texto y resolverlo siguiendo los 4 pasos.
                </p>
              </div>

              <div className="bg-black rounded-lg p-4 relative">
                <pre className="text-xs text-gray-300 overflow-x-auto">
{`# 1) Crear repo de prueba
git init conflicto-demo
cd conflicto-demo
echo "Descuento: 10%" > config.txt
git add .
git commit -m "init: config"

# 2) Crear rama y cambiar el mismo archivo
git switch -c feature
echo "Descuento: 15%" > config.txt
git add .
git commit -m "feature: 15%"

# 3) Volver a main y cambiar distinto
git switch main
echo "Descuento: 20%" > config.txt
git add .
git commit -m "main: 20%"

# 4) Intentar merge (conflicto)
git merge feature

# 5) Resolver: abre config.txt, decide, borra marcadores
# 6) Finaliza:
git add config.txt
git commit -m "merge: resolve discount conflict"`}
                </pre>
                <button
                  onClick={() => copyToClipboard('git init conflicto-demo\ncd conflicto-demo\necho "Descuento: 10%" > config.txt\ngit add .\ngit commit -m "init: config"\ngit switch -c feature\necho "Descuento: 15%" > config.txt\ngit add .\ngit commit -m "feature: 15%"\ngit switch main\necho "Descuento: 20%" > config.txt\ngit add .\ngit commit -m "main: 20%"\ngit merge feature\ngit add config.txt\ngit commit -m "merge: resolve discount conflict"', 'practice')}
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar práctica completa"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'practice' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>

              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                      Checklist de conflicto (para aprobar seguro)
                    </h3>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>☐ Leo el mensaje de Git y hago <code className="font-mono">git status</code></li>
                      <li>☐ Abro el archivo y entiendo qué hay arriba y abajo del separador</li>
                      <li>☐ Elijo una opción o combino</li>
                      <li>☐ Borro los marcadores</li>
                      <li>☐ <code className="font-mono">git add</code> para marcar “resuelto”</li>
                      <li>☐ <code className="font-mono">git commit</code> para terminar</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Pregunta de examen
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    ¿Qué dos comandos uso siempre para resolver un conflicto al final?
                  </p>
                </div>
              </div>

              <details className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <summary className="cursor-pointer font-medium text-yellow-800 dark:text-yellow-200">
                  Ver respuesta
                </summary>
                <div className="mt-3 text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                  <p>
                    Primero <code className="font-mono">git add</code> (para marcar el archivo como resuelto)
                    y después <code className="font-mono">git commit</code> (para terminar el merge).
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
          to="/remotes"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Push, Pull y Fetch</span>
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

export default ConflictosPage
