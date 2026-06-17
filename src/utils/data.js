const getTechStacks = () => ([
  {
    id: 1,
    img: "/assets/tech-stacks/html logo.png",
    title: "HTML"
  },
    {
    id: 2,
    img: "/assets/tech-stacks/css logo.png",
    title: "CSS"
  },
    {
    id: 3,
    img: "/assets/tech-stacks/js logo.png",
    title: "JavaScript"
  },
    {
    id: 4,
    img: "/assets/tech-stacks/php logo.png",
    title: "PHP"
  },
    {
    id: 5,
    img: "/assets/tech-stacks/java logo.png",
    title: "Java"
  },
    {
    id: 6,
    img: "/assets/tech-stacks/bs 5 logo.png",
    title: "Bootstrap"
  },
    {
    id: 7,
    img: "/assets/tech-stacks/tailwind logo.png",
    title: "Tailwind"
  },
    {
    id: 8,
    img: "/assets/tech-stacks/react logo.png",
    title: "React"
  },
    {
    id: 9,
    img: "/assets/tech-stacks/node js logo.png",
    title: "Node.js"
  },
    {
    id: 10,
    img: "/assets/tech-stacks/laravel logo.png",
    title: "Laravel"
  },
    {
    id: 11,
    img: "/assets/tech-stacks/mysql logo.jpg",
    title: "MySQL"
  },
    {
    id: 12,
    img: "/assets/tech-stacks/pgsql logo.png",
    title: "PostgreSQL"
  },
    {
    id: 13,
    img: "/assets/tech-stacks/vscode logo.png",
    title: "VSCode"
  },
    {
    id: 14,
    img: "/assets/tech-stacks/github logo.png",
    title: "GitHub"
  },
    {
    id: 15,
    img: "/assets/tech-stacks/postman logo.png",
    title: "Postman"
  },
    {
    id: 16,
    img: "/assets/tech-stacks/figma logo.png",
    title: "Figma"
  }
]);

const getAboutPics = () => ([
  {
    id: 1,
    url: "/assets/about-pics/foto.png",
    title: "foto 1"
  },
]);

const getProjects = () => ([
  {
    id: 1,
    title: "Cardi-On!",
    img: "/assets/project-mockups/cardion.png",
    description: "Cardi-On! is an application that makes it easier for its users to place orders or rent sports facilities in their area of residence, such as gyms, soccer fields, tennis courts, etc. Additionally, users can also view the training schedule at the desired sports facility and hire a trainer or companion to help them to do said exercise.",
    linkLabel: "View code on GitHub",
    url: "https://github.com/miqbalpo/Cardi-On"
  },
  {
    id: 2,
    title: "UBreak",
    img: "/assets/project-mockups/ubreak.png",
    description: "UBreak is application made specifically for Brawijaya University that not only assists students in time and task management but also pays special attention to mental health aspects. Combining scheduling elements, reminders, and specific features to check mental health, UBreak is designed to be a loyal companion for students seeking to maintain a balance between academic demands and psychological well-being.",
    linkLabel: "View code on GitHub",
    url: "https://github.com/Alfansya/UBreak"
  },
  {
    id: 3,
    title: "Buku Tamu Digital Kalbe Farma",
    img: "/assets/project-mockups/bukutamu.png",
    description: '"Buku Tamu Digital Kalbe Farma" or "Kalbe Farma Digital Guestbook" in English, is an innovative solution developed by PT Kalbe Farma Tbk. to digitize administrative processes related to event organization and guest reception at the company. This application aims to enhance operational efficiency and effectiveness by providing features such as structured event planning, easy guest registration, real-time attendance monitoring, and effective information distribution.',
    linkLabel: "View live website",
    url: "https://bukutamu.kalbe.co.id/"
  },
  {
    id: 4,
    title: "AniMap",
    img: "/assets/project-mockups/animap.png",
    description: "AniMap is a web application designed to help users easily find information about anime. On this website, users can search for anime based on specific criteria such as title, genre, rating, and more. After finding an anime they are interested in, users can bookmark it to categorize it however they like based on. One of AniMap's main advantages is its Content-Based Filtering recommendation feature, which provides personalized anime suggestions based on each user's preferences.",
    linkLabel: "View code on GitHub",
    url: "https://github.com/miqbalpo/AniMap"
  },
  {
    id: 5,
    title: "Wellnest Festival",
    img: "/assets/project-mockups/wellnest.png",
    description: "Wellnest Festival is a mobile-oriented website used to promote a health-focused event organized by CNN Indonesia that promotes holistic health education through interactive experiences, inspiring activities, and multi-platform content to improve family health literacy.",
    linkLabel: "View live website",
    url: "https://wellnest-festival.cnn.co.id"
  }
]);

const getWorkExperience = () => ([
  {
    id: 1,
    img: "/assets/about-pics/magang kalbe.jpg",
    role: "Web Developer Intern",
    company: "PT Kalbe Farma Tbk",
    period: "Feb 2024 to June 2024",
    responsibilities: [
      "Translated user requirements and design prototypes into a fully functioning website.",
      "Developed and maintained a digital guest book website for more than 100 daily visitors of the company.",
      "Acted as the UI/UX consultant for the HRIS website of the Human Capital Department.",
    ]
  },
  {
    id: 2,
    img: "/assets/about-pics/magang cnn.jpeg",
    role: "Software Engineer Intern",
    company: "CNN Indonesia",
    period: "Nov 2025 to May 2026",
    responsibilities: [
      "Participating in multiple projects, supporting project planning, coordination, and delivery to ensure milestones were met effectively.",
      "Implemented the backend for various projects using, focusing on system logic, APIs, and data handling to support scalable applications.",
      "Managed server and database configuration for internal web-based systems, ensuring stability, security, and optimal performance.",
    ]
  }
]);

export { getTechStacks, getAboutPics, getProjects, getWorkExperience };
