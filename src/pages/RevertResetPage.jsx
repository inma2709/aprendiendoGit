import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, Undo2, RotateCcw, AlertTriangle, BookOpen, Copy, Clock, AlertCircle, CheckSquare, Trash2, RefreshCw, History } from 'lucide-react'

const RevertResetPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)
  const [activeTab, setActiveTab] = useState('concept')
  const [copiedCode, setCopiedCode] = useState('')

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/revert-reset'))
  }, [])

  const handleComplete = () => {
    if (!isCompleted) {
      markLessonCompleted('/revert-reset')
      setIsCompleted(true)
    }
  }

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const tabs = [
    { id: 'concept', name: '¿Cuándo Usar?', icon: AlertTriangle },
    { id: 'simple', name: 'Soluciones Fáciles', icon: Undo2 },
    { id: 'emergency', name: 'Emergencias', icon: AlertCircle },
    { id: 'practice', name: 'Ejemplos', icon: CheckSquare }
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
            <Undo2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              ¿Cómo Deshacer Errores?
            </h1>
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>15 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <BookOpen className="w-4 h-4" />
                <span>Intermedio</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          ¡Todos nos equivocamos! Aprende las formas MÁS SIMPLES de arreglar errores en Git sin romper nada.
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
                    ? 'border-red-500 text-red-600 dark:text-red-400'
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
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🤔 ¿Cuándo Necesito Deshacer Algo?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Tranquilo, a todos nos pasa. Estos son los errores más comunes y sus soluciones SIMPLES:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Errores Comunes
                </h3>
                <ul className="space-y-3 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>😱 "¡Hice commit de algo mal!"</li>
                  <li>🤦‍♂️ "Agregué archivo que no debía"</li>
                  <li>😅 "Mi mensaje de commit está mal"</li>
                  <li>🙈 "Rompí algo y no sé cómo"</li>
                  <li>😰 "Quiero volver atrás completamente"</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Tenemos Solución
                </h3>
                <ul className="space-y-3 text-sm text-green-700 dark:text-green-300">
                  <li>✅ Podemos arreglarlo fácil</li>
                  <li>✅ Sin romper nada</li>
                  <li>✅ Sin perder trabajo</li>
                  <li>✅ Comandos simples</li>
                  <li>✅ Tu proyecto estará bien</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                💡 Regla de Oro: SIEMPRE hay solución
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">SEGURO</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Git nunca borra tu trabajo sin avisar</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">PRECISO</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Puedes deshacer solo lo que quieras</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">RÁPIDO</h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200">Una línea de código y listo</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'simple' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🛠️ Soluciones Súper Fáciles
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Para el 90% de tus problemas, estos 3 comandos son SUFICIENTES:
              </p>
            </div>

            <div className="space-y-6">
              {/* Problema 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    "¡Cambié un archivo pero no quiero guardarlo!"
                  </h3>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Situación:</strong> Modificaste un archivo pero quieres volver a como estaba antes.
                  </p>
                  
                  <div className="bg-black rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">Solución:</span>
                      <button
                        onClick={() => copyToClipboard('git checkout -- archivo.txt', 'checkout-file')}
                        className="p-2 text-gray-400 hover:text-gray-200"
                        title="Copiar comando"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-green-400 text-sm">
git checkout -- archivo.txt
                    </pre>
                  </div>
                  
                  <div className="mt-3 text-sm text-green-700 dark:text-green-300">
                    ✅ <strong>¡Listo!</strong> El archivo vuelve a como estaba en el último commit.
                  </div>
                </div>
              </div>

              {/* Problema 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    "Hice git add de algo que no quería"
                  </h3>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Situación:</strong> Agregaste archivos al staging area por error.
                  </p>
                  
                  <div className="bg-black rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">Solución:</span>
                      <button
                        onClick={() => copyToClipboard('git reset HEAD archivo.txt', 'reset-head')}
                        className="p-2 text-gray-400 hover:text-gray-200"
                        title="Copiar comando"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-green-400 text-sm">
git reset HEAD archivo.txt
                    </pre>
                  </div>
                  
                  <div className="mt-3 text-sm text-green-700 dark:text-green-300">
                    ✅ <strong>¡Listo!</strong> El archivo sale del staging area pero tus cambios se mantienen.
                  </div>
                </div>
              </div>

              {/* Problema 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    "Mi último commit está mal, quiero arreglarlo"
                  </h3>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Situación:</strong> El mensaje del commit está mal o falta un archivo.
                  </p>
                  
                  <div className="bg-black rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-300">Solución:</span>
                      <button
                        onClick={() => copyToClipboard('git commit --amend', 'amend')}
                        className="p-2 text-gray-400 hover:text-gray-200"
                        title="Copiar comando"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-green-400 text-sm">
# Agregar más archivos si quieres
git add archivo-olvidado.txt

# Corregir el commit
git commit --amend
                    </pre>
                  </div>
                  
                  <div className="mt-3 text-sm text-green-700 dark:text-green-300">
                    ✅ <strong>¡Listo!</strong> Se abre el editor para cambiar el mensaje y agregar archivos.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                💡 Consejo Pro
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Estos 3 comandos solucionan el <strong>90% de errores comunes</strong>. 
                Memorízalos y serás un ninja de Git. Para casos más complicados, 
                ve a la pestaña "Emergencias" ➡️
              </p>
            </div>
          </div>
        )}

        {activeTab === 'emergency' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🚨 Situaciones de Emergencia
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Cuando las cosas se pusieron MUY feas y necesitas soluciones más drásticas:
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="font-semibold text-red-800 dark:text-red-200">
                  ⚠️ ADVERTENCIA: Comandos Potentes
                </h3>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">
                Estos comandos pueden <strong>borrar tu trabajo</strong>. Úsalos solo si estás seguro 
                y <strong>NUNCA</strong> si ya hiciste <code>git push</code>.
              </p>
            </div>

            <div className="space-y-6">
              {/* Emergencia 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-red-200 dark:border-red-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold mr-4">🔥</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    "¡Todo está roto! Quiero volver al último commit"
                  </h3>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Situación:</strong> Cambiaste muchos archivos y todo está mal. Quieres empezar de nuevo.
                  </p>
                  
                  <div className="bg-black rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-red-300">⚠️ DESTRUYE TODOS TUS CAMBIOS:</span>
                      <button
                        onClick={() => copyToClipboard('git reset --hard HEAD', 'reset-hard')}
                        className="p-2 text-gray-400 hover:text-gray-200"
                        title="Copiar comando"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-red-400 text-sm">
git reset --hard HEAD
                    </pre>
                  </div>
                  
                  <div className="mt-3 text-sm text-red-700 dark:text-red-300">
                    💀 <strong>¡CUIDADO!</strong> Borra TODOS los cambios y vuelve al último commit.
                  </div>
                </div>
              </div>

              {/* Emergencia 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-orange-200 dark:border-orange-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">⏰</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    "Quiero borrar mis últimos commits"
                  </h3>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Situación:</strong> Los últimos commits están mal y los quieres eliminar completamente.
                  </p>
                  
                  <div className="bg-black rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-orange-300">Borrar último commit:</span>
                      <button
                        onClick={() => copyToClipboard('git reset --hard HEAD~1', 'reset-back')}
                        className="p-2 text-gray-400 hover:text-gray-200"
                        title="Copiar comando"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-orange-400 text-sm">
# Borrar 1 commit
git reset --hard HEAD~1

# Borrar 2 commits  
git reset --hard HEAD~2

# Borrar 3 commits
git reset --hard HEAD~3
                    </pre>
                  </div>
                  
                  <div className="mt-3 text-sm text-orange-700 dark:text-orange-300">
                    ⚠️ <strong>Solo úsalo ANTES de hacer push!</strong> Después es muy complicado.
                  </div>
                </div>
              </div>

              {/* Emergencia 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-700">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">🎯</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    "Necesito deshacer algo que ya subí a GitHub"
                  </h3>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Situación:</strong> Ya hiciste push pero un commit está mal y lo quieres deshacer.
                  </p>
                  
                  <div className="bg-black rounded-lg p-4 relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-green-300">✅ Solución SEGURA:</span>
                      <button
                        onClick={() => copyToClipboard('git revert HEAD\ngit push origin main', 'revert-push')}
                        className="p-2 text-gray-400 hover:text-gray-200"
                        title="Copiar comando"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <pre className="text-green-400 text-sm">
# Deshacer el último commit
git revert HEAD

# Subir el "deshecho"
git push origin main
                    </pre>
                  </div>
                  
                  <div className="mt-3 text-sm text-green-700 dark:text-green-300">
                    ✅ <strong>Esta es la forma segura</strong> cuando ya hiciste push. Crea un commit que deshace el anterior.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-6">
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-4">
                💡 Reglas de Oro para Emergencias
              </h3>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
                <li>🚨 <strong>Antes de push:</strong> Puedes usar reset sin problemas</li>
                <li>🌐 <strong>Después de push:</strong> SIEMPRE usa revert (es más seguro)</li>
                <li>👥 <strong>Proyecto en equipo:</strong> Nunca uses reset en branches compartidas</li>
                <li>💾 <strong>Haz backup:</strong> Copia tu proyecto antes de comandos destructivos</li>
                <li>🤝 <strong>En duda:</strong> Pregunta a tu equipo antes de hacer algo drástico</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'practice' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ejercicio: Práctica de Deshecho
              </h2>
              
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mb-6">
                <h3 className="font-medium text-red-900 dark:text-red-100 mb-2">
                  🎯 Objetivo
                </h3>
                <p className="text-red-800 dark:text-red-200">
                  Practicar diferentes técnicas para deshacer cambios según el contexto.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 1: Deshacer cambios locales</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Crear algunos archivos y commits de prueba
echo "contenido original" > archivo.txt
git add archivo.txt
git commit -m "commit original"

echo "cambio no deseado" >> archivo.txt
git add archivo.txt
git commit -m "commit problemático"

# Usar reset para volver atrás (solo local)
git reset --hard HEAD~1
cat archivo.txt  # Debería mostrar solo "contenido original"`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 2: Deshacer en repositorio público</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Simular que ya hiciste push del commit problemático
# (en repositorio real ya estaría en remoto)

# Usar revert para crear commit "opuesto"
git revert HEAD
# Se abre editor para mensaje de commit

# Ver que el historial mantiene ambos commits
git log --oneline -3`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 3: Modificar último commit</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Hacer commit con mensaje incorrecto
echo "nueva función" > feature.txt
git add feature.txt
git commit -m "commit con error tipografico"

# Corregir usando --amend
git commit --amend -m "feat: add new feature"

# O corregir usando reset --soft
git reset --soft HEAD~1
git commit -m "feat: add new feature correctly"`}
                    </pre>
                  </div>
                </div>

                <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 pl-4 py-3">
                  <h4 className="font-medium text-gray-900 dark:text-white">Escenario 4: Deshacer staging</h4>
                  <div className="mt-2 bg-black rounded p-3">
                    <pre className="text-xs text-gray-300">
{`# Agregar archivos al staging por error
echo "secreto" > config.secret
echo "público" > readme.txt
git add .

# Quitar archivo específico del staging
git reset HEAD config.secret

# Verificar estado
git status

# Solo commit el archivo correcto
git commit -m "docs: update readme"`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mt-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                      📋 Guía de Decisión Rápida
                    </h3>
                    <div className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <strong>Usar REVERT cuando:</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Commit ya fue pushed</li>
                            <li>Trabajo colaborativo</li>
                            <li>Quieres preservar historial</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Usar RESET cuando:</strong>
                          <ul className="list-disc list-inside mt-1 space-y-1">
                            <li>Trabajo solo local</li>
                            <li>Commits no pusheados</li>
                            <li>Quieres reescribir historial</li>
                          </ul>
                        </div>
                      </div>
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
              : 'bg-red-600 text-white hover:bg-red-700'
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
          <span>Push, Pull & Fetch</span>
        </Link>
        
        <Link 
          to="/conflictos" 
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <span>Resolución de Conflictos</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default RevertResetPage