import React from "react";

const ErrorPage = ({
  message = "Something went wrong. Please try again later.",
}) => {
  // Inline styles for the loader
  const loaderStyle = {
    border: "4px solid #f3f3f3", // Light grey
    borderTop: "4px solid #3498db", // Blue
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    animation: "spin 1s linear infinite",
  };

  // Keyframes for spinning animation
  const spinKeyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      <style>{spinKeyframes}</style>
      <div className="text-center">
        <p className="text-lg font-bold mb-2">Oops! Something went wrong.</p>
        <p className="mb-4">{message}</p>
        <div className="flex justify-center items-center">
          <div style={loaderStyle}></div>
        </div>
        <p className="mt-4">Please wait while we try to resolve the issue.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
