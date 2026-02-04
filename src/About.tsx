function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">ABOUT</h2>
          <p className="about-description">
            Now that you've seen what I can do, let me introduce myself! ✨ Hello! I'm Peck Yeok, but you can call me Pei Pei!
          </p>

          <p className="about-description">
            Whether I'm diving into UI/UX design or data analysis, I love bridging the gap between technical back-ends and intuitive front-ends.
          </p>
          <p className="about-description">
            I tend to see patterns in everything...Whether I'm cleaning a massive dataset or following an intricate crochet pattern. Honestly, the patience and detail-orientation needed to finish a complex piece is exactly what I bring to the table when I'm debugging code or fine-tuning a model.
          </p>
        </div>
        <div className="about-illustration">
          <img 
            src="/images/about-illustration.png" 
            alt="Cute bear with galaxy jellyfish" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
}

export default About;

