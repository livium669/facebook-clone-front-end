import React from 'react';
import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{ user }] = useStateValue();
  
  return (
    <div className="app">
      {!user ? ( <Login /> ) : (
        <>
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <Chat />
        </div>
        </>
      )}
      
    </div>
  );
}

export default App;
