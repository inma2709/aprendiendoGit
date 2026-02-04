import { useState } from 'react'
import { Terminal, Play, RotateCcw, GitBranch, FileText, Plus } from 'lucide-react'

const GitSimulator = () => {
  const [files, setFiles] = useState([
    { name: 'README.md', status: 'unmodified', content: '# Mi Proyecto' },
    { name: 'index.js', status: 'unmodified', content: 'console.log("Hello World")' }
  ])
  const [stagedFiles, setStagedFiles] = useState([])
  const [commits, setCommits] = useState([])
  const [commandHistory, setCommandHistory] = useState([])
  const [currentCommand, setCurrentCommand] = useState('')

  const addCommand = (command, output) => {
    setCommandHistory(prev => [...prev, { command, output, timestamp: new Date() }])
  }

  const handleCommand = (e) => {
    e.preventDefault()
    const command = currentCommand.trim().toLowerCase()
    let output = ''

    if (command === 'git status') {
      const unstagedFiles = files.filter(f => f.status === 'modified' && !stagedFiles.includes(f.name))
      const staged = stagedFiles.map(name => files.find(f => f.name === name))
      
      output = `On branch main\n\n`
      
      if (staged.length > 0) {
        output += `Changes to be committed:\n`
        staged.forEach(f => {
          output += `  modified:   ${f.name}\n`
        })
        output += '\n'
      }

      if (unstagedFiles.length > 0) {
        output += `Changes not staged for commit:\n`
        unstagedFiles.forEach(f => {
          output += `  modified:   ${f.name}\n`
        })
      }

      if (staged.length === 0 && unstagedFiles.length === 0) {
        output += `nothing to commit, working tree clean`
      }
    }
    else if (command.startsWith('git add ')) {
      const fileName = command.replace('git add ', '')
      if (fileName === '.') {
        const modifiedFiles = files.filter(f => f.status === 'modified').map(f => f.name)
        setStagedFiles(prev => [...new Set([...prev, ...modifiedFiles])])
        output = `Added all modified files to staging area`
      } else {
        const file = files.find(f => f.name === fileName)
        if (file && file.status === 'modified') {
          setStagedFiles(prev => [...prev, fileName])
          output = `Added ${fileName} to staging area`
        } else {
          output = `error: pathspec '${fileName}' did not match any files`
        }
      }
    }
    else if (command.startsWith('git commit')) {
      if (stagedFiles.length === 0) {
        output = `nothing to commit`
      } else {
        const commitMessage = command.includes('-m') 
          ? command.split('-m')[1]?.trim().replace(/['"]/g, '') || 'No message'
          : 'No message'
        
        const newCommit = {
          id: Math.random().toString(36).substr(2, 7),
          message: commitMessage,
          files: [...stagedFiles],
          timestamp: new Date()
        }
        
        setCommits(prev => [newCommit, ...prev])
        setStagedFiles([])
        setFiles(prev => prev.map(f => 
          stagedFiles.includes(f.name) 
            ? { ...f, status: 'unmodified' }
            : f
        ))
        
        output = `[main ${newCommit.id}] ${commitMessage}\n ${stagedFiles.length} file(s) changed`
      }
    }
    else if (command === 'git log') {
      if (commits.length === 0) {
        output = `No commits yet`
      } else {
        output = commits.map(commit => 
          `commit ${commit.id}\nDate: ${commit.timestamp.toLocaleString()}\n    ${commit.message}\n`
        ).join('\n')
      }
    }
    else {
      output = `git: '${command.replace('git ', '')}' is not a git command. See 'git --help'.`
    }

    addCommand(currentCommand, output)
    setCurrentCommand('')
  }

  const modifyFile = (fileName) => {
    setFiles(prev => prev.map(f => 
      f.name === fileName 
        ? { ...f, status: 'modified', content: f.content + '\n// Modified content' }
        : f
    ))
  }

  const resetSimulator = () => {
    setFiles([
      { name: 'README.md', status: 'unmodified', content: '# Mi Proyecto' },
      { name: 'index.js', status: 'unmodified', content: 'console.log("Hello World")' }
    ])
    setStagedFiles([])
    setCommits([])
    setCommandHistory([])
  }

  return (
    <div className="container mx-auto px-4 py-8">
      
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-full">
            <Terminal className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Simulador de Git
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Practica comandos de Git en un entorno seguro. Experimenta sin miedo y 
          observa cómo cambian los estados de tus archivos.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Panel izquierdo - Estado del repositorio */}
        <div className="space-y-6">
          
          {/* Working Directory */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <span>Working Directory</span>
              </h2>
              <button
                onClick={resetSimulator}
                className="flex items-center space-x-2 px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset</span>
              </button>
            </div>

            <div className="space-y-3">
              {files.map(file => (
                <div key={file.name} className={`p-3 rounded border-2 transition-colors ${
                  file.status === 'modified' 
                    ? 'border-orange-300 bg-orange-50 dark:bg-orange-900/20 dark:border-orange-700'
                    : 'border-gray-200 dark:border-gray-600'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className={`w-4 h-4 ${
                        file.status === 'modified' ? 'text-orange-500' : 'text-gray-400'
                      }`} />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {file.name}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded ${
                        file.status === 'modified' 
                          ? 'bg-orange-200 text-orange-800 dark:bg-orange-800 dark:text-orange-200'
                          : 'bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300'
                      }`}>
                        {file.status}
                      </span>
                    </div>
                    
                    {file.status === 'unmodified' && (
                      <button
                        onClick={() => modifyFile(file.name)}
                        className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
                      >
                        Modificar
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Staging Area */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <Plus className="w-5 h-5 text-green-500" />
              <span>Staging Area</span>
            </h2>

            {stagedFiles.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8 italic">
                No hay archivos en el staging area
              </p>
            ) : (
              <div className="space-y-2">
                {stagedFiles.map(fileName => {
                  const file = files.find(f => f.name === fileName)
                  return (
                    <div key={fileName} className="p-3 bg-green-50 dark:bg-green-900/20 border-2 border-green-300 dark:border-green-700 rounded">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {fileName}
                        </span>
                        <span className="text-xs bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200 px-2 py-1 rounded">
                          staged
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Repository (Commits) */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center space-x-2">
              <GitBranch className="w-5 h-5 text-purple-500" />
              <span>Repository</span>
            </h2>

            {commits.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8 italic">
                No hay commits aún
              </p>
            ) : (
              <div className="space-y-3">
                {commits.slice(0, 5).map((commit, index) => (
                  <div key={commit.id} className={`p-3 rounded border-l-4 ${
                    index === 0 
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-gray-600 dark:text-gray-300">
                        {commit.id}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {commit.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {commit.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {commit.files.length} file(s) changed
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Panel derecho - Terminal */}
        <div className="space-y-6">
          
          {/* Terminal */}
          <div className="bg-gray-900 rounded-lg shadow-lg h-96 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium">Git Terminal</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto font-mono text-sm">
              {commandHistory.length === 0 ? (
                <div className="text-gray-400">
                  Bienvenido al simulador de Git. Prueba comandos como:
                  <br />• git status
                  <br />• git add [filename]
                  <br />• git commit -m "message"
                  <br />• git log
                </div>
              ) : (
                <div className="space-y-4">
                  {commandHistory.map((entry, index) => (
                    <div key={index}>
                      <div className="text-green-400">$ {entry.command}</div>
                      <div className="text-gray-300 whitespace-pre-line ml-2">
                        {entry.output}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleCommand} className="p-4 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">$</span>
                <input
                  type="text"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  placeholder="Escribe un comando git..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none font-mono"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white p-2 rounded transition-colors"
                >
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Comandos sugeridos */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Comandos para probar:
            </h3>
            <div className="space-y-2">
              {[
                'git status',
                'git add README.md',
                'git add .',
                'git commit -m "Mi primer commit"',
                'git log'
              ].map((cmd, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCommand(cmd)}
                  className="block w-full text-left p-2 bg-gray-100 dark:bg-gray-700 rounded font-mono text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GitSimulator