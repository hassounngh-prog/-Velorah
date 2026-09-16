import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", active: true },
  { label: "Studio", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

function Navbar() {
  return (
    <nav className="relative z-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <a
          href="#"
          className="text-3xl tracking-tight text-foreground"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Velorah
          <sup className="text-xs">&reg;</sup>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href="#"
                className={cn(
                  "text-sm text-muted-foreground transition-colors hover:text-foreground",
                  link.active && "text-foreground",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="liquid-glass cursor-pointer rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03]"
        >
          Begin Journey
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
