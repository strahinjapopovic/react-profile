import './App.css';
import { Outlet } from 'react-router-dom';
//-------------------------------------------------------------------------//
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
//-------------------------------------------------------------------------//
function App() {
  return (
    <>
      <div id='format'>
        <Header />
          <div id='container'>
            <Outlet />
          </div>
        <Footer />
      </div>
    </>
  )
}
//-------------------------------------------------------------------------//
export default App;
