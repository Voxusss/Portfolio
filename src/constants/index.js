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
    meta,
    starbucks,
    amu,
    tesla,
    shopify,
    carrent,
    ataw,
    vh,
    lis,
    duby,
    earth2,
    jobit,
    tripguide,
    threejs,
    faab,
    confluxx,
    pitchside,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
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
    }
  ];
  
  const experiences = [
    {
      title: "International Baccalaureate",
      company_name: "Lycée International Georges Duby",
      icon: duby,
      iconBg: "#301c10",
      date: "September 2019 - September 2022",
      points: [
        "Attained a Cambridge Advanced Diploma in English.",
        "Demonstrated exceptional aptitude and proficiency in mathematics and computer science at this level, earning perfect grades of 20/20 in both mathematics and computer science.",
      ],
    },
    {
      title: "B. A in Computer Science",
      company_name: "Aix-Marseille University",
      icon: amu,
      iconBg: "#301c10",
      date: "September 2022 - Present",
      points: [
        "Proficiency in C, Java, Python, SQL, HTML, CSS, JS & Assembly building projects from algorithms to applications.",
        "Led CS projects applying Project Management principles, collaborating effectively in diverse teams.",
        "Acquired a deep understanding of data structures, algorithms, databases conception, systems and architecture & complexity analysis.",
      ],
    }, 
    {
      title: "Research Intern",
      company_name: "CNRS | LIS Laboratory",
      icon: lis,
      iconBg: "#301c10",
      date: "September 2022 - Present",
      points: [
        "Technical proficiency in the ability to code and implement BFT systems in Python",
        "Deep understanding of BFT systems and expertise in the principles and protocols of BFT systems, including Tendermint's consensus mechanism.",
        "Conducted independent research on specific aspects of BFT systems, diving deep into research papers and other academic resources to understand the latest developments in the field.", 
        "Effectively communicated research findings to technical and non-technical audiences through internal reports and presentations followed by a final conference"
      ],
    }, 
  ];
  
  const testimonials = [
    {
      testimonial:
      "I was blown away by how skilled and creative you are when it comes to web development. Your ability to turn complex ideas into beautiful, functional websites is truly impressive.",
      name: "Théo",
      designation: "Student",
      company: "Aix-Marseille University",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "Working with you on our group project was a pleasure. Your attention to detail and dedication to making sure everything worked perfectly really showed me how passionate you are about your craft.",
      name: "Anthony",
      designation: "Student",
      company: "Aix-Marseille University",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Thanks to your expertise, our class project went above and beyond what we thought was possible. And your willingness to help others understand complex concepts is a true asset to our class.",
      name: "Dimitri",
      designation: "Student",
      company: "Aix-Marseille University",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Web-based portfolio that showcases my skills and projects used as a storefront for potentials hirers. Built using React.js, Tailwind CSS, Three.js and Vite.js.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "orange-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Voxusss/Portfolio",
    },
    {
      name: "FAAB",
      description:
        "Full-Stack application made with Django that allows users to send in cards to be graded, pay using Stripe and grade cards automatically via an image classification model.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
        {
          name: "PyTorch",
          color: "pink-text-gradient",
        },
      ],
      image: faab,
    },
    {
      name: "VHTools",
      description:
        "An all-in-one solution for botting raffles and giveaways, including an outlook email generator supporting Captchas, address generator, phone number generator, and a tracking / analytics tool.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "eel",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: vh,
      source_code_link: "https://github.com/Voxusss/VHTools",
    },
    {
      name: "Confluxx",
      description:
        "Rogue-like Tower Defense with intricate mechanics and a unique art style. Made in Unity with C#. The game is currently in development, expected to be released in early 2026.",
      tags: [
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Unity",
          color: "black-text-gradient",
        },
        {
          name: "Blender",
          color: "black-text-gradient",
        },
      ],
      image: confluxx,
    },
    {
      name: "Earth2 BuyBot",
      description:
        "Scraping bot that automatically purchases cheaply listed items from the Earth2 website, scraping all listings (+100,000) in a few seconds.  A lot of competition on it so had to be pretty performant. Made over $2k from it :) (PRIVATE REPO)",
      tags: [
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "requests",
          color: "blue-text-gradient",
        },
        {
          name: "cookiejar",
          color: "orange-text-gradient",
        },
        {
          name: "threading",
          color: "pink-text-gradient",
        },
      ],
      image: earth2,
    },
    {
      name: "PitchsidePro",
      description:
        "Web app  that allows user to see advanced and in-depth statistics about football matches and teams. Built using Flask and Tailwind CSS.",
      tags: [
        {
          name: "flask",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
      ],
      image: pitchside,
      web_link: "http://51.20.87.110/leagues",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };