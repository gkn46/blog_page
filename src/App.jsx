import './App.css';
import Body from './components/Body';
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Footer from "./components/Footer";
import Galeri from './components/Galeri';


function App() {
  

  return (
    <>
         <Navbar/>
    <div className='container'>
      <div className='left'>
      <Body/>
      </div>
      <div className='right'>
      <Text/>
      <Galeri/>
      </div>
    </div>

     <Footer/>
    </>
  )
}

export default App
