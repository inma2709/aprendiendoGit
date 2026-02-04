import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, GitBranch, Plus, Trash2, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Eye, GitMerge } from 'lucide-react'

const BranchingPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/branching'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/branching')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: 'Concepto', icon: GitBranch },
    { id: 'commands', name: 'Comandos', icon: Plus },
    { id: 'workflows', name: 'Flujos de Trabajo', icon: GitMerge },
    { id: 'practice', name: 'Práctica', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
            <GitBranch className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trabajando con Ramas
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>20 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Intermedio</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Domina el uso de ramas en Git para desarrollar funcionalidades de manera aislada y organizada.
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
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🌱 ¿Qué son las Ramas? (Para Principiantes)
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Imagina las ramas como <strong>copias paralelas</strong> de tu proyecto donde puedes experimentar 
                sin romper el código que ya funciona. Es como tener múltiples versiones de tu proyecto al mismo tiempo.
              </p>
            </div>

            {/* Main vs Master - Concepto clave */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
                🎯 Main vs Master: ¿Cuál es la diferencia?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    📜 MASTER (Antiguo)
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Nombre tradicional hasta 2020</li>
                    <li>• Repositorios antiguos lo usan</li>
                    <li>• Misma función que main</li>
                  </ul>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    🚀 MAIN (Moderno)
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li>• Nombre estándar desde 2020</li>
                    <li>• Repositorios nuevos lo usan</li>
                    <li>• Más inclusivo y claro</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-800/30 rounded">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  💡 <strong>Regla de oro:</strong> Tanto main como master son LA RAMA SAGRADA donde solo va código 
                  100% funcional y probado. ¡Nunca desarrolles directamente aquí!
                </p>
              </div>
            </div>

            {/* Flujo de trabajo esencial */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                🔄 Flujo Esencial: ¡Aunque Trabajes Solo!
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">Crear rama develop</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Aunque trabajes solo, SIEMPRE crea una rama develop para tu desarrollo diario
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-1 inline-block">
                      git checkout -b develop
                    </code>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">Desarrollar en develop</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Haz todos tus commits, experimentos y pruebas en develop
                    </p>
                    <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded mt-1 inline-block">
                      git add . && git commit -m "feat: nueva función"
                    </code>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">Solo cuando esté 100% listo...</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Merge develop → main únicamente cuando todo funcione perfectamente
                    </p>
                    <div className="mt-1 space-x-2">
                      <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git checkout main</code>
                      <code className="text-xs bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">git merge develop</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advertencia crítica sobre commits */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                    ⚠️ PELIGRO: Volver a Commits Antiguos
                  </h3>
                  <div className="bg-red-100 dark:bg-red-800/30 rounded-lg p-4 mb-4">
                    <p className="text-red-800 dark:text-red-200 font-medium mb-2">
                      🚨 REGLA CRÍTICA: Al volver a un commit antiguo, TODOS los commits posteriores SE PIERDEN PARA SIEMPRE
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-black rounded-lg p-3">
                      <p className="text-gray-300 text-sm mb-2">❌ Ejemplo PELIGROSO:</p>
                      <pre className="text-xs text-red-300">
{`Tienes: A → B → C → D → E (estás aquí)
git reset --hard B
Resultado: A → B (¡C, D, E se perdieron!)`}
                      </pre>
                    </div>
                    
                    <div className="bg-yellow-100 dark:bg-yellow-800/20 rounded p-3">
                      <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                        💡 <strong>Alternativa segura:</strong> Usa <code className="bg-yellow-200 dark:bg-yellow-700 px-1 rounded">git revert</code> 
                        en lugar de <code className="bg-yellow-200 dark:bg-yellow-700 px-1 rounded">git reset</code> 
                        para deshacer cambios sin perder historial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visualización simple */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                👀 Visualización Simple para Principiantes
              </h3>
              
              <div className="bg-black rounded-lg p-4 mb-4">
                <pre className="text-sm text-gray-300">
{`main    A---B---C---F  ← Solo código firme y probado
         \\       /
develop   D---E-/      ← Tu desarrollo diario

🟢 A, B, C = Código estable en main
🟡 D, E = Tu trabajo en develop  
🟢 F = Merge de develop cuando todo funciona`}
                </pre>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
                    ✅ QUÉ SÍ hacer
                  </h4>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• Crear develop aunque estés solo</li>
                    <li>• Desarrollar siempre en develop</li>
                    <li>• Probar todo antes de merge a main</li>
                    <li>• Main = solo código que funciona</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">
                    ❌ QUÉ NO hacer
                  </h4>
                  <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                    <li>• Desarrollar directamente en main</li>
                    <li>• Hacer git reset --hard sin backup</li>
                    <li>• Subir código roto a main</li>
                    <li>• Trabajar sin ramas "por pereza"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'commands' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Comandos de Ramas
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Ver y crear ramas
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Ver todas las ramas
git branch

# Ver ramas locales y remotas
git branch -a

# Crear nueva rama
git branch nombre-rama

# Crear rama y cambiar a ella
git checkout -b nombre-rama
# Git 2.23+
git switch -c nombre-rama`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git switch -c nombre-rama', 'create-branch')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Navegar entre ramas
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Cambiar a una rama
git checkout nombre-rama
# Git 2.23+
git switch nombre-rama

# Volver a la rama anterior
git switch -

# Ver rama actual
git branch --show-current`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git switch nombre-rama', 'switch-branch')}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-700"
                    >
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    Eliminar ramas
                  </h3>
                  <div className="bg-black rounded-lg p-4 relative">
                    <pre className="text-sm text-gray-300">
{`# Eliminar rama local (solo si está fusionada)
git branch -d nombre-rama

# Forzar eliminación de rama local
git branch -D nombre-rama

# Eliminar rama remota
git push origin --delete nombre-rama`}
                    </pre>
                    <button
                      onClick={() => copyToClipboard('git branch -d nombre-rama', 'delete-branch')}
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
                🎓 Flujo para Estudiantes (¡El Más Importante!)
              </h2>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  🔥 Flujo Estudiante Solo (APRENDE ESTO PRIMERO)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Aunque trabajes completamente solo, SIEMPRE usa este flujo. Te preparará para equipos reales.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <h4 className="font-bold text-gray-900 dark:text-white">Configurar proyecto nuevo</h4>
                    </div>
                    <div className="bg-black rounded p-3 ml-11">
                      <pre className="text-sm text-gray-300">
{`git init mi-proyecto
cd mi-proyecto
git checkout -b develop  ← ¡CREA DEVELOP INMEDIATAMENTE!`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-11 mt-2">
                      🎯 <strong>¿Por qué?</strong> Te acostumbras al flujo profesional desde el inicio
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <h4 className="font-bold text-gray-900 dark:text-white">Desarrollar SOLO en develop</h4>
                    </div>
                    <div className="bg-black rounded p-3 ml-11">
                      <pre className="text-sm text-gray-300">
{`# Todo tu trabajo diario aquí
git add archivo.js
git commit -m "feat: agregar login"
git commit -m "fix: corregir bug en login"  
git commit -m "style: mejorar CSS"`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-11 mt-2">
                      🎯 <strong>Beneficio:</strong> Puedes experimentar sin miedo a romper nada
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <h4 className="font-bold text-gray-900 dark:text-white">Merge a main SOLO cuando funcione TODO</h4>
                    </div>
                    <div className="bg-black rounded p-3 ml-11">
                      <pre className="text-sm text-gray-300">
{`# ¿Todo probado y funciona? ¡Ahora sí!
git checkout main
git merge develop
git push origin main  ← Código de calidad a main`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 ml-11 mt-2">
                      🎯 <strong>Regla:</strong> Main siempre debe funcionar al 100%
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparación visual */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 dark:text-red-200 mb-3 flex items-center">
                    ❌ Estudiante Principiante (MAL)
                  </h4>
                  <div className="bg-black rounded p-3 mb-3">
                    <pre className="text-xs text-red-300">
{`git add .
git commit -m "no funciona pero subo"
git push origin main  ← ¡ERROR!`}
                    </pre>
                  </div>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• Desarrolla directo en main</li>
                    <li>• Sube código roto</li>
                    <li>• No puede experimentar seguro</li>
                    <li>• Mal hábito para el trabajo real</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 dark:text-green-200 mb-3 flex items-center">
                    ✅ Estudiante Inteligente (BIEN)
                  </h4>
                  <div className="bg-black rounded p-3 mb-3">
                    <pre className="text-xs text-green-300">
{`# En develop
git commit -m "experimento con CSS"
# ¡Probado y funciona!
git checkout main && git merge develop`}
                    </pre>
                  </div>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Usa develop para experimentar</li>
                    <li>• Main siempre funcional</li>
                    <li>• Hábito profesional desde inicio</li>
                    <li>• Listo para trabajar en equipo</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-1" />
                  <div>
                    <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                      💡 ¿Por qué es tan importante aunque trabajes solo?
                    </h4>
                    <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                      <li><strong>1. Hábito profesional:</strong> En empresas NUNCA desarrollas directo en main</li>
                      <li><strong>2. Seguridad:</strong> Si algo se rompe, main sigue funcionando</li>
                      <li><strong>3. Organización:</strong> Separas experimentos de código estable</li>
                      <li><strong>4. Portfolio:</strong> Los reclutadores ven que sabes trabajar correctamente</li>
                      <li><strong>5. Aprendizaje:</strong> Entiendes merges, conflictos y flujos reales</li>
                    </ul>
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
                Ejercicio Práctico: Feature Branch
              </h2>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Crear una rama para desarrollar una nueva funcionalidad de login.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 1: Crear rama de funcionalidad</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear y cambiar a nueva rama
git switch -c feature/login-system

# Verificar rama actual
git branch --show-current`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 2: Desarrollar la funcionalidad</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear archivos de login
echo "Login Component" > login.js
echo "Login Styles" > login.css

# Hacer commits regulares
git add .
git commit -m "feat: add login component structure"

# Continuar desarrollando...
echo "Authentication logic" >> login.js
git commit -am "feat: implement authentication logic"`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Paso 3: Integrar con main</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Cambiar a main y actualizar
git switch main
git pull origin main

# Fusionar feature branch
git merge feature/login-system

# Eliminar rama de funcionalidad
git branch -d feature/login-system`}
                    </pre>
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
          to="/commits" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Commits</span>
        </Link>
        
        <Link 
          to="/merging" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Fusiones y Conflictos</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default BranchingPage