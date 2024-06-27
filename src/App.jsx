import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Home } from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { UserAccompte } from "./pages/UserAccompte";
import { useSelector } from "react-redux";
export function App() {
  const token = useSelector((state) => state.login.userToken);
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/Argent-Bank/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={token ? <UserAccompte /> : <LoginPage />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
