import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, AlertTriangle, Zap, BookOpen, Copy, Clock, AlertCircle, CheckSquare, GitMerge, Users, FileX, Settings } from 'lucide-react'

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
              Resolución de Conflictos
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>25 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Intermedio</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Los conflictos son normales en el desarrollo colaborativo. Aprende a resolverlos eficientemente.
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
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué son los Conflictos?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Los conflictos ocurren cuando Git no puede automáticamente fusionar cambios 
                porque dos personas modificaron las mismas líneas de código de formas diferentes.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Cuándo Aparecen Conflictos
              </h3>
              
              <div className="grid gap-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <GitMerge className="w-4 h-4 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Merge Conflicts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Al fusionar ramas que modificaron las mismas líneas
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-1 inline-block">
                      git merge feature-branch
                    </code>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Pull Conflicts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Al hacer pull cuando hay cambios locales conflictivos
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-1 inline-block">
                      git pull origin main
                    </code>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <CheckSquare className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Rebase Conflicts</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Durante rebase cuando commits tienen conflictos
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-1 inline-block">
                      git rebase main
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Anatomía de un Conflicto
              </h3>
              <div className="bg-black rounded-lg p-4">
                <pre className="text-sm text-gray-300">
{`<<<<<<< HEAD (Current Change)
function calculate() {
    return price * 0.15; // 15% tax
}
=======
function calculate() {
    return price * 0.18; // 18% tax  
}
>>>>>>> feature-branch (Incoming Change)`}
                </pre>
              </div>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded">
                  <strong className="text-blue-700 dark:text-blue-300">{'<<<<<<< HEAD'}</strong>
                  <p className="text-blue-600 dark:text-blue-400">Tu cambio actual</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-600 p-3 rounded">
                  <strong className="text-gray-700 dark:text-gray-300">{'======='}</strong>
                  <p className="text-gray-600 dark:text-gray-400">Separador</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded">
                  <strong className="text-green-700 dark:text-green-300">{'>>>>>>> branch'}</strong>
                  <p className="text-green-600 dark:text-green-400">Cambio entrante</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'detection' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Detectar Conflictos
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Comandos de diagnóstico
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver estado del repositorio
git status

# Ver archivos con conflictos
git diff --name-only --diff-filter=U

# Ver conflictos específicos
git diff

# Ver diferencias detalladas
git log --merge --oneline`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git status', 'detect-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                  <h3 className="font-medium text-red-800 dark:text-red-200 mb-2">
                    🚨 Señales de Conflictos
                  </h3>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Error: "CONFLICT (content): Merge conflict in file.txt"</li>
                    <li>• Status muestra "both modified" o "unmerged paths"</li>
                    <li>• Archivos contienen marcadores {'<<<<<<< ======= >>>>>>>'}</li>
                    <li>• Merge/rebase se detiene esperando resolución</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ejemplo de detección
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`$ git merge feature-branch
Auto-merging src/calculator.js
CONFLICT (content): Merge conflict in src/calculator.js
Automatic merge failed; fix conflicts and then commit the result.

$ git status
On branch main
You have unmerged paths.
  (fix conflicts and run "git commit")

Unmerged paths:
  (use "git add <file>..." to mark resolution)
        both modified:   src/calculator.js

$ git diff --name-only --diff-filter=U
src/calculator.js`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git status\ngit diff --name-only --diff-filter=U', 'detect-example')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      ✅ Antes del merge
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded text-xs">git log --oneline main..feature</code></li>
                      <li>• <code className="bg-blue-200 dark:bg-blue-800 px-1 rounded text-xs">git diff main feature</code></li>
                      <li>• Revisar archivos modificados</li>
                      <li>• Comunicar con el equipo</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                      🔍 Durante conflictos
                    </h4>
                    <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                      <li>• <code className="bg-orange-200 dark:bg-orange-800 px-1 rounded text-xs">git status</code> frecuentemente</li>
                      <li>• Abrir archivos en editor</li>
                      <li>• Usar herramientas visuales</li>
                      <li>• Documentar decisiones</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'resolution' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Estrategias de Resolución
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Resolución manual (recomendado)
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# 1. Abrir archivo conflictivo en editor
code src/calculator.js

# 2. Buscar y editar marcadores de conflicto
# Eliminar: <<<<<<< HEAD, =======, >>>>>>> branch
# Mantener código deseado

# 3. Marcar como resuelto
git add src/calculator.js

# 4. Completar merge
git commit -m "merge: resolve calculator conflict"

# 5. Verificar resolución
git log --oneline -3`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git add archivo-resuelto.txt\ngit commit -m "merge: resolve conflict"', 'resolve-manual')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Herramientas de merge
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Configurar herramienta de merge
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# Usar herramienta visual
git mergetool

# Otras opciones populares
git config --global merge.tool meld    # Linux
git config --global merge.tool p4merge # Cross-platform
git config --global merge.tool kdiff3  # Cross-platform`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git mergetool', 'merge-tool')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      📝 Estrategia: Aceptar una versión
                    </h4>
                    <div className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                      Cuando quieres usar completamente una versión:
                    </div>
                    <div className="bg-black rounded p-3">
                      <pre className="text-xs text-gray-300">
{`# Usar tu versión (theirs = incoming)
git checkout --ours archivo.txt

# Usar su versión (ours = current)  
git checkout --theirs archivo.txt

git add archivo.txt
git commit`}
                      </pre>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                      🔧 Estrategia: Combinar cambios
                    </h4>
                    <div className="text-sm text-green-800 dark:text-green-200 mb-2">
                      Cuando necesitas partes de ambas versiones:
                    </div>
                    <ol className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>1. Abrir archivo en editor</li>
                      <li>2. Eliminar marcadores {'<<<<<<< ======= >>>>>>>'}</li>
                      <li>3. Combinar lógicamente ambos cambios</li>
                      <li>4. Probar que funciona correctamente</li>
                      <li>5. Hacer git add y git commit</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                        🛡️ Cancelar merge si es necesario
                      </h3>
                      <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                        <div className="bg-black rounded p-3">
                          <pre className="text-xs text-gray-300">
{`# Cancelar merge en progreso
git merge --abort

# Volver al estado anterior
git reset --hard HEAD

# Ver estado limpio
git status`}
                          </pre>
                        </div>
                      </div>
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
                Ejercicio: Simulación de Conflictos
              </h2>
              
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  Crear, detectar y resolver conflictos de merge en un entorno controlado.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 1: Crear escenario de conflicto</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear repositorio y archivo inicial
git init conflict-demo
cd conflict-demo
echo "Precio base: 100" > config.txt
git add config.txt
git commit -m "initial: add base price config"

# Crear rama feature
git switch -c feature-discount
echo -e "Precio base: 100\nDescuento: 15%" > config.txt
git add config.txt
git commit -m "feature: add 15% discount"`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 2: Crear cambio conflictivo en main</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Volver a main y hacer cambio diferente
git switch main
echo -e "Precio base: 100\nDescuento: 20%" > config.txt
git add config.txt
git commit -m "main: add 20% discount"

# Ver divergencia
git log --oneline --graph --all`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 3: Provocar y resolver conflicto</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Intentar merge (fallará)
git merge feature-discount
# CONFLICT (content): Merge conflict in config.txt

# Ver estado del conflicto
git status
cat config.txt

# Resolver manualmente - abrir editor y editar:
# Eliminar marcadores <<<<<<< ======= >>>>>>>
# Decidir qué descuento mantener o combinar
echo -e "Precio base: 100\nDescuento: 18% (promedio)" > config.txt

# Marcar como resuelto y completar merge
git add config.txt
git commit -m "merge: resolve discount conflict - use 18%"
git log --oneline --graph -5`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 4: Práctica avanzada</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear conflicto más complejo
git switch -c feature-taxes
echo -e "Precio base: 100\nDescuento: 18%\nImpuesto: 8%" > config.txt
git add config.txt
git commit -m "feature: add tax rate"

git switch main
echo -e "Precio base: 100\nDescuento: 18%\nIVA: 21%" > config.txt
git add config.txt  
git commit -m "main: add IVA rate"

# Merge con herramienta visual
git merge feature-taxes
git mergetool  # Si está configurado

# O resolver manualmente siguiendo el proceso`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                      💡 Checklist de Resolución
                    </h3>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>☐ Identificar todos los archivos con conflictos</li>
                      <li>☐ Abrir cada archivo y revisar marcadores</li>
                      <li>☐ Entender el propósito de ambos cambios</li>
                      <li>☐ Decidir estrategia: mantener uno, combinar, o reescribir</li>
                      <li>☐ Eliminar TODOS los marcadores {'<<<<<<< ======= >>>>>>>'}</li>
                      <li>☐ Probar que el código funciona</li>
                      <li>☐ Hacer git add de archivos resueltos</li>
                      <li>☐ Commit con mensaje descriptivo</li>
                      <li>☐ Verificar con git log que todo está correcto</li>
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
          to="/revert-reset" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Revert & Reset</span>
        </Link>
        
        <Link 
          to="/advanced" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Técnicas Avanzadas</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default ConflictosPage