import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    python,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    reacticon,
    codealpha,
    carrent,
    tripguide,
    threejs,
    pytorch,
    itransition,
    cdip,
    british_council,
    oceancon,
    cisco,
    codeorg,
    ai,
    adosupport,
    careserenity,
    story_game,
    flyrank
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "certifications",
      title: "Certifications",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Machine Learning",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "AI Chatbot Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Machine Learning Intern",
      icon: flyrank,
      iconBg: "#383E56",
      date: "June 2026 - Present",
      points: [
        "Developed and experimented with machine learning models for real-world business and data-driven problems.",
        "Worked on data preprocessing, cleaning, feature engineering, and exploratory data analysis for ML workflows.",
        "Applied AI/ML techniques to practical datasets, translating business requirements into data-driven solutions.",
      ],
    },
    {
      title: "Frontend Developer",
      icon: itransition,
      iconBg: "#383E56",
      date: "March 2025 - May 2025",
      points: [
        "Developing and maintaining a web applications using React.js, Node.Js, Express.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Python App Developer",
      company_name: "CodeAlpha",
      icon: codealpha,
      iconBg: "#E6DEDD",
      date: "July 2024 - September 2024",
      points: [
        "Developing and maintaining applications using Python and other related technologies.",
        "Doing indivisual tasks in each month",
        "Implementing user-friendly design.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Developer",
      icon: reacticon,
      iconBg: "#383E56",
      date: "",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with teams including designers, and other team members to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal AI Assistant",
      description:
        "Developed a personal AI assistant capable of processing voice commands, executing system tasks, and generating responses using natural language understanding and automation workflows.",
      tags: [
        {
          name: "pytorch",
          color: "orange-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "llm",
          color: "white-text-gradient",
        },
        {
          name: "model_training",
          color: "white-text-gradient",
        },
      ],
      image: ai,
      source_code_link: "https://github.com/sowrin-paul/Personal_AI_Assistant.git",
    },
    {
      name: "CareSerenity",
      description:
        "CareSerenity is a web-based healthcare platform designed to manage patient information, streamline services, and improve accessibility through an organized and intuitive system.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "djangorestapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: careserenity,
      source_code_link: "https://github.com/sowrin-paul/CareSerenity",
    },
    {
      name: "AdoSupport",
      description:
        "AdoSupport is a full-stack platform providing adolescents with AI-driven health guidance, community support, and structured resources through an interactive chatbot system.",
      tags: [
        {
          name: "nextjs",
          color: "grey-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: adosupport,
      source_code_link: "https://github.com/jannatulferdous01/AdoSupport.git",
    },
    {
      name: "Interactive Story Game",
      description:
        "Developed an interactive story-based game where user choices influence narrative progression, enabling dynamic storytelling experiences through branching logic and engaging user-driven decision paths.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "uvicorn",
          color: "green-text-gradient",
        },
        {
          name: "pytorch",
          color: "orange-text-gradient",
        },
      ],
      image: story_game,
      source_code_link: "https://github.com/sowrin-paul/Interactive-Story-Game.git",
    },
  ];
  
  const certifications = [
    {
      title: "Cisco & IBM Certified AI Fundamentals",
      organization: "Cisco & IBM Skillbuilds",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "March 2026",
      certificateLink: "https://drive.google.com/file/d/1gFLrRvd1kcMrrLm6CJOoqnqylKiUxAQm/view?usp=sharing",
      points: [
        "Acquired core concepts of AI, including data, algorithms, and basic machine learning principles.",
        "Explored practical use cases of AI in business and technology through hands-on learning modules.",
        "Completed training under the Cisco Networking Academy program, strengthening industry-relevant AI skills.",
      ],
    },
    {
      title: "Cisco Certified Introduction to Modern AI",
      organization: "Cisco",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "February 2026",
      certificateLink: "https://drive.google.com/file/d/1SOi8BzvlC4c-Ip_wEIAOLT4ATui1cTx3/view?usp=drive_link",
      points: [
        "Gained foundational knowledge of modern Artificial Intelligence concepts, including machine learning and real-world applications.",
        "Learned how AI systems are designed, trained, and deployed across different industries.",
        "Developed an understanding of ethical considerations and future trends in AI technologies.",
      ],
    },
    {
      title: "CDIP Certified Software Testing & Quality Assurance",
      organization: "Center for Development of IT Professionals",
      icon: cdip,
      iconBg: "#E6DEDD",
      date: "December 2025",
      certificateLink: "https://drive.google.com/file/d/1vVp_fkiIkbWj8_jZyQvRrW9tT5FED1AD/view?usp=drive_link",
      points: [
        "Practical Software Quality Assurance fundamentals including manual testing, automation basics, API & performance testing using industry tools.",
        "Writing test cases, bug reporting, automation with Selenium, API testing with Postman, performance testing, and using tools like Apache JMeter & Postman.",
        "Hands-on real-world testing projects, automation scripts, GitHub portfolio, plus CV and interview preparation.",
      ],
    },
    {
      title: "Ocean Conservancy Costal Cleaning Campaign",
      organization: "Ocean Conservancy",
      icon: oceancon,
      iconBg: "#E6DEDD",
      date: "December 2022",
      certificateLink: "https://drive.google.com/file/d/1Ldro1tMoku5B-tTlMG5JCRMMqhaYGsTp/view?usp=drive_link",
      points: [
        "Recognized by Ocean Conservancy for outstanding contribution to environmental sustainability initiatives.",
        "Actively participated in the International Coastal Cleanup, supporting efforts to reduce marine pollution.",
        "Demonstrated commitment to community service and environmental protection by contributing to achieving cleaner, trash-free seas.",
      ],
    },
    {
      title: "Accelerated Intro to CS Course",
      organization: "Code.Org",
      icon: codeorg,
      iconBg: "#E6DEDD",
      date: "October 2021",
      certificateLink: "https://drive.google.com/file/d/1sJrJuqLJ-BkDxGpzEjkNLLrA1nDMJnxg/view?usp=drive_link",
      points: [
        "This 20-hour course covers the core computer science and programming concepts in courses 2-4.",
      ],
    },
    {
      title: "CISCO Certified Introduction to CyberSecurity",
      organization: "Cisco Networking Academy",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "April 2021",
      certificateLink: "https://drive.google.com/file/d/1RacDanGla5g2iaUwfq8jHxgDSI79Ca6l/view?usp=drive_link",
      points: [
        "An introduction to cybersecurity knowledge.",
        "Gained theoretical knowledge on the cybersecurity, types of network attacks and how to prevent them.",
      ],
    },
    {
      title: "British Council Young Learner Certificate",
      organization: "British Council",
      icon: british_council,
      iconBg: "#E6DEDD",
      date: "June 2018",
      certificateLink: "https://drive.google.com/file/d/17vaedXrPuYrVKdLvjQIPyBsTqidkG3gj/view?usp=drive_link",
      points: [
        "Build confidence in spoken and written English through guided practice in reading, writing, listening, and speaking with supportive teachers and interactive activities.",
        "Develop communication, collaboration, critical thinking, leadership, creativity, and digital skills in a positive and encouraging learning environment.",
      ],
    },
  ];
  
  export { services, technologies, experiences, certifications, testimonials, projects };