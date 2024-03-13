import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { Navbar } from './components/NavBar';


function App() {
  return (
  <>
  <Navbar/> 
  <ItemListContainer greeting="HOLA"/>
</> 
  );
}

export default App;
