import React from 'react';
import './App.css';

// Import images
const headerImage = 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80';
const instagramIcon = 'https://cdn-icons-png.flaticon.com/512/174/174855.png';
const facebookIcon = 'https://cdn-icons-png.flaticon.com/512/124/124010.png';
const yelpIcon = 'https://cdn-icons-png.flaticon.com/512/174/174882.png';
const googleIcon = 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <nav>
            <div className="logo">
                <h1>Aaron's on 7th</h1>
                <p>Gentlemens Barber Shop</p>
            </div>
            <ul className="nav-links">
                <li><a href="#hours">Hours</a></li>
                <li><a href="#location">📱 Contact</a></li>
                <li><a href="#social">Social</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="https://square.site/book/B612PKBNYV2G8/aaron-s-on-7th-gentlemens-barber-shop-fort-worth-tx" className="book-now">Book Now</a></li>
            </ul>
        </nav>
      </header>

      <section className="hero">
          <img src={headerImage} alt="Aaron's Barbershop Interior" className="hero-image" />
          <div className="hero-content">
              <h2>LOOK YOUR BEST, FEEL YOUR BEST</h2>
              <a href="https://square.site/book/B612PKBNYV2G8/aaron-s-on-7th-gentlemens-barber-shop-fort-worth-tx" className="cta-button">Book Your Appointment</a>
          </div>
      </section>

      <section className="booking-info">
          <div className="container">
              <h3>Be the MASTER of YOUR SCHEDULE</h3>
              <p>Using our Top Ranked online booking system. Move on from phone delays and Take Charge of the time, date, and Expert that YOU choose for your service.</p>
              <p className="note">Must type "First Appointment" in the Square booking notes.</p>
          </div>
      </section>

      <section id="hours" className="hours">
          <div className="container">
              <h2>Hours</h2>
              <div className="hours-grid">
                  <div className="hours-item">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                      <span>Saturday</span>
                      <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                      <span>Sunday</span>
                      <span>Closed</span>
                  </div>
              </div>
          </div>
      </section>

      <section id="location" className="location">
          <div className="container">
              <h2>Location</h2>
              <div className="contact-info">
                  <p><i className="fas fa-phone"></i> <a href="tel:817-984-1062">(817) 984-1062</a></p>
                  <p><i className="fas fa-map-marker-alt"></i> <a href="https://www.google.com/maps?cid=6762569313616202159">3402 W 7th St, Fort Worth, TX 76107</a></p>
              </div>
          </div>
      </section>

      <section id="social" className="social">
          <div className="container">
              <h2>Social</h2>
              <div className="social-grid">
                  <a href="https://www.instagram.com/aaronson7th" className="social-item">
                      <img src={instagramIcon} alt="Instagram" />
                      <span>Instagram</span>
                  </a>
                  <a href="https://www.facebook.com/aaronson7th" className="social-item">
                      <img src={facebookIcon} alt="Facebook" />
                      <span>Facebook</span>
                  </a>
                  <a href="https://www.yelp.com/biz/aarons-on-7th-fort-worth" className="social-item">
                      <img src={yelpIcon} alt="Yelp" />
                      <span>Yelp</span>
                  </a>
                  <a href="https://www.google.com/maps?cid=6762569313616202159" className="social-item">
                      <img src={googleIcon} alt="Google Reviews" />
                      <span>Google Reviews</span>
                  </a>
              </div>
              <div className="rating">
                  <p>⭐ 4.7 stars (194 reviews)</p>
              </div>
          </div>
      </section>

      <footer>
          <div className="container">
              <p>&copy; 2024 Aaron's on 7th • Gentlemens Barber Shop. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default App;
