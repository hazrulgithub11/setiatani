import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function NotFoundPage() {
  return (
    <div className="mx-auto mt-16 max-w-xl">
      <Card className="space-y-4 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">404</p>
        <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
        <p className="text-slate-300">
          The route you visited does not exist yet.
        </p>
        <div>
          <Link to="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
