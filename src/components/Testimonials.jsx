// Testimonials.jsx - Fixed for Hasan Ali face visibility
import React, { useEffect } from 'react';

const Testimonials = () => {
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

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ali Raza",
      role: "Delivery Rider",
      comment: "RideLock saved my bike from being stolen. Real-time alert helped me take immediate action. Best security system ever!",
      rating: 5,
      image: "/images/delivery rider.jpg",
      textPosition: "bottom"
    },
    {
      id: 2,
      name: "Zainab Salman",
      role: "Student",
      comment: "GPS tracking is very accurate. I always know exactly where my bike is. Highly recommended!",
      rating: 5,
      image: "/images/Student.jpg",
      textPosition: "bottom"
    },
    {
      id: 3,
      name: "Hasan Ali",
      role: "Daily Commuter",
      comment: "Geo-fencing feature is amazing. Whenever my bike leaves the designated area, I get instant alerts. Complete peace of mind!",
      rating: 5,
      image: "/images/Daily commuter.jpg",
      textPosition: "bottom"  // Text upar hoga
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? "#00ff88" : "#555", fontSize: "18px" }}>
          ★
        </span>
      );
    }
    return stars;
  };

  // Dynamic content style based on text position
  const getContentStyle = (position) => {
    if (position === "top") {
      return {
        position: "relative",
        zIndex: 3,
        padding: "35px 30px 20px 30px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",  // TOP mein
        color: "#ffffff"
      };
    }
    if (position === "center") {
      return {
        position: "relative",
        zIndex: 3,
        padding: "30px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#ffffff"
      };
    }
    return {
      position: "relative",
      zIndex: 3,
      padding: "30px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",  // Bottom mein
      paddingBottom: "50px",
      color: "#ffffff"
    };
  };

  // Dynamic image style for better face visibility
  const getImageStyle = (position) => {
    if (position === "top") {
      return {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 65%"  
      };
    }
    if (position === "center") {
      return {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center 30%"
      };
    }
    return {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center 40%"
    };
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>What Riders Say 🏍️</h2>
          <p style={styles.subtitle}>
            Join thousands of satisfied riders who trust RideLockr for their motorcycle security
          </p>
        </div>

        <div style={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
              style={{ ...styles.card, animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image with Overlay */}
              <div style={styles.imageWrapper}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  style={getImageStyle(testimonial.textPosition)}
                />
                <div style={styles.overlay}></div>
              </div>
              
              {/* Content on top of image - dynamic position */}
              <div style={getContentStyle(testimonial.textPosition)}>
                <div style={styles.quoteIcon}>“</div>
                <p style={styles.comment}>{testimonial.comment}</p>
                <div style={styles.stars}>{renderStars(testimonial.rating)}</div>
                <h4 style={styles.name}>{testimonial.name}</h4>
                <p style={styles.role}>{testimonial.role}</p>
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
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "30px"
  },
  card: {
    position: "relative",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    height: "480px",
    opacity: 0
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 100%)",
    zIndex: 2
  },
  quoteIcon: {
    fontSize: "45px",
    color: "#00ff88",
    opacity: 0.35,
    marginBottom: "5px",
    fontFamily: "Georgia, serif"
  },
  comment: {
    fontSize: "0.92rem",
    color: "#ffffff",
    lineHeight: "1.45",
    marginBottom: "12px",
    fontStyle: "italic",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
  },
  stars: {
    marginBottom: "10px"
  },
  name: {
    fontSize: "1.15rem",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "2px",
    textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
  },
  role: {
    fontSize: "0.8rem",
    color: "#00ff88",
    fontWeight: "500"
  }
};

// Add CSS for animations
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .testimonial-card {
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  .testimonial-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
  }
  
  .testimonial-card:hover .overlay {
    background: linear-gradient(135deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 100%);
  }
`;
document.head.appendChild(styleSheet);

export default Testimonials;