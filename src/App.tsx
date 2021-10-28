import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Open } from './pages/Open'
import './styles/global.scss'

function App() {

  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home } />
      <Route path="/open" component={ Open } />
    </BrowserRouter>
  )
}

export default App
