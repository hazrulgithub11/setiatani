import { Phone, Printer, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Each footer column fades up with a small stagger between columns.
const footerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const footerCol = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

// ── Data ──────────────────────────────────────────────────────────────────────
// Each column is defined as a typed object so adding/removing links in future
// requires only a data change here, not touching JSX structure.

const ABOUT_LINKS = ["Who We Are", "Our Leadership", "Latest News"] as const;

const BUSINESS_LINKS = ["Plantation", "Palm Oil Milling"] as const;

const SUSTAINABILITY_LINKS = [
  "Sustainability Governance",
  "RSPO Certification",
  "Environmental Stewardship",
  "Community & Smallholders",
] as const;

const QUICK_LINKS = ["Investor Relations", "Careers", "Contact Us"] as const;

// ── Sub-components ────────────────────────────────────────────────────────────

// Reusable column heading — matches the bold white uppercase heading style
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
      {children}
    </h3>
  );
}

// Reusable link item — muted white that brightens on hover
function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a
        href="#"
        className="text-[13px] leading-6 text-white/65 transition-colors hover:text-white"
      >
        {label}
      </a>
    </li>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export function SiteFooter() {
  return (
    <footer className="bg-[#0d1e52]" aria-label="Site footer">
      {/* Subtle diagonal-wave decoration layer — pure CSS, no extra images needed.
          Two overlapping semi-transparent rounded blobs give the footer the
          diagonal blue-shape texture visible in the screenshot. */}
      <div className="relative overflow-hidden">
        {/* Decorative shape — bottom-right blob */}
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#1a3a8f]/30"
          aria-hidden="true"
        />
        {/* Decorative shape — top-right blob */}
        <div
          className="pointer-events-none absolute -right-10 top-0 h-56 w-56 rounded-full bg-[#1a3a8f]/20"
          aria-hidden="true"
        />

        {/* ── Main link columns ── */}
        <div className="relative mx-auto max-w-6xl px-6 py-12">
          {/* 5-column grid on lg+; 2-col on sm; 1-col on mobile */}
          <motion.div
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5"
            variants={footerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >

            {/* Column 1 — Company info */}
            <motion.div className="lg:col-span-1" variants={footerCol}>
              <ColHeading>Setia Tani Berhad</ColHeading>
              <address className="not-italic">
                <p className="text-[13px] leading-6 text-white/65">
                  Lot 1234, Jalan Perladangan 1,
                  <br />
                  85000 Segamat,
                  <br />
                  Johor Darul Takzim,
                  <br />
                  Malaysia.
                </p>

                {/* Contact details — icon + text pairs for screen-reader clarity */}
                <ul className="mt-4 space-y-1.5">
                  <li className="flex items-center gap-2 text-[13px] text-white/65">
                    <Phone className="h-3.5 w-3.5 shrink-0 text-white/50" aria-hidden="true" />
                    <a href="tel:+6071112345" className="hover:text-white transition-colors">
                      +607-111 2345
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-[13px] text-white/65">
                    {/* Fax uses the Printer icon — closest semantic match in Lucide */}
                    <Printer className="h-3.5 w-3.5 shrink-0 text-white/50" aria-hidden="true" />
                    <span>+607-111 2346</span>
                  </li>
                  <li className="flex items-center gap-2 text-[13px] text-white/65">
                    <Mail className="h-3.5 w-3.5 shrink-0 text-white/50" aria-hidden="true" />
                    <a href="mailto:info@setiatani.com.my" className="hover:text-white transition-colors">
                      info@setiatani.com.my
                    </a>
                  </li>
                </ul>
              </address>
            </motion.div>

            {/* Column 2 — About Setia Tani */}
            <motion.div variants={footerCol}>
              <ColHeading>About Setia Tani</ColHeading>
              <ul className="space-y-0.5">
                {ABOUT_LINKS.map((label) => (
                  <FooterLink key={label} label={label} />
                ))}
              </ul>
            </motion.div>

            {/* Column 3 — Our Operations */}
            <motion.div variants={footerCol}>
              <ColHeading>Our Operations</ColHeading>
              <ul className="space-y-0.5">
                {BUSINESS_LINKS.map((label) => (
                  <FooterLink key={label} label={label} />
                ))}
              </ul>
            </motion.div>

            {/* Column 4 — Sustainability */}
            <motion.div variants={footerCol}>
              <ColHeading>Sustainability</ColHeading>
              <ul className="space-y-0.5">
                {SUSTAINABILITY_LINKS.map((label) => (
                  <FooterLink key={label} label={label} />
                ))}
              </ul>
            </motion.div>

            {/* Column 5 — Quick Links */}
            <motion.div variants={footerCol}>
              <ColHeading>Quick Links</ColHeading>
              <ul className="space-y-0.5">
                {QUICK_LINKS.map((label) => (
                  <FooterLink key={label} label={label} />
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Copyright bar ── */}
        <div className="relative border-t border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <p className="text-center text-[12px] text-white/50">
              © Setia Tani Berhad. 202301012345 (1234567-X). All rights reserved.{" "}
              |{" "}
              <a href="#" className="hover:text-white/80 transition-colors underline-offset-2 hover:underline">
                PDPA
              </a>{" "}
              |{" "}
              <a href="#" className="hover:text-white/80 transition-colors underline-offset-2 hover:underline">
                Terms of Use
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
