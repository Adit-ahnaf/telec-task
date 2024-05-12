import { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";

export default function PrivateRoute() {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState(true);
  return (
    <>
      {auth !== null ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
