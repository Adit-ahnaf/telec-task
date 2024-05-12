import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/routes/PrivateRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<DashBoard />} path="/dashboard" />
        </Route>
        <Route element={<Login />} path="/" />

        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
