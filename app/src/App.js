import Task from "./pages/Task";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import { useState } from "react";

const App = () => {

  const [user, setUser] = useState("");

  return (
    <BrowserRouter>
    <Navbar authUser={user} />
        <Routes>
            <Route path="/" exact element={<Task isAuthuser={(e) => setUser(e)} />}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default App;
