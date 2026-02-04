import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, GitMerge, AlertTriangle, Zap, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Code, XCircle } from 'lucide-react'

const MergingPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/merging'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/merging')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: 'Concepto', icon: GitMerge },
    { id: 'types', name: 'Tipos de Merge', icon: Code },
    { id: 'conflicts', name: 'Conflictos', icon: AlertTriangle },
    { id: 'practice', name: 'Práctica', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <GitMerge className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Fusiones y Conflictos
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>30 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Intermedio</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Aprende a integrar cambios de diferentes ramas y resolver conflictos cuando ocurren.
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
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400'
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
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué es un Merge?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Un merge es el proceso de integrar cambios de una rama a otra, combinando 
                el historial de commits de ambas ramas en una sola línea de desarrollo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Visualización de Merge
              </h3>
              
              <div className="bg-black rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-300">
{`Antes del merge:
      A---B---C  main
           \
            D---E---F  feature

Después del merge:
      A---B---C-------G  main
           \         /
            D---E---F  feature`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">✅ Ventajas</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Preserva el historial completo</li>
                    <li>• Mantiene el contexto de la rama</li>
                    <li>• Fácil de entender</li>
                    <li>• Permite colaboración simple</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-900 dark:text-yellow-100 mb-2">⚠️ Consideraciones</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• Puede crear historial complejo</li>
                    <li>• Commits de merge adicionales</li>
                    <li>• Posibles conflictos</li>
                    <li>• Requiere resolución manual</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'types' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tipos de Merge
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-3 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Fast-Forward Merge
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                    Cuando no hay cambios en la rama principal desde la creación de la rama feature.
                  </p>
                  <div className="bg-black rounded-lg p-3">
                    <pre className="text-xs text-gray-300">
{`# Merge automático sin commit adicional
git switch main
git merge feature-branch

# Resultado: main apunta al último commit de feature`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <h3 className="font-medium text-green-800 dark:text-green-200 mb-3 flex items-center">
                    <GitMerge className="w-5 h-5 mr-2" />
                    Three-Way Merge
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-sm mb-3">
                    Cuando ambas ramas han divergido y necesitan combinar cambios.
                  </p>
                  <div className="bg-black rounded-lg p-3">
                    <pre className="text-xs text-gray-300">
{`# Crea un commit de merge automáticamente
git switch main
git merge feature-branch

# Resultado: nuevo commit que une ambas historias`}
                    </pre>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-4">
                  <h3 className="font-medium text-purple-800 dark:text-purple-200 mb-3">
                    Opciones de Merge
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Forzar commit de merge (no fast-forward)
git merge --no-ff feature-branch

# Merge sin commit automático
git merge --no-commit feature-branch

# Merge con mensaje personalizado
git merge -m "Merge feature XYZ" feature-branch

# Abortar merge en progreso
git merge --abort`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git merge --no-ff feature-branch', 'merge-options')}
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

        {activeTab === 'conflicts' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Resolución de Conflictos
              </h2>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-red-800 dark:text-red-200 mb-2">
                      ¿Cuándo ocurren conflictos?
                    </h3>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      Cuando dos ramas modifican las mismas líneas de un archivo o cuando 
                      una rama elimina un archivo que otra rama modificó.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">1. Identificar conflictos</h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`$ git merge feature-branch
Auto-merging archivo.txt
CONFLICT (content): Merge conflict in archivo.txt
Automatic merge failed; fix conflicts and then commit the result.`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">2. Ver archivos en conflicto</h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver estado de los archivos
git status

# Ver qué archivos tienen conflictos
git diff --name-only --diff-filter=U`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git status', 'conflict-status')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">3. Marcadores de conflicto</h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <pre className="text-sm text-gray-300">
{`<<<<<<< HEAD (rama actual)
Código de la rama actual
=======
Código de la rama que se está fusionando
>>>>>>> feature-branch`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">4. Resolver y finalizar</h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Después de resolver manualmente
git add archivo-resuelto.txt

# Finalizar el merge
git commit

# O abortar si es necesario
git merge --abort`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git add .\ngit commit', 'resolve-conflict')}
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
                Ejercicio: Merge con Conflicto
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Simular y resolver un conflicto de merge entre dos ramas que modifican el mismo archivo.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 1: Preparar escenario</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear archivo inicial
echo "Línea 1: Original" > config.txt
echo "Línea 2: Original" >> config.txt
git add config.txt
git commit -m "Initial config"

# Crear rama feature
git switch -c feature/update-config`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 2: Modificar en feature</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Cambiar línea 1 en feature
sed -i 's/Original/Feature/' config.txt
git commit -am "Update config in feature"

# Volver a main
git switch main`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 3: Modificar en main (crear conflicto)</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Cambiar la misma línea en main
sed -i 's/Original/Main Branch/' config.txt
git commit -am "Update config in main"

# Intentar merge (creará conflicto)
git merge feature/update-config`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 4: Resolver conflicto</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Ver el conflicto
cat config.txt

# Editar manualmente para resolver
# Elegir: "Línea 1: Combined Feature"
echo "Línea 1: Combined Feature" > config.txt
echo "Línea 2: Original" >> config.txt

# Finalizar merge
git add config.txt
git commit -m "Resolve merge conflict"`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4 mt-6">
                <h3 className="font-medium text-green-800 dark:text-green-200 mb-2 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  🛠️ Herramientas de Merge
                </h3>
                <div className="text-sm text-green-700 dark:text-green-300 space-y-2">
                  <p><strong>VS Code:</strong> Interfaz gráfica integrada para resolver conflictos</p>
                  <p><strong>Git mergetool:</strong> <code>git mergetool --tool=vimdiff</code></p>
                  <p><strong>P4Merge, KDiff3:</strong> Herramientas visuales especializadas</p>
                  <p><strong>GitHub Desktop:</strong> Interfaz simplificada para conflictos</p>
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
          to="/branching" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Trabajando con Ramas</span>
        </Link>
        
        <Link 
          to="/cloning" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Repositorios Remotos</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default MergingPage