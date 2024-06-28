import "./dashboard.css";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Introduction</h1>
      <div className="info-wrapper">
        <motion.div
          className="info-section"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3>Apurv Khalas (React JS and Vue JS Developer)</h3>
          <p>
            A dedicated and skilled <kbd>React.js</kbd> Developer with a passion
            for crafting robust and efficient web applications. Proficient in
            leveraging <kbd>React.js</kbd> to deliver exceptional user
            experiences, and currently expanding my expertise to include{" "}
            <kbd>Vue.js</kbd> and <kbd>Nuxt.js</kbd>. Actively enhancing my
            technical capabilities by learning <kbd>Node.js</kbd> and{" "}
            <kbd>Express.js</kbd>. Committed to staying abreast of industry
            trends and embracing new technologies to drive innovation and
            excellence in web development.
          </p>
          <p>
            Successfully completed three projects in <kbd>React.js</kbd>, one
            project in <kbd>Next.js</kbd>, two projects using <kbd>React</kbd>{" "}
            with <kbd>TypeScript</kbd>, two projects in <kbd>Vue.js</kbd>, and
            one project in <kbd>Nuxt.js</kbd>.
          </p>
        </motion.div>
        <motion.div
          className="image-section"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img src="/apurv.jpg" alt="apurv" height="400px" />
        </motion.div>
      </div>
      <div className="name-animation">
        <motion.div
          animate={{
            scale: [1, 1, 2, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            display: "inline-block",
            padding: "10px 20px",
            textAlign: "center",
          }}
        >
          <h1>Apurv Khalas</h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
