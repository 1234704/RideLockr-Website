// FuturePlaceholder.jsx
import React, { useEffect, useRef } from 'react';

const FuturePlaceholder = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.future-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const futureFeatures = [
    {
      id: 1,
      icon: "🧠",
      title: "AI Theft Prediction",
      description: "Machine learning detects suspicious movement patterns and alerts you before theft happens"
    },
    {
      id: 2,
      icon: "🔋",
      title: "Solar Charging Support",
      description: "Device charges in sunlight with 7 days battery backup without any external power"
    },
    {
      id: 3,
      icon: "🎙️",
      title: "Voice Control",
      description: "Say 'Lock my bike' and the remote immobilizer activates instantly"
    },
    {
      id: 4,
      icon: "🆘",
      title: "Emergency SOS",
      description: "One-touch alert sends instant notification to family and police with live location"
    }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>What's Coming Next? 🔮</h2>
          <p style={styles.subtitle}>
            We're constantly improving RideLockr. Here's what's on our roadmap
          </p>
        </div>

        <div style={styles.grid}>
          {futureFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="future-card future-card-hover"
              style={{ ...styles.card, animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              <div style={styles.iconWrapper}>
                <span style={styles.icon}>{feature.icon}</span>
              </div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.description}>{feature.description}</p>
              {/* Pulsing badge for attention grabbing */}
              <div style={styles.badge} className="pulse-badge">
                ⚡ Coming Soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#0a0a0a",
    fontFamily: "'Inter', 'Poppins', sans-serif"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
  header: {
    textAlign: "center",
    marginBottom: "60px"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "16px"
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#a0a0a0",
    maxWidth: "600px",
    margin: "0 auto"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px"
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: "16px",
    padding: "32px 24px",
    textAlign: "center",
    border: "2px solid #2a2a2a",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer"
  },
  iconWrapper: {
    marginBottom: "20px"
  },
  icon: {
    fontSize: "48px"
  },
  featureTitle: {
    fontSize: "1.35rem",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "12px"
  },
  description: {
    fontSize: "0.95rem",
    color: "#b0b0b0",
    lineHeight: "1.5",
    marginBottom: "20px"
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#00ff8822",
    color: "#00ff88",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "0.75rem",
    fontWeight: "500",
    animation: "pulseBorder 1.5s infinite"
  }
};

export default FuturePlaceholder;