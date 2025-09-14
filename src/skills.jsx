function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-list">
        <div>
          <span>React</span>
          <progress value="70" max="100"></progress>
          <span className="skill-value">70%</span>
        </div>
        <div>
          <span>JavaScript</span>
          <progress value="75" max="100"></progress>
          <span className="skill-value">75%</span>
        </div>
        <div>
          <span>HTML/CSS</span>
          <progress value="80" max="100"></progress>
          <span className="skill-value">80%</span>
        </div>
        <div>
          <span>Python</span>
          <progress value="70" max="100"></progress>
          <span className="skill-value">70%</span>
        </div>
        <div>
          <span>Java</span>
          <progress value="65" max="100"></progress>
          <span className="skill-value">65%</span>
        </div>
        <div>
          <span>C</span>
          <progress value="60" max="100"></progress>
          <span className="skill-value">60%</span>
        </div>
        <div>
          <span>Mongo DB</span>
          <progress value="70" max="100"></progress>
          <span className="skill-value">70%</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;