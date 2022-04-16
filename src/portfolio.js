/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Vedansh Paliwal",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Vedansh Paliwal Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Vedansh Paliwal",
  logo_name: "Vedansh Paliwal",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1cAyt8rXAxdgJ5siTohFwMVlpG2pGdrjn/view?usp=sharing",
  portfolio_repository: "https://github.com/vedanshpaliwal?tab=repositories",
  githubProfile: "https://github.com/vedanshpaliwal",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vedanshpaliwal",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vedansh-paliwal-40b316200/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:vedanshpaliwal4@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/vedansh_paliwal",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/vedansh.paliwal.5/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/vedansh_paliwal/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [


    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using React Native ",
        "⚡ Creating application backend in Node, Express ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Material/Ui",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6597",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },

      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on AWS",
      ],
      softwareSkills: [

        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:Heroku",
          style: {
            color: "#47A248",
          },
        },
      ],
    },

  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [

    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/vedanshpaliwal4",
    },



  ],
};

const degrees = {
  degrees: [
    {
      title: "MEDI-CAPS UNIVERSITT",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "UniversityLogo.png",
      alt_name: "Medicaps University",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on ReactJs Development ,Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.medicaps.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML ,CSS and Javascript for web developers",
      subtitle: " --coursera",
      logo_path: "htmlcss.png",
      certificate_link:
        "https://coursera.org/share/06361a45399a7b4b518472c1c0aebb5a",
      alt_name: "JOHN HOPKINS UNIVERSITY",
      color_code: "#8C151599",
    },
    {
      title: "Python Programming : A Concise Introduction",
      subtitle: "- By Wesleyan University",
      logo_path: "python.png",
      certificate_link:
        "https://coursera.org/share/7b59d1a0b06b7c4558c25a3b4335885d",
      alt_name: "python",
      color_code: "#00000099",
    },
    {
      title: "AWS Cloud Technical Essentials",
      subtitle: "- AWS",
      logo_path: "aws.png",
      certificate_link:
        "https://coursera.org/share/642aef8b9cd5968ce36213d5563f472e",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },





    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://coursera.org/share/337b5739065ff492f1a3c2ed7bb37d9c",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },



  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with Company as a ReactJs Developer,Web Developer . I love organising events and that is why I am also involved with clubs and community builder programs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer Intern",
          company: "Descrii.tech",
          company_url:
            "https://descrii.tech/",
          logo_path: "descrii.png",
          duration: "March 2022 - April 2022",
          location: "Remote",
          description:
            "Worked as a Shopify developer and developed web apps for the ease of Shopify merchants,Worked on Node Js, Mongo DB, Shopify API and Shopify Polaris ",
          color: "#0071C5",
        },
        {
          title: "Web Developer Intern",
          company: "Koyo Software Solution",
          company_url:
            "https://koyosoftsolutions.web.app/",
          logo_path: "koyo.png",
          duration: "January 2022 - March 2022",
          location: "Remote",
          description:
            "I have worked on project of building a web application of lawyer from scratch with reactjs ,materialui, css and vanilla javascript",
          color: "#0071C5",
        },

        {
          title: "Graphic Designer",
          company: "STIC",
          company_url: "https://sticmedicaps.org.in/",
          logo_path: "logo.png",
          duration: "August 2021 - ",
          location: "Remote",
          description:
            "I have worked on project of Banking Website Where i build Frontend with html css and Bootstrap and backend for managing transactions or user data database used is mongodb and backend activities are handled with php",
          color: "#ee3c26",
        },

        {
          title: "Web Developer Intern",
          company: "Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org/",
          logo_path: "spaks.png",
          duration: "August 2021 - September 2021",
          location: "Remote",
          description:
            "I have worked on project of Banking Website Where i build Frontend with html css and Bootstrap and backend for managing transactions or user data database used is mongodb and backend activities are handled with php",
          color: "#ee3c26",
        },


      ],
    },
    {
      title: "Volunteerships",
      experiences: [

        {
          title: "Binance Campus Builder Program",
          company: "Binance",
          company_url: "https://www.microsoft.com/",
          logo_path: "binance.png",
          duration: "October 2021 - Present",
          location: "Remote",
          description:
            "Binance Campus Builder Program is a program for university students to lead the awareness and use of crypto and decentralized system .Under this program, I have helped the student to learn more about crypto and web 3.0",
          color: "#D83B01",
        },


        {
          title: "Internshala Student Partner",
          company: "Internshala",
          company_url: "https://www.microsoft.com/",
          logo_path: "internshala.png",
          duration: "Aug 2019 - May 2020",
          location: "Remote",
          description:
            "Internshala Student Partner program where you get to empower your peers to meet their professional goals, while you develop essential skills like leadership, communication, and marketing.Under this Program  i helped  the peers in order to make the best use of Internshala.",
          color: "#D83B01",
        },
        {
          title: "Student Technical And Innovation Club Member",
          company: "STIC CLUB",
          company_url:
            "",
          logo_path: "logo.png",
          duration: "August 2020 - Present",
          location: "",
          description:
            "We organized various events and webinars in the college and various online competition like coding contest , contentization and some various other programs.",
          color: "#0C9D58",
        },

      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create ReactJs projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_vedansh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ReactJs, NodeJs, and  Cloud Development",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Kheradiwas ,Pinjarwadi ,Ratlam ,Madhya Pradesh - 457001",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/ueXEagzxi5NHAxG6A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7999570553",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
