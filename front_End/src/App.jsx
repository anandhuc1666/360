import Demo from "./components/Auth/Demo";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Layout() {
  return(
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/demo" element={<Demo/>}/>
  </Routes>
  )

}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
