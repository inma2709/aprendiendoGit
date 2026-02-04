import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Zap, GitBranch, Archive, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Cherry, Layers, RefreshCw, Workflow, Star } from 'lucide-react'

const AdvancedPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('rebase')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/advanced'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/advanced')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'rebase', name: 'Rebase', icon: RefreshCw },
    { id: 'stash', name: 'Stash', icon: Archive },
    { id: 'cherry-pick', name: 'Cherry Pick', icon: Cherry },
    { id: 'workflows', name: 'Workflows', icon: Workflow }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Técnicas Avanzadas
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>35 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Avanzado</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Domina herramientas avanzadas de Git que te convertirán en un desarrollador más eficiente.
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
        {activeTab === 'rebase' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Git Rebase: Reescribir Historia
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Rebase permite reorganizar commits para crear un historial más limpio y lineal.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tipos de Rebase
              </h3>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Rebase básico
                  </h4>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Rebase rama actual sobre main
git rebase main

# Rebase interactivo para modificar commits
git rebase -i HEAD~3

# Rebase con estrategia específica
git rebase -X ours main`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git rebase -i HEAD~3', 'rebase-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Rebase interactivo - Comandos
                  </h4>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Opciones en rebase interactivo:
pick    = usar commit tal como está
reword  = usar commit pero editar mensaje
edit    = usar commit pero parar para editarlo
squash  = fusionar con commit anterior
fixup   = como squash pero descartar mensaje
drop    = eliminar commit`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git rebase -i HEAD~3', 'rebase-interactive')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <h4 className="font-medium text-gray-900 dark:text-white">Ventajas</h4>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Historial lineal y limpio</li>
                      <li>• Elimina merge commits innecesarios</li>
                      <li>• Permite corregir commits</li>
                      <li>• Fusionar commits relacionados</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      <h4 className="font-medium text-gray-900 dark:text-white">Precauciones</h4>
                    </div>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Nunca rebase commits públicos</li>
                      <li>• Puede crear conflictos</li>
                      <li>• Reescribe historia</li>
                      <li>• Requiere force push</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ejemplo práctico de rebase interactivo
                  </h4>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver últimos commits
git log --oneline -5

# Iniciar rebase interactivo
git rebase -i HEAD~3

# Editor se abre con:
pick a1b2c3d fix typo
pick b2c3d4e add feature  
pick c3d4e5f update docs

# Cambiar a:
reword a1b2c3d fix typo
squash b2c3d4e add feature
pick c3d4e5f update docs

# Guardar y seguir instrucciones`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git log --oneline -5\ngit rebase -i HEAD~3', 'rebase-example')}
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

        {activeTab === 'stash' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Git Stash: Guardar Trabajo Temporal
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Comandos básicos de stash
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Guardar cambios actuales
git stash

# Guardar con mensaje descriptivo
git stash push -m "trabajo en progreso en login"

# Guardar incluyendo archivos no rastreados
git stash -u

# Ver lista de stashes
git stash list`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git stash push -m "trabajo en progreso"', 'stash-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Recuperar y gestionar stashes
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Aplicar último stash (lo mantiene)
git stash apply

# Aplicar y eliminar último stash
git stash pop

# Aplicar stash específico
git stash apply stash@{2}

# Ver contenido de un stash
git stash show -p stash@{0}

# Eliminar stash específico
git stash drop stash@{1}

# Eliminar todos los stashes
git stash clear`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git stash pop', 'stash-recover')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                    🎯 Casos de uso comunes
                  </h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                    <li><strong>Cambio de rama urgente:</strong> Stash trabajo actual, cambiar rama, volver y recuperar</li>
                    <li><strong>Pull con cambios locales:</strong> Stash, pull, pop para evitar conflictos</li>
                    <li><strong>Experimento temporal:</strong> Stash para probar algo rápido sin commit</li>
                    <li><strong>Limpieza parcial:</strong> Stash cambios que no quieres commitear aún</li>
                  </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Stash avanzado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Stash archivos específicos
git stash push -m "solo configs" -- config.json settings.py

# Crear rama desde stash
git stash branch nueva-feature stash@{0}

# Stash interactivo (elegir qué cambios)
git stash -p

# Ver diferencias entre stash y HEAD
git diff stash@{0}`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git stash branch nueva-feature stash@{0}', 'stash-advanced')}
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

        {activeTab === 'cherry-pick' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Cherry Pick: Seleccionar Commits Específicos
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Comandos cherry-pick
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Cherry pick commit específico
git cherry-pick a1b2c3d4

# Cherry pick múltiples commits
git cherry-pick a1b2c3d4 b2c3d4e5

# Cherry pick rango de commits
git cherry-pick start-commit..end-commit

# Cherry pick sin crear commit automático
git cherry-pick --no-commit a1b2c3d4`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git cherry-pick a1b2c3d4', 'cherry-basic')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                      ✅ Cuándo usar Cherry Pick
                    </h4>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Hotfix urgente desde develop</li>
                      <li>• Backport features a versión anterior</li>
                      <li>• Aplicar fix específico sin merge</li>
                      <li>• Recuperar commits de rama eliminada</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                    <h4 className="font-medium text-orange-900 dark:text-orange-100 mb-2">
                      ⚠️ Consideraciones
                    </h4>
                    <ul className="text-sm text-orange-800 dark:text-orange-200 space-y-1">
                      <li>• Crea commits duplicados</li>
                      <li>• Puede causar conflictos</li>
                      <li>• Rompe relación con rama origen</li>
                      <li>• No incluye dependencias</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ejemplo práctico
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Escenario: necesitas hotfix de develop en main
git switch main
git log --oneline develop -5

# Identificar commit del fix
# commit b2c3d4e5: fix critical security issue

git cherry-pick b2c3d4e5

# Si hay conflicto, resolverlo y continuar
git add .
git cherry-pick --continue

# Verificar que se aplicó correctamente
git log --oneline -3`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git switch main\ngit cherry-pick b2c3d4e5', 'cherry-example')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Cherry pick avanzado
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Cherry pick con mensaje personalizado
git cherry-pick -e a1b2c3d4

# Cherry pick solo cambios, sin metadatos de autor
git cherry-pick --no-commit a1b2c3d4
git commit --author="Tu Nombre <tu@email.com>"

# Abortar cherry-pick en progreso
git cherry-pick --abort

# Ver qué commits faltarían en rama actual
git cherry main feature-branch --oneline`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git cherry-pick --no-commit a1b2c3d4', 'cherry-advanced')}
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

        {activeTab === 'workflows' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Workflows Profesionales
              </h2>

              <div className="space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-3">
                    🚀 Git Flow
                  </h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                    Workflow estructurado para proyectos con releases planificados
                  </p>
                  <div className="bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Inicializar git flow
git flow init

# Crear feature branch
git flow feature start nueva-funcionalidad
# Trabajo en feature...
git flow feature finish nueva-funcionalidad

# Crear release branch  
git flow release start 1.0.0
# Bug fixes en release...
git flow release finish 1.0.0

# Hotfix de emergencia
git flow hotfix start critical-fix
git flow hotfix finish critical-fix`}
                    </pre>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h3 className="font-medium text-green-900 dark:text-green-100 mb-3">
                    📈 GitHub Flow
                  </h3>
                  <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                    Workflow simple para desarrollo continuo
                  </p>
                  <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                      <span>Create branch from main</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                      <span>Make changes and commits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                      <span>Open Pull Request</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                      <span>Review and merge</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-6 h-6 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                      <span>Deploy immediately</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <h3 className="font-medium text-purple-900 dark:text-purple-100 mb-3">
                    ⚡ GitLab Flow
                  </h3>
                  <p className="text-sm text-purple-800 dark:text-purple-200 mb-3">
                    Combina simplicidad con control de environments
                  </p>
                  <div className="bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Feature development
git switch -c feature/new-api
# desarrollo...
git push origin feature/new-api
# merge request a main

# Deploy a staging  
git switch staging
git merge main
git push origin staging

# Deploy a production
git switch production
git merge main  
git push origin production`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                    🛠️ Herramientas y Aliases Útiles
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Aliases útiles para workflows
git config --global alias.co checkout
git config --global alias.br branch  
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

# Alias para logs mejorados
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.lga "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all"

# Push con seguimiento automático
git config --global alias.pushup 'push -u origin HEAD'`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git config --global alias.lg "log --oneline --graph --decorate --all"', 'workflow-aliases')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                        💡 Mejores Prácticas Generales
                      </h3>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• <strong>Commits pequeños y atómicos:</strong> Un cambio lógico por commit</li>
                        <li>• <strong>Mensajes descriptivos:</strong> Explica el "qué" y el "por qué"</li>
                        <li>• <strong>Branches por feature:</strong> Una rama por funcionalidad o fix</li>
                        <li>• <strong>Pull requests obligatorios:</strong> Code review antes de merge</li>
                        <li>• <strong>CI/CD integrado:</strong> Tests automatizados en cada push</li>
                        <li>• <strong>Protección de main:</strong> Solo merge através de PR</li>
                        <li>• <strong>Tags para releases:</strong> Marcar versiones importantes</li>
                        <li>• <strong>Documentar workflows:</strong> README claro para el equipo</li>
                      </ul>
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
          to="/conflictos" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Resolución de Conflictos</span>
        </Link>
        
        <Link 
          to="/cheat-sheet" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Chuleta de Comandos</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default AdvancedPage