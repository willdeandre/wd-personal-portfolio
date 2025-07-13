"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Something went wrong!</h1>
      <p className="mb-8 max-w-md text-gray-600">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-red-600 px-6 py-3 text-white transition-colors hover:bg-red-700"
      >
        Try Again
      </button>
    </div>
  );
}
