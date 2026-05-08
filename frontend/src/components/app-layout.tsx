import { Outlet } from "react-router-dom";

// AppLayout is intentionally minimal — it delegates full layout control to each
// child page. This lets HomePage own the Scientex design (white navbar, full-width
// hero) while future pages can adopt their own shells without fighting a global wrapper.
export function AppLayout() {
  return <Outlet />;
}
