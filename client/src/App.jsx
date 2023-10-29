import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="bg-[#fcfcfc]  flex h-screen justify-center items-center">
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
