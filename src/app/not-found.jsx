import React from 'react';

export default function NotFound() {
  return (
    <div className="flex-center flex-col min-h-screen">
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray600 text-center">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}
