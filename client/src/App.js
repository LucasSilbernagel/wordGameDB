import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Endpoints from './components/Endpoints/Endpoints'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import { Routes, Route } from 'react-router-dom'
import { GlobalStyles } from './globalStyles'
import { theme } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<Home />} />
          <Route path="/endpoints" element={<Endpoints />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
