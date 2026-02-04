import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  Users, 
  Target, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star,
  GitBranch,
  Code,
  Globe
} from 'lucide-react'
import { chaptersData } from '../data/chapters'
import { useProgress } from '../components/ProgressProvider'

const HomePage = () => {
  const { getProgressPercentage, totalPoints, completedChapters } = useProgress()
  const progressPercent = getProgressPercentage(chaptersData.length)

  const features = [
    {
      icon: BookOpen,
      title: "Lecciones Narrativas",
      description: "Explicaciones detalladas que te guían paso a paso desde los conceptos más básicos hasta las técnicas avanzadas"
    },
    {
      icon: Target,
      title: "Actividades Prácticas", 
      description: "Ejercicios hands-on para aplicar inmediatamente lo que aprendes y consolidar tu conocimiento"
    },
    {
      icon: Code,
      title: "Ejemplos Reales",
      description: "Casos de uso del mundo real con explicaciones contextuales que conectan la teoría con la práctica"
    },
    {
      icon: Users,
      title: "Enfoque Colaborativo",
      description: "Aprende cómo Git facilita el trabajo en equipo y la colaboración en proyectos de desarrollo"
    }
  ]

  const stats = [
    { label: "Capítulos", value: chaptersData.length, icon: BookOpen },
    { label: "Completados", value: completedChapters.length, icon: CheckCircle },
    { label: "Puntos Ganados", value: totalPoints, icon: Star },
    { label: "Progreso", value: `${progressPercent}%`, icon: Target }
  ]

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
        
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <GitBranch className="w-20 h-20 text-orange-500 animate-bounce-soft" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Globe className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Manual Interactivo de
            <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Git
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Domina el control de versiones más importante del mundo del desarrollo. 
            Desde conceptos fundamentales hasta técnicas avanzadas, aprende Git de manera 
            práctica, narrativa y completamente interactiva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/capitulo/1"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-5 h-5" />
              <span>Comenzar Lecciones</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <Link
              to="/simulador"
              className="border-2 border-orange-500 text-orange-500 dark:text-orange-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Explorar Simulador</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {(completedChapters.length > 0 || totalPoints > 0) && (
        <section className="py-12 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Tu Progreso de Aprendizaje
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center shadow-lg">
                    <IconComponent className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Progress Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Progreso General
                </span>
                <span className="text-sm font-medium text-orange-500">
                  {progressPercent}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full progress-bar transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué este manual es diferente?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              No solo aprenderás comandos de memoria. Entenderás la filosofía detrás de Git 
              y desarrollarás una mentalidad de control de versiones profesional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 interactive-element">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Chapters Preview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comienza tu Viaje de Aprendizaje
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Cada capítulo está diseñado para construir sobre el anterior, creando una experiencia de aprendizaje fluida y progresiva.
            </p>
          </div>

          <div className="space-y-6">
            {chaptersData.slice(0, 3).map((chapter, index) => {
              const isCompleted = completedChapters.includes(chapter.id)
              
              return (
                <Link
                  key={chapter.id}
                  to={`/capitulo/${chapter.id}`}
                  className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 interactive-element"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${chapter.color} text-white font-bold text-lg`}>
                        {chapter.id}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {chapter.title}
                          </h3>
                          {isCompleted && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {chapter.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Target className="w-4 h-4" />
                            <span>{chapter.difficulty}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{chapter.duration}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/capitulo/1"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <BookOpen className="w-5 h-5" />
              <span>Ver Todos los Capítulos</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage