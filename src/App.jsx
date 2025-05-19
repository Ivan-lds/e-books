import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import EbookDetail from "./pages/EbookDetail";

function AppContent() {
  const location = useLocation();
  const showFooter =
    location.pathname !== "/contato" && location.pathname !== "/produtos";

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/ebooks/:id" element={<EbookDetail />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
