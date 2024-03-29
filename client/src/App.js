import { Route, Routes } from "react-router-dom"
import Navbar from "./component/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <>
 <Navbar/>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </>
  );
}

export default App;
