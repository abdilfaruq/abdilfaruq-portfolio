// Summary And Greeting Section
import React from "react";
import emoji from "react-easy-emoji";

const illustration = {
  animated: true
};

const greeting = {
  username: "M.Farouq Abdillah",
  logo: require("./assets/images/icon.png"),
  title: "Hello!",
  subTitle: `You can call me Abdil`,
  
  resumeLink:
    "https://drive.google.com/file/d/1KIvrqRxS-VxGPTr25kkYKx92HPcubSCb/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  instagram: "https://www.instagram.com/abdilfaruq/",
  github: "https://github.com/abdilfaruq",
  linkedin: "https://www.linkedin.com/in/abdilfaruq/",
  whatsapp: "https://wa.me/6282120964677",
  gmail: "m.farouqabdillah@gmail.com",  
  display: true
};

// Skills Section
const skillsSection = {
  title: "Skills💻",
  subTitle: "Here are a few technologies i've been working with:",
  skills: [
    <span role="img" aria-label="Voltage">⚡ Develop highly interactive Frontend for your web.</span>,
    <span role="img" aria-label="Voltage">⚡ Progressive Web Applications (PWA) in normal and SPA Stacks.</span>,
    <span role="img" aria-label="Voltage">⚡ Integration of third party services such as Firebase.</span>
  ],

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Joomla",
      fontAwesomeClassname: "fab fa-joomla"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Slack",
      fontAwesomeClassname: "fab fa-slack"
    }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Telkom University",
      logo: require("./assets/images/telkomLogo.png"),
      subHeader: "Major: Computational Science",
      duration: "August 2015 - July 2019",
      desc: "Final project title :",
      descBullets: [
        "Tidal Prediction Approach Using Nonlinear Autoregressive Neural Network (Case study of Pangandaran, West Java, Indonesia)."
      ]
    }
  ]
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Developer",
      company: "PT. SENJA SOLUTIONS",
      companylogo: require("./assets/images/senja.png"),
      date: "Oct 2021 – Jun 2023",
      descBullets: [
        "Converse International School of Languages (CISL) Vendor as Front End Developer Frameworks: WordPress.",
        "English Language Center (ELC) Vendor as Front End Developer Frameworks: WordPress.",
        "ReBill Point of Sale (POS) Internal Project as Front End Developer Frameworks: ReactJS, Laravel.",
        "Heiko Prigge Vendor as Front End Developer Frameworks: Laravel.",
        "Digital Products 669 Internal Project as Front End Developer Frameworks: Laravel.",
        "PT. Pinduit Teknologi (Pintek) Vendor as Front End Developer Frameworks: ReactJS.",
      ]
    },
    {
      role: "Junior Web Developer",
      company: "PT. MICROVAC INDONESIA",
      companylogo: require("./assets/images/microvac-logo.jpg"),
      date: "Apr 2021 – Aug 2021",
      descBullets: [
        "Learn and solve Sideka web issue 7287 villages.",
        "Utilized APIs and JSON to efficiently inspect and filter database tables for province, district, sub-district, email, and domain, ensuring accurate data retrieval and manipulation.",
        "Developed a custom HTTPS certificate plugin using PHP for WordPress, featuring a user-friendly dashboard and functionalities for managing certificates, domains, and logs. This enhanced website security and streamlined certificate management processes."
      ]
    },
    {
      role: "Software Engineer",
      company: "PT. SEMBADA KARYA MANDIRI",
      companylogo: require("./assets/images/skm-logo.png"),
      date: "Feb 2020 – Apr 2021",
      descBullets: [
        "Acquired in-depth knowledge in Control System Application Software Development, gaining valuable experience in developing software solutions for control systems.",
        "Developed proficiency in programming languages such as C++ and Redis, expanding technical skills and capabilities.",
        "Conducted thorough reviews of the Redis library, contributing to the understanding and improvement of its functionality and performance."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Achievement Section
const achievementSection = {
  title: <span role="img" aria-label="Lamp">Built💡</span>,
  subtitle:
    "more coming soon",

  achievementsCards: [
    {
      title: "ReBill Point of Sale (POS)",
      subtitle: "ReBill is the world's first real-time Point-of-Sales System for Web and Mobile, complemented by a state-of-the-art Business Owner Dashboard.",
      description: "TOOLS: HTML, Tailwind, Laravel, ReactJS, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio15.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://rebill-pos.com/en"
        }
      ]
    },
    {
      title: "Pinduit Teknologi (Pintek)",
      subtitle: "Pintek is a digital financial company with a mission to support business capitalization for Indonesian entrepreneurs through comprehensive financial services and business development support.",
      description: "TOOLS: HTML, SASS, JavaScript, ReactJS, Ant-Design, Figma, Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio20.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://pintek.id/"
        }
      ]
    },
    {
      title: "Heiko Prigge",
      subtitle: "Heiko Prigge is a photographer based in London. He discovered his love for photography on a road trip across the U.S. and started assisting various photographers including Terry O'Neill and Mark Abrahams.",
      description: "TOOLS: HTML, CSS, PHP, Laravel, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio16.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://www.heikoprigge.com/#/"
        }
      ]
    },
    {
      title: "Digital Products 669",
      subtitle: "Digital Products 669 specializes in Motion Template Development.",
      description: "TOOLS: HTML, CSS, PHP, Laravel, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio17.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://www.dp669.com/"
        }
      ]
    },
    {
      title: "Converse International School of Languages (CISL)",
      subtitle: "CISL is one of the few language schools in North America that guarantees a maximum of 8 students per class, providing each student with more speaking time and individual attention.",
      description: "TOOLS: HTML, CSS, PHP, Wordpress, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio18.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://cisl.edu/"
        }
      ]
    },
    {
      title: "English Language Center (ELC)",
      subtitle: "The English Language Center (ELC) has been dedicated to providing high-quality English programs to international students since 1978.",
      description: "TOOLS: HTML, CSS, PHP, Wordpress, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio19.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://elc.edu/"
        }
      ]
    },
    {
      title: "Client Demo ReactJS",
      subtitle:
        "Client demo ReactJS built using HTML, CSS, JavaScript, jQuery, ReactJS, Redux, Chakra-UI, and Material-UI.",
      image: require("./assets/images/portfolio2.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://client-demo-2.netlify.app/"
        }
      ]
    },
    {
      title: "Personal Website ReactJS",
      subtitle:"My Personal Website ReactJS built using HTML, SASS, JavaScript, and ReactJS.",
      image: require("./assets/images/portfolio12.png"),
      footerLink: [
        {
          name: "You are on the page now",
          url: "/"
        }
      ]
    }
  ],
  display: true
};

// Achievement2 Section
const achievementSection2 = {
  achievementsCards: [
    {
      title: "ReBill Point of Sale (POS)",
      subtitle: "TOOLS: HTML, Tailwind, Laravel, ReactJS, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio15.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    },
    {
      title: "Pinduit Teknologi (Pintek)",
      subtitle: "TOOLS: HTML, SASS, JavaScript, ReactJS, Ant-Design, Figma, Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio20.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    },
    {
      title: "Heiko Prigge",
      subtitle: "TOOLS: HTML, CSS, PHP, Laravel, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio16.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    },
    {
      title: "Digital Products 669",
      subtitle: "TOOLS: HTML, CSS, PHP, Laravel, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio17.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    },
    {
      title: "Converse International School of Languages (CISL)",
      subtitle: "TOOLS: HTML, CSS, PHP, Wordpress, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio18.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    },
    {
      title: "English Language Center (ELC)",
      subtitle: "TOOLS: HTML, CSS, PHP, Wordpress, MySQL (MAMP), Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio19.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    },
    {
      title: "Personal Website ReactJS",
      subtitle: "TOOLS: HTML, SASS, JavaScript, ReactJS, Visual Studio Code, Photoshop and Github.",
      image: require("./assets/images/portfolio12.png"),
      footerLink: [
        {
          name: "You are on the page now",
          url: "/"
        }
      ]
    },
    {
      title: "Personal Website",
      subtitle: "TOOLS: HTML, CSS, Bootstrap, JavaScript, jQuery, Visual Studio Code, Photoshop and Github.",
      image: require("./assets/images/portfolio1.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/abdilfaruq.github.io"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io"
        }
      ]
    },
    {
      title: "Client Demo ReactJS",
      subtitle: "TOOLS: HTML, CSS, JavaScript, jQuery, ReactJS, Redux, Chakra-UI, Material-UI, Photoshop, Visual Studio Code, Figma and Github.",
      image: require("./assets/images/portfolio2.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://client-demo-2.netlify.app/"
        }
      ]
    },
    {
      title: "Client Dashboard",
      subtitle: "TOOLS: HTML, CSS, JavaScript, ReactJS, Chakra-UI, Material-UI, Photoshop, Visual Studio Code, Figma and Github.",
      image: require("./assets/images/portfolio5.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://client-demo-2.netlify.app/dashboard"
        }
      ]
    },
    {
      title: "Client Register",
      subtitle: "TOOLS: HTML, CSS, JavaScript, ReactJS, Material-UI, Photoshop, Visual Studio Code, Figma and Github.",
      image: require("./assets/images/portfolio13.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://demo-linguo.netlify.app/register/"
        }
      ]
    },
    {
      title: "Client Login",
      subtitle: "TOOLS: HTML, CSS, JavaScript, ReactJS, Material-UI, Photoshop, Visual Studio Code, Figma and Github.",
      image: require("./assets/images/portfolio14.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://demo-linguo.netlify.app/login/"
        }
      ]
    },
    {
      title: "Client Demo Bootstrap",
      subtitle: "TOOLS: HTML, CSS, Bootstrap, JavaScript, jQuery, Photoshop, Figma, Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio4.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://client-demo-1.netlify.app/"
        }
      ]
    },
    {
      title: "Internship",
      subtitle: "TOOLS: PHP, Joomla, Xampp, Winscp, Navicat, Visual Studio Code, and Photoshop.",
      image: require("./assets/images/internship.jpg"),
      footerLink: [
        {
          name: "View Online",
          url: "https://github.com/abdilfaruq/Internship"
        }
      ]
    },
    {
      title: "Wordpress Plugin",
      subtitle: "TOOLS: PHP, Wordpress, MySQL (Laragon), Visual Studio Code, and Gitlab.",
      image: require("./assets/images/portfolio6.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/wordpress-plugin"
        }
      ]
    },
    {
      title: "Wordpress Client",
      subtitle: "TOOLS: PHP, Wordpress, MySQL (Laragon), Visual Studio Code, and Gitlab.",
      image: require("./assets/images/portfolio7.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://sideka.id/"
        }
      ]
    },
    {
      title: "Client NuxtJS",
      subtitle: "TOOLS: HTML, SASS, JavaScript, VueJS, NuxtJS, Visual Studio Code, Trello, and Gitlab.",
      image: require("./assets/images/portfolio11.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://ngolshop.com/login"
        }
      ]
    },
    {
      title: "Date My Cat Website",
      subtitle: "TOOLS: HTML, CSS, Bootstrap, JavaScript, Visual Studio Code, Photoshop and Github.",
      image: require("./assets/images/portfolio8.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/DateMyCat"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/DateMyCat/"
        }
      ]
    },
    {
      title: "React Todolist App",
      subtitle: "TOOLS: HTML, CSS, JavaScript, ReactJS, Material-UI, Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio9.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/Todolist-App"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/react-todolist-app/"
        }
      ]
    },
    {
      title: "React Card App",
      subtitle: "TOOLS: HTML, CSS, JavaScript, ReactJS, Jest, Visual Studio Code, and Github.",
      image: require("./assets/images/portfolio10.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/react-card-app"
        },
        {
          name: "View Online",
          url: "https://abdilfaruq.github.io/CardApp/"
        }
      ]
    }
  ],
  display: true
};

// Freelance Section
const freelanceSection = {
  title: "Freelancer",

  freelance: [
    {
      image: require("./assets/images/scalebizz-logo.jpg"),
      title: "Scalebizz Digital",
      date: "Frontend Developer | Dec 2020 – Jan 2021",
      descBullets: [
        "Developed the user interface using VueJS.",
        "Architecture the backend server using python django for the database.",
        "Implemented a payment system using rajaongkir to allow users to pay via credit card."
      ]
    },
    {
      image: require("./assets/images/linguo-logo.jpg"),
      title: "Linguo ID",
      date: "Frontend Developer | Aug 2021 – Sep 2021",
      descBullets: [
        "Develop web using HTML5, CSS3, Bootstrap, and ReactJS by leveraged Figma",
        "Develop a dashboard, register, login for linguo using ReactJS"
      ]
    }
  ],
  display: true
};

// About Sections
const aboutSection = {
  title: "Who's Abdil?",
  subtitle: "I am a skilled Front End Developer with a Bachelor's degree in Computational Science. I specialize in building attractive and user-friendly websites and web applications that provide a seamless user experience.",
  subtitle2: "I am seeking an opportunity to work in Software Engineering and Front End Development that offers professional development, challenging experiences, and personal growth.",
  subtitle3: "My future goal : Being useful for others.",
  about: [
    {
    }
  ],
  display: true
};

const contactInfo = {
  subtitle:
    "Other places you can find me",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  freelanceSection,
  openSource,
  achievementSection,
  achievementSection2,
  aboutSection,
  contactInfo
};