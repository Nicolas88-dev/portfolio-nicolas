import { Home, User, Briefcase, Images, Mail } from "lucide-react";

const links = [
  { id: "intro", label: "intro", icon: Home },
  { id: "about", label: "À propos", icon: User },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "portfolio", label: "Portfolio", icon: Images },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function LeftIconNavigation({ activeSection, setActiveSection }) {
  return (
    <nav className="relative z-20 rounded-full bg-white shadow-lg lg:fixed lg:left-8 lg:top-1/2 lg:-translate-y-1/2">
      <ul className="flex overflow-hidden rounded-full lg:flex-col">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.id}>
              <button
                onClick={() => setActiveSection(link.id)}
                className={`flex h-16 w-16 items-center justify-center border-b border-black/10 transition ${
                  activeSection === link.id
                    ? "bg-emerald-400 text-black"
                    : "text-black hover:bg-emerald-100"
                }`}
                title={link.label}
              >
                <Icon size={22} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}