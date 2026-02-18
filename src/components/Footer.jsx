import { Heart, Github, BookOpen, Mail } from 'lucide-react'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`border-t transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Información del proyecto */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Manual Interactivo de Git
            </h3>
            <p className={`mb-4 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Un proyecto educativo diseñado para enseñar Git de manera práctica, 
              narrativa e interactiva. Perfecto para desarrolladores que empiezan 
              desde cero.
            </p>
            <div className={`flex items-center space-x-1 text-sm ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`
            </div>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Enlaces Útiles
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://git-scm.com/doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 hover:text-orange-500 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Documentación Oficial de Git</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 hover:text-orange-500 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://learngitbranching.js.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 hover:text-orange-500 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Learn Git Branching</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contribuir
            </h3>
            <p className={`mb-4 text-sm leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Este es un proyecto open source. ¡Tu contribución es bienvenida!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:contribuir@git-manual.com"
                className={`flex items-center space-x-2 hover:text-orange-500 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Envía tus ideas</span>
              </a>
              <a
                href="https://github.com/tu-usuario/manual-git-interactivo"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-2 hover:text-orange-500 transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>Contribuir en GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className={`border-t pt-8 mt-8 text-center ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <p>
              © {currentYear} Manual Interactivo de Git. Proyecto educativo open source.
            </p>
            <p className="mt-2">
              Diseñado para hacer que aprender Git sea una experiencia increíble.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer