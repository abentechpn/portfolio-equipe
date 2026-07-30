import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ theme, toggleTheme, children }) {
  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;