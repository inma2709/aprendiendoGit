import { useState, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import { BookOpen, GitBranch, Users, Zap, CheckCircle2, ArrowRight, Play, Timer, Award } from 'lucide-react'

const NewHomePage = () => {
  const [totalLessons] = useState(14)
  const { completedLessons = [] } = useOutletContext()

  const completedCount = completedLessons.length
  const progressPercentage = Math.round((completedCount / totalLessons) * 100)

  const features = [
    {
      icon: BookOpen,
      title: 'Aprendizaje Progresivo',
      description: '13 lecciones estructuradas desde lo básico hasta lo avanzado, diseñadas para que nunca te pierdas.'
    },
    {
      icon: GitBranch,
      title: 'Ejemplos Interactivos',
      description: 'Cada concepto viene con ejemplos prácticos y simulaciones para que veas Git en acción.'
    },
    {
      icon: Users,
      title: 'Enfoque Colaborativo',
      description: 'Aprende cómo Git facilita el trabajo en equipo y la colaboración en proyectos reales.'
    },
    {
      icon: Zap,
      title: 'Aprende Haciendo',
      description: 'Ejercicios prácticos y simulador integrado para experimentar sin miedo a romper nada.'
    }
  ]

  const quickStart = [
    {
      title: '🚀 ¿Qué es Git?',
      description: 'Descubre por qué Git es esencial en el desarrollo',
      path: '/introduccion',
      time: '5 min',
      difficulty: 'Principiante'
    },
    {
      title: '⚡ Instalación',
      description: 'Configura Git en tu sistema paso a paso',
      path: '/instalacion',
      time: '10 min',
      difficulty: 'Principiante'
    },
    {
      title: '🎯 Tu Primer Commit',
      description: 'Crea tu primer repositorio y haz tu primer commit',
      path: '/commits',
      time: '15 min',
      difficulty: 'Principiante'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
            Manual Git Interactivo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Domina Git de manera práctica, visual e interactiva. Desde tu primer commit hasta técnicas avanzadas de colaboración.
          </p>
        </div>

        {/* Progress Overview */}
        {completedCount > 0 && (
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tu Progreso</h3>
                <Award className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {completedCount} de {totalLessons} lecciones completadas ({progressPercentage}%)
              </p>
            </div>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to={completedCount === 0 ? "/introduccion" : "/configuracion"}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Play className="mr-2 w-5 h-5" />
            {completedCount === 0 ? 'Comenzar Aprendizaje' : 'Continuar Donde Lo Dejé'}
          </Link>
          <Link 
            to="/simulador" 
            className="inline-flex items-center px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <GitBranch className="mr-2 w-5 h-5" />
            Simulador Git
          </Link>
        </div>
      </div>

      {/* Quick Start */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          🚀 Comienza Rápido
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quickStart.map((item, index) => (
            <Link 
              key={index}
              to={item.path}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 group"
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                  <span className="flex items-center text-gray-500 dark:text-gray-400">
                    <Timer className="w-4 h-4 mr-1" />
                    {item.time}
                  </span>
                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-xs">
                    {item.difficulty}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          ✨ Por Qué Este Manual es Diferente
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Learning Path Preview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          🎯 Tu Ruta de Aprendizaje
        </h2>
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Fundamentos */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Fundamentos</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• ¿Qué es Git?</li>
                <li>• Instalación y configuración</li>
                <li>• Tu primer repositorio</li>
                <li>• Commits básicos</li>
              </ul>
            </div>

            {/* Intermedio */}
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Colaboración</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Branches y merging</li>
                <li>• Repositorios remotos</li>
                <li>• Clonado y sincronización</li>
                <li>• Resolución de conflictos</li>
              </ul>
            </div>

            {/* Avanzado */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Experto</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Revert y reset avanzado</li>
                <li>• Técnicas profesionales</li>
                <li>• Flujos de trabajo</li>
                <li>• Best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
          📊 Aprende Con Confianza
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
            <div className="text-gray-600 dark:text-gray-300">Lecciones Estructuradas</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Ejemplos Prácticos</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Gratuito y Open Source</div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default NewHomePage