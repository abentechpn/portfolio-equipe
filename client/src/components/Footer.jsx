import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      <nav aria-label="Liens du pied de page">
        <Link to="/contact">Contact</Link>

        <a

          href="https://wa.me/50938063319"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nous contacter sur WhatsApp"
          className="lien-whatsapp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.77-1.84-.2-.48-.4-.42-.56-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.66.31-.23.24-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.24 3.75.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28z" />
          </svg>
        </a>

        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </nav>
    </footer>
  );
}

export default Footer;