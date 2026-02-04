import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'

// Páginas individuales
import NewHomePage from './pages/NewHomePage'
import IntroduccionPage from './pages/IntroduccionPage'
import InstalacionPage from './pages/InstalacionPage'
import ConfiguracionPage from './pages/ConfiguracionPage'
import InicializacionPage from './pages/InicializacionPage'
import StagingAreaPage from './pages/StagingAreaPage'
import CommitPage from './pages/CommitPage'
import BranchingPage from './pages/BranchingPage'
import MergingPage from './pages/MergingPage'
import CloningPage from './pages/CloningPage'
import RemotesPage from './pages/RemotesPage'
import RevertResetPage from './pages/RevertResetPage'
import ConflictosPage from './pages/ConflictosPage'
import AdvancedPage from './pages/AdvancedPage'
import GitDesktopPage from './pages/GitDesktopPage'
import WorkflowPage from './pages/WorkflowPage'
import CheatSheetPage from './pages/CheatSheetPage'
// Mantenemos el simulador
import GitSimulator from './components/GitSimulator'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewHomePage />} />
          <Route path="introduccion" element={<IntroduccionPage />} />
          <Route path="instalacion" element={<InstalacionPage />} />
          <Route path="configuracion" element={<ConfiguracionPage />} />
          <Route path="inicializacion" element={<InicializacionPage />} />
          <Route path="staging-area" element={<StagingAreaPage />} />
          <Route path="commits" element={<CommitPage />} />
          <Route path="branching" element={<BranchingPage />} />
          <Route path="merging" element={<MergingPage />} />
          <Route path="cloning" element={<CloningPage />} />
          <Route path="remotes" element={<RemotesPage />} />
          <Route path="revert-reset" element={<RevertResetPage />} />
          <Route path="conflictos" element={<ConflictosPage />} />
          <Route path="advanced" element={<AdvancedPage />} />
          <Route path="git-desktop" element={<GitDesktopPage />} />
          <Route path="workflow" element={<WorkflowPage />} />
          <Route path="cheat-sheet" element={<CheatSheetPage />} />
          <Route path="simulador" element={<GitSimulator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App