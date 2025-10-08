import React, { useState } from "react";
import "./Internships.css";

type InternshipCardProps = {
  image: string;
  title: string;
  description: string;
  jobDescription: React.ReactNode;
  onApply: () => void;
  onShowJobDesc: () => void;
  applyLink: string;
};

const InternshipCard: React.FC<InternshipCardProps> = ({
  image,
  title,
  description,
  jobDescription,
  onApply,
  onShowJobDesc,
  applyLink,
}) => (
  <div className="internship-card">
    <div className="internship-card-imgbox">
      <img className="internship-card-image" src={image} alt={title} />
    </div>
    <div className="internship-card-content">
      <h3 className="internship-card-title">{title}</h3>
      <p className="internship-card-desc">{description}</p>
      <div className="internship-card-btn-row">
        <a
          className="internship-card-apply"
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply now
        </a>
        <button className="internship-card-jobdesc" onClick={onShowJobDesc}>
          Job Description
        </button>
      </div>
    </div>
  </div>
);

const internships = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrk-D6QgU390X_CI7T34WMEhyaUA6RzLYww&s",
    title: "Human Resources",
    description:
      "Develop essential HR skills and gain practical experience in our Human Resources internship program.",
    jobDescription: (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ marginTop: 0, color: "#3460e6" }}>Company Description</h4>
        <p>
          <b>Simtrak Solutions</b> is dedicated to providing internal management solutions to streamline team tasks and communication, making everyday work hassle-free and productive. We aim to help organizations utilize their potential to the fullest.
        </p>
        <p style={{ color: "#e05a00", fontWeight: 600, marginBottom: 0 }}>
          Please Note That This Is An Unpaid Internship for 3 Months
        </p>

        <h4 style={{ color: "#3460e6" }}>Role Description</h4>
        <p>
          This is a part-time remote role for a <b>Human Resources Intern</b> at Simtrak Solutions. The Human Resources Intern will be responsible for assisting with HR management, HR policies, employee benefits, and personnel management tasks on a day-to-day basis.
        </p>

        <h4 style={{ color: "#3460e6" }}>Qualifications</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Human Resources (HR) and HR Management skills</li>
          <li>Knowledge of HR policies and employee benefits</li>
          <li>Experience in personnel management</li>
          <li>Strong communication and interpersonal skills</li>
          <li>Ability to work independently and in a team</li>
          <li>Attention to detail and organizational skills</li>
          <li>Interest in the field of Human Resources</li>
          <li>Having patience, adaptability, and task management skills</li>
          <li>Pursuing a degree in Human Resources, Business Administration, or a related field</li>
        </ul>

        <h4 style={{ color: "#3460e6" }}>Perks</h4>
        <ul style={{ marginTop: 0 }}>
          <li>E-Internship Completion Certificate</li>
          <li>Awards (Performance Based)</li>
        </ul><br></br>
        <p>
          <b>Our Website:</b>{" "}
          <a
            href="https://www.simtrak.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#3460e6", textDecoration: "underline" }}
          >
            www.simtrak.in
          </a>
        </p>
      </div>
    ),
    applyLink: "https://forms.gle/ddLCdFmNmU6sy5CJA",
  },
  {
    image:
      "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=1920&h=1080&ar=1.91%3A1",
    title: "Web Development",
    description:
      "Build modern and responsive websites in our Web Development internship. Perfect for aspiring developers.",
    jobDescription: (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ marginTop: 0, color: "#3460e6" }}>WEB DEVELOPMENT INTERNSHIP</h4>
        <p>
          This will be a <b>6-Month Internship</b>. As a software development engineering (web) intern at <b>ADORE</b>, you will have the opportunity to work on exciting projects and contribute to our innovative solutions. With your expertise in <b>HTML, CSS, JavaScript, React, Node.js, PHP, Python, MySQL, REST API, JSON, and Express.js</b>, you will play a key role in developing and maintaining our web applications.
        </p>
        <h4 style={{ color: "#3460e6" }}>Roles and Responsibilities</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Collaborate with the development team to design, develop, and implement new features for our web applications.</li>
          <li>Write clean, efficient, and maintainable code to ensure the overall quality and performance of our products.</li>
          <li>Conduct thorough testing and debugging to identify and resolve any issues or bugs in the code.</li>
          <li>Assist in the integration of REST APIs and databases to enhance the functionality and user experience of our applications.</li>
          <li>Stay updated on the latest web development trends and technologies to continuously improve our products.</li>
          <li>Participate in team meetings and contribute ideas to drive innovation and achieve project goals.</li>
          <li>Demonstrate a strong work ethic, problem-solving skills, and a passion for learning and growing in the field of software development.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>Skills and Requirements</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Currently pursuing a degree in technology or a related field.</li>
          <li>Need to give minimum of 4 hours per day.</li>
          <li>CSS, Express.js, HTML, JavaScript, JSON, MySQL, Node.js, PHP, Python, React, REST API.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>What We Offer</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Internship E-Completion Certificate</li>
          <li>Flexible Working Hours (within the 4-hour daily schedule)</li>
          <li>Performance-Based Awards</li>
          <li>Remote (Work from Home)</li>
        </ul>
      </div>
    ),
    applyLink: "https://forms.gle/z1dZ1DV6LgwFtK5t8",
  },
  {
    image:
      "https://learn.g2.com/hubfs/G2CM_FI978_Learn_Article_Images_%5BGraphic_Design%5D_V1b.png",
    title: "Graphic Designing",
    description:
      "Unleash your creativity with hands-on projects in our Graphic Designing internship.",
    jobDescription: (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ marginTop: 0, color: "#3460e6" }}>GRAPHIC DESIGNING INTERNSHIP</h4>
        <p>
          We are looking for a creative and dynamic student to join our team. This role is ideal for individuals passionate about Graphic Designing and want to grow their career scope.
        </p>
        <p style={{ color: "#e05a00", fontWeight: 600, marginBottom: 0 }}>
          PLEASE NOTE: THIS IS A 3-MONTH UNPAID INTERNSHIP
        </p>
        <h4 style={{ color: "#3460e6" }}>Key Responsibilities</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Create and design print and digital materials.</li>
          <li>Adhere to brand guidelines and complete projects according to the deadline.</li>
          <li>Retouch and manipulate images.</li>
          <li>Use graphic designing software and work with a wide variety of media.</li>
          <li>
            Preparing finished designs like Posters, Advertisements, Logos, Social Media posts, and promotions by operating necessary software.
          </li>
          <li>Proactively recommend creative communications for marketing proposals.</li>
          <li>Create a variety of designs for ads, websites and email marketing.</li>
          <li>Create Brochures, Posters and Flyer Designs.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>Requirements and Qualification</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Creative problem solvers with an eye for detail to work on branding and lifestyle design projects.</li>
          <li>Need to give minimum of 4 hours per day.</li>
          <li>
            Must be proficient in Canva, Adobe Illustrator and Photoshop.
            Premiere Pro, XD and After Effects would be a plus.
          </li>
          <li>Basic knowledge of layouts, typography, line composition, colour, and other graphic designing fundamentals.</li>
          <li>Video editing skills would be a bonus.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>What We Offer</h4>
        <ul style={{ marginTop: 0 }}>
          <li>E-Certificate of completion</li>
          <li>Flexible working hours (within the 4-hour daily schedule).</li>
          <li>Remote (Work from Home)</li>
          <li>Performance-Based Awards</li>
          <li>Hands-on experience in social media marketing</li>
          <li>Opportunity to work on real-world projects</li>
        </ul>
      </div>
    ),
    applyLink: "https://forms.gle/qwiQ8bdmz2GiAijt9 ",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/digital-marketing-logo-with-loudspeaker-icon_995817-56.jpg",
    title: "Digital Marketing",
    description:
      "Master the art of online promotion and strategy in our Digital Marketing internship.",
    jobDescription: (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ marginTop: 0, color: "#3460e6" }}>DIGITAL MARKETING INTERNSHIP</h4>
        <p>
          We are looking for a creative and dynamic student to join our team. This role is ideal for individuals passionate about social media, digital marketing, and brand storytelling and want to grow their career scope.
        </p>
        <p style={{ color: "#e05a00", fontWeight: 600, marginBottom: 0 }}>
          PLEASE NOTE: THIS IS A 3-MONTH UNPAID INTERNSHIP
        </p>
        <h4 style={{ color: "#3460e6" }}>What You Can Learn (With Sincerity and Hard Work)</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Gain practical experience in end-to-end digital marketing strategies.</li>
          <li>How to develop content creation, campaign optimization, and analytical skills.</li>
          <li>Learn and understand SEO, SEM, and social media advertising techniques.</li>
          <li>Learn how to create Content.</li>
          <li>How to build a strong portfolio showcasing your contributions.</li>
          <li>Improve communication, teamwork, and time-management abilities.</li>
          <li>Networking opportunities.</li>
          <li>Opportunity to work with live projects across different industries.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>Key Responsibilities</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Develop engaging and creative posts, stories, and videos tailored for platforms like Instagram, Facebook, LinkedIn, Twitter, and others.</li>
          <li>Need to give minimum of 4 hours per day.</li>
          <li>Schedule and publish posts across social media platforms.</li>
          <li>Monitor and respond to comments, messages, and mentions promptly.</li>
          <li>Provide reports with actionable insights for improvement.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>What We Offer</h4>
        <ul style={{ marginTop: 0 }}>
          <li>E-certificate of completion.</li>
          <li>Flexible working hours (within the 4-hour daily schedule).</li>
          <li>Remote (Work from Home).</li>
          <li>Performance-Based Awards.</li>
          <li>Hands-on experience in social media marketing.</li>
          <li>Opportunity to work on real-world projects.</li>
        </ul>
      </div>
    ),
    applyLink: "https://forms.gle/N1CJMxQyRoruZ6qm7",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/018/849/092/non_2x/fountain-pen-writing-logo-design-design-concept-free-vector.jpg",
    title: "Content Writing",
    description:
      "Hone your writing skills and learn content strategy in our Content Writing internship.",
    jobDescription: (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ marginTop: 0, color: "#3460e6" }}>CONTENT WRITING INTERNSHIP</h4>
        <p>
          <b>Duration:</b> 3 Months<br />
          <b>Mode:</b> Online (Work from Home)
        </p>
        <p>
          We are looking for <b>Content Writing Interns</b> who have a flair for writing and creativity. This internship offers an opportunity to gain real-world exposure to professional content writing, understand brand tone, and learn how digital content impacts businesses.
        </p>
        <h4 style={{ color: "#3460e6" }}>Key Responsibilities</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Research and write engaging content for blogs, social media, and websites.</li>
          <li>Assist in creating marketing copy, captions, and email content.</li>
          <li>Ensure all content aligns with brand guidelines and is SEO-friendly.</li>
          <li>Support the team in developing creative storytelling ideas.</li>
          <li>Edit and proofread content to maintain clarity, grammar, and flow.</li>
          <li>Design newsletters, handbooks, etc.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>Perks</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Flexible work hours (online)</li>
          <li>Certificate upon successful completion</li>
        </ul>
      </div>
    ),
    applyLink: "https://forms.gle/fm3hTCGK8KKU8nrD9",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WznxIWMrNCZ17tmx3ifiOBg0HQKKW1gjZsulCZTo6TDoPiLhROq7UrB5S4sv9D6Sqfk&usqp=CAU",
    title: "General Management",
    description:
      "Get a broad overview of business operations in our General Management internship.",
    jobDescription: (
      <div style={{ textAlign: "left" }}>
        <h4 style={{ marginTop: 0, color: "#3460e6" }}>GENERAL MANAGEMENT INTERNSHIP</h4>
        <p>
          <strong>Role Description</strong><br/>
          This is a part-time remote role for a <b>General Management Intern</b> at Simtrak Solutions. The intern will be involved in day-to-day tasks related to general management, including assisting in team coordination, communication, and project management.
        </p>
        <p style={{ color: "#e05a00", fontWeight: 600, marginBottom: 0 }}>
          THIS IS AN UNPAID INTERNSHIP FOR 3 MONTHS
        </p>
        <h4 style={{ color: "#3460e6" }}>Roles and Responsibilities</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Strong organizational and communication skills.</li>
          <li>Ability to work well in a team and independently.</li>
          <li>Connecting and coordinating with different teams regarding projects to reach a certain goal.</li>
          <li>Methodize and allocate tasks regularly.</li>
          <li>Help the team in recruitment, graphic designing, taking online sessions, administration work, etc.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>Requirements and Qualifications</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Currently pursuing a degree in Business Administration or a related field.</li>
          <li>Need to give minimum of 4 hours per day.</li>
          <li>Problem-solving and decision-making skills.</li>
          <li>Detail-oriented and analytical mindset.</li>
          <li>Proficiency in Microsoft Office and other relevant software.</li>
          <li>Interest in general management and business operations.</li>
        </ul>
        <h4 style={{ color: "#3460e6" }}>What We Offer</h4>
        <ul style={{ marginTop: 0 }}>
          <li>Internship E-Completion Certificate</li>
          <li>Flexible Working Hours (within the 4-hour daily schedule)</li>
          <li>Performance-Based Awards</li>
          <li>Work from Home</li>
        </ul>
      </div>
    ),
    applyLink: "https://forms.gle/MKFaNJTHhXFypA8n9",
  },
];

const Internships: React.FC = () => {
  // eslint-disable-next-line no-empty-pattern
  const [] = useState<number | null>(null);
  const [showJobDescIdx, setShowJobDescIdx] = useState<number | null>(null);

  const handleApply = (_idx: number) => {
    // setApplied(idx);
  };

  const handleShowJobDesc = (idx: number) => {
    setShowJobDescIdx(idx);
  };

  const handleCloseModal = () => {
    setShowJobDescIdx(null);
  };

  return (
    <div className="internships-page">
      <div className="internship-hero">
        <h1>
          <span className="internship-hero-main">Explore Our&nbsp;</span>
          <span className="internship-hero-accent">Internships</span>
        </h1>
      </div>
      <div className="internships-list">
        {internships.map((internship, idx) => (
          <InternshipCard
            key={idx}
            image={internship.image}
            title={internship.title}
            description={internship.description}
            jobDescription={internship.jobDescription}
            onApply={() => handleApply(idx)}
            onShowJobDesc={() => handleShowJobDesc(idx)}
            applyLink={internship.applyLink}
          />
        ))}
      </div>
      {showJobDescIdx !== null && (
        <div className="jobdesc-modal-overlay" onClick={handleCloseModal}>
          <div className="jobdesc-modal" onClick={e => e.stopPropagation()}>
            <h2>
              {internships[showJobDescIdx].title} - Job Description
            </h2>
            <div style={{ marginBottom: 24 }}>
              {internships[showJobDescIdx].jobDescription}
            </div>
            <button className="jobdesc-modal-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Internships;