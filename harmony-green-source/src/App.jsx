import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MessageCircle } from 'lucide-react';

const HarmonyGreenCoffee = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Apply body styles globally
  React.useEffect(() => {
    // Reset all default margins and padding
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
    document.body.style.lineHeight = '1.6';
    document.body.style.color = '#333';

    // Make sure the root div spans full width
    const rootDiv = document.getElementById('root');
    if (rootDiv) {
      rootDiv.style.margin = '0';
      rootDiv.style.padding = '0';
      rootDiv.style.width = '100%';
      rootDiv.style.minHeight = '100vh';
    }

    return () => {
      // Cleanup on unmount
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.fontFamily = '';
      document.body.style.lineHeight = '';
      document.body.style.color = '';
      if (rootDiv) {
        rootDiv.style.margin = '';
        rootDiv.style.padding = '';
        rootDiv.style.width = '';
        rootDiv.style.minHeight = '';
      }
    };
  }, []);

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      author: "Maria S."
    },
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      author: "James R."
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      author: "Sarah L."
    }
  ];

  const products = [
    {
      name: "Ethiopia Sidamo Grade 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Colombia Supremo",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      image: "/api/placeholder/300/200"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
  };

  const openWhatsApp = () => {
    const phoneNumber = "17542143075";
    const message = "Hello! I'm interested in your coffee products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    header: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      padding: '16px 0'
    },
    headerContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    logoImg: {
      height: '48px',
      width: 'auto'
    },
    logoText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'rgb(6, 129, 27)',
      margin: 0
    },
    contactInfo: {
      display: 'flex',
      gap: '24px',
      fontSize: '14px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    hero: {
      backgroundImage: 'url(/harmony-green/plant-photo.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '40vh',
      padding: '64px 0',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      margin: 0
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    heroContent: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '800px',
      textAlign: 'center',
      color: 'white'
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
      margin: '0 0 24px 0'
    },
    heroText: {
      fontSize: '20px',
      lineHeight: '1.6',
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
      margin: 0
    },
    section: {
      padding: '64px 20px'
    },
    sectionAlt: {
      padding: '64px 20px',
      backgroundColor: '#f9fafb'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    gridItem: {
      textAlign: 'center'
    },
    circle: {
      width: '64px',
      height: '64px',
      borderRadius: '50%',
      backgroundColor: 'rgb(101, 65, 55)',
      margin: '0 auto 24px auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    circleText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px'
    },
    sectionTitle: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: 'rgb(6, 129, 27)',
      marginBottom: '16px'
    },
    sectionText: {
      color: '#6b7280',
      lineHeight: '1.7'
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '32px',
      maxWidth: '1200px',
      margin: '48px auto 0 auto'
    },
    productCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.2s ease',
      border: 'none'
    },
    productImage: {
      height: '192px',
      background: 'linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    productImageContent: {
      textAlign: 'center'
    },
    productImageCircle: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      backgroundColor: 'rgb(101, 65, 55)',
      margin: '0 auto 16px auto'
    },
    productImageText: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'rgb(6, 129, 27)'
    },
    productContent: {
      padding: '24px'
    },
    productTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'rgb(6, 129, 27)',
      marginBottom: '12px'
    },
    productDescription: {
      color: '#6b7280',
      lineHeight: '1.7',
      marginBottom: '16px'
    },
    button: {
      backgroundColor: 'rgb(101, 65, 55)',
      color: 'white',
      fontWeight: '600',
      padding: '8px 24px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      transition: 'opacity 0.2s ease'
    },
    testimonialSection: {
      maxWidth: '800px',
      margin: '48px auto 0 auto',
      position: 'relative',
      textAlign: 'center'
    },
    testimonialText: {
      fontSize: '20px',
      fontStyle: 'italic',
      marginBottom: '24px',
      color: '#374151'
    },
    testimonialAuthor: {
      fontSize: '18px',
      fontWeight: '600',
      color: 'rgb(101, 65, 55)'
    },
    testimonialButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'rgb(6, 129, 27)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    },
    testimonialPrev: {
      left: '0'
    },
    testimonialNext: {
      right: '0'
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '32px'
    },
    dot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgb(6, 129, 27)',
      border: 'none',
      cursor: 'pointer',
      transition: 'opacity 0.2s ease'
    },
    dotActive: {
      opacity: 1
    },
    dotInactive: {
      opacity: 0.4
    },
    footer: {
      backgroundColor: 'rgb(6, 129, 27)',
      color: 'white',
      padding: '48px 20px',
      textAlign: 'center'
    },
    footerTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    footerContact: {
      display: 'flex',
      justifyContent: 'center',
      gap: '32px',
      marginBottom: '24px',
      flexWrap: 'wrap'
    },
    footerText: {
      color: '#bbf7d0',
      margin: 0
    },
    whatsappButton: {
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      width: '56px',
      height: '56px',
      backgroundColor: '#22c55e',
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      zIndex: 1000,
      transition: 'backgroundColor 0.2s ease'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '16px'
    },
    modalContent: {
      backgroundColor: 'white',
      borderRadius: '8px',
      maxWidth: '400px',
      width: '100%',
      padding: '24px'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '16px'
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: 'rgb(6, 129, 27)',
      margin: 0
    },
    modalClose: {
      background: 'none',
      border: 'none',
      fontSize: '20px',
      cursor: 'pointer',
      color: '#9ca3af'
    },
    modalText: {
      color: '#6b7280',
      marginBottom: '24px',
      lineHeight: '1.6'
    },
    modalButton: {
      width: '100%',
      backgroundColor: 'rgb(101, 65, 55)',
      color: 'white',
      fontWeight: '600',
      padding: '12px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      transition: 'opacity 0.2s ease'
    }
  };

  return (
    <>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <img
              src="/harmony-green/assets/harmony-green-logo.png"
              alt="Harmony Green Coffee Logo"
              style={styles.logoImg}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <h1 style={styles.logoText}>
              Harmony Green Coffee
            </h1>
          </div>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <Phone size={16} color="rgb(101, 65, 55)" />
              <span>754-214-3075</span>
            </div>
            <div style={styles.contactItem}>
              <Mail size={16} color="rgb(101, 65, 55)" />
              <span>trading@harmonygreencoffee.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Premium Green Coffee Importing</h2>
          <p style={styles.heroText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
      </section>

      {/* Company Story Sections */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            <div style={styles.gridItem}>
              <div style={styles.circle}>
                <span style={styles.circleText}>1</span>
              </div>
              <h3 style={styles.sectionTitle}>The Beginning</h3>
              <p style={styles.sectionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>

            <div style={styles.gridItem}>
              <div style={styles.circle}>
                <span style={styles.circleText}>2</span>
              </div>
              <h3 style={styles.sectionTitle}>The Quality</h3>
              <p style={styles.sectionText}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
              </p>
            </div>

            <div style={styles.gridItem}>
              <div style={styles.circle}>
                <span style={styles.circleText}>3</span>
              </div>
              <h3 style={styles.sectionTitle}>The Service</h3>
              <p style={styles.sectionText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', fontSize: '36px', marginBottom: '48px' }}>
            Featured Products
          </h2>
          <div style={styles.productGrid}>
            {products.map((product, index) => (
              <div
                key={index}
                style={styles.productCard}
                onClick={() => handleProductClick(product)}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                <div style={styles.productImage}>
                  <div style={styles.productImageContent}>
                    <div style={styles.productImageCircle}></div>
                    <span style={styles.productImageText}>Coffee Bean</span>
                  </div>
                </div>
                <div style={styles.productContent}>
                  <h3 style={styles.productTitle}>{product.name}</h3>
                  <p style={styles.productDescription}>{product.description}</p>
                  <button
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={{ ...styles.sectionTitle, textAlign: 'center', fontSize: '36px', marginBottom: '48px' }}>
            What Our Clients Say
          </h2>
          <div style={styles.testimonialSection}>
            <div>
              <p style={styles.testimonialText}>
                "{testimonials[currentTestimonial].text}"
              </p>
              <p style={styles.testimonialAuthor}>
                {testimonials[currentTestimonial].author}
              </p>
            </div>

            <button
              onClick={prevTestimonial}
              style={{ ...styles.testimonialButton, ...styles.testimonialPrev }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextTestimonial}
              style={{ ...styles.testimonialButton, ...styles.testimonialNext }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div style={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={{
                  ...styles.dot,
                  ...(index === currentTestimonial ? styles.dotActive : styles.dotInactive)
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <h3 style={styles.footerTitle}>Harmony Green Coffee</h3>
          <div style={styles.footerContact}>
            <div style={styles.contactItem}>
              <Phone size={20} />
              <span>754-214-3075</span>
            </div>
            <div style={styles.contactItem}>
              <Mail size={20} />
              <span>trading@harmonygreencoffee.com</span>
            </div>
          </div>
          <p style={styles.footerText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </footer>

      {/* WhatsApp Contact Button */}
      <button
        onClick={openWhatsApp}
        style={styles.whatsappButton}
        title="Contact us on WhatsApp"
        onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
      >
        <MessageCircle size={32} color="white" />
      </button>

      {/* Product Modal */}
      {selectedProduct && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>
                {selectedProduct.name}
              </h3>
              <button
                onClick={closeProductModal}
                style={styles.modalClose}
              >
                ✕
              </button>
            </div>
            <p style={styles.modalText}>{selectedProduct.description}</p>
            <p style={styles.modalText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
            <button
              onClick={openWhatsApp}
              style={styles.modalButton}
              onMouseEnter={(e) => e.target.style.opacity = '0.9'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              Contact us for pricing
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HarmonyGreenCoffee;