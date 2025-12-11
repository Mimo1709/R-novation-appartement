import { Home, Briefcase, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    setMenuOpen(false);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    navigate("/"); // retourne à la page d'accueil
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar bg-base-100 fixed top-0 z-50 border-b border-gray-800 px-8">
        <div className="flex-1">
          <button
            onClick={handleHomeClick}
            className="text-2xl font-bold pl-4 text-left"
          >
            Rénovation Paris
          </button>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal gap-6">
            <li>
              <button
                onClick={handleHomeClick}
                className="flex items-center gap-2 btn-ghost"
              >
                <Home size={18} /> Accueil
              </button>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <Briefcase size={18} /> Services
              </a>
            </li>
            <li>
              <button
                onClick={handleContactClick}
                className="flex items-center gap-2 btn-ghost"
              >
                <Phone size={18} /> Contact
              </button>
            </li>
          </ul>
        </div>
        <div className="flex-none lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-base-100 z-40 lg:hidden">
          <ul className="menu p-4">
            <li>
              <button
                onClick={handleHomeClick}
                className="flex items-center gap-2 btn-ghost w-full text-left"
              >
                <Home size={18} /> Accueil
              </button>
            </li>
            <li>
              <a className="flex items-center gap-2">
                <Briefcase size={18} /> Services
              </a>
            </li>
            <li>
              <button
                onClick={handleContactClick}
                className="flex items-center gap-2 btn-ghost w-full text-left"
              >
                <Phone size={18} /> Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
