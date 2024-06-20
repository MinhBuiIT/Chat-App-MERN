import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BanRoute from './components/BanRoute';
import Loading from './components/Loading';
import ProtectRoute from './components/ProtectRoute';
import RoutePath from './constants/route';
import Dashboard from './pages/Admin/Dashboard';
import GroupManage from './pages/Admin/GroupManage';
import MessageManage from './pages/Admin/MessageManage';
import UserManage from './pages/Admin/UserManage';

const Home = lazy(() => import('./pages/Home'));
const Chat = lazy(() => import('./pages/Chat'));
const Login = lazy(() => import('./pages/Login'));
const MangeGroup = lazy(() => import('./pages/ManageGroup'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const AdminLogin = lazy(() => import('./pages/Admin/AdminLogin'));
const Layout = lazy(() => import('./pages/Admin/Layout'));

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
          <Route path={RoutePath.adminLogin} element={<AdminLogin />}></Route>
          <Route path="/admin" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path={'dashboard'} element={<Dashboard />}></Route>
            <Route path={'user'} element={<UserManage />}></Route>
            <Route path={'group'} element={<GroupManage />}></Route>
            <Route path={'message'} element={<MessageManage />}></Route>
            <Route path={'logout'} element={<div>Logout</div>}></Route>
          </Route>
          <Route path={'*'} element={<NotFound />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
