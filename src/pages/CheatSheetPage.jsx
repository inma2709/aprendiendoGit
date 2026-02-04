import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowLeft, BookOpen, Copy, Clock, Search, Terminal, GitBranch, GitCommit, GitMerge, Download, Upload, RotateCcw } from 'lucide-react'

const CheatSheetPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('basics')
  const [copiedCode, setCopiedCode] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/cheat-sheet'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/cheat-sheet')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const categories = [
    { id: 'basics', name: 'Básicos', icon: Terminal },
    { id: 'staging', name: 'Staging & Commits', icon: GitCommit },
    { id: 'branching', name: 'Ramas', icon: GitBranch },
    { id: 'remote', name: 'Remotos', icon: Download },
    { id: 'advanced', name: 'Avanzados', icon: RotateCcw },
    { id: 'troubleshooting', name: 'Soluciones', icon: Search }
  ]

  const commands = {
    basics: [
      {
        command: 'git init',
        description: 'Inicializar un repositorio Git',
        example: 'git init'
      },
      {
        command: 'git status',
        description: 'Ver el estado actual del repositorio',
        example: 'git status'
      },
      {
        command: 'git log',
        description: 'Ver historial de commits',
        example: 'git log --oneline --graph'
      },
      {
        command: 'git help',
        description: 'Obtener ayuda sobre comandos',
        example: 'git help <command>'
      },
      {
        command: 'git config',
        description: 'Configurar Git',
        example: 'git config --global user.name "Tu Nombre"'
      }
    ],
    staging: [
      {
        command: 'git add',
        description: 'Agregar archivos al staging area',
        example: 'git add . # Todos los archivos\ngit add archivo.txt # Archivo específico'
      },
      {
        command: 'git commit',
        description: 'Crear un commit',
        example: 'git commit -m "Mensaje del commit"\ngit commit -am "Add y commit juntos"'
      },
      {
        command: 'git diff',
        description: 'Ver diferencias en archivos',
        example: 'git diff # Working directory\ngit diff --staged # Staging area'
      },
      {
        command: 'git reset',
        description: 'Deshacer cambios en staging',
        example: 'git reset HEAD archivo.txt\ngit reset --soft HEAD~1'
      },
      {
        command: 'git restore',
        description: 'Restaurar archivos (Git 2.23+)',
        example: 'git restore --staged archivo.txt\ngit restore archivo.txt'
      }
    ],
    branching: [
      {
        command: 'git branch',
        description: 'Gestionar ramas',
        example: 'git branch # Ver ramas\ngit branch nueva-rama # Crear rama\ngit branch -d rama # Eliminar'
      },
      {
        command: 'git switch',
        description: 'Cambiar entre ramas (Git 2.23+)',
        example: 'git switch main\ngit switch -c nueva-rama'
      },
      {
        command: 'git checkout',
        description: 'Cambiar ramas (comando clásico)',
        example: 'git checkout main\ngit checkout -b nueva-rama'
      },
      {
        command: 'git merge',
        description: 'Fusionar ramas',
        example: 'git merge feature-branch\ngit merge --no-ff feature-branch'
      },
      {
        command: 'git rebase',
        description: 'Rebase de ramas',
        example: 'git rebase main\ngit rebase -i HEAD~3'
      }
    ],
    remote: [
      {
        command: 'git clone',
        description: 'Clonar repositorio remoto',
        example: 'git clone https://github.com/user/repo.git\ngit clone --depth 1 <url>'
      },
      {
        command: 'git remote',
        description: 'Gestionar remotos',
        example: 'git remote -v\ngit remote add origin <url>\ngit remote set-url origin <url>'
      },
      {
        command: 'git push',
        description: 'Enviar cambios al remoto',
        example: 'git push origin main\ngit push -u origin feature-branch'
      },
      {
        command: 'git pull',
        description: 'Obtener y fusionar cambios',
        example: 'git pull origin main\ngit pull --rebase origin main'
      },
      {
        command: 'git fetch',
        description: 'Obtener cambios sin fusionar',
        example: 'git fetch origin\ngit fetch --all'
      }
    ],
    advanced: [
      {
        command: 'git stash',
        description: 'Guardar cambios temporalmente',
        example: 'git stash\ngit stash pop\ngit stash list\ngit stash apply'
      },
      {
        command: 'git cherry-pick',
        description: 'Aplicar commit específico',
        example: 'git cherry-pick <commit-hash>\ngit cherry-pick A..B'
      },
      {
        command: 'git revert',
        description: 'Revertir commits',
        example: 'git revert HEAD\ngit revert <commit-hash>'
      },
      {
        command: 'git tag',
        description: 'Gestionar etiquetas',
        example: 'git tag v1.0.0\ngit tag -a v1.0.0 -m "Version 1.0"\ngit push --tags'
      },
      {
        command: 'git bisect',
        description: 'Encontrar bugs por bisección',
        example: 'git bisect start\ngit bisect bad\ngit bisect good <commit>'
      }
    ],
    troubleshooting: [
      {
        command: 'git reflog',
        description: 'Ver historial de referencias',
        example: 'git reflog\ngit reset --hard HEAD@{2}'
      },
      {
        command: 'git clean',
        description: 'Limpiar archivos no trackeados',
        example: 'git clean -n # Preview\ngit clean -fd # Force directories'
      },
      {
        command: 'git fsck',
        description: 'Verificar integridad del repositorio',
        example: 'git fsck --full'
      },
      {
        command: 'git gc',
        description: 'Limpieza y optimización',
        example: 'git gc --aggressive --prune=now'
      },
      {
        command: 'git show',
        description: 'Mostrar información de commits',
        example: 'git show HEAD\ngit show --name-only <commit>'
      }
    ]
  }

  const filteredCommands = searchTerm 
    ? commands[activeCategory].filter(cmd => 
        cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cmd.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : commands[activeCategory]

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Chuleta de Comandos Git
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Referencia rápida</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Todos los niveles</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Una referencia completa con los comandos de Git más utilizados, organizados por categorías para un acceso rápido.
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Buscar comando..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="-mb-px flex space-x-4 overflow-x-auto">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setSearchTerm('')
                }}
                className={`
                  whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm flex items-center space-x-2
                  ${activeCategory === category.id
                    ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Commands Grid */}
      <div className="grid gap-4">
        {filteredCommands.map((cmd, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-mono font-semibold text-purple-600 dark:text-purple-400 mb-1">
                  {cmd.command}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {cmd.description}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(cmd.example, `cmd-${index}`)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Copiar comando"
              >
                <Copy className={`w-4 h-4 ${copiedCode === `cmd-${index}` ? 'text-green-500' : 'text-gray-400'}`} />
              </button>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {cmd.example}
              </pre>
            </div>
          </div>
        ))}
      </div>

      {searchTerm && filteredCommands.length === 0 && (
        <div className="text-center py-12">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No se encontraron comandos
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Intenta con otros términos de búsqueda.
          </p>
        </div>
      )}

      {/* Quick Tips */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          💡 Consejos Rápidos
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p><strong>Alias útiles:</strong></p>
            <div className="bg-black rounded p-2 font-mono text-gray-300">
              git config --global alias.st status<br/>
              git config --global alias.co checkout<br/>
              git config --global alias.br branch
            </div>
          </div>
          <div className="space-y-2">
            <p><strong>Configuración esencial:</strong></p>
            <div className="bg-black rounded p-2 font-mono text-gray-300">
              git config --global core.editor code<br/>
              git config --global init.defaultBranch main<br/>
              git config --global pull.rebase false
            </div>
          </div>
        </div>
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
          <span>{isCompleted ? '¡Referencia Completada!' : 'Marcar como Vista'}</span>
        </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to="/advanced" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a Técnicas Avanzadas</span>
        </Link>
      </div>
    </div>
  )
}

export default CheatSheetPage