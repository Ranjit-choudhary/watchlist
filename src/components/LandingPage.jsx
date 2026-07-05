import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function LandingPage() {
  const handleSignIn = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Never Miss Your Next Binge-Worthy Show</h1>
          <p className="hero-subtitle">
            Track movies and TV shows, organize by priority, get notified about new episodes, 
            and sync with your calendar. All in one beautiful app.
          </p>
          <button onClick={handleSignIn} className="cta-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Get Started - It's Free
          </button>
          <p className="hero-note">No credit card required • Sync across devices</p>
        </div>
        <div className="hero-image">
          <div className="hero-mockup">
            <div className="mockup-screen">
              <div className="mockup-card">
                <div className="mockup-poster"></div>
                <div className="mockup-info">
                  <div className="mockup-title"></div>
                  <div className="mockup-meta"></div>
                </div>
              </div>
              <div className="mockup-card">
                <div className="mockup-poster"></div>
                <div className="mockup-info">
                  <div className="mockup-title"></div>
                  <div className="mockup-meta"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Everything You Need to Manage Your Watchlist</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Priority Tiers</h3>
            <p>Organize shows by how excited you are. From "Can't Wait" to "Maybe Later"</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📺</div>
            <h3>Episode Tracking</h3>
            <p>Mark which seasons you've watched and get notified when new ones drop</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Smart Notifications</h3>
            <p>Never miss a new episode. Get alerts when your shows release new seasons</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Calendar Sync</h3>
            <p>Add reminders to Google Calendar so you never forget to watch</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>TMDB Integration</h3>
            <p>Search 1M+ movies & series with ratings, trailers, and release dates</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful UI</h3>
            <p>Netflix-inspired design that works perfectly on desktop and mobile</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>Simple, Yet Powerful</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search & Add</h3>
            <p>Find any movie or TV show from TMDB's massive database</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Organize by Priority</h3>
            <p>Sort into 5 tiers based on how eager you are to watch</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Track Progress</h3>
            <p>Mark which seasons you've watched, get notified about new ones</p>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="stats">
        <div className="stats-container">
          <div className="stat">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Movies & Shows</div>
          </div>
          <div className="stat">
            <div className="stat-number">Free</div>
            <div className="stat-label">Forever</div>
          </div>
          <div className="stat">
            <div className="stat-number">☁️</div>
            <div className="stat-label">Cloud Sync</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Start Tracking Your Watchlist Today</h2>
        <p>Join and organize your entertainment life in minutes</p>
        <button onClick={handleSignIn} className="cta-button-large">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign In with Google
        </button>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <p>Made with ❤️ for movie & TV enthusiasts by Ranjit and Ai</p>
        <div className="footer-links">
          <a href="https://github.com/Ranjit-choudhary" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span>•</span>
          <a href="mailto:ranjit.choudhary0123@gmail.com">Contact</a>
        </div>
      </footer>
    </div>
  );
}



