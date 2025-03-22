import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
