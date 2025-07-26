import { Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import './styles/global.css';

function App() {
  return (
    <div id='container' className='flex flex-col min-h-screen'>
      <Header />
      <div id='wrap' className='flex-grow flex flex-col'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/detail/:city' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
