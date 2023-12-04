import { useState } from 'react';
import './App.css';
import { UserProfileCard } from './Components/UserProfileCard/UserProfileCard';
import profile_icon from './assets/profile.png';
import { profilesData } from './Data/profilesData';

function App() {
  return (
    <div className="App">
      <UserProfileCard
        props={{
          profileImage: profilesData[0].image,
          profileName: profilesData[0].name,
          profileDescription: profilesData[0].description,
        }}
      />
    </div>
  );
}

export default App;
