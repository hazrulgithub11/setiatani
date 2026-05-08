import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "About Setia Tani", hasDropdown: true },
  { label: "Our Operations", hasDropdown: true },
  { label: "Sustainability", hasDropdown: true },
  { label: "Investor Relations", hasDropdown: true },
  { label: "Careers", hasDropdown: false },
] as const;

function SetiataniLogo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-2"
      aria-label="Setia Tani — go to homepage"
    >
      {/* Circular badge: outer gold ring, inner green fill, yellow bottom swoosh */}
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="26" cy="26" r="25" fill="#003087" />
        <circle cx="26" cy="26" r="21" fill="#004499" />
        {/* Stylised "ST" letterform */}
        <text
          x="26"
          y="33"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
        >
          ST
        </text>
        {/* Gold swoosh arc at the bottom of the circle */}
        <path
          d="M 6 44 Q 26 54 46 44"
          stroke="#F5A623"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark + tagline */}
      <div className="flex flex-col leading-none">
        <span className="text-[17px] font-extrabold uppercase tracking-widest text-[#003087]">
          SETIA TANI
        </span>
        <span className="mt-0.5 text-[9px] italic text-gray-400">
          quality, sustainability &amp; growth
        </span>
      </div>
    </Link>
  );
}

export function Navbar() {
  // Controls the mobile slide-down menu
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <SetiataniLogo />

        {/* ── Desktop navigation ── hidden on small screens */}
        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  className="flex items-center gap-0.5 text-[13px] font-medium text-gray-700 transition-colors hover:text-[#003087]"
                  // aria-haspopup signals to screen readers that a submenu exists
                  aria-haspopup={item.hasDropdown ? "true" : undefined}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className="ml-0.5 h-3 w-3 text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── Right-side actions ── */}
        <div className="flex items-center gap-3">
          <button
            className="p-1 text-gray-600 transition-colors hover:text-gray-900"
            aria-label="Open search"
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Hamburger — visible only on mobile */}
          <button
            className="p-1 text-gray-600 transition-colors hover:text-gray-900 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile nav drawer — slides in below the header bar ── */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white md:hidden"
        >
          <ul className="flex flex-col divide-y divide-gray-100 px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-gray-700"
                  aria-haspopup={item.hasDropdown ? "true" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
