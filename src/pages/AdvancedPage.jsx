import { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import {
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  Upload,
  FolderGit2,
  BookOpen,
  Clock,
  Copy,
  AlertCircle,
  FileText,
  EyeOff,
  Github,
  CheckSquare
} from 'lucide-react'

const AdvancedPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('fromZero')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    // Ajusta la ruta si tu app usa otra (por ejemplo '/first-upload')
    setIsCompleted(completed.includes('/first-upload'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/first-upload')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'fromZero', name: 'Desde cero', icon: Upload },
    { id: 'gitignore', name: '.gitignore', icon: EyeOff },
    { id: 'readme', name: 'README', icon: FileText },
    { id: 'practice', name: 'Práctica', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Upload className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Subir Archivos a GitHub (Desde Cero)
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
          Aprende el flujo básico para subir un proyecto por primera vez a un repositorio remoto
          y entiende para qué sirven <code className="font-mono">.gitignore</code> y <code className="font-mono">README.md</code>.
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
        {/* TAB 1: DESDE CERO */}
        {activeTab === 'fromZero' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                El objetivo de esta lección
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Vas a aprender el “camino mínimo” para subir un proyecto a GitHub por primera vez:
                <strong className="ml-2">init → add → commit → remote → push</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2 mb-4">
                <FolderGit2 className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Checklist antes de empezar
                </h3>
              </div>

              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Tengo una carpeta con archivos (ej: <code className="font-mono">index.html</code>)</li>
                <li>• Tengo creado el repositorio en GitHub (vacío o con README, da igual)</li>
                <li>• Tengo Git instalado (en Windows, uso CMD o PowerShell)</li>
              </ul>

              <div className="mt-5 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    OJO: el error más típico
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Ejecutar comandos fuera de la carpeta del proyecto. Antes de nada, entra en tu carpeta con <code className="font-mono">cd</code>.
                  </p>
                </div>
              </div>
            </div>

            {/* Bloque: pasos */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Paso a paso (primera subida)
              </h3>

              {/* Paso 1 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  1) Inicializa Git en tu carpeta
                </p>
                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">{`git init`}</pre>
                  <button
                    onClick={() => copyToClipboard('git init', 'init')}
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    aria-label="Copiar git init"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                  {copiedCode === 'init' && (
                    <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Esto crea la carpeta oculta <code className="font-mono">.git</code> (historial del proyecto).
                </p>
              </div>

              {/* Paso 2 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  2) Pon la rama principal en <code className="font-mono">main</code>
                </p>
                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">{`git branch -M main`}</pre>
                  <button
                    onClick={() => copyToClipboard('git branch -M main', 'main')}
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    aria-label="Copiar git branch -M main"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                  {copiedCode === 'main' && (
                    <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Hoy es el estándar en GitHub y evita problemas con ejemplos y herramientas modernas.
                </p>
              </div>

              {/* Paso 3 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  3) Añade archivos y crea tu primer commit
                </p>
                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`git add .
git commit -m "primer commit"`}
                  </pre>
                  <button
                    onClick={() => copyToClipboard('git add .\ngit commit -m "primer commit"', 'commit')}
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    aria-label="Copiar add + commit"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                  {copiedCode === 'commit' && (
                    <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                  )}
                </div>

                <div className="mt-3 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                      Importante
                    </h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Usa comillas normales <code className="font-mono">" "</code>, no comillas “bonitas” <code className="font-mono">“ ”</code>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paso 4 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  4) Enlaza tu repo con GitHub (remoto)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Copia el enlace del repositorio de GitHub y úsalo aquí (reemplaza la URL).
                </p>

                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">
{`git remote add origin https://github.com/tu-usuario/tu-repo.git
git remote -v`}
                  </pre>
                  <button
                    onClick={() =>
                      copyToClipboard(
                        'git remote add origin https://github.com/tu-usuario/tu-repo.git\ngit remote -v',
                        'remote'
                      )
                    }
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    aria-label="Copiar remote add + remote -v"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                  {copiedCode === 'remote' && (
                    <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  <code className="font-mono">git remote -v</code> debe mostrar <code className="font-mono">origin</code> (fetch/push).
                </p>
              </div>

              {/* Paso 5 */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  5) Sube por primera vez (<code className="font-mono">push</code>)
                </p>

                <div className="bg-black rounded-lg p-4 relative">
                  <pre className="text-sm text-gray-300 overflow-x-auto">{`git push -u origin main`}</pre>
                  <button
                    onClick={() => copyToClipboard('git push -u origin main', 'push')}
                    className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    aria-label="Copiar git push -u origin main"
                  >
                    <Copy className="w-4 h-4 text-gray-400" />
                  </button>
                  {copiedCode === 'push' && (
                    <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  El <code className="font-mono">-u</code> vincula tu rama local con la rama remota. Luego, con futuros cambios, bastará con <code className="font-mono">git push</code>.
                </p>
              </div>
            </div>

            {/* Si el repo tenía README */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Si GitHub tenía README y aparece “non-fast-forward”
              </h3>

              <div className="flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Si el repositorio remoto tiene commits que tú no tienes (por ejemplo un README creado en GitHub),
                    Git bloqueará el push. Solución recomendada:
                  </p>
                  <div className="bg-black rounded-lg p-4 mt-3 relative">
                    <pre className="text-sm text-gray-300 overflow-x-auto">
{`git pull --rebase origin main
git push -u origin main`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git pull --rebase origin main\ngit push -u origin main', 'rebase')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                      aria-label="Copiar pull --rebase + push"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    {copiedCode === 'rebase' && (
                      <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Chuleta final */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Chuleta: primera subida (mínimo imprescindible)
              </h3>
              <div className="bg-black rounded-lg p-4 relative">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`git init
git branch -M main
git add .
git commit -m "primer commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main`}
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      'git init\ngit branch -M main\ngit add .\ngit commit -m "primer commit"\ngit remote add origin https://github.com/tu-usuario/tu-repo.git\ngit push -u origin main',
                      'cheat'
                    )
                  }
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar chuleta completa"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'cheat' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GITIGNORE */}
        {activeTab === 'gitignore' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ¿Qué es <code className="font-mono">.gitignore</code> y para qué sirve?
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                <code className="font-mono">.gitignore</code> es un archivo que le dice a Git:
                <strong className="ml-2">“estos archivos NO los quiero subir al repositorio”</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ¿Qué suele ignorarse?
              </h3>

              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• Archivos temporales del sistema (Windows/macOS)</li>
                <li>• Carpetas de dependencias (<code className="font-mono">node_modules</code>)</li>
                <li>• Archivos de configuración personal (por ejemplo, <code className="font-mono">.env</code>)</li>
                <li>• Archivos generados automáticamente (build/dist)</li>
              </ul>

              <div className="mt-6 bg-black rounded-lg p-4 relative">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`# === Sistema / editor ===
.DS_Store
Thumbs.db

# === Node / JavaScript (si aplica) ===
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# === Variables sensibles (si las usas) ===
.env

# === Carpeta de build (si tu proyecto genera una) ===
dist/
build/`}
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      '# === Sistema / editor ===\n.DS_Store\nThumbs.db\n\n# === Node / JavaScript (si aplica) ===\nnode_modules/\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n\n# === Variables sensibles (si las usas) ===\n.env\n\n# === Carpeta de build (si tu proyecto genera una) ===\ndist/\nbuild/',
                      'ignore'
                    )
                  }
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar ejemplo de .gitignore"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'ignore' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>

              <div className="mt-5 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Importante
                  </h4>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    <code className="font-mono">.gitignore</code> solo evita que Git empiece a trackear archivos nuevos.
                    Si un archivo ya se añadió al repo, hay que sacarlo (más adelante lo verás).
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: README */}
        {activeTab === 'readme' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                ¿Qué es <code className="font-mono">README.md</code>?
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                El <strong>README</strong> es la “portada” del repositorio: explica qué es el proyecto y cómo usarlo.
                En GitHub es lo primero que ve cualquiera al entrar.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Contenido mínimo recomendado (para tu alumnado)
              </h3>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Debe incluir</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Nombre del proyecto</li>
                    <li>• Qué hace (1–2 frases)</li>
                    <li>• Cómo se ejecuta / abre</li>
                    <li>• Estructura básica de archivos</li>
                    <li>• Autor/a y fecha (opcional)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">Ejemplo rápido</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Esto es suficiente para un repo de prácticas.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-black rounded-lg p-4 relative">
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Mi primer proyecto con Git

Pequeña web de práctica para aprender Git y GitHub.

## Cómo usar
- Abre el archivo \`index.html\` en el navegador
- (Opcional) Usa Live Server en VS Code

## Estructura
- index.html
- style.css
- script.js

## Autor
Inma Contreras`}
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      '# Mi primer proyecto con Git\n\nPequeña web de práctica para aprender Git y GitHub.\n\n## Cómo usar\n- Abre el archivo `index.html` en el navegador\n- (Opcional) Usa Live Server en VS Code\n\n## Estructura\n- index.html\n- style.css\n- script.js\n\n## Autor\nInma Contreras',
                      'readme'
                    )
                  }
                  className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                  aria-label="Copiar ejemplo de README"
                >
                  <Copy className="w-4 h-4 text-gray-400" />
                </button>
                {copiedCode === 'readme' && (
                  <span className="absolute bottom-2 right-2 text-xs text-green-400">¡Copiado!</span>
                )}
              </div>

              <div className="mt-5 flex items-start space-x-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Tip para que sea “visual”
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Puedes añadir una captura del proyecto en GitHub y un apartado “Objetivos de aprendizaje”.
                    Para repos de clase, el README es casi más importante que el código.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PRACTICA */}
        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Práctica guiada (mínima y real)
              </h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-blue-800 dark:text-blue-200 text-sm">
                  Crear un repositorio y subir: 1 HTML + 1 README + 1 .gitignore.
                </p>
              </div>

              <ol className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <li className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <strong>1)</strong> Crea <code className="font-mono">index.html</code> con un título y un párrafo.
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <strong>2)</strong> Crea <code className="font-mono">README.md</code> (usa el ejemplo de la pestaña README).
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <strong>3)</strong> Crea <code className="font-mono">.gitignore</code> (usa el ejemplo de la pestaña .gitignore).
                </li>
                <li className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <strong>4)</strong> Sube todo con la chuleta:
                  <div className="bg-black rounded-lg p-4 mt-3">
                    <pre className="text-xs text-gray-300 overflow-x-auto">
{`git init
git branch -M main
git add .
git commit -m "primer commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main`}
                    </pre>
                  </div>
                </li>
              </ol>

              <div className="mt-6 flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">
                    Pregunta de examen (muy típica)
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    ¿Para qué sirve <code className="font-mono">-u</code> en <code className="font-mono">git push -u origin main</code>?
                  </p>
                </div>
                
              </div>
              <details className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
  <summary className="cursor-pointer font-medium text-yellow-800 dark:text-yellow-200">
    Ver respuesta
  </summary>

  <div className="mt-3 text-sm text-yellow-700 dark:text-yellow-300 space-y-3">
    <p>
      La opción <code className="font-mono">-u</code> significa <strong>--set-upstream</strong>.
    </p>

    <p>
      Sirve para <strong>vincular la rama local con la rama remota</strong>, de forma que Git
      recuerde automáticamente a qué repositorio y rama debe subir o bajar los cambios.
    </p>

    <p>
      Al ejecutar:
    </p>

    <pre className="bg-black text-gray-300 rounded-lg p-3 text-xs overflow-x-auto">
{`git push -u origin main`}
    </pre>

    <p>
      le estamos diciendo a Git:
    </p>

    <p className="italic">
      “La rama local <code className="font-mono">main</code> está asociada a
      <code className="font-mono"> origin/main</code>”.
    </p>

    <p>
      A partir de ese momento, ya no es necesario escribir el comando completo y
      bastará con usar:
    </p>

    <pre className="bg-black text-gray-300 rounded-lg p-3 text-xs overflow-x-auto">
{`git push
git pull`}
    </pre>

    <p>
      <strong>Conclusión:</strong> el parámetro <code className="font-mono">-u</code> se usa
      <strong>solo la primera vez</strong> que subimos una rama, para dejarla enlazada
      con su rama remota.
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
          to="/cloning"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Clonar un Repositorio</span>
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

export default AdvancedPage