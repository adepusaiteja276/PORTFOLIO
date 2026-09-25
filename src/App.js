import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaDatabase,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaGitAlt,
  FaExternalLinkAlt,
  FaArrowDown,
  FaCode,
  FaServer,
  FaBrain,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaBars,
  FaTimes,
  FaDownload,
  FaArrowRight,
  FaEye,
  FaMapMarkerAlt,
} from "react-icons/fa";

import myPhoto from "./asserts/myphoto.jpg";

const GITHUB = "https://github.com/adepusaiteja276";
const LINKEDIN = "https://www.linkedin.com/in/adepusaiteja/";
const EMAIL = "saitejaadupe885@gmail.com";

const projects = [
  {
    title: "Smart Blood Donor Filtering & Matching System",
    category: "AI / ML",
    description:
      "ML-based donor screening and matching system that predicts eligibility and combines blood-group compatibility rules to identify suitable donors for emergency requests.",
    tags: ["Python", "Machine Learning", "Flask", "Random Forest"],
    image: "/projects/blood.png",
    github:
      "https://github.com/adepusaiteja276/SMART-BLOOD-COMPATABILITY-ML",
    live: "https://smart-blood-compatability-ml.onrender.com/",
  },
  {
    title: "Smart Admission Prediction System",
    category: "Machine Learning",
    description:
      "AI-based web application that estimates graduate admission probability from academic and profile attributes using multiple machine learning approaches.",
    tags: ["Python", "Flask", "Neural Network", "Random Forest"],
    image: "/projects/career.png",
    github: null,
    live: null,
  },
  {
    title: "Epileptic Seizure Prediction Using Deep Learning",
    category: "Deep Learning",
    description:
      "Deep learning project that processes EEG signals and classifies preictal and interictal states to explore early seizure prediction.",
    tags: ["Python", "TensorFlow", "Keras", "EEG"],
    image: "/projects/seizure.png",
    github:
      "https://github.com/adepusaiteja276/Seizure-prediction-deep-learning",
    live: null,
  },
  {
    title: "Cuisine Classification",
    category: "Machine Learning",
    description:
      "Restaurant cuisine classification project using Random Forest, preprocessing restaurant attributes such as location, ordering, booking, cost and ratings.",
    tags: ["Python", "Scikit-learn", "Random Forest", "Streamlit"],
    image: "/projects/cuisine.svg",
    github:
      "https://github.com/adepusaiteja276/cuisine-classification",
    live: null,
  },
];

const skillGroups = [
  {
    title: "Programming",
    icon: <FaCode />,
    items: ["Python", "Java", "C"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    items: ["FastAPI", "Flask", "Spring Boot", "RESTful APIs", "Node.js"],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: ["SQL", "PostgreSQL", "MongoDB", "SQLite", "SQLAlchemy"],
  },
  {
    title: "AI & Machine Learning",
    icon: <FaBrain />,
    items: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "Generative AI",
    ],
  },
  {
    title: "Core & Tools",
    icon: <FaGitAlt />,
    items: ["DSA", "OOP", "Git", "GitHub", "Linux", "VS Code"],
  },
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");
  const [sending, setSending] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  useEffect(() => {
    const onScroll = () => {
      const point = window.scrollY + window.innerHeight * 0.35;
      let current = "home";

      navItems.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.offsetTop <= point) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  const handleFormChange = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // =========================
  // EMAILJS CONTACT FORM
  // =========================
  const handleSubmit = async (event) => {
    event.preventDefault();

    setFormStatus("");
    setSending(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setFormStatus(
        "Email service is not configured. Please check the .env file."
      );

      setSending(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        publicKey
      );

      setFormState({
        name: "",
        email: "",
        message: "",
      });

      setFormStatus(
        "Thanks! Your message has been sent successfully."
      );
    } catch (error) {
      console.error("EmailJS error:", error);

      setFormStatus(
        "Something went wrong while sending the message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="App">

      {/* ================= NAVBAR ================= */}

      <header className="nav">
        <button
          className="brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark">AS</span>
          <span>ADEPU SAITEJA</span>
        </button>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-right ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item}
              className={
                activeSection === item ? "nav-active" : ""
              }
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}

          <a
            className="nav-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>

      <main>

        {/* ================= HOME ================= */}

        <section
          id="home"
          className="section hero-section"
        >
          <div className="hero-grid">

            <motion.div
              className="hero-left"
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="eyebrow">
                CSE • ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
              </p>

              <h1>
                Hi, I'm <span>Adepu Saiteja.</span>
              </h1>

              <h2 className="hero-role">
                Java Full Stack Developer{" "}
                <span className="role-divider">|</span>{" "}
                AI/ML Engineer
              </h2>

              <p className="hero-subtitle">
                Building scalable applications and intelligent
                systems with Java, Python, Full Stack Development
                and AI/ML.
              </p>

              <div className="hero-buttons">

                <button
                  className="btn-primary"
                  onClick={() => scrollToSection("projects")}
                >
                  Explore Projects <FaArrowDown />
                </button>

                <a
                  className="btn-outline"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEye /> View Resume
                </a>

                <a
                  className="btn-ghost"
                  href="/resume.pdf"
                  download="Adepu-Saiteja-Resume.pdf"
                >
                  <FaDownload /> Download
                </a>

              </div>

              <div className="hero-social">

                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

              </div>
            </motion.div>

            <motion.div
              className="hero-right"
              initial={{
                opacity: 0,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
            >
              <div className="photo-frame">

                <div className="photo-ring" />

                <img
                  src={myPhoto}
                  alt="Adepu Saiteja"
                  className="hero-photo-img"
                />

                <div className="availability-card">
                  <span className="status-dot" />
                  Open to opportunities
                </div>

              </div>
            </motion.div>

          </div>
        </section>

        {/* ================= ABOUT ================= */}

        <section
          id="about"
          className="section content-section"
        >
          <div className="section-heading">

            <span>01</span>

            <div>
              <p className="section-kicker">
                PROFILE
              </p>

              <h2>About Me</h2>
            </div>

          </div>

          <div className="about-grid">

            <div className="about-copy">

              <p>
                I am a B.Tech student in Computer Science and
                Engineering with a specialization in Artificial
                Intelligence & Machine Learning at Malla Reddy
                College of Engineering and Technology, Hyderabad.
              </p>

              <p>
                My interests span backend engineering, full-stack
                development and applied AI/ML. I enjoy turning
                ideas into practical applications through APIs,
                databases, machine learning models and clean user
                experiences.
              </p>

            </div>

            <div className="about-highlights">

              <div>
                <FaGraduationCap />

                <span>
                  <b>B.Tech CSE (AI & ML)</b>
                  <small>
                    MRCET • 2023 – Present
                  </small>
                </span>
              </div>

              <div>
                <FaMapMarkerAlt />

                <span>
                  <b>Hyderabad, Telangana</b>
                  <small>India</small>
                </span>
              </div>

              <div>
                <FaCode />

                <span>
                  <b>Software + AI/ML</b>
                  <small>
                    Backend, Full Stack & intelligent systems
                  </small>
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SKILLS ================= */}

        <section
          id="skills"
          className="section content-section"
        >
          <div className="section-heading">

            <span>02</span>

            <div>
              <p className="section-kicker">
                TOOLKIT
              </p>

              <h2>Technical Skills</h2>
            </div>

          </div>

          <div className="skills-grid">

            {skillGroups.map((group) => (
              <motion.article
                className="skill-group"
                key={group.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >

                <div className="skill-group-head">

                  <span>{group.icon}</span>

                  <h3>{group.title}</h3>

                </div>

                <div className="skill-pills">

                  {group.items.map((item) => (
                    <span key={item}>
                      {item}
                    </span>
                  ))}

                </div>

              </motion.article>
            ))}

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}

        <section
          id="experience"
          className="section content-section"
        >
          <div className="section-heading">

            <span>03</span>

            <div>
              <p className="section-kicker">
                EXPERIENCE
              </p>

              <h2>Internships</h2>
            </div>

          </div>

          <div className="timeline">

            <article className="timeline-item">

              <div className="timeline-dot" />

              <div className="timeline-card">

                <div className="timeline-top">
                  <span>
                    Nov 2025 – Jan 2026
                  </span>

                  <FaBriefcase />
                </div>

                <h3>
                  Backend Developer Intern
                </h3>

                <h4>
                  Infosys Springboard Internship 6.0
                </h4>

                <ul>
                  <li>
                    Engineered RESTful API services for the
                    BragBoard (StarWall) employee recognition
                    platform using Python and FastAPI.
                  </li>

                  <li>
                    Implemented JWT-based authentication and
                    SQLite persistence through SQLAlchemy ORM.
                  </li>

                  <li>
                    Integrated React frontend components with
                    FastAPI services and validated API workflows
                    through testing and debugging.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Python</span>
                  <span>FastAPI</span>
                  <span>React</span>
                  <span>SQLAlchemy</span>
                  <span>JWT</span>
                </div>

              </div>
            </article>

            <article className="timeline-item">

              <div className="timeline-dot" />

              <div className="timeline-card">

                <div className="timeline-top">
                  <span>
                    Jul 2025 – Aug 2025
                  </span>

                  <FaBriefcase />
                </div>

                <h3>
                  Machine Learning Intern
                </h3>

                <h4>
                  Cognifyz Technologies
                </h4>

                <ul>
                  <li>
                    Built a cuisine classification pipeline using
                    Random Forest with data preprocessing and
                    feature engineering.
                  </li>

                  <li>
                    Formulated a restaurant rating prediction
                    solution using Linear Regression and packaged
                    model inference in Streamlit.
                  </li>

                  <li>
                    Used Scikit-learn, Pandas and NumPy across
                    preprocessing, model training, evaluation and
                    performance analysis.
                  </li>
                </ul>

                <div className="experience-tags">
                  <span>Python</span>
                  <span>Scikit-learn</span>
                  <span>Pandas</span>
                  <span>NumPy</span>
                  <span>Streamlit</span>
                </div>

              </div>
            </article>

          </div>
        </section>

        {/* ================= PROJECTS ================= */}

        <section
          id="projects"
          className="section content-section"
        >
          <div className="section-heading">

            <span>04</span>

            <div>
              <p className="section-kicker">
                SELECTED WORK
              </p>

              <h2>Featured Projects</h2>
            </div>

          </div>

          <div className="projects-grid">

            {projects.map((project, index) => (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >

                <div className="project-image-wrap">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />

                  <span className="project-category">
                    {project.category}
                  </span>

                </div>

                <div className="project-body">

                  <div className="project-number">
                    0{index + 1}
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>

                  <div className="project-tags">

                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}

                  </div>

                  <div className="project-links">

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <FaGithub />
                      </a>
                    ) : (
                      <span className="disabled-link">
                        GitHub unavailable
                      </span>
                    )}

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <FaExternalLinkAlt />
                      </a>
                    ) : (
                      <span className="disabled-link">
                        No live demo
                      </span>
                    )}

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

          <div className="projects-more">

            <a
              className="btn-outline"
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
            >
              View All GitHub Projects <FaArrowRight />
            </a>

          </div>
        </section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section content-section"
        >
          <div className="section-heading">

            <span>05</span>

            <div>
              <p className="section-kicker">
                ACADEMICS
              </p>

              <h2>
                Education & Certifications
              </h2>
            </div>

          </div>

          <div className="education-grid">

            <article className="education-card">

              <FaGraduationCap className="big-icon" />

              <div>

                <p className="card-label">
                  2023 – Present
                </p>

                <h3>
                  Malla Reddy College of Engineering and Technology
                </h3>

                <p>
                  B.Tech in Computer Science and Engineering
                  (Artificial Intelligence & Machine Learning)
                </p>

                <strong>
                  CGPA: 9.15
                </strong>

              </div>

            </article>

            <article className="education-card certification-card">

              <FaCertificate className="big-icon" />

              <div>

                <p className="card-label">
                  Certifications
                </p>

                <h3>
                  Professional Learning
                </h3>

                <ul>
                  <li>
                    AWS Academy Graduate – Generative AI Foundations
                  </li>

                  <li>
                    Web Development Training – Internshala Trainings
                  </li>
                </ul>

              </div>

            </article>

          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="section content-section contact-section"
        >
          <div className="section-heading">

            <span>06</span>

            <div>
              <p className="section-kicker">
                GET IN TOUCH
              </p>

              <h2>
                Let's Connect
              </h2>
            </div>

          </div>

          <div className="contact-grid">

            <div className="contact-copy">

              <p>
                If you have an opportunity, project idea or simply
                want to connect, feel free to reach out.
              </p>

              <a
                href={`mailto:${EMAIL}`}
                className="contact-line"
              >
                <FaEnvelope />

                <span>
                  <small>Email</small>
                  {EMAIL}
                </span>
              </a>

              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="contact-line"
              >
                <FaLinkedin />

                <span>
                  <small>LinkedIn</small>
                  linkedin.com/in/adepusaiteja
                </span>
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="contact-line"
              >
                <FaGithub />

                <span>
                  <small>GitHub</small>
                  github.com/adepusaiteja276
                </span>
              </a>

            </div>

            {/* CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <label>
                  Name

                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    required
                  />

                </label>

                <label>
                  Email

                  <input
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleFormChange}
                    placeholder="you@example.com"
                    required
                  />

                </label>

              </div>

              <label>
                Message

                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleFormChange}
                  rows="6"
                  placeholder="Tell me about the opportunity or project..."
                  required
                />

              </label>

              <button
                type="submit"
                className="btn-primary form-submit"
                disabled={sending}
              >
                {sending
                  ? "Sending..."
                  : "Send Message"}

                <FaEnvelope />
              </button>

              {formStatus && (
                <p
                  className={`form-status ${
                    formStatus.startsWith("Thanks")
                      ? "success"
                      : "error"
                  }`}
                >
                  {formStatus}
                </p>
              )}

            </form>

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div>
          <strong>
            ADEPU SAITEJA
          </strong>

          <span>
            Java Full Stack Developer | AI/ML Engineer
          </span>
        </div>

        <div className="footer-links">

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href={`mailto:${EMAIL}`}>
            Email
          </a>

        </div>

        <p>
          © 2026 Adepu Saiteja. Built with React.
        </p>

      </footer>

    </div>
  );
}

export default App;