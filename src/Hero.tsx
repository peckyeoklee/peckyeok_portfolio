function Hero() {
  return (
    <>
      <div className="hero-page">
        {/* Header / Navigation */}
        <header className="header">
          <h1 className="site-name">PECK YEOK</h1>
          <nav className="nav">
            <a href="#about" className="nav-link">ABOUT</a>
            <a href="#works" className="nav-link">WORKS</a>
            <a href="#contact" className="nav-link">CONTACT</a>
          </nav>
        </header>

        {/* Hero Text */}
        <section className="hero-text">
          <p>I thrive at the intersection of data, design and technology.</p>
        </section>

        {/* Decorative Illustration Row */}
        <div className="decorative-images">
          {/* Order: Yellow (left) - Red (middle) - Blue (right) */}
          <img src="/images/bear-3.png" alt="" className="bear-image bear-1" />
          <img src="/images/bear-2.png" alt="" className="bear-image bear-2" />
          <img src="/images/bear-1.png" alt="" className="bear-image bear-3" />
        </div>
      </div>

      {/* WORKS Section Background Transition */}
      <div className="works-background-container">
        <img 
          src="/images/lightPinkBg.png" 
          alt="" 
          className="background-layer light-pink-layer" 
        />
        <img 
          src="/images/darkPinkBg.png" 
          alt="" 
          className="background-layer dark-pink-layer" 
        />
      </div>
    </>
  );
}

export default Hero;
