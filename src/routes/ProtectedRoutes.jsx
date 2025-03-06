import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import { LayoutPage } from '../layout/LayoutPage';
import { startRefreshToken } from '../store/slices/auth/thunks';
import { Usuarios } from '../views/usuarios/Usuarios';
import { Contactos } from '../views/contactos/Contactos';
import { ConversacionActual } from '../views/conversacionActual/ConversacionActual';

export const ProtectedRoutes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.userReducer);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(startRefreshToken());
    }, 30 * 60000); // 30 min

    return () => clearInterval(interval);
  }, []);

  return (
    <LayoutPage>
      <Routes >
        <Route path='/contactos' element={<Contactos />}/>
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/conversacionActual/:telefono' element={<ConversacionActual />} />
      </Routes>
    </LayoutPage>
  )
}
