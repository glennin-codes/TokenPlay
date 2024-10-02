
import './App.css'
import Persist from './components/Persists';
import TokenPlay from './page/Home'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LaunchToken from './page/LaunchToken';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Persist />}>
          <Route index element={<TokenPlay />}></Route>
          <Route
            path="/launchtoken"
            element={
            
                <LaunchToken />
                
            }
          ></Route>
        </Route>
        
       
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
