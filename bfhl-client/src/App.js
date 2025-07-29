import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseCard from './components/ResponseCard';

function App() {
  const [response, setResponse] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">BFHL API Tester</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-800 text-white px-4 py-2 rounded dark:bg-gray-200 dark:text-black"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
          <InputForm onResponse={setResponse} />
          {response && <ResponseCard response={response} />}
        </div>
      </div>
    </div>
  );
}

export default App;
