//import Todo from './components/Todo';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import AllMeetups from './pages/AllMeetups';
import NewMeetup from './pages/NewMeetup';
import Favorites from './pages/Favorites';
// import MainNavigation from './components/layouts/MainNav';

function App() {
  return (
    // Todo App
    // <div>
    //   <h1>My Todos</h1>
    //   <Todo text='Learn React' />
    //   <Todo text='Master React' />
    //   <Todo text='Explore the full React course' />
    // </div>

    // Meetup App
    <Layout>
      <Routes>
        <Route path='/' element={<AllMeetups />}></Route>
        <Route path='/new-meetup' element={<NewMeetup />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
