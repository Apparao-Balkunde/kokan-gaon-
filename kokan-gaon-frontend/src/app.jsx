import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://kokan-gaon-backend.onrender.com/data") // Render URL वापर
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold text-green-800 mb-4">
        Welcome to Kokan Gaon Game!
      </h1>

      {data ? (
        <div className="bg-white p-4 shadow rounded">
          <p className="text-gray-800">Villager Name: {data.name}</p>
          <p className="text-gray-800">Task: {data.task}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading data from gaon...</p>
      )}
    </div>
  );
}

export default App;