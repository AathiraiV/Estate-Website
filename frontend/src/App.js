import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register"; // Ensure this path is correct
import Login from "./components/Login";  // Ensure Login component exists

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as necessary */}
      </Routes>
    </Router>
  );
};

export default App;
