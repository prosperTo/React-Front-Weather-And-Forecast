import { BrowserRouter } from 'react-router-dom';
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

// Layour
import { Layout } from './components/index'



function App() {
  return (
    <>
      <BrowserRouter>
          <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
