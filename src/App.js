import DataBlock from './components/dataBlock/DataBlock'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <DataBlock />
        <Footer />
      </BrowserRouter>
    </div>
  )
}
