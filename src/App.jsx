import Home from "./layout/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import VideoRepo from "./layout/VideoRepo";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video-repo" element={<VideoRepo />}/>
      </Routes>
    </HashRouter>
  );
};

export default App;
