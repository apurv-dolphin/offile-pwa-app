import "./dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Introduction</h1>
      <div className="info-wrapper">
        <div className="info-section">
          <h3>Apurv Khalas (React Developer)</h3>
          <p>
            Dedicated and skilled <kbd>React.js</kbd> Developer with a passion
            for creating robust and efficient web applications. Adept at
            leveraging <kbd>React.js</kbd> to deliver exceptional user
            experiences. Currently expanding expertise in <kbd>Vue.js</kbd> and{" "}
            <kbd>Nuxt.js</kbd> to broaden skill set. Actively learning{" "}
            <kbd>Node.js</kbd> and <kbd>Express.js</kbd> to diversify and
            enhance technical capabilities. Committed to staying current with
            industry trends and embracing new technologies to drive innovation
            in web development.
          </p>
        </div>
        <div className="image-section">
          <img src="/apurv.jpg" alt="apurv" height={"400px"} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
