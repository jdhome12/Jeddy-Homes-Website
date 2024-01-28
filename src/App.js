import { Routes } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/footer';


function App() {
  return (
    <>
      <div>
        {/* add the website nav bar */}
        <main>
          < Navbar />
        </main>
        {/* add the different pages */}
        <div>
          <Routes>
          </Routes>          
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
