import React, { useState } from 'react';
import axios from 'axios';

const Settings = ({ userId }) => {
  const [preferences, setPreferences] = useState({});

  const savePreferences = () => {
    axios.post(`/api/users/${userId}/preferences`, preferences)
      .then(response => alert('Préférences sauvegardées !'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Préférences</h2>
      <input
        type="text"
        placeholder="Régime alimentaire"
        onChange={(e) => setPreferences({ ...preferences, diet: e.target.value })}
      />
      <button onClick={savePreferences}>Sauvegarder</button>
    </div>
  );
};

export default Settings;