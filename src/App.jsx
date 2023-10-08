import { Link, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Content } from "./pages/Content";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"

function App() {

  return (
    <div className="App container-fluid">
        <Link to="/">Code Space</Link>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/content-yes" element={<Content answerIsYes={true}/>}/>
          <Route path="/content-no" element={<Content answerIsYes={false}/>}/>
        </Routes>
    </div>
  )
}

export default App
