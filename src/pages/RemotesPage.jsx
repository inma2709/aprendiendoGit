import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Upload, Download, RefreshCw, Globe, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Cloud, GitBranch, ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

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
    { id: 'pull', name: 'Pull & Fetch', icon: ArrowDownCircle },
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
              Push, Pull & Fetch
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>22 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Intermedio</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Domina la sincronización entre repositorios locales y remotos. Aprende cuándo usar push, pull y fetch.
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
                ¿Qué es la Sincronización?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La sincronización mantiene tu repositorio local actualizado con cambios remotos 
                y permite compartir tus contribuciones con el equipo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Flujo de Sincronización
              </h3>
              
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 mb-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-2">
                    <ArrowDownCircle className="w-10 h-10 text-blue-500" />
                  </div>
                  <p className="font-medium">FETCH</p>
                  <p className="text-xs text-gray-500">Descargar cambios</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-gray-400" />
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-2">
                    <RefreshCw className="w-10 h-10 text-green-500" />
                  </div>
                  <p className="font-medium">MERGE</p>
                  <p className="text-xs text-gray-500">Integrar cambios</p>
                </div>
                
                <ArrowRight className="w-6 h-6 text-gray-400" />
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-2">
                    <ArrowUpCircle className="w-10 h-10 text-purple-500" />
                  </div>
                  <p className="font-medium">PUSH</p>
                  <p className="text-xs text-gray-500">Subir cambios</p>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  🔄 Pull = Fetch + Merge
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-xs">git pull</code> 
                  es equivalente a <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-xs">git fetch</code> 
                  seguido de <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-xs">git merge</code>
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white">FETCH</h4>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Descarga cambios</li>
                  <li>• No modifica archivos</li>
                  <li>• Actualiza referencias</li>
                  <li>• Operación segura</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <ArrowDownCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white">PULL</h4>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Fetch + Merge</li>
                  <li>• Actualiza archivos</li>
                  <li>• Puede crear conflictos</li>
                  <li>• Operación directa</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <ArrowUpCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white">PUSH</h4>
                </div>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Sube cambios</li>
                  <li>• Actualiza remoto</li>
                  <li>• Puede ser rechazado</li>
                  <li>• Requiere permisos</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'push' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Comandos Push
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Push básico
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Push a la rama actual
git push

# Push especificando remoto y rama
git push origin main

# Push primera vez (establecer upstream)
git push -u origin feature-branch

# Push todas las ramas
git push --all origin`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git push origin main', 'push-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Push con opciones
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Push forzado (¡cuidado!)
git push --force origin feature-branch

# Push forzado más seguro
git push --force-with-lease origin feature-branch

# Push sin verificar certificados SSL
git push --no-verify origin main

# Push tags
git push origin --tags`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git push --force-with-lease origin feature-branch', 'push-force')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-red-800 dark:text-red-200 mb-2">
                        ⚠️ Casos donde Push puede fallar
                      </h3>
                      <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                        <li>• <strong>Behind commits:</strong> El remoto tiene cambios que no tienes</li>
                        <li>• <strong>Sin permisos:</strong> No tienes acceso de escritura</li>
                        <li>• <strong>Rama protegida:</strong> La rama requiere pull request</li>
                        <li>• <strong>Hook rechaza:</strong> Pre-push hook falla</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Solucionar push rechazado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Método 1: Pull primero (recomendado)
git pull origin main
git push origin main

# Método 2: Pull con rebase
git pull --rebase origin main
git push origin main

# Método 3: Forzar (solo si estás seguro)
git push --force-with-lease origin main`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git pull --rebase origin main', 'push-fix')}
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

        {activeTab === 'pull' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Comandos Pull y Fetch
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Pull commands
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Pull básico (fetch + merge)
git pull

# Pull de rama específica
git pull origin main

# Pull con rebase (evita merge commits)
git pull --rebase origin main

# Pull con estrategia específica
git pull --strategy=recursive -X ours origin main`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git pull --rebase origin main', 'pull-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Fetch commands
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Fetch de todos los remotos
git fetch --all

# Fetch de remoto específico
git fetch origin

# Fetch con prune (eliminar refs obsoletas)
git fetch --prune origin

# Fetch tags
git fetch --tags origin

# Ver cambios después de fetch
git log HEAD..origin/main --oneline`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git fetch --prune origin', 'fetch-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      📥 Cuándo usar FETCH
                    </h4>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Revisar cambios antes de integrar</li>
                      <li>• Trabajo en múltiples ramas</li>
                      <li>• Validar conflictos potenciales</li>
                      <li>• Scripts automatizados</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                      🔄 Cuándo usar PULL
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Actualización rápida</li>
                      <li>• Flujo de trabajo simple</li>
                      <li>• Rama principal estable</li>
                      <li>• Sincronización diaria</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Flujo de trabajo recomendado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# 1. Fetch para ver cambios
git fetch origin

# 2. Comparar diferencias
git log HEAD..origin/main --oneline

# 3. Merge o rebase según preferencia
git merge origin/main
# o
git rebase origin/main

# 4. Push si hay cambios locales
git push origin feature-branch`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git fetch origin\ngit log HEAD..origin/main --oneline\ngit merge origin/main', 'workflow')}
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
                Ejercicio: Sincronización Completa
              </h2>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-green-900 dark:text-green-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Practicar el flujo completo de sincronización: fetch, merge, push y resolución de conflictos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 1: Actualización simple</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Verificar estado antes de pull
git status
git fetch origin
git log HEAD..origin/main --oneline

# Si hay cambios, hacer pull
git pull origin main

# Continuar trabajo normal
echo "nuevos cambios" >> archivo.txt
git add .
git commit -m "feat: agregar nuevos cambios"
git push origin main`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 2: Conflicto de merge</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Intentar push y falla
git push origin main
# ERROR: Updates were rejected

# Solución con pull
git pull origin main
# CONFLICT: Merge conflict in archivo.txt

# Resolver conflictos manualmente, luego:
git add archivo.txt
git commit -m "merge: resolve conflict with remote"
git push origin main`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 3: Flujo con rebase</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Usar rebase para mantener historial limpio
git fetch origin
git rebase origin/main

# Si hay conflictos durante rebase
git status
# Resolver conflictos, luego:
git add .
git rebase --continue

# Push después del rebase
git push origin feature-branch`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Verificación final</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Verificar sincronización
git status
git log --oneline -10
git remote show origin

# Verificar que todo está actualizado
git fetch
git status`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                      💡 Buenas Prácticas
                    </h3>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                      <li>• Haz <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded text-xs">git fetch</code> antes de empezar a trabajar</li>
                      <li>• Usa <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded text-xs">git pull --rebase</code> para historial más limpio</li>
                      <li>• Revisa cambios con <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded text-xs">git log HEAD..origin/main</code></li>
                      <li>• Haz commits pequeños y frecuentes</li>
                      <li>• Nunca uses <code className="bg-yellow-200 dark:bg-yellow-800 px-1 rounded text-xs">--force</code> en ramas compartidas</li>
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
          to="/cloning" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Repositorios Remotos</span>
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