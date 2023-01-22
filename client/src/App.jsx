import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import UserList from './pages/UserList';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(0);
  const usersData = [
    { id: 1, name: 'ad', username: 'ada', image: '', email: 'a' },
    { id: 2, name: 'ad', username: 'ada', image: '', email: 'a' },
  ];

  const Layout = () => {
    return <UserList users={usersData} />;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      // children: [
      //   {
      //     path: '/',
      //     element: <Home />,
      //   },
      //   {
      //     path: '/post/:id',
      //     element: <Single />,
      //   },
      //   {
      //     path: '/write',
      //     element: <Write />,
      //   },
      // ],
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
