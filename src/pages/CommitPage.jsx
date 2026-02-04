import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, GitCommit, MessageSquare, History, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Eye } from 'lucide-react'

const CommitPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/commits'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/commits')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: 'Concepto', icon: GitCommit },
    { id: 'commands', name: 'Comandos', icon: MessageSquare },
    { id: 'history', name: 'Historial', icon: History },
    { id: 'best-practices', name: 'Buenas Prácticas', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <GitCommit className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Commits
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
          Aprende a crear commits efectivos y mantener un historial claro de tus cambios.
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
        {activeTab === 'concept' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué es un Commit?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Un commit es una instantánea permanente de los cambios en tu proyecto. 
                Cada commit tiene un identificador único y contiene información sobre 
                qué cambió, quién lo cambió y cuándo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Anatomía de un Commit
              </h3>
              
              <div className="bg-black rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-300">
{`commit 3a5b2c1d8e7f6g9h (HEAD -> main)
Author: Juan Pérez <juan@example.com>
Date:   Mon Jan 15 10:30:22 2024 -0300

    feat: agregar funcionalidad de login
    
    - Implementar formulario de autenticación
    - Agregar validación de campos
    - Conectar con API de usuarios
    
    Fixes #42`}
                </pre>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-xs text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">SHA Hash</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Identificador único de 40 caracteres hexadecimales
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-xs text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Autor y Fecha</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Información sobre quién y cuándo se hizo el commit
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-xs text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Mensaje</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Descripción clara y concisa de los cambios realizados
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Flujo de Commit
              </h3>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-2">
                    <Eye className="w-8 h-8 text-red-500" />
                  </div>
                  <p>Working<br/>Directory</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-green-500" />
                  <span className="text-xs mt-1">git add</span>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-2">
                    <CheckSquare className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p>Staging<br/>Area</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-6 h-6 text-blue-500" />
                  <span className="text-xs mt-1">git commit</span>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-2">
                    <GitCommit className="w-8 h-8 text-green-500" />
                  </div>
                  <p>Repository</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commands' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Comandos de Commit
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Commit básico
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Commit con mensaje
git commit -m "Descripción clara de los cambios"

# Commit con mensaje detallado (abre editor)
git commit

# Commit incluyendo archivos modificados (sin nuevos archivos)
git commit -am "Mensaje del commit"`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git commit -m "Descripción clara de los cambios"', 'basic-commit')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Modificar commits
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Modificar el último commit (mensaje y/o archivos)
git commit --amend

# Modificar mensaje del último commit
git commit --amend -m "Nuevo mensaje"

# Agregar archivos al último commit
git add archivo-olvidado.txt
git commit --amend --no-edit`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git commit --amend', 'amend')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Commits especiales
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Commit vacío (útil para triggers de CI/CD)
git commit --allow-empty -m "Trigger deployment"

# Commit con co-autor
git commit -m "feat: nueva funcionalidad

Co-authored-by: María García <maria@example.com>"`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git commit --allow-empty -m "Trigger deployment"', 'empty-commit')}
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

        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ver Historial de Commits
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ver historial completo
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Historial completo
git log

# Historial compacto (una línea por commit)
git log --oneline

# Historial con gráfico de ramas
git log --oneline --graph --all`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git log --oneline --graph --all', 'log-graph')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Filtrar historial
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Últimos N commits
git log -n 5

# Commits por autor
git log --author="Juan Pérez"

# Commits en rango de fechas
git log --since="2024-01-01" --until="2024-01-31"

# Commits que afectaron un archivo
git log -- archivo.txt`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git log --author="Juan Pérez"', 'log-filter')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ver cambios de un commit
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver cambios de un commit específico
git show 3a5b2c1

# Ver solo los archivos modificados
git show --name-only 3a5b2c1

# Ver estadísticas del commit
git show --stat 3a5b2c1`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git show 3a5b2c1', 'show-commit')}
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

        {activeTab === 'best-practices' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Mejores Prácticas para Commits
              </h2>

              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <h3 className="font-medium text-green-800 dark:text-green-200 mb-3 flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    Mensajes de Commit Efectivos
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                      <div className="font-mono text-xs mb-2 text-gray-500">✅ Bueno:</div>
                      <div className="font-mono text-green-700 dark:text-green-300">
                        feat: agregar validación de email en formulario de registro
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded border">
                      <div className="font-mono text-xs mb-2 text-gray-500">❌ Malo:</div>
                      <div className="font-mono text-red-700 dark:text-red-300">
                        arreglos varios
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4">
                  <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-3">
                    Formato Conventional Commits
                  </h3>
                  <div className="bg-black rounded-lg p-4">
                    <pre className="text-sm text-gray-300">
{`<tipo>[ámbito opcional]: <descripción>

[cuerpo opcional]

[footer(s) opcionales]`}
                    </pre>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Tipos comunes:</h4>
                      <ul className="space-y-1 text-blue-700 dark:text-blue-300">
                        <li>• <code>feat:</code> nueva funcionalidad</li>
                        <li>• <code>fix:</code> corrección de bug</li>
                        <li>• <code>docs:</code> documentación</li>
                        <li>• <code>style:</code> formato, espacios</li>
                        <li>• <code>refactor:</code> refactorización</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Ejemplos:</h4>
                      <ul className="space-y-1 text-blue-700 dark:text-blue-300 font-mono text-xs">
                        <li>feat(auth): add login page</li>
                        <li>fix: resolve memory leak</li>
                        <li>docs: update README</li>
                        <li>style: format code</li>
                        <li>test: add unit tests</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                        Reglas de Oro
                      </h3>
                      <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                        <li>• <strong>Atomic commits:</strong> Un commit = un cambio lógico</li>
                        <li>• <strong>Mensajes claros:</strong> Explica el "qué" y el "por qué"</li>
                        <li>• <strong>Presente imperativo:</strong> "Add feature" no "Added feature"</li>
                        <li>• <strong>Línea de asunto:</strong> Máximo 50 caracteres</li>
                        <li>• <strong>Cuerpo opcional:</strong> Separado por línea en blanco</li>
                        <li>• <strong>Test antes de commit:</strong> Asegúrate de que funciona</li>
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
          to="/staging-area" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Staging Area</span>
        </Link>
        
        <Link 
          to="/branching" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Trabajando con Ramas</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default CommitPage