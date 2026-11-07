
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="project-container">

        {/* ShopKart */}
        <div className="project-card">
          <h3>ShopKart</h3>

          <p>
            An online shopping website developed using React.
          </p>

          <p>Technology: React, CSS, Bootstrap</p>

          <a
            href="https://github.com/snehakolekar2007-cpu/ShopKart"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>

        {/* ChaloChale */}
        <div className="project-card">
          <h3>ChaloChale</h3>

          <p>
            A travel and tourism website to explore beautiful destinations.
          </p>

          <p>Technology: HTML, CSS, JavaScript, Bootstrap</p>

          <a
            href=" https://snehakolekar2007-cpu.github.io/ChaloChale-Travel-App/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>

        {/* BiteBox */}
        <div className="project-card">
          <h3>BiteBox</h3>

          <p>
            An online food ordering website.
          </p>

          <p>Technology: HTML, JavaScript, CSS</p>

          <a
            href=" https://snehakolekar2007-cpu.github.io/BiteBox2.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View Project
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
