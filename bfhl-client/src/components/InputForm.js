import React, { useState } from 'react';
import axios from 'axios';

function InputForm({ onResponse }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatted = input.split(',').map(el => el.trim().replace(/['"]+/g, ''));
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/bfhl', {
        data: formatted
      });
      onResponse(res.data);
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea 
        className="w-full p-3 border border-gray-300 rounded dark:bg-gray-800 dark:text-white"
        rows="4"
        placeholder='Enter values separated by commas e.g. "1,a,$,4"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button 
        type="submit" 
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Loading...
          </span>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

export default InputForm;
