import React from 'react';
import Profile from './Profile';
import './App.css';

const App = () => {
  const handleName = () => {
    alert('Profile user name clicked!');
  };

  return (
    <div className="App">
      <Profile
        fullName="CHIHAOUI DINA"
        bio="A software developer passionate about web development."
        profession="Web Developer"
        handleName={handleName}
      >
        <img
          src="1485481401-1_78612.png"
          alt="Profile"
          style={styles.profileImage}
        />
      </Profile>
    </div>
  );
};

const styles = {
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default App;
