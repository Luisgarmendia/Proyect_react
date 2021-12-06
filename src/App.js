import { Articulos } from "./components/Articulos"
import { Navbar } from './components/Navbar'
import State from './data/context/state'


function App() {
 
  return (
    <State>
      <Navbar />
      <Articulos/>
    </State>
  );
}

export default App;
