import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BanRoute from './components/BanRoute';
import Loading from './components/Loading';
import ProtectRoute from './components/ProtectRoute';
import RoutePath from './constants/route';

const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));
const Login = lazy(() => import('./pages/Login'));
const isAuth = true;
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path={RoutePath.home}
            element={
              <ProtectRoute isAuth={isAuth}>
                <Home />
              </ProtectRoute>
            }
          ></Route>
          <Route
            path={RoutePath.chat}
            element={
              <ProtectRoute isAuth={isAuth}>
                <Chat />
              </ProtectRoute>
            }
          ></Route>
          <Route
            path={RoutePath.login}
            element={
              <BanRoute isAuth={isAuth}>
                <Login />
              </BanRoute>
            }
          ></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;