import React, { useState } from 'react';
import LoginPage from './components/login'; // Import the LoginPage component
import Register from './components/register';

function App() {
const [current_page, setCurrentPage] = useState("login");
if (current_page == "login") {
  return (
    <div className="app">
      <LoginPage setCurrentPage={setCurrentPage}/>
    </div>
  );
} else {
    return (
        <div className="app">
          <Register setCurrentPage={setCurrentPage}/>
        </div>
      );
}
}

export default App;
