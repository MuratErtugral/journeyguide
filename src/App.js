
import './App.scss';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Navbar from './component/navbar/Navbar';

const App = ()=>{
  return(
    <div className='App'>
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App;
