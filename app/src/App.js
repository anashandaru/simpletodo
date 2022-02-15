import Task from "./pages/Task";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" exact element={
              <>
                <Navbar/>
                <Task/>
              </>
            }>
            </Route>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
