import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { resume } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] space-y-4"
      >
        <p>
          I’m a <strong>Software Engineer with 2 years of experience</strong> in
          designing and developing cutting-edge, user-friendly applications and
          scalable systems. I specialize in{" "}
          <strong>full-stack development</strong> using React.js, Node.js,
          Express.js, and MongoDB, along with backend-focused tools and cloud
          services like Docker, AWS (EC2, S3, CloudFront), and Firebase.
        </p>
        <p>
          My approach combines{" "}
          <strong>robust design patterns and industry best practices</strong> to
          deliver resilient and maintainable software.
        </p>
        <p>
          I am also <strong>certified in Cybersecurity</strong> (IBM,
          EC-Council, ISC2) and have hands-on experience using tools like Burp
          Suite, Wireshark, and Metasploit for threat analysis and vulnerability
          testing, developed during my internship with Palo Alto & AICTE.
        </p>
        <p>
          <strong>🔧 Tech Stack Highlights</strong>
          <br />
          JavaScript, Java, SQL, Pl/SQL, Bash, React, Node, Express, MongoDB,
          Firebase, Docker, Git, Postman, Three.js, AWS
        </p>
        <p>
          <strong>💼 Certifications</strong>
          <br />
          Cybersecurity Analyst (IBM) | CCT (EC-Council) | CC (ISC2) | ReactJS
          (Infosys) | NodeJS + DB (Coursera)
        </p>
        <p>
          <strong>📅 Let’s connect:</strong>{" "}
          <a
            href="https://calendar.app.google/WyVe7obvwMudeg8o9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Book a meeting
          </a>
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-10">
        <button
          className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
          style={{
            boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)",
            transition: "all ease 0.1s",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(5px)";
            e.currentTarget.style.boxShadow = "0px 0px 0px 0px #a29bfe";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0px 5px 0px 0px rgba(0,0,0,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0px 5px 0px 0px rgba(0,0,0,0.6)";
          }}
          onClick={() => window.open(resume, "_blank")}
        >
          <span className="font-semibold">Resume</span>
        </button>

        <button
          className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-md shadow-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
          style={{
            boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)",
            transition: "all ease 0.1s",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(5px)";
            e.currentTarget.style.boxShadow = "0px 0px 0px 0px #a29bfe";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0px 5px 0px 0px rgba(0,0,0,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0px 5px 0px 0px rgba(0,0,0,0.6)";
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/chaturvedipranava/",
              "_blank"
            )
          }
        >
          <span className="font-semibold">LinkedIn</span>
        </button>

        <button
          className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-gray-600 to-gray-800 rounded-md shadow-md hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transform transition duration-500 ease-in-out hover:scale-105 active:translate-y-1 active:shadow-none no-select"
          style={{
            boxShadow: "0px 5px 0px 0px rgba(0,0,0,0.6)",
            transition: "all ease 0.1s",
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(5px)";
            e.currentTarget.style.boxShadow = "0px 0px 0px 0px #a29bfe";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0px 5px 0px 0px rgba(0,0,0,0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "0px 5px 0px 0px rgba(0,0,0,0.6)";
          }}
          onClick={() =>
            window.open("https://github.com/PranavChaturvedi26", "_blank")
          }
        >
          <span className="font-semibold">GitHub</span>
        </button>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
