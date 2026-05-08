import { Link } from "react-router-dom";

// NotFoundPage is rendered outside AppLayout (the `*` catch-all route), so it
// owns its own full-page wrapper. We keep it self-contained and light-themed to
// match the rest of the site now that the global shell is no longer dark.
export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400">404</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-gray-500">
          The route you visited does not exist yet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[#003087] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#00418f]"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
