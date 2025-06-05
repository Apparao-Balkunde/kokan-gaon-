import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-4xl font-bold text-green-900">Welcome to Kokan Gaon Game!</h1>

      <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 shadow-lg">
        Start Game
      </button>

      <div className="bg-white p-4 rounded-xl shadow-md w-72 text-center">
        <p className="text-lg font-medium text-gray-800">Player: <span className="font-bold text-green-700">Apps</span></p>
        <p className="text-sm text-gray-500">Points: <span className="font-semibold text-green-600">120</span></p>
      </div>
    </div>
  );
}

export default App;