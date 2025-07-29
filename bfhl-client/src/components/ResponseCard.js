import React from 'react';

const ResponseCard = ({ response }) => {
  return (
    <div className="mt-6 bg-gray-200 dark:bg-gray-800 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">API Response</h2>
      <pre className="bg-gray-100 dark:bg-gray-900 text-sm p-4 rounded overflow-x-auto text-black dark:text-green-400">
        {JSON.stringify(response, null, 2)}
      </pre>
    </div>
  );
};

export default ResponseCard;
