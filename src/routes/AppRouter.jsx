import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import { consLogged } from "../const/consLogged";
import { startRefreshToken } from "../store/slices/auth/thunks";
import { Login } from "../views/login/Login";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Notificacion } from "../layout/Notificacion";

export const AppRouter = () => {
  const { logged, user} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  //Ejecuta la primera vez que carga la app
  useEffect(() => {
    dispatch(startRefreshToken());
  }, []);

  if (logged === consLogged.STARTING) return <></>

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute >
              <Routes>
                <Route path="/*" element={<Login />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivateRoute >
              <ProtectedRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
      <Notificacion />
    </BrowserRouter>
  )
}
