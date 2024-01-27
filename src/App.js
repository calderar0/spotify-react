import './App.css';
import Footer from './footer/footer';
import Header from './header/header';
import Main from './main/main';
import Sidebar from './sidebar/sidebar';



function App() {
  return (
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
