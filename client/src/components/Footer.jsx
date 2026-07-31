function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
      <nav aria-label="Liens du pied de page">
        <a href="mailto:contact@example.com">Contact</a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>
  );
}

export default Footer;