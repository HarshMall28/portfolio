export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize client collaboration, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a chatbot with AI generated responses",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Booking Platform",
    des: "A modern React.js web app for browsing movies, viewing cast & crew, and booking tickets online.",
    img: "/p1.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/node.svg",
      "/html.svg",
    ],
    link: "https://github.com/HarshMall28/movie-booking-platform",
  },
  {
    id: 2,
    title: "Medibuddy - Online Medicine Shop",
    des: "A modern eCommerce platform for ordering medicines online, built with React.js, Node.js, and Express.js",
    img: "/p2.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/ts.svg",
      "/node.svg",
      "/html.svg",
    ],
    link: "https://github.com/HarshMall28/online-medicine-web-app",
  },
  {
    id: 3,
    title: "Foodle - Recipe's App",
    des: "A Simple & Interactive Recipe App! 🍛 Foodle is a user-friendly recipe application where you can explore, add, and manage delicious recipes effortlessly.",
    img: "/p3.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/node.svg",
      "/html.svg",
    ],
    link: "https://github.com/HarshMall28/recipe",
  },
  {
    id: 4,
    title: "Interactive Tic-Tac_toe Game",
    des: "A fun and interactive Tic-Tac-Toe game built as a side project to enhance my React.js skills.",
    img: "/p4.svg",
    iconLists: [
      "/next.svg",
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/ts.svg",
      "/html.svg",
    ],
    link: "https://github.com/HarshMall28/tic-tac-toe-react",
  },
];

export const testimonials = [
  {
    quote:
      "During my master's, Harsh played a crucial role in helping me grasp key React concepts and improve my development skills. His deep understanding of frontend technologies and hands-on guidance made a significant impact on my learning. With his support, I was able to build a beautiful, responsive website that exceeded my expectations. His expertise, patience, and collaborative approach truly set him apart.",
    name: "Suraj Lumba",
    title: "Software Engineer II @ Mastercard",
    img: "./suraj.svg",
  },
  {
    quote:
      "Harsh was instrumental in refining our project's frontend. His expertise in React and modern UI trends ensured a polished and engaging experience. Beyond his technical skills, his professionalism and willingness to support the team were truly commendable. I’d highly recommend working with him!",
    name: "Divesh Soneji",
    title: "Software Developer @ Intuition",
    img: "./divesh.svg",
  },
  {
    quote:
      "Harsh is not just a great developer but also an excellent communicator. He took the time to understand our requirements and translated them into an elegant, responsive UI. His dedication and ability to quickly iterate based on feedback made the development process smooth and enjoyable.",
    name: "Libin Thomas",
    title: "System Engineer @ AWS",
    img: "./libin.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Bajaj Finserv",
    img: "/bajaj.svg",
    nameImg: "/namebajaj.svg",
  },
  {
    id: 2,
    name: "ICICI Bank",
    img: "/icici.svg",
    nameImg: "/nameicici.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Freelance Frontend Engineer",
    desc: [
      "• Built a movie booking website for a client’s college project using React, TypeScript, and NextJS, implementing a responsive UI with TailwindCSS and optimized performance for a smooth user experience.",
      "• Configured a CI/CD pipeline with Jenkins, leveraging Terraform and AWS CloudFormation to provision scalable cloud resources, reducing deployment time by 50% and improving system availability by 99.9% ",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Senior Frontend Engineer",
    desc: [
      "• Web Feedback System: Spearheaded the design and development of a responsive feedback system using ReactJS, adhering to SOLID principles, leading to a 20% improvement in user satisfaction metrics.",
      "• Led a team of 3 developers to implement AI features, including hand gesture recognition, boosting user engagement by 40%.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Frontend Engineer",
    desc: [
      "• FAQ Chatbot: Designed an engaging FAQ chatbot solution using HTML, CSS, JavaScript (ES6), and React for a bank, resulting in a 30% increase in customer self-service and engagement.",
      "• Integrated Redux for efficient state management, minimizing unnecessary re-renders by 40% and enhancing application performance with optimized data flow.",
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Assistant Frontend Engineer",
    desc: [
      "• 3D Holographic Solution: Integrated a Node.js (Express)-based 3D holographic virtual mannequin solution, showcased at a prominent event in London",
      "• Virtual Trainer Application: Engineered a browser-based virtual trainer application for the HR team using Amazon Sumerian, Google Dialogflow, and web technologies (HTML, CSS, and JavaScript).",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/HarshMall28",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/harsh-mall",
  },
];
