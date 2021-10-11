// Summary And Greeting Section
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
    "https://drive.google.com/file/d/1PId9qbii9kk3juVAuibAv1DfZipfeBv2/view?usp=sharing",
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
    emoji(
      "⚡ Develop highly interactive Frontend for your web."
    ),
    emoji("⚡ Progressive Web Applications (PWA) in normal and SPA Stacks."),
    emoji(
      "⚡ Integration of third party services such as Firebase."
    )
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
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Joomla",
      fontAwesomeClassname: "fab fa-joomla"
    },
    {
      skillName: "Bootrstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
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
      role: "Junior Web Developer",
      company: "PT. MICROVAC INDONESIA",
      companylogo: require("./assets/images/microvac-logo.jpg"),
      date: "Apr 2021 – Aug 2021",
      descBullets: [
        "Learn and solved sideka web issue 7287 villages.",
        "Leveraged API and JSON to inspect, filter database tables for province, district, sub-district, email, and domain.",
        "Developed HTTPS certificate plugin using php for wordpress containing dashboard, certificates, domains and logs."
      ]
    },
    {
      role: "Software Engineer",
      company: "PT. SEMBADA KARYA MANDIRI",
      companylogo: require("./assets/images/skm-logo.png"),
      date: "Feb 2020 – Apr 2020",
      descBullets: [
        "Learn Control System Application Software Development.",
        "Learn C++ and Redis.",
        "Review Library Redis."
      ]
    },
    {
      role: "Knowledge Management System Internship",
      company: "PT. POS INDONESIA",
      companylogo: require("./assets/images/pos-logo.png"),
      date: "May 2018 – Aug 2018",
      descBullets: [
        "Look Specifically at Activities within the Company.",
        "Knowing and Understanding Applications in the World of Computer Informatics, Especially Website Designed.",
        "Creating a Website PT.POS INDONESIA (PERSERO) Specifically for Employees using Joomla V.3."
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
  title: emoji("Some Things I’ve Built💡"),
  subtitle:
    "more coming soon",

  achievementsCards: [
    {
      title: "Personal Website ReactJS",
      subtitle:
        "My Personal Website ReactJS built using HTML, SASS, JavaScript, and ReactJS.",
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
      subtitle:
        "My Personal Website built using HTML, CSS, JavaScript, jQuery, and Bootstrap to build This static website.",
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
      title: "Client Demo Bootstrap",
      subtitle: 
        "Client demo Bootstrap is the landing page built using HTML, CSS, Javascript, and Bootstrap.",
      image: require("./assets/images/portfolio4.png"),
      footerLink: [
        {
          name: "View Online",
          url: "https://client-demo-1.netlify.app/"
        }
      ]
    },
    {
      title: "Wordpress Plugin",
      subtitle: 
        "Wordpress Plugin are written in the PHP and integrate seamlessly with WordPress. This plugin created to Network Admin in Wordpress Multisite.",
      image: require("./assets/images/portfolio6.png"),
      footerLink: [
        {
          name: "View Source",
          url: "https://github.com/abdilfaruq/wordpress-plugin"
        }
      ]
    },
    {
      title: "Internship",
      subtitle: "Knowledge Management System of PT. POS INDONESIA (PERSERO) Website-based using Joomla Version 3.",
      image: require("./assets/images/internship.jpg"),
      footerLink: [
        {
          name: "View Online",
          url: "https://github.com/abdilfaruq/Internship"
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
      subtitle: "TOOLS: PHP, Wordpress, MySQL, Laragon, Visual Studio Code, and Gitlab.",
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
      subtitle: "TOOLS: PHP, Wordpress, MySQL, Laragon, Visual Studio Code, and Gitlab.",
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
  title: "Freelance",

  freelance: [
    {
      image: require("./assets/images/scalebizz-logo.jpg"),
      title: "Scalebizz Digital",
      date: "Dec 2020 – Jan 2021",
      description: "Frontend Developer",
      descBullets: [
        "Developed the user interface using VueJS.",
        "Architecture the backend server using python django for the database.",
        "Implemented a payment system using rajaongkir to allow users to pay via credit card."
      ]
    },
    {
      image: require("./assets/images/linguo-logo.jpg"),
      title: "Linguo ID",
      date: "Aug 2021 – Sep 2021",
      description: "Frontend Developer",
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
  subtitle: "I am a person that has a natural thirst for knowledge, independent but great working in team. I like learning things about web programming, web frameworks, and also computer technology.",
  subtitle2: "Looking for an opportunity to work about Software Engineering, which provides professional development, interesting experiences and personal growth.",
  subtitle3: "My future goal : Being Useful For Others.",
  about: [
    {
      image: require("./assets/images/scalebizz-logo.jpg")
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