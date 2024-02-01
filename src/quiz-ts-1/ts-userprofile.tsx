import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
  hobbies: string[];
}

function UserProfile({ name, age, hobbies }: UserProfileProps) {

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age} años</p>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;