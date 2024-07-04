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
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=frazadobgd@gmail.com&su=Contact%20Us&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20get%20in%20touch%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Get In Touch
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/white.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
