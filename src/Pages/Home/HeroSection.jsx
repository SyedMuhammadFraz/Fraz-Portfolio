export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Syed Muhammad Fraz</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am passionate about full stack development and have crafted
            dynamic web applications using the MERN stack. My expertise lies in
            delivering innovative, user-friendly solutions that seamlessly
            integrate front-end and back-end technologies.
          </p>
        </div>
        <a href="./img/cv.pdf" class="btn btn-primary" download>
          Download CV
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/quiz win.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
