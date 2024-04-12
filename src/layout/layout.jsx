import Footer from "../components/Footer";
import Front from "../components/Front";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
function Layout({ children, showHero = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Front />}
      <div className="container mx-auto p-2 flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
