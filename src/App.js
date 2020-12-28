import './App.css'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import TopMenu from './components/topMenu/TopMenu'

function App() {
  return (
    <div className="app">
      <Header />
      <TopMenu />
      <Content />
      <Footer />
    </div>
  )
}

export default App
