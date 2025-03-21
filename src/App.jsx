import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
