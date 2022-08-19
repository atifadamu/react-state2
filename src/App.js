import React, { useState } from "react";
import ProfileForm from "./components/ProfileForm";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [allprofiles, setAllprofile] = useState([
    {
      firstname: "saqib",
      lastname: "adamu",
      email: "atifadamu1718@gmail.com",
      phone: "0201240921",
    },
  ]);
  const updateallprofiles = (profile) => {
    let arr = allprofiles;
    arr.push = profile;
    setAllprofile([...arr]);
  };
  return (
    <>
      <div className="app">
        <h1>our profile marker</h1>
      </div>

      <ProfileForm key={updateallprofiles} />
      <hr />
      <div className="list">
        {allprofiles.map((person, index) => (
          <ProfileCard key={index} card={person} />
        ))}
      </div>
    </>
  );
}

export default App;
