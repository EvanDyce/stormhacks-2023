import {Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ArchivesPage from './pages/ArchivesPage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element = {<HomePage />}/>
        <Route path='/archive' element = {<ArchivesPage />}/>
      </Routes>
    </Layout>
  );
}

export default App;