import { GraduationCap, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-t-4 border-green-600 dark:border-green-500 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center space-y-4">
          <GraduationCap className="w-6 h-6 text-green-600 dark:text-green-400 mx-auto" />
          {/* Docente info */}
          <div className="flex items-center justify-center space-x-3">
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                @InmaContreras
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Docente en Diseño Web y Programación. 
              </p>
            </div>
          </div>

          {/* Educational notice */}
          <div className="bg-white dark:bg-gray-800/50 rounded-lg p-6 border border-green-200 dark:border-green-700">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Heart className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Este curso es libre y se difunde para uso educativo.<br/>
              <strong className="text-green-700 dark:text-green-300">Prohibida su venta</strong> -  ✨
            </p>
          </div>

          
        </div>
      </div>
    </footer>
  )
}

export default Footer