import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageNotFound from './common/Layout/components/PageNotFound';
import Home from './common/Layout/components/Layout';
import ProtectedRoute from './views/auth/ProtectedRoute';
import { routes } from './routes';
import Loader from './globalLoader/Loader';
import Login from './views/auth/Login/Login';
import LandingPage from './views/LandingPage/LandingPage';
import SelectedItemsList from './views/LandingPage/SelectedItemsList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      endLoading();
    }
  }, []);

  const endLoading = (params) => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className='App'>
      <Routes>
        <Route path={'/home'} element={<LandingPage />} />
        <Route path={'login'} element={<Login />} />
        <Route path={'/cart'} element={<SelectedItemsList />} />
        <Route
          path={'/'}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path='*' element={<PageNotFound />} />
          {routes.map((route, index) => {
            return (
              route.element && (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.key}
                  name={route.name}
                  element={route.element}
                />
              )
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
