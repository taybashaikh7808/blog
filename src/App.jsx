import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">TailwindCSS is Working! 🎉</h1>
      <button className="mt-5 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Click Me
      </button>
    </div>
  );
};

export default App;
