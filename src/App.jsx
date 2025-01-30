import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/views/auth/Login';
import Dashboard from './components/views/dashboard/Dashboard';
import Home from './components/views/Home';
import Portfolio from './components/views/portfolio/Portfolio';
import Team from './components/views/team/Team';
function App() {

  const router = createBrowserRouter([
    
    { path: "/Login", element: <Login />, },
    { path: "/", element: <Dashboard />,
      children: [
        { path: "Home", element: <Home /> },
        { path: "Team", element: <Team /> },
        { path: "Portfolio", element: <Portfolio /> },

      ],
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
