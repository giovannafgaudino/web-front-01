import Header from './Componentes/Header';
import Footer from './Componentes/Footer'; 
import {Outlet} from 'react-router-dom';

function App() {
  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Portal', link: '/portal' },
    { text: 'Contato', link: '/contato' },
  ];
  return (
        <>
          <Header  menuItems={menuItems} />
          <Outlet/>
          <Footer />
        </>
  )
}

export default App
