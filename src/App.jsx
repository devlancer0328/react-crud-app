import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from './components/Home';
import Edit from './components/Edit';

const App = () => {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
    </div>
  )
}

export default App