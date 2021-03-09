/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Javkhlan Gansukh",
  title: "Hi, I'm Jack",
  subTitle: emoji(
    "I'm a proactive and innovative software developer with 10+ years of hands-on experience contributing, leading the development of integrated software solutions, mostly banking, airline, and blockchain-based financial systems. I have become passionate about distributed systems development, system architecture in the last 3 years. In addition, curious learner and intellectual adventure seeker."
  ),
  resumeLink: require("./assets/images/javkhlan_resume.pdf"),
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/javkhlan-g",
  linkedin: "https://www.linkedin.com/in/javkhlan-gansukh",
  gmail: "javkhlan.g.mn@gmail.com",
  gitlab: "https://gitlab.com/javkhlan-g",
  facebook: "https://www.facebook.com/javkhlan.gansukh",
  medium: "https://medium.com/@javkhlan-g",
  stackoverflow: "https://stackoverflow.com/users/10422806/javkhlan-g",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "VARIOUS STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Scalable system architecture"),
    emoji("⚡ Reactive non-blocking system design and development"),
    emoji(
      "⚡ Microservice architecture design and development for scalable cloud systems"
    ),
    emoji("⚡ Business process cost optimization"),
    emoji("⚡ Analysis of algorithm efficiency"),
    emoji("⚡ Blockchain research and development"),
    emoji("⚡ Restful API services development"),
    emoji("⚡ Backend development"),
    emoji("⚡ Frontend web development"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php",
    },
    {
      skillName: "c/c#",
      fontAwesomeClassname: "fab fa-c#",
    },
    {
      skillName: "c/c++",
      fontAwesomeClassname: "fab fa-c++",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "vue-js",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "jquery",
      fontAwesomeClassname: "fab fa-jquery",
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony",
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel",
    },
    {
      skillName: "oracle",
      fontAwesomeClassname: "fab fa-oracle",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "National University of Mongolia",
      logo: require("./assets/images/num.jpg"),
      subHeader: "Bachelor of Computer Science in Software Engineering",
      duration: "September 2005 - June 2009",
      desc: "Mathematics and Computer Science",
      descBullets: [],
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   ]
    // }
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mathematics & Algorithm", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming & Data structure",
      progressPercentage: "90%",
    },
    {
      Stack: "Microservices & Cloud architecture",
      progressPercentage: "90%",
    },
    {
      Stack: "Frontend & Backend API full-stack development",
      progressPercentage: "95%",
    },
    {
      Stack:
        "Blockchain research & Blockchain blockchain-based system development",
      progressPercentage: "80%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Korfin Holdings",
      companylogo: require("./assets/images/kfh.jpg"),
      date: "Apr 2019 – Present",
      location: "Seoul, Korea",
      desc:
        "Global crypto exchange system development and maintenance, Research blockchain technology, Develop the ASTA blockchain core",
    },
    {
      role: "Software Engineer",
      company: "GatherUp",
      companylogo: require("./assets/images/gattherup.png"),
      date: "Apr 2018 – Oct 2018",
      location: "California, USA",
      desc:
        "Development and maintenance of Gather.com, It is a customer experience and online review engine that enables insights, empowers marketing and converts customers.",
    },
    {
      role: "Senior Software Engineer",
      company: "Chinggis Khan Bank",
      companylogo: require("./assets/images/ckbank.png"),
      date: "Sep 2013 – Sep 2019",
      location: "Ulaanbaatar, Mongolia",
      desc:
        "Managing implementations, maintaining of new projects for digital banking, and upgrade to existing services in order to provide efficient and accurate digital banking services to the Bank’s customers.",
    },
    {
      role: "Senior Information Technology Engineer",
      company: "Aeromongolia Airlines",
      companylogo: require("./assets/images/aero.png"),
      date: "Jun 2011 – Sep 2013",
      location: "Ulaanbaatar, Mongolia",
      desc:
        'Development & Maintenance of "Airline Enterprise System". It consist of those systems Flight management, Ticket reservation, E-commerce, Boarding, Passenger check-in, BI reporting and 3rd party integration API services',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const salt = "2c90a102e58d9a0db7c";
const openSource = {
  githubConvertedToken: "${{secrets.OPEN_SOURCE_TOKEN}}",
  //githubConvertedToken: "bc704242a18f18b30ea92a8e418dc68f7ac23831",
  githubUserName: "javkhlan-g", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "https://gatherup.com/",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "https://wefinan.com/",
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Best Software Engineer",
      subtitle:
        "The Best awards ceremony of Mongolian Information Technology Association. Dec, 2014",
      image: require("./assets/images/mosa.png"),
      footerLink: [
        {
          name: "Mongolian Information Technology association",
          url:
            "http://itprize.mongolia-gateway.mn/index.php/mn-it-people-of-theyear-2014",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Projects",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://www.wefinan.com",
      title: "Wefinan.com",
      description: "The global cryptocurrency exchange trading system",
    },
    {
      url: "https://ebank.ckbank.mn",
      title: "Digital bank",
      description:
        "Internet Banking gives to the customers access to all of the banking services from any device with internet access for banking at your convenience in real-time.",
    },
    {
      url: "https://www.gatherup.com",
      title: "Gatherup.com",
      description:
        "GatherUpTM (formerly GetFiveStars) is a customer experience and online review engine that enables insights, empowers marketing and converts customers",
    },
    {
      url: "https://www.aeromongolia.mn",
      title: "Aeroticket.mn",
      description:
        "Enterprise airline system. Domestic and International flight management system ",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+82-010-8309-4466",
  email_address: "javkhlan.g.mn@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
