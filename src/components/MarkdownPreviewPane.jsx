import React from "react";
import Icon from "./Icon";

/**
 * Renders the left pane displaying the Markdown resume/portfolio content.
 */
const MarkdownPreviewPane = () => {
  // Data for the skills section
  const skills = [
    {
      category: "Languages / Frameworks:",
      items:
        "Java, Python, Javascript, Node.js, Typescript, React, Vue, Svelte, Nuxt, Next, Flask, Django",
    },
    {
      category: "Cloud Technologies / Tools:",
      items:
        "Redis, Prometheus, Grafana, Elastic Stack, Docker, Terraform, S3, EC2, Fargate",
    },
    {
      category: "Database:",
      items:
        "MongoDB, PostgreSQL, MySQL, MariaDB, DynamoDB, Firebase, GraphQL, Prisma",
    },
  ];

  return (
    <div className="editor-pane markdown-preview">
      {/* Header Section */}
      <h1>RAMNARAYANAN SANKARANARAYAN</h1>
      <div className="contact-info">
        <div>
          <Icon name="call-incoming" className="contact-icon" /> +44 7385291021
        </div>
        <div>
          <Icon name="location" className="contact-icon" /> London, United
          Kingdom
        </div>
        <div>
          <Icon name="mail" className="contact-icon" /> ram.aadarsh@outlook.com
        </div>
      </div>

      {/* Summary Section */}
      <section className="summary">
        <h2>Summary</h2>
        <p>
          A highly motivated and results-oriented Software Engineer with
          experience in developing and deploying scalable web applications and
          optimizing performance.
        </p>
        <p>
          I am skilled in a variety of modern technologies including TypeScript,
          React, Node.js, and Docker, and have a proven track record of
          accelerating development and reducing time-to-market.
        </p>
        <p>
          My experience includes deploying applications on AWS and implementing
          robust CI/CD pipelines to ensure high availability and reduce errors.
        </p>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>EXPERIENCE</h2>
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p>
            <strong>Asianet Satellite Communications Ltd.</strong>
          </p>
          <p>May 2022 - Dec 2022</p>
          <p className="location">Trivandrum, India</p>
          <ul>
            <li>
              Developed e-Invoice and Client billing platform for existing user
              base used by 300k customers.
            </li>
            <li>
              Implemented using TypeScript, React, Next.js, Node.js, and Docker;
              accelerated development by 30%, reduced time-to-market by 40%.
            </li>
            <li>
              Deployed on AWS (S3, Lambda, Cloudfront) with A/B Testing, 99.9%
              uptime.
            </li>
            <li>
              Optimized performance: 25% reduced page load times, 20% increased
              user engagement, 15% boosted conversion rates.
            </li>
            <li>
              Collaborated cross-functional teams to deliver high-quality
              software.
            </li>
            <li>
              Implemented efficient and scalable solutions for financial
              applications.
            </li>
            <li>
              Implemented comprehensive testing strategy, 95% test coverage,
              reduced production bugs by 60%.
            </li>
            <li>
              Conducted code reviews, mentored junior developers, improved code
              quality by 30%.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Software Engineer Intern</h3>
          <p>
            <strong>Asianet Satellite Communications Ltd.</strong>
          </p>
          <p>Nov 2021 - Apr 2022</p>
          <p className="location">Trivandrum, India</p>
          <ul>
            <li>
              Developed customer support portal integrating with facebook, email
              and live chat support for 250k+ users.
            </li>
            <li>
              Developed referral management system integrating with existing
              client portal and increasing conversation rate by 20%.
            </li>
            <li>
              Migrated old obsolete data from MySQL to new PostgreSQL setup and
              normalising tables, increasing database response times by 60%.
            </li>
            <li>Migrated Database to AWS RDS.</li>
            <li>
              Implemented CI/CD pipelines using Gitlab Runners, automating
              processes and reducing manual errors by 80%.
            </li>
            <li>
              Conducted code reviews, mentored junior developers, improved code
              quality by 30%.
            </li>
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section className="education">
        <h2>EDUCATION</h2>
        <div className="education-item">
          <h3>Master of Science in Software Engineering</h3>
          <p>
            <strong>University of Strathclyde</strong>
          </p>
          <p>Jan 2023 - Jan 2024</p>
          <p className="location">Glasgow, United Kingdom</p>
          <p className="education-description">
            Advanced Topics in Software Engineering, Distributed Information
            Systems, Mobile Software & Applications, Designing Usable Systems
            and Big Data Technologies.
          </p>
        </div>
        <div className="education-item">
          <h3>Bachelor in Computer Science Engineering</h3>
          <p>
            <strong>SRM Institute of Science and Technology</strong>
          </p>
          <p>Jul 2018 - May 2022</p>
          <p className="location">Chennai, India</p>
          <p className="education-description">
            Object Oriented Programming Using C++, Data Structures and
            Algorithms, Database Management Systems, Operating Systems, Software
            Engineering, Artificial Intelligence, Data Mining and Analytics,
            Networking Routing Algorithms.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>SKILLS</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.category}>
              {"• "} {/* Bullet point added directly */}
              <span className="skills-category">{skill.category}</span>
              {skill.items}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MarkdownPreviewPane;
