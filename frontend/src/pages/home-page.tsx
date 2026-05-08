import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function HomePage() {
  return (
    <section className="grid gap-6">
      <Card className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200">
          <Sparkles className="h-3.5 w-3.5" />
          Frontend initialized successfully
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Your React frontend is ready.
        </h1>
        <p className="max-w-2xl text-slate-300">
          This starter includes React 19, TypeScript, Vite, React Router, Tailwind
          v4, and reusable UI helpers.
        </p>
        <div className="flex items-center gap-3">
          <Button>
            Start Building
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Link to="/missing">
            <Button variant="secondary">Test 404 Page</Button>
          </Link>
        </div>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-lg font-medium">Quick commands</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>
            <code className="rounded bg-slate-800 px-2 py-1">pnpm install</code>
          </li>
          <li>
            <code className="rounded bg-slate-800 px-2 py-1">pnpm dev</code>
          </li>
          <li>
            <code className="rounded bg-slate-800 px-2 py-1">pnpm lint</code>
          </li>
          <li>
            <code className="rounded bg-slate-800 px-2 py-1">pnpm build</code>
          </li>
        </ul>
      </Card>
    </section>
  );
}
