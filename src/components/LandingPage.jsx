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
          <h1>Never Miss a New Season</h1>
          <p className="hero-subtitle">
            Add the shows you follow and we keep watch. When a new season is announced,
            its premiere date lands on your list. When it airs, you're flagged, right
            from where you left off.
          </p>
          <button onClick={handleSignIn} className="cta-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>
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

      {/* Main selling point: new-season tracking */}
      <section className="features">
        <h2>Built Around New Seasons</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📣</div>
            <h3>Announced? It's on your list</h3>
            <p>When a show is renewed and gets a premiere date, the date shows up right on its card. No more hunting through release news.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⏳</div>
            <h3>Checked on the right day</h3>
            <p>We know when each show is due, so we check again the day it arrives, and keep an eye out for new announcements and date changes in between.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Out now? You'll know</h3>
            <p>New episodes light up on your list and in New Episodes, matched against how far you've watched, so you know exactly what's new for you.</p>
          </div>
        </div>
      </section>

      {/* Everything else */}
      <section className="features">
        <h2>Plus Everything Else You Need</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔥</div>
            <h3>Priority Tiers</h3>
            <p>Rate everything from 1 to 5 flames. The list puts the most overdue, most wanted titles on top.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🍿</div>
            <h3>Where to Watch</h3>
            <p>See which streaming services in your country have a title, and where to rent or buy it.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎲</div>
            <h3>Surprise Me</h3>
            <p>Pick your services, and optionally a genre or era. You'll get a suggestion based on what you love.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎞️</div>
            <h3>The Vault</h3>
            <p>Finished something? Rate it out of 10 and it joins your own S–D tier list of everything you've watched.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3>Trailers & Franchises</h3>
            <p>Watch trailers, follow a franchise in release order, and find more like it.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📅</div>
            <h3>Calendar Reminders</h3>
            <p>Add a premiere or release date to Google Calendar in one click.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Search & Add</h3>
            <p>Search any movie or series and add it in a couple of clicks</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Rank by Eagerness</h3>
            <p>Put each title into one of 5 tiers based on how much you want to watch it</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>We Keep Watch</h3>
            <p>New seasons get dated when announced and flagged when they air</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Stop Checking If Your Show Is Back</h2>
        <p>Sign in, add the shows you're waiting on, and we'll tell you when they return.</p>
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



