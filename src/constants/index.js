import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  omnifood,
  meta,
  refine,
  clone,
  dalle,
  tesla,
  shopify,
  threejs,
  omnifoodLogo,
  openai,
  three,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  }
];

const services = [
  {
    title: "Web Developer (React)",
    icon: web,
  },
  {
    title: "Mobile Developer (Flutter)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front-end Developer React.js",
    company_name: "Stefanini LATAM",
    icon: threejs,
    iconBg: "#fff",
    date: "Jul 2024 - Present",
    location: "Jaguariúna, San Pablo, Brasil · Remote",
    points: [
      "Developed a process automation platform for robots, enabling data monitoring and visualization.",
      "Enhanced platform performance and user experience.",
      "",
      "Highlights:",
      "- Built pages using React and TypeScript.",
      "- Implemented unit tests with Jest.",
      "- Created reusable components.",
      "- Managed tasks in Jira.",
      "",
      "Design Stack:",
      "- Designed prototypes in Figma.",
      "- Applied UX/UI best practices."
    ],
  }
,  
  {
    title: "Huawei Cloud Solution Architect",
    company_name: "Huawei",
    icon: threejs,
    iconBg: "#fff",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Highlights:",
      "- Conducted training on Microservices and Kubernetes management.",
      "- Deployed .NET and Java web applications across Windows & Linux.",
      "- Established secure connections via virtual private clouds.",
      "- Generated cost reports using cloud calculators.",
      "- Managed user permissions with IAM.",
      "",
      "Tech Stack: .NET, Java, Kubernetes, Huawei Cloud, VPC, IAM"
    ],
  }
  
  
];

const projects = [
  {
    name: "Real Estate Dashboard",
    description:
      "Web-based prototype that allows users to search, book, and manage properties from various real estate agents.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "refine",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: refine,
    source_code_link: "https://github.com/RenatoKJ/refine_mern_dashboard",
    live_link: "https://real-estate-kj.netlify.app/",
    youtube_link: "https://youtu.be/VjmmgBQXTbw",
  },
  {
    name: "DALL-E AI Gallery",
    description:
      "Web application that enables people to create images by using the amazing DALL-E AI and share them with the community.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai-api",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dalle,
    source_code_link: "https://github.com/RenatoKJ/dall-e-ai-img-gen",
    live_link: "https://dall-e-ai-img-gen.vercel.app/",
    youtube_link: "https://youtu.be/-dip4Nep9vk",
  },
  {
    name: "Omnifood",
    description:
      "The smart AI food subscription that will make you eat healthy again. A fine prototype of healthy diet website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link:
      "https://github.com/RenatoKJ/css-for-beginners/tree/main/Omnifood%20Final%20Project",
    live_link: "https://omnifood-kj1.netlify.app/",
    youtube_link: "https://www.youtube.com/@Renatokoyya",
  },
  // {
  //   name: "Starbucks Clone",
  //   description: "A clone of the Starbucks website built using HTML5 & CSS3.",
  //   tags: [
  //     {
  //       name: "html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: clone,
  //   source_code_link: "https://github.com/RenatoKJ/Starbucks-Clone",
  //   live_link: "https://starbucks-clone-ashy.vercel.app/",
  //   youtube_link: "https://www.youtube.com/@Renatokoyya",
  // },
];

export { services, technologies, experiences, projects };
