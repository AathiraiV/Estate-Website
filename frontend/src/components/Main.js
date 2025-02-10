import React from "react";
import "./Main.css";

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">LamaEstate</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Agents</li>
        </ul>
        <div className="auth-buttons">
          <button className="sign-in">Sign in</button>
          <button className="sign-up">Sign up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Find Real Estate & Get Your Dream Place</h1>
        

        {/* Search Box */}
        <div className="search-box">
          <button className="tab active">Buy</button>
          <button className="tab">Rent</button>
          <input type="text" placeholder="City Location" />
          <input type="text" placeholder="Min Price" />
          <input type="text" placeholder="Max Price" />
          <button className="search-btn">🔍</button>
        </div>
      </header>

      {/* Statistics Section */}
      <div className="stats">
        <div>
          <h2>16+</h2>
          <p>Years of Experience</p>
        </div>
        <div>
          <h2>200</h2>
          <p>Award Gained</p>
        </div>
        <div>
          <h2>1200+</h2>
          <p>Property Ready</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img src="https://source.unsplash.com/300x400/?building" alt="Building 1" />
        <img src="https://source.unsplash.com/300x400/?real-estate" alt="Building 2" />
        <img src="https://source.unsplash.com/300x400/?architecture" alt="Building 3" />
      </div>
    </div>
  );
};

export default App;
