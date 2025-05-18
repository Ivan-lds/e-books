import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contato";
  const isProductsPage = location.pathname === "/produtos";
  const shouldApplySpecialStyle = isContactPage || isProductsPage;

  return (
    <header className={shouldApplySpecialStyle ? "contact-header" : ""}>
      <nav className={shouldApplySpecialStyle ? "contact-nav" : ""}>
        <h1>
          <Link to="/">E-books</Link>
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
