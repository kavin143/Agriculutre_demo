import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../utils/authContext";
import { Leaf, Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo login logic
    const isAdmin = email === "admin@agri.com";
    const isVendor = email === "vendor@agri.com";

    const userData = {
      name: isAdmin ? "Admin User" : isVendor ? "Vendor User" : "John Farmer",
      email: email,
      isPremium: false,
      isAdmin: isAdmin,
      isVendor: isVendor,
    };

    login(userData);

    if (isAdmin) {
      navigate("/admin");
    } else if (isVendor) {
      navigate("/vendor");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox} className="fade-in">
        <div style={styles.logoSection}>
          <Leaf size={48} color="var(--primary-green)" />
          <h1 style={styles.title}>Welcome Back</h1>
          <p style={styles.subtitle}>Login to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div className="form-group">
            <label className="form-label">
              <Mail size={18} />
              Email Address
            </label>
            <input
              type="email"
              className="form-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <Lock size={18} />
              Password
            </label>
            <input
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={styles.submitBtn}
          >
            Login to Dashboard
          </button>

          <div style={styles.demoCredentials}>
            <p style={styles.demoTitle}>Demo Credentials:</p>
            <p>User: user@agri.com</p>
            <p>Vendor: vendor@agri.com</p>
            <p>Admin: admin@agri.com</p>
            <p>Password: any</p>
          </div>
        </form>

        <p style={styles.footer}>
          Don't have an account?{" "}
          <Link to="/register" style={styles.link}>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background:
      "linear-gradient(135deg, var(--primary-green), var(--light-green))",
    padding: "2rem",
  },
  loginBox: {
    width: "100%",
    maxWidth: "480px",
    background: "var(--white)",
    borderRadius: "24px",
    padding: "3rem",
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  },
  logoSection: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "900",
    color: "var(--text-dark)",
    marginTop: "1rem",
  },
  subtitle: {
    color: "var(--text-gray)",
    marginTop: "0.5rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  submitBtn: {
    width: "100%",
    justifyContent: "center",
    padding: "1rem",
    fontSize: "1.1rem",
    marginTop: "1rem",
  },
  demoCredentials: {
    marginTop: "1.5rem",
    padding: "1rem",
    background: "var(--light-gray)",
    borderRadius: "12px",
    fontSize: "0.85rem",
    color: "var(--text-gray)",
  },
  demoTitle: {
    fontWeight: "700",
    color: "var(--primary-green)",
    marginBottom: "0.5rem",
  },
  footer: {
    textAlign: "center",
    marginTop: "2rem",
    color: "var(--text-gray)",
  },
  link: {
    color: "var(--primary-green)",
    fontWeight: "700",
  },
};

export default LoginPage;
