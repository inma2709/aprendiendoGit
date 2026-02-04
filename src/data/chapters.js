export const chaptersData = [
  {
    id: 1,
    title: "¿Qué es Git y por qué necesitas aprenderlo?",
    subtitle: "Fundamentos esenciales del control de versiones",
    description: "Descubre por qué Git se ha convertido en la herramienta más importante para cualquier desarrollador moderno",
    icon: "BookOpen",
    difficulty: "Principiante",
    duration: "15 min",
    color: "from-blue-500 to-blue-600",
    content: {
      introduction: `
        ## 🚀 Bienvenido al mundo de Git
        
        > **Pregunta clave:** ¿Alguna vez has perdido trabajo importante en tu computadora o deseaste poder "deshacer" cambios que hiciste hace días?
        
        ### 💡 Una analogía simple
        
        <details>
        <summary><strong>🎭 La historia del novelista (clic para expandir)</strong></summary>
        
        Imagínate escribiendo una novela en tu computadora. Has avanzado varios capítulos y quieres cambiar completamente la personalidad de tu protagonista. 
        
        **🤔 El dilema:** Este cambio afectará toda la historia anterior.
        
        **❓ La pregunta:** ¿Te atreverías a hacer estos cambios sin respaldo?
        
        **💾 La solución:** Querrías guardar diferentes versiones:
        - ✅ Versión original
        - ✅ Versión con primeros cambios 
        - ✅ Versión experimental
        
        </details>
        
        ### 🎯 ¿Qué es Git?
        
        **Git es exactamente eso, pero para código:** Una máquina del tiempo que guarda "fotografías" de tu proyecto y te permite viajar entre ellas.
        
        ---
        
        **🖼️ [ESPACIO PARA IMAGEN: Diagrama simple mostrando Git como una línea de tiempo con fotografías del código]**
        
        ---
      `,
      sections: [
        {
          title: "📚 La historia detrás de Git",
          content: `
            ### 🕰️ Viajemos al año 2005
            
            <details>
            <summary><strong>🧔 El problema de Linus Torvalds</strong></summary>
            
            **El protagonista:** Linus Torvalds (creador de Linux)
            
            **El desafío:** El kernel de Linux tenía:
            - 🌍 Miles de programadores mundial
            - 🔄 Cambios simultáneos constantes
            - 😰 Coordinación = pesadilla logística
            
            **Los sistemas existentes eran:**
            - 🐌 Lentos
            - 🏢 Centralizados 
            - 💥 Incapaces de manejar la complejidad
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Timeline mostrando 2005 y el contexto del desarrollo de Linux]**
            
            ---
            
            ### 💡 La solución revolucionaria
            
            <details>
            <summary><strong>🚀 El nacimiento de Git</strong></summary>
            
            **Lo que Torvalds necesitaba:**
            - ⚡ Rapidez
            - 🛡️ Confiabilidad 
            - 🌐 Trabajo distribuido
            
            **El resultado:**
            - ⏱️ **Tiempo de desarrollo:** Unas pocas semanas
            - 🎯 **Resultado:** La herramienta #1 del mundo para control de versiones
            - 🧠 **Bonus:** Una filosofía completa de colaboración
            
            </details>
            
            > 💬 **Dato curioso:** Git no es solo una herramienta técnica, es una filosofía sobre cómo debe funcionar la colaboración en software.
          `
        },
        {
          title: "🔄 ¿Por qué Git cambió todo?",
          content: `
            ### ⚖️ Antes vs Después de Git
            
            <details>
            <summary><strong>🏢 El mundo ANTES de Git (Sistemas Centralizados)</strong></summary>
            
            **Cómo funcionaba:**
            - 🖥️ Un servidor central con toda la historia
            - 🔗 Desarrolladores conectados obligatoriamente al servidor
            - 🚫 Sin conexión = sin trabajo con versiones
            
            **Problemas:**
            - 📡 Dependencia de conexión
            - 🐌 Operaciones lentas
            - 👥 Conflictos entre desarrolladores
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Comparación visual - Sistema centralizado vs Git distribuido]**
            
            ---
            
            <details>
            <summary><strong>🌐 La REVOLUCIÓN de Git (Sistema Distribuido)</strong></summary>
            
            **El concepto revolucionario:** Cada desarrollador = copia completa
            
            **Ventajas increíbles:**
            - 🔌 Trabajo sin conexión a internet
            - 🧪 Ramas experimentales sin afectar otros
            - 💾 Respaldo completo en tu máquina
            - 🚀 Operaciones súper rápidas
            
            </details>
            
            ### 🎭 Realidades paralelas
            
            > 💡 **Metáfora clave:** Git permite que cientos de desarrolladores trabajen en su propia "realidad paralela" hasta decidir compartir cambios.
            
            <details>
            <summary><strong>🤝 Cómo cambió la colaboración</strong></summary>
            
            **Antes:** 👥➡️💥 (Desarrolladores pisándose los pies)
            
            **Ahora:** 👤🔬 + 👤🔬 + 👤🔬 ➡️ 🤝 (Cada uno experimenta, luego colabora)
            
            **Resultado:** 
            - ✅ Menos conflictos
            - ✅ Más experimentación
            - ✅ Mejor calidad final
            
            </details>
          `
        },
        {
          title: "🌍 Git en el mundo real",
          content: `
            ### 📈 De estudiantes a gigantes tecnológicos
            
            <details>
            <summary><strong>🎯 ¿Quién usa Git hoy?</strong></summary>
            
            **Desde lo más pequeño:**
            - 🎓 Estudiantes aprendiendo a programar
            - 👤 Desarrolladores individuales
            - 👥 Equipos pequeños
            
            **Hasta lo más grande:**
            - 🏭 Google, Microsoft, Facebook
            - 🌐 Proyectos open source masivos
            - 🏢 Empresas Fortune 500
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Logos de empresas famosas que usan Git + estadísticas de uso]**
            
            ---
            
            ### 🎆 El ecosistema social de Git
            
            <details>
            <summary><strong>🎮 Plataformas que cambiaron el juego</strong></summary>
            
            **GitHub, GitLab, Bitbucket han creado:**
            - 🔍 **Descubrimiento:** Encuentra proyectos interesantes
            - 🤝 **Colaboración:** Trabaja con desarrolladores mundiales
            - 💼 **Portafolio:** Demuestra tu evolución como programador
            - 🏆 **Reputación:** Construye tu marca personal
            
            </details>
            
            ### 🎨 Más allá del código
            
            > 🤯 **¿Sabías que...?** Git no es solo para programadores
            
            <details>
            <summary><strong>🌍 Usos creativos de Git</strong></summary>
            
            **Escritores:**
            - 📚 Versionado de libros
            - 📝 Control de cambios en manuscritos
            - 🔄 Colaboración en obras colectivas
            
            **Diseñadores:**
            - 🎨 Tracking de cambios creativos
            - 🖼️ Versiones de proyectos visuales
            - 🔄 Iteraciones de diseño
            
            **Científicos:**
            - 🔬 Historial de investigaciones
            - 📊 Versionado de datos
            - 📄 Colaboración en papers
            
            </details>
            
            ### 🔑 La clave del éxito
            
            > 💡 **Insight clave:** La flexibilidad de Git lo convierte en una herramienta universal para cualquier trabajo que requiera historial detallado.
          `
        }
      ],
      activities: [
        {
          title: "🧐 Reflexión Personal",
          description: `
          **🎯 Tu misión:** Conecta Git con tu experiencia personal
          
          <details>
          <summary><strong>Preguntas para reflexionar</strong></summary>
          
          1. 😱 **¿Alguna vez perdiste trabajo importante?** 
             - ¿Qué paso? ¿Cómo te sentiste?
             
          2. ⏪ **¿Has deseado un "deshacer" mágico?**
             - ¿En qué situaciones?
             
          3. 📝 **¿Cómo organizas tus archivos actualmente?**
             - ¿Usas copias tipo "archivo_final_v2_definitivo"?
             
          </details>
          
          **🖼️ [ESPACIO PARA IMAGEN: Meme de archivos con nombres como 'final_definitivo_v3_REAL.docx']**
          `,
          type: "reflection",
          points: 10
        },
        {
          title: "🔍 Investigación Guiada",
          description: `
          **🎯 Tu misión:** Explora un proyecto real en GitHub
          
          <details>
          <summary><strong>Pasos a seguir</strong></summary>
          
          1. 🔍 **Busca un proyecto que te interese:**
             - Ve a GitHub.com
             - Busca por tecnología que uses (React, Python, etc.)
             
          2. 🕰️ **Explora su historia:**
             - Clic en "commits" o "insights"
             - Mira cómo evolucionó en el tiempo
             
          3. 📈 **Analiza patrones:**
             - ¿Cuántos commits por día?
             - ¿Qué tipo de cambios hacen?
             - ¿Cómo escriben los mensajes?
          
          </details>
          
          **📝 Comparte:** Cual proyecto exploraste y qué te llamó la atención
          `,
          type: "research",
          points: 20
        },
        {
          title: "💡 Conexión Personal",
          description: `
          **🎯 Tu misión:** Identifica dónde usarías Git en TU vida
          
          <details>
          <summary><strong>Brainstorming guiado</strong></summary>
          
          **Piensa en proyectos donde Git te ayudaría:**
          - 💻 ¿Qué proyectos de código tienes o planeas?
          - 📄 ¿Escribes documentos largos? (tesis, informes)
          - 🎨 ¿Tienes proyectos creativos que cambian?
          - 👥 ¿Trabajan en equipo en algo?
          
          </details>
          
          **🎨 Bonus:** Crea una lista de 3 proyectos donde usarías Git
          `,
          type: "exploration", 
          points: 15
        }
      ],
      keyTakeaways: [
        "Git es un sistema de control de versiones distribuido que revolucionó la colaboración en desarrollo",
        "Cada desarrollador tiene una copia completa de la historia del proyecto",
        "Git permite trabajar sin conexión y experimentar sin riesgos",
        "Es utilizado mundialmente por empresas, estudiantes y profesionales",
        "Va más allá del código: es útil para cualquier proyecto que cambie con el tiempo"
      ]
    }
  },
  {
    id: 2,
    title: "Instalación y configuración inicial",
    subtitle: "Preparando tu entorno de trabajo",
    description: "Configura Git correctamente en tu sistema y prepara tu identidad de desarrollador",
    icon: "Settings",
    difficulty: "Principiante",
    duration: "20 min",
    color: "from-green-500 to-green-600",
    content: {
      introduction: `
        ## 🔧 Preparando tu estación de trabajo
        
        > **Analogía clave:** Configurar Git es como preparar tu mesa de trabajo antes de un proyecto artesanal.
        
        ### 🏁 Objetivos de este capítulo
        
        <details>
        <summary><strong>🎯 Lo que lograrás (clic para ver)</strong></summary>
        
        Al terminar tendrás:
        - ✅ Git instalado en tu sistema
        - ✅ Tu identidad de desarrollador configurada
        - ✅ Configuraciones esenciales optimizadas
        - ✅ Un entorno listo para trabajar profesionalmente
        
        </details>
        
        ---
        
        **🖼️ [ESPACIO PARA IMAGEN: Comparación antes/después - escritorio desordenado vs estación de trabajo organizada]**
        
        ---
        
        ### 💡 ¿Por qué esto es crucial?
        
        > Una configuración correcta desde el inicio te ahorrará dolores de cabeza más adelante y establecerá las bases para un flujo de trabajo fluido y profesional.
      `,
      sections: [
        {
          title: "💻 Instalación según tu sistema operativo",
          content: `
            ### 🌍 Git funciona en todas partes
            
            > 💪 **La belleza de Git:** Funciona en Windows, macOS y Linux sin problemas.
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Íconos de Windows, macOS y Linux con Git en el centro]**
            
            ---
            
            <details>
            <summary><strong>📟 Windows: Tu guía paso a paso</strong></summary>
            
            **📥 Opción recomendada: Git for Windows**
            
            1. 🔗 Ve a **git-scm.com**
            2. 📋 Descarga Git for Windows
            3. 📆 Ejecuta el instalador
            
            **🎁 Bonus - Lo que incluye:**
            - ✅ **Git:** El sistema de control de versiones
            - ✅ **Git Bash:** Terminal Unix para Windows
            - ✅ **Git GUI:** Interfaz gráfica opcional
            
            **🖼️ [ESPACIO PARA IMAGEN: Screenshots del proceso de instalación en Windows]**
            
            </details>
            
            <details>
            <summary><strong>🍎 macOS: Varias opciones disponibles</strong></summary>
            
            **🔍 Verificación rápida:**
            \`\`\`bash
            git --version
            \`\`\`
            
            **Si no está instalado:**
            
            **Opción 1 - Homebrew (recomendada):**
            \`\`\`bash
            brew install git
            \`\`\`
            
            **Opción 2 - Descarga directa:**
            - Ve a git-scm.com
            - Descarga para macOS
            
            **🖼️ [ESPACIO PARA IMAGEN: Terminal de macOS mostrando la instalación]**
            
            </details>
            
            <details>
            <summary><strong>🐧 Linux: Por distribución</strong></summary>
            
            **Debian/Ubuntu:**
            \`\`\`bash
            sudo apt-get install git
            \`\`\`
            
            **Red Hat/CentOS/Fedora:**
            \`\`\`bash
            # CentOS/RHEL 7 y anteriores
            sudo yum install git
            
            # Fedora/CentOS 8+
            sudo dnf install git
            \`\`\`
            
            **💬 Nota:** La mayoría de distribuciones modernas incluyen Git en repositorios oficiales.
            
            </details>
            
            ### ✅ Verificación de instalación
            
            \`\`\`bash
            git --version
            \`\`\`
            
            > 🎉 **Deberías ver algo como:** git version 2.40.1
          `
        },
        {
          title: "🎩 Tu identidad digital como desarrollador",
          content: `
            ### 🔑 El paso más crucial
            
            > ⚠️ **Importante:** Esta configuración aparece en CADA commit que hagas. ¡Es tu firma digital!
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Ejemplo de commit mostrando nombre y email del autor]**
            
            ---
            
            ### 📝 ¿Qué información necesita Git?
            
            <details>
            <summary><strong>💼 Tu nombre completo</strong></summary>
            
            **✅ Recomendaciones:**
            - Usa tu **nombre real** (no un nickname)
            - Piensa en contexto profesional
            - Será visible en GitHub, GitLab, etc.
            
            **🖼️ Ejemplo:**
            \`\`\`bash
            git config --global user.name "María García López"
            \`\`\`
            
            </details>
            
            <details>
            <summary><strong>📧 Tu email profesional</strong></summary>
            
            **✅ Mejores prácticas:**
            - Email que vayas a **mantener largo plazo**
            - Preferiblemente el mismo de GitHub/GitLab
            - Evita emails temporales
            
            **🖼️ Ejemplo:**
            \`\`\`bash
            git config --global user.email "maria.garcia@email.com"
            \`\`\`
            
            </details>
            
            ### 🌍 Impacto en tu carrera
            
            <details>
            <summary><strong>📈 Por qué esto es marketing personal</strong></summary>
            
            **Tu identidad Git aparece en:**
            - 👀 Historial de proyectos
            - 🤝 Colaboraciones con equipos
            - 🌟 Contribuciones open source
            - 💼 Perfil profesional en GitHub
            
            **Es tu oportunidad de:**
            - ✨ Construir reputación profesional
            - 📈 Demostrar consistencia 
            - 🌐 Conectar con la comunidad global
            
            </details>
            
            ### ⚠️ Cambios futuros
            
            > 💬 **Tip profesional:** Cambiar información más tarde es posible pero requiere pasos adicionales. ¡Mejor hacerlo bien desde el inicio!
          `
        },
        {
          title: "⚙️ Configuraciones esenciales para un flujo de trabajo óptimo",
          content: `
            ### 🔧 Personalizando tu experiencia Git
            
            > Más allá de tu identidad, Git tiene cientos de opciones para optimizar tu flujo de trabajo.
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Panel de configuraciones de Git con las opciones más importantes]**
            
            ---
            
            ### 📝 Editor por defecto
            
            <details>
            <summary><strong>✍️ Configurar tu editor favorito</strong></summary>
            
            **¿Por qué es importante?**
            - Git abre un editor para mensajes de commit largos
            - Sin configuración, usa el editor del sistema (puede ser incómodo)
            
            **Opciones populares:**
            \`\`\`bash
            # Visual Studio Code
            git config --global core.editor "code --wait"
            
            # Vim
            git config --global core.editor "vim"
            
            # Nano
            git config --global core.editor "nano"
            \`\`\`
            
            </details>
            
            ### 🔄 Saltos de línea
            
            <details>
            <summary><strong>🖥️ Evita conflictos entre sistemas operativos</strong></summary>
            
            **El problema:**
            - Windows usa CRLF (\\r\\n)
            - macOS/Linux usan LF (\\n)
            - Esto puede causar conflictos en equipos mixtos
            
            **La solución:**
            \`\`\`bash
            # En Windows
            git config --global core.autocrlf true
            
            # En macOS/Linux
            git config --global core.autocrlf input
            \`\`\`
            
            </details>
            
            ### 🔍 Ver tus configuraciones
            
            \`\`\`bash
            # Ver todas las configuraciones
            git config --list
            
            # Ver configuración específica
            git config user.name
            git config user.email
            \`\`\`
          `
        }
      ],
      activities: [
        {
          title: "Verificación de Instalación",
          description: "Abre tu terminal y verifica que Git esté instalado correctamente ejecutando 'git --version'. Comparte tu resultado.",
          type: "practical",
          commands: ["git --version"],
          points: 15
        },
        {
          title: "Configuración de Identidad",
          description: "Configura tu nombre y email usando los comandos git config. Usa información que planees mantener a largo plazo.",
          type: "practical", 
          commands: [
            "git config --global user.name 'Tu Nombre Completo'",
            "git config --global user.email 'tu@email.com'"
          ],
          points: 20
        },
        {
          title: "Personalización del Entorno",
          description: "Configura tu editor favorito y las opciones básicas de Git según tu preferencia.",
          type: "practical",
          commands: [
            "git config --global core.editor 'code --wait'",
            "git config --global core.autocrlf true"
          ],
          points: 25
        }
      ],
      keyTakeaways: [
        "Git funciona en todos los sistemas operativos principales",
        "Tu identidad (nombre y email) se adjunta a cada commit que hagas",
        "Una configuración inicial correcta ahorra tiempo y problemas futuros",
        "Git es altamente personalizable según tus preferencias de trabajo",
        "La configuración global afecta todos tus proyectos futuros"
      ]
    }
  },
  {
    id: 3,
    title: "Conceptos fundamentales",
    subtitle: "Repository, Working Directory, Staging Area",
    description: "Comprende los tres estados fundamentales de Git y cómo fluye tu código entre ellos",
    icon: "GitBranch",
    difficulty: "Principiante",
    duration: "25 min",  
    color: "from-purple-500 to-purple-600",
    content: {
      introduction: `
        ## 🏭 La fábrica de versiones de Git
        
        > **Analogía clave:** Git es como una fábrica muy organizada donde se producen versiones de tu código.
        
        ### 🗺️ Los 3 mundos de Git
        
        <details>
        <summary><strong>🎭 Conoce los 3 escenarios donde vive tu código</strong></summary>
        
        1. 🏠 **Working Directory** - Tu espacio creativo
        2. 📦 **Staging Area** - El área de decisiones
        3. 🏦 **Repository** - La biblioteca permanente
        
        </details>
        
        ---
        
        **🖼️ [ESPACIO PARA IMAGEN: Diagrama simple mostrando los 3 áreas con flechas indicando el flujo]**
        
        ---
        
        ### 💯 ¿Por qué esto es fundamental?
        
        > Una vez que entiendas cómo fluye tu código entre estas tres áreas, podrás usar Git con confianza y entenderás la lógica detrás de cada comando.
        
        **🎯 Objetivo de este capítulo:** Dominar el flujo Working Directory → Staging Area → Repository
      `,
      sections: [
        {
          title: "🏠 El Working Directory: Tu espacio creativo",
          content: `
            ### 🔨 ¿Qué es el Working Directory?
            
            > Es simplemente **la carpeta en tu computadora** donde tienes los archivos de tu proyecto.
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Screenshot de un explorador de archivos mostrando una carpeta de proyecto]**
            
            ---
            
            ### 🎨 La analogía del escritorio
            
            <details>
            <summary><strong>📝 Imagina tu escritorio físico cuando trabajas</strong></summary>
            
            **En tu escritorio tienes:**
            - 📄 Papeles esparcidos
            - ✏️ Borradores a medio terminar
            - 📝 Notas pegajosas con ideas
            - 🔧 Herramientas que usas activamente
            
            **Es un espacio:**
            - 🔄 Dinámico
            - 🎨 A veces desordenado
            - ✨ Donde fluye la creatividad
            
            </details>
            
            ### 👀 ¿Qué hace Git aquí?
            
            <details>
            <summary><strong>🧘‍♂️ Git es un observador silencioso</strong></summary>
            
            **Git simplemente observa, NO interfiere:**
            - ✅ Modifica archivos → Git lo nota
            - ✅ Crea nuevos archivos → Git lo detecta
            - ✅ Elimina archivos → Git lo registra
            - ✅ Cambias nombres → Git lo ve
            
            **💬 Pero Git no actúa hasta que tú se lo pidas**
            
            </details>
            
            ### 🗺️ La carpeta mágica `.git`
            
            <details>
            <summary><strong>🎩 Lo que convierte una carpeta normal en repositorio Git</strong></summary>
            
            **La carpeta `.git` es:**
            - 🔕 Oculta (puedes verla con ls -a o activando archivos ocultos)
            - 🧠 El "cerebro" de Git
            - 💾 Donde se guarda TODA la historia
            - ⚙️ Donde están las configuraciones
            
            **⚠️ Nunca modifiques esta carpeta manualmente**
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Diagrama mostrando carpeta de proyecto con .git oculta y archivos visibles]**
            
            ---
            
            ### 📈 Estados de tus archivos
            
            <details>
            <summary><strong>🏷️ Los archivos tienen "etiquetas" de estado</strong></summary>
            
            - 🆕 **Untracked** - Archivos nuevos que Git nunca ha visto
            - 📝 **Modified** - Archivos que cambiaste desde el último commit
            - ✅ **Unmodified** - Archivos que no han cambiado
            
            **Comando mágico para verlos:**
            \`\`\`bash
            git status
            \`\`\`
            
            </details>
          `
        },
        {
          title: "📦 El Staging Area: El área de decisiones conscientes",
          content: `
            ### 🤯 El concepto más único de Git
            
            > 💡 **Dato fascinante:** El Staging Area no existe en otros sistemas de control de versiones. Es lo que hace a Git especial.
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Diagrama mostrando Working Directory → Staging Area → Repository]**
            
            ---
            
            ### 📍 La analogía de la mesa de revisión
            
            <details>
            <summary><strong>📋 Imagina una mesa de revisión</strong></summary>
            
            **En tu escritorio (Working Directory) tienes:**
            - 📄 5 archivos modificados
            - 🗺️ Experimentos a medio hacer
            - ✅ Trabajo terminado
            - 🚧 Funciones en desarrollo
            
            **En la mesa de revisión (Staging Area) colocas:**
            - ✅ Solo lo que está LISTO
            - ✅ Solo lo que forma una funcionalidad completa
            - ✅ Solo lo que quieres "enviar"
            
            </details>
            
            ### 🎯 Control granular increíble
            
            <details>
            <summary><strong>🕰️ Escenario real: 5 archivos modificados</strong></summary>
            
            **Tu situación:**
            - 🗺️ \`login.js\` - Función de autenticación completa ✅
            - 🗺️ \`validation.js\` - Validación completa ✅  
            - 🗺️ \`dashboard.js\` - Experimento a medias 🚧
            - 🗺️ \`api.js\` - Debugging temporal 🚧
            - 🗺️ \`styles.css\` - Cambios experimentales 🚧
            
            **Tu decisión con Staging Area:**
            \`\`\`bash
            # Solo incluir lo que está listo
            git add login.js validation.js
            git commit -m "feat: add user authentication system"
            \`\`\`
            
            **Resultado:** Commit limpio y lógico 🎉
            
            </details>
            
            ### 📈 Commits más organizados
            
            <details>
            <summary><strong>🗺️ En lugar de "commitear todo de golpe"</strong></summary>
            
            **❌ Mal enfoque (sin Staging Area):**
            - Un commit gigante con todo mezclado
            - Mensaje genérico: "varios cambios"
            - Difícil de entender luego
            
            **✅ Buen enfoque (con Staging Area):**
            - Múltiples commits lógicos
            - Cada commit = una funcionalidad
            - Historial limpio y comprensible
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Comparación visual - Un commit caótico vs múltiples commits organizados]**
            
            ---
            
            ### 🧮 El superpoder del Staging Area
            
            > ✨ **Magia:** Puedes hacer commits más lógicos y organizados, creando un historial que cuenta la verdadera historia de tu proyecto.
          `
        },
        {
          title: "🏦 El Repository: La biblioteca permanente",
          content: `
            ### 📚 Una biblioteca muy especial
            
            > El Repository es donde Git guarda permanentemente las "fotografías" de tu proyecto.
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Biblioteca con libros etiquetados como commits con fechas y autores]**
            
            ---
            
            ### 📝 La analogía de la biblioteca
            
            <details>
            <summary><strong>📚 Cada commit es como un libro</strong></summary>
            
            **Cada "libro" (commit) tiene:**
            - 🏷️ **Título descriptivo** (mensaje del commit)
            - ✍️ **Autor** (tu nombre y email)
            - 📅 **Fecha de publicación** (cuándo se hizo)
            - 📜 **Contenido completo** (estado del proyecto)
            
            **La biblioteca está súper organizada:**
            - 🔗 Cada libro referencia al anterior
            - 🔍 Puedes encontrar cualquier versión rápidamente
            - 📋 Hay un catálogo completo (git log)
            
            </details>
            
            ### 🧮 Lo fascinante del repositorio Git
            
            <details>
            <summary><strong>🧐 Git no solo guarda versiones...</strong></summary>
            
            **Git guarda:**
            - ✅ Cada versión completa del proyecto
            - ✅ Las relaciones entre versiones
            - ✅ Quién hizo cada cambio
            - ✅ Cuándo se hizo cada cambio
            - ✅ Por qué se hizo (mensaje del commit)
            
            **Es como tener un historiador personal para tu código**
            
            </details>
            
            ### 🚀 Funcionalidades increíbles
            
            <details>
            <summary><strong>✨ Lo que puedes hacer con esta estructura</strong></summary>
            
            **Viajes en el tiempo:**
            - ⏪ Ir a cualquier punto del pasado
            - 🔄 Comparar versiones diferentes
            - 🌱 Crear ramas paralelas de desarrollo
            
            **Colaboración mágica:**
            - 🤝 Fusionar cambios de múltiples fuentes
            - 🔄 Sincronizar con otros desarrolladores
            - ⚙️ Resolver conflictos inteligentemente
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Red de commits mostrando cómo se conectan entre sí]**
            
            ---
            
            ### 🛡️ Inmutabilidad = seguridad
            
            > 💪 **Fortaleza de Git:** Una vez que algo llega al Repository, forma parte permanente de la historia.
          `
        },
        {
          title: "🔄 El flujo de trabajo: Cómo se mueve tu código",
          content: `
            ### 🔁 El patrón fundamental de Git
            
            > **Flujo básico:** Working Directory → Staging Area → Repository
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Diagrama animado mostrando el flujo de archivos entre las 3 áreas]**
            
            ---
            
            ### 🎨 Tres pasos, control total
            
            <details>
            <summary><strong>🔍 Cada paso es un filtro de calidad</strong></summary>
            
            **1️⃣ Modificas** (Working Directory)
            - Primer decides QUÉ cambiar
            - Experimentas libremente
            - Git solo observa
            
            **2️⃣ Seleccionas** (Staging Area)
            - Luego decides QUÉ está listo
            - Preparas para versionado
            - Control granular
            
            **3️⃣ Confirmas** (Repository)
            - Finalmente decides CUÁNDO hacer permanente
            - Versión inmutable
            - Parte de la historia
            
            </details>
            
            ### ⏪ Reversibilidad inteligente
            
            <details>
            <summary><strong>🔄 El genio del sistema: puedes deshacer</strong></summary>
            
            **En Working Directory:**
            - ✅ Modifica algo → puedes descartarlo
            - ✅ No te gusta el resultado → vuelve atrás
            
            **En Staging Area:**
            - ✅ Agregaste algo → puedes quitarlo
            - ✅ Cambias de opinión → fácil de arreglar
            
            **En Repository:**
            - 🔒 Una vez commiteado → parte permanente de la historia
            - 🎩 Técnicamente modificable, pero no recomendado
            
            </details>
            
            ### 🛡️ Confiabilidad por diseño
            
            > ✨ **La magia:** Git está diseñado para que la historia sea inmutable, proporcionando una línea de tiempo confiable de la evolución de tu proyecto.
            
            **Resultado final:** Control total + seguridad máxima
          `
        }
      ],
      activities: [
        {
          title: "🔍 Exploración Visual con git status",
          description: `
          **🎯 Tu misión:** Conviértete en detective de estados de archivos
          
          <details>
          <summary><strong>Pasos del experimento</strong></summary>
          
          1. 🗺️ **Crea tu laboratorio:**
             - Crea una carpeta nueva
             - Inicializa Git
             
          2. 🕵️‍♂️ **Observa cada cambio:**
             - Ejecuta \`git status\` después de cada acción
             - Anota qué dice Git en cada momento
             
          3. 📝 **Experimentos a hacer:**
             - Crear un archivo nuevo
             - Modificar el archivo  
             - Añadir el archivo al staging
             - Hacer commit
             
          </details>
          
          **📈 Objetivo:** Entender cómo Git "ve" los cambios en tiempo real
          `,
          type: "practical",
          commands: [
            "mkdir mi-laboratorio-git",
            "cd mi-laboratorio-git", 
            "git init",
            "git status  # ¿Qué dice Git?",
            "echo 'Hola Git' > archivo.txt",
            "git status  # ¿Qué cambió?"
          ],
          points: 20
        },
        {
          title: "🎨 Maestro del Flujo Completo",
          description: `
          **🎯 Tu misión:** Dominar el flujo Working → Staging → Repository
          
          <details>
          <summary><strong>El desafío de los 3 mundos</strong></summary>
          
          **Situación:** Tienes múltiples archivos y debes organizarlos
          
          1. 📄 **Crea varios archivos:**
             - \`feature1.js\` (funcionalidad terminada)
             - \`feature2.js\` (funcionalidad terminada)
             - \`experiment.js\` (solo experimento)
             
          2. 🧪 **Usa el Staging Area sabiamente:**
             - Solo agrega lo que está "listo"
             - Deja los experimentos fuera
             
          3. 📚 **Crea commits lógicos:**
             - Commit solo las funcionalidades completas
             - Usa mensajes descriptivos
             
          </details>
          
          **🏆 Meta:** Commit limpio solo con funcionalidades terminadas
          `,
          type: "practical",
          commands: [
            "echo 'function login() { return true; }' > feature1.js",
            "echo 'function logout() { return true; }' > feature2.js", 
            "echo 'function experimental() { }' > experiment.js",
            "git add feature1.js feature2.js  # Solo lo listo",
            "git status  # Verifica el staging",
            "git commit -m 'feat: add login and logout functions'",
            "git status  # ¿Cómo quedó todo?"
          ],
          points: 30
        },
        {
          title: "🔬 Análisis de Estados Avanzado",
          description: `
          **🎯 Tu misión:** Conviértete en experto interpretando git status
          
          <details>
          <summary><strong>El reto del detective</strong></summary>
          
          **Escenario complejo:**
          - Modifica varios archivos simultáneamente
          - Agrega solo algunos al staging
          - Observa cómo Git reporta cada estado
          
          **Estados a identificar:**
          - 🆕 **Untracked** - Archivos nuevos
          - 📝 **Modified** - Archivos cambiados
          - ✅ **Staged** - Listos para commit
          - 🚧 **Unstaged** - Cambiados pero no staged
          
          </details>
          
          **🧠 Habilidad:** Leer el "lenguaje" de git status como un profesional
          `,
          type: "exploration",
          points: 25
        },
        {
          title: "🕰️ Simulador de Flujo de Trabajo Real",
          description: `
          **🎯 Tu misión:** Simula un día de trabajo real con Git
          
          <details>
          <summary><strong>Situación realista</strong></summary>
          
          **Eres un desarrollador trabajando en:**
          1. 🔐 Sistema de autenticación (prioritario)
          2. 🎨 Mejoras de UI (secundario)
          3. 💡 Ideas experimentales (muy experimental)
          
          **Tu desafío:**
          - Trabajar en todo simultáneamente
          - Hacer commits organizados por tema
          - Mantener experimentos separados
          
          </details>
          
          **🎯 Objetivo:** Demostrar que entiendes el flujo profesional de Git
          `,
          type: "practical",
          points: 35
        }
      ],
      keyTakeaways: [
        "Git maneja tres áreas distintas: Working Directory, Staging Area, y Repository",
        "El Staging Area permite control granular sobre qué cambios incluir en cada commit", 
        "El flujo de trabajo sigue el patrón: modificar → stagear → commitear",
        "Los cambios son reversibles hasta que llegan al Repository",
        "git status es tu mejor aliado para entender el estado actual de tu proyecto"
      ]
    }
  },
  {
    id: 4,
    title: "Commits profesionales y documentación efectiva",
    subtitle: "El arte de comunicar cambios y documentar proyectos",
    description: "Descubre por qué los nombres de commits y el README son fundamentales para el éxito de cualquier proyecto",
    icon: "MessageCircle",
    difficulty: "Principiante", 
    duration: "30 min",
    color: "from-indigo-500 to-indigo-600",
    content: {
      introduction: `
        ## 💬 La comunicación es clave en el desarrollo
        
        > **Escenario real:** Encuentras un commit que dice "fix". ¿Qué se arregló? ¿Por qué? ¿Cómo afecta al proyecto?
        
        ### 🕶️ El misterio del commit sin contexto
        
        <details>
        <summary><strong>🔍 Un commit misterioso aparece</strong></summary>
        
        **Situación típica:**
        - 📚 Tu equipo trabaja en un proyecto
        - 🔍 Revisas el historial de cambios
        - 🤷‍♂️ Ves: "fix", "update stuff", "final version"
        
        **Las preguntas sin respuesta:**
        - ❓ ¿Qué se arregló exactamente?
        - ❓ ¿Por qué era necesario?
        - ❓ ¿Cómo afecta esto al resto del proyecto?
        - ❓ ¿Puedo confiar en este cambio?
        
        </details>
        
        ---
        
        **🖼️ [ESPACIO PARA IMAGEN: Screenshot de historial Git con commits mal escritos vs bien escritos]**
        
        ---
        
        ### 🎯 Dos pilares de la comunicación técnica
        
        <details>
        <summary><strong>🏆 Los elementos que definen a un desarrollador profesional</strong></summary>
        
        1. 📝 **Commits que cuentan historias**
           - Cada commit es una página del diario de tu proyecto
           - Explican el QUÉ, POR QUÉ y CÓMO
           
        2. 📄 **README que inspira confianza**
           - Primera impresión de tu proyecto
           - Determina si alguien usará o contribuirá a tu código
        
        </details>
        
        ### 💼 Impacto en tu carrera
        
        > En el desarrollo moderno, **comunicar bien es tan importante como codificar bien**.
      `,
      sections: [
        {
          title: "📚 Los commits como narrativa del desarrollo",
          content: `
            ### 📖 Cada commit = una página del diario
            
            > **Analogía poderosa:** Tu historial de commits es la biografía de tu proyecto.
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Libro abierto con páginas representando commits]**
            
            ---
            
            ### 💬 Los commits hablan con el futuro
            
            <details>
            <summary><strong>🔮 Mensajes para tu yo futuro</strong></summary>
            
            **Dentro de 6 meses:**
            - 🤔 ¿Por qué implementé esto así?
            - 📚 ¿Cuál era la lógica detrás?
            - 🔍 ¿Qué problema resolvía?
            
            **Tu historial de commits será tu única guía**
            
            </details>
            
            <details>
            <summary><strong>👥 Mensajes para tu equipo</strong></summary>
            
            **Nuevos miembros del equipo necesitan:**
            - 📈 Entender la evolución del proyecto
            - 💡 Comprender decisiones técnicas
            - 🔄 Seguir la lógica de desarrollo
            
            **Buenos commits = onboarding más rápido**
            
            </details>
            
            ### 🏆 Los gigantes tecnológicos lo saben
            
            <details>
            <summary><strong>🏯 Empresas que usan convenciones de commits</strong></summary>
            
            **¿Quiénes lo hacen bien?**
            - 🌐 Google
            - 🏢 Microsoft  
            - ⚙️ Angular
            - 💙 Miles de proyectos open source
            
            **¿Por qué lo hacen?**
            📈 Incrementa dramáticamente la eficiencia del equipo
            
            </details>
            
            ---
            
            **🖼️ [ESPACIO PARA IMAGEN: Gráfica mostrando eficiencia de equipos con vs sin convenciones]**
            
            ---
            
            ### ❓ Las 3 preguntas fundamentales
            
            <details>
            <summary><strong>🧾 Un buen commit siempre responde</strong></summary>
            
            1. 🎯 **¿Qué cambió?**
               - Descripción clara y concisa
               
            2. 🤔 **¿Por qué era necesario?**
               - Contexto y motivación
               
            3. 📊 **¿Cómo afecta al sistema?**
               - Impacto en el comportamiento
               
            </details>
            
            ### 📚 De historial a fuente de conocimiento
            
            > Cuando tus commits responden estas preguntas consistentemente, transformas tu repositorio en una **fuente de conocimiento invaluable**.
          `
        },
        {
          title: "Convenciones de commits: El lenguaje universal del desarrollo",
          content: `
            Las convenciones de commits han emergido como un lenguaje universal entre desarrolladores. El formato más popular, conocido como "Conventional Commits", estructura los mensajes de una manera que tanto humanos como herramientas automatizadas pueden entender fácilmente.

            La estructura básica es: tipo(ámbito): descripción. Por ejemplo: "feat(auth): add Google OAuth integration" o "fix(payment): resolve double charge issue". Esta aparente simplicidad esconde un poder enorme: permite generar automáticamente changelogs, versionar semánticamente los releases, y crear sistemas de integración continua más inteligentes.

            Los tipos más comunes incluyen: 'feat' para nuevas funcionalidades, 'fix' para corrección de errores, 'docs' para cambios en documentación, 'style' para cambios de formato que no afectan la lógica, 'refactor' para reestructuración de código, 'test' para añadir o modificar pruebas, y 'chore' para tareas de mantenimiento.

            Pero más allá de la estructura técnica, estas convenciones entrenan tu mente para pensar de manera más organizada sobre los cambios que haces. Te obligan a categorizar y explicar cada modificación, lo que naturalmente resulta en código más reflexivo y cambios más atómicos (cambios pequeños y enfocados en una sola responsabilidad).
          `
        },
        {
          title: "El README: La primera impresión que nunca se olvida",
          content: `
            El archivo README es la carta de presentación de tu proyecto. Es lo primero que ven los visitantes de tu repositorio, y en muchos casos, determina si van a invertir tiempo en explorar tu código o si van a buscar alternativas. Un README efectivo no es solo documentación técnica; es una herramienta de marketing, educación y construcción de comunidad.

            Un README excepcional debe funcionar como un embudo que guía suavemente a diferentes tipos de usuarios hacia sus objetivos específicos. Un desarrollador que quiere usar tu librería necesita ejemplos rápidos y claros. Un colaborador potencial necesita entender la arquitectura y las pautas de contribución. Un gerente técnico necesita entender el valor comercial y el estado de madurez del proyecto.

            Los elementos esenciales de un README profesional incluyen: una descripción clara del problema que resuelve el proyecto, instrucciones de instalación paso a paso, ejemplos de uso que cubren los casos más comunes, documentación de la API cuando corresponde, pautas para contribuir, información sobre licencia, y datos de contacto o enlaces a comunidades.

            Pero el verdadero secreto de un gran README es la empatía. Debe estar escrito desde la perspectiva del usuario, no del creador. Debe anticipar preguntas, eliminar fricción, y hacer que el lector se sienta bienvenido y capaz de tener éxito con tu proyecto.
          `
        },
        {
          title: "El impacto profesional de la comunicación técnica",
          content: `
            En el mercado laboral actual, la capacidad de comunicar efectivamente a través del código y la documentación es una habilidad diferenciadora crítica. Los empleadores no solo evalúan tu capacidad técnica para escribir código, sino también tu capacidad para comunicar ideas, colaborar efectivamente, y contribuir a la cultura técnica de la organización.

            Un desarrollador que escribe commits claros y mantiene documentación actualizada demuestra profesionalismo, consideración por sus compañeros, y entendimiento del ciclo de vida completo del software. Estas son exactamente las cualidades que buscan los líderes técnicos cuando construyen equipos de alto rendimiento.

            Además, en la era del desarrollo distribuido y el trabajo remoto, la comunicación escrita se ha vuelto aún más crítica. Tu código y documentación son a menudo la única representación de tu trabajo que ven tus colegas. La calidad de esta comunicación directamente influye en cómo otros perciben tu competencia técnica y profesionalismo.

            Los proyectos con excelente documentación y historial de commits claro tienden a atraer más contribuidores, recibir más estrellas en GitHub, y ser adoptados más ampliamente en la comunidad. Esto crea un círculo virtuoso donde la buena comunicación técnica conduce a mayor visibilidad profesional y mejores oportunidades de carrera.
          `
        }
      ],
      activities: [
        {
          title: "Análisis de Commits Profesionales",
          description: "Explora el historial de commits de un proyecto popular (como React, Vue.js, o Angular) y analiza cómo estructuran sus mensajes. Identifica patrones y convenciones.",
          type: "research",
          points: 25
        },
        {
          title: "Reescribir Commits Deficientes",
          description: "Toma estos commits reales problemáticos y reescríbelos siguiendo convenciones profesionales: 'fix', 'update stuff', 'working on feature', 'final version'.",
          type: "practical",
          points: 30
        },
        {
          title: "Crear un README Template",
          description: "Diseña un template de README que podrías usar para tus futuros proyectos. Incluye todas las secciones esenciales con ejemplos y guías.",
          type: "practical",
          points: 35
        },
        {
          title: "Evaluación de READMEs",
          description: "Encuentra 3 proyectos en GitHub: uno con excelente README, uno promedio, y uno deficiente. Analiza las diferencias y explica qué hace efectivo cada uno.",
          type: "research",
          points: 25
        }
      ],
      keyTakeaways: [
        "Los commits son narrativa del desarrollo, no solo registros técnicos",
        "Las convenciones de commits crean un lenguaje universal entre desarrolladores",
        "Un README efectivo es marketing, educación y construcción de comunidad",
        "La comunicación técnica es una habilidad diferenciadora crítica en el mercado laboral",
        "La calidad de documentación influye directamente en el éxito del proyecto",
        "Los buenos hábitos de comunicación crean círculos virtuosos de colaboración"
      ]
    }
  }
];

export const glossary = [
  {
    term: "Repository (Repositorio)",
    definition: "Una base de datos que contiene todo el historial de cambios de un proyecto, incluyendo archivos, commits, ramas y metadata."
  },
  {
    term: "Commit", 
    definition: "Una 'fotografía' inmutable de tu proyecto en un momento específico, que incluye todos los archivos y un mensaje descriptivo de los cambios."
  },
  {
    term: "Working Directory",
    definition: "La carpeta en tu sistema donde tienes los archivos del proyecto y donde haces las modificaciones activamente."
  },
  {
    term: "Staging Area (Index)",
    definition: "Un área intermedia donde preparas los cambios que quieres incluir en tu próximo commit."
  },
  {
    term: "Branch (Rama)",
    definition: "Una línea independiente de desarrollo que permite trabajar en características sin afectar la línea principal del proyecto."
  },
  {
    term: "Clone",
    definition: "Crear una copia completa de un repositorio remoto en tu máquina local, incluyendo todo su historial."
  },
  {
    term: "Push",
    definition: "Enviar tus commits locales a un repositorio remoto para compartir tus cambios con otros."
  },
  {
    term: "Pull",
    definition: "Descargar y fusionar cambios desde un repositorio remoto a tu repositorio local."
  },
  {
    term: "Merge",
    definition: "El proceso de combinar cambios de diferentes ramas en una sola línea de desarrollo."
  },
  {
    term: "Fork",
    definition: "Una copia completa de un repositorio que te permite experimentar libremente sin afectar el proyecto original."
  },
  {
    term: "Conventional Commits",
    definition: "Una convención para escribir mensajes de commit de manera estandarizada y legible tanto para humanos como para herramientas."
  },
  {
    term: "README",
    definition: "Archivo de documentación que sirve como carta de presentación de un proyecto, explicando su propósito, instalación y uso."
  },
  {
    term: "Changelog",
    definition: "Documento que registra los cambios más importantes de un proyecto entre versiones de manera cronológica y organizada."
  }
];

export default { chaptersData, glossary };