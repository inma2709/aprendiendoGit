import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, GitBranch, Users, Shield, Zap, Clock, BookOpen } from 'lucide-react'

const IntroduccionPage = () => {
  const { markLessonCompleted } = useOutletContext()
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    setIsCompleted(completed.includes('/introduccion'))
  }, [])

  const handleComplete = () => {
    markLessonCompleted('/introduccion')
    setIsCompleted(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <BookOpen className="w-4 h-4" />
          <span>Fundamentos</span>
          <ArrowRight className="w-4 h-4" />
          <span>Lección 1</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          🚀 ¿Qué es Git?
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 minutos
          </span>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded">
            Principiante
          </span>
          {isCompleted && (
            <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
              <CheckCircle2 className="w-4 h-4" />
              Completado
            </span>
          )}
        </div>
      </div>

      {/* Hero Visual */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🌟</div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Git: Tu Superpoder de Desarrollo
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Imagínate poder viajar en el tiempo con tu código, colaborar sin conflictos y nunca perder tu trabajo. Eso es Git.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        
        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            🤔 ¿Qué es Git exactamente?
          </h2>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
            <p className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">
              📖 Definición Simple
            </p>
            <p className="text-blue-700 dark:text-blue-200">
              Git es un sistema de control de versiones distribuido que te permite rastrear cambios en archivos y coordinar trabajo en esos archivos entre múltiples personas.
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Piensa en Git como un sistema de "guardado inteligente" para tu código. Cada vez que guardas un cambio importante, Git toma una "foto" de todos tus archivos en ese momento. Puedes volver a cualquier "foto" anterior cuando quieras.
          </p>

          <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-6 cursor-pointer hover:shadow-md transition-shadow">
            <summary className="font-semibold text-gray-800 dark:text-gray-200 text-lg">
              🎯 ¿Por qué "distribuido"? (Click para expandir)
            </summary>
            <div className="mt-4 text-gray-600 dark:text-gray-300">
              <p className="mb-4">
                A diferencia de sistemas centralizados como SVN, en Git cada desarrollador tiene una copia completa del historial del proyecto. Esto significa:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Puedes trabajar sin conexión a internet</li>
                <li>No hay un único punto de falla</li>
                <li>Cada copia es un respaldo completo</li>
                <li>Las operaciones son súper rápidas</li>
              </ul>
              <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded text-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">💡 Espacio reservado para diagrama: Git Distribuido vs Centralizado</span>
              </div>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            💪 ¿Por qué Git es tan importante?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: GitBranch,
                title: "Historial Completo",
                description: "Ve exactamente qué cambió, cuándo y quién lo hizo. Nunca más te preguntarás 'qué pasó con mi código'."
              },
              {
                icon: Users,
                title: "Colaboración Perfecta",
                description: "Múltiples personas pueden trabajar en el mismo proyecto sin pisarse los pies. Git maneja todo automáticamente."
              },
              {
                icon: Shield,
                title: "Seguridad Total",
                description: "Tu código está protegido. Puedes experimentar libremente sabiendo que siempre puedes volver atrás."
              },
              {
                icon: Zap,
                title: "Súper Rápido",
                description: "Operaciones instantáneas. Git fue diseñado por Linus Torvalds para ser ultra eficiente."
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            🌍 Git en el Mundo Real
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              
              <div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100M+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Repositorios en GitHub</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">90%</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Desarrolladores usan Git</div>
              </div>
              
              <div>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Años siendo estándar</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700 dark:text-gray-300">
                Desde startups hasta gigantes tech como Google, Microsoft y Netflix - todos confían en Git.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            🎭 Un ejemplo que lo explica todo
          </h2>
          
          <details className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <summary className="font-semibold text-yellow-800 dark:text-yellow-300 text-lg cursor-pointer">
              📚 La Analogía del Libro (Click para leer)
            </summary>
            <div className="mt-4 text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Imagina que estás escribiendo un libro con varios amigos:
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded p-4 border-l-4 border-yellow-500">
                <p className="font-semibold text-yellow-700 dark:text-yellow-400 mb-2">📝 Sin Git:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Envías el archivo por email: "Libro_Final.docx"</li>
                  <li>Tu amigo hace cambios: "Libro_Final_Revisado.docx"</li>
                  <li>Otro amigo: "Libro_Final_Revisado_v2.docx"</li>
                  <li>Tú: "Libro_Final_Revisado_v2_FINAL_AHORA_SI.docx"</li>
                  <li>¡Caos total! 😵‍💫</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded p-4 border-l-4 border-green-500">
                <p className="font-semibold text-green-700 dark:text-green-400 mb-2">✨ Con Git:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cada cambio se guarda con un mensaje descriptivo</li>
                  <li>Sabes exactamente qué cambió y quién lo cambió</li>
                  <li>Puedes trabajar en paralelo sin conflictos</li>
                  <li>Si algo sale mal, vuelves a una versión anterior</li>
                  <li>¡Orden perfecto! 🎯</li>
                </ul>
              </div>

              <div className="text-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">
                  🎨 Espacio reservado para infografía: Caos vs Orden
                </span>
              </div>
            </div>
          </details>
        </section>

        <section className="mb-12">
          <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            🎯 ¿Qué aprenderás en este manual?
          </h2>
          
          <div className="grid gap-4">
            {[
              "🔧 Instalar y configurar Git desde cero",
              "📁 Crear y gestionar repositorios",
              "💾 Hacer commits efectivos y leer el historial",
              "🌿 Trabajar con branches (ramas) para organizar tu trabajo",
              "🤝 Colaborar con otros desarrolladores",
              "🔄 Manejar repositorios remotos (GitHub, GitLab, etc.)",
              "⚡ Resolver conflictos como un pro",
              "🚀 Técnicas avanzadas para workflows profesionales"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 ¡Listo para comenzar!</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ya sabes qué es Git y por qué es increíble. El siguiente paso es instalarlo y configurarlo en tu sistema. ¡Vamos a hacerlo!
            </p>
            
            {!isCompleted && (
              <button
                onClick={handleComplete}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors mb-4"
              >
                <CheckCircle2 className="w-5 h-5" />
                Marcar como Completado
              </button>
            )}
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>
        
        <Link 
          to="/instalacion"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Siguiente: Instalación
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export default IntroduccionPage