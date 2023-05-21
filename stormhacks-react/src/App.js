import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/layout/Layout';
import SignUpPage from './pages/SignUpPage';
import LogInPage from './pages/LogInPage';
import RatingsPage from './pages/RatingsPage';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element = {<HomePage />}/>
        <Route path='/archive' element = {<ArchivesPage />}/>
        <Route path='/profile' element = {<ProfilePage />}/>
        <Route path='/ratings' element = {<RatingsPage />}/>
        <Route path='/signup' element = {<SignUpPage />}/>
        <Route path='/login' element = {<LogInPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;