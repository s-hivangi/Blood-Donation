import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import ContactPage from "./Contactpg.jsx"; // Using your existing Contactpg.jsx file
import Navbar from "./Navbar.jsx";
import { useLocation } from "react-router-dom";

function App() {
  // Use a function component inside BrowserRouter to access useLocation
  function AppContent() {
    const location = useLocation();
    const showNavbar = !["/login", "/signup"].includes(location.pathname);

    return (
      <>
        {showNavbar && <Navbar />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* Add these routes for your other pages */}
          <Route path="/donate" element={<div>Donate Page Coming Soon</div>} />
          <Route path="/request" element={<div>Request Page Coming Soon</div>} />
          {/* Add this for backward compatibility with your navbar */}
          <Route path="/contact" element={<Navigate to="/contact-us" />} />
        </Routes>
      </>
    );
  }

  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;