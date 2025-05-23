// 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/musaibzahoor/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching repos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <nav className="navbar">
        <h1>Musaib Zahoor</h1>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <section className="hero">
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Musaib Zahoor
        </motion.h2>
        <p className="hero-subtitle">
          Full Stack Developer | Aviation Enthusiast | Trekker
        </p>
        <a href="#projects" className="hero-btn">
          View My Work
        </a>
      </section>

      <section id="about" className="about">
        <h3>About Me</h3>
        <p>
          I'm a passionate developer from Srinagar with experience in building
          full stack applications. Outside coding, I enjoy flying high
          (aviation), exploring trails (trekking), and playing football.
        </p>
      </section>

      <section id="projects" className="projects">
        <h3>Projects</h3>
        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="projects-list">
            {repos.map((repo) => (
              <div key={repo.id} className="project-card">
                <img
                  src="https://via.placeholder.com/300"
                  alt={repo.name}
                  className="project-image"
                />
                <h4>{repo.name}</h4>
                <p>{repo.description ? repo.description : "No description provided."}</p>
                <div className="project-links">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="skills" className="skills">
        <h3>Skills</h3>
        <div className="skills-list">
          <div className="skill">
            <h4>React</h4>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h4>Node.js</h4>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h4>CSS</h4>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>
          <div className="skill">
            <h4>JavaScript</h4>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="contact" className="contact">
        <h3>Contact Me</h3>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section> */}
      

      <footer className="footer">
        © 2025 Musaib Zahoor. All rights reserved.
      </footer>
    </div>
  );
}
