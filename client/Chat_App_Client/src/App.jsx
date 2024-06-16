import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BanRoute from './components/BanRoute';
import Loading from './components/Loading';
import ProtectRoute from './components/ProtectRoute';
import RoutePath from './constants/route';

const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));
const Login = lazy(() => import('./pages/Login'));
const MangeGroup = lazy(() => import('./pages/MangeGroup'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
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
            path={RoutePath.chatId}
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
          <Route
            path={RoutePath.group}
            element={
              <ProtectRoute isAuth={isAuth}>
                <MangeGroup />
              </ProtectRoute>
            }
          ></Route>
          <Route path={'*'} element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
