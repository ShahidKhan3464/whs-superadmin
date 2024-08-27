'use client';

export default function Error({ error }) {
  return (
    <div className="flex-center flex-col min-h-screen">
      <h1 className="text-gray700 text-4xl text-center font-semibold mb-2.5">
        Something went wrong
      </h1>
      <p className="text-lg text-gray600 text-center">
        {error.message || 'An unknown error occurred'}
      </p>
    </div>
  );
}
