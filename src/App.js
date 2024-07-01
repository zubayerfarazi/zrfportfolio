import "./App.css";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Index from "./pages/HOME/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index></Index>}></Route>
        <Route path="/*" element={<Error></Error>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
