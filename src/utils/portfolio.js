import RamaniLogo from '../assets/images/ramani.png';
import ReachLogo from '../assets/images/reach.jpeg';
import NodeXpertLogo from '../assets/images/successiveTech.jpg';
import Policy from '../assets/images/policy.jpg';
import Dentsu from '../assets/images/dentsu.png';
import Peakflo from '../assets/images/peakflo.png';
import Portflio from '../assets/images/portfolioLogo.png';

export const greeting = {
  username: "Shraddha Goel",
  title: "I'm Shraddha Goel",
  subTitle:
    "Building stunning web applications that merge innovation and functionality seamlessly. 🧑‍💻 ",
  resumeLink:
    "https://drive.google.com/file/d/1aVDDVlnJEhNuHRiYFze1raWhp0HegIr0/view", // Set to empty to hide the button
  displayGreeting: true,
};

export const aboutSection = {
  desc: "I am experienced software engineer with 7 years of expertise,specializing in MERN stack development and architected robust web applications. Passionate about creating scalable and innovative solutions, I bring a strong technical skill-set and a track record of successful project delivery to drive impactful results in the ever-evolving software industry."
}

export const socialMediaLinks = {
  apps: [
    {
      link: "https://github.com/shraddhadev24",
      id: "github",
      faIcon: "fab fa-github",
    },
    {
      link: "mailto:shraddhagoelwork@gmail.com",
      id: "mail",
      faIcon: "fas fa-envelope",
    },
    {
      link: "https://www.linkedin.com/in/shraddha-goel-21b692121/",
      id: "linkedin",
      faIcon: "fab fa-linkedin-in",
    },
    {
      link: "https://medium.com/@shraddhagoel24",
      id: "medium",
      faIcon: "fab fa-medium",
    },
    {
      link: "https://stackoverflow.com/users/9945438/shraddha-goel",
      id: "stack-overflow",
      faIcon: "fab fa-stack-overflow",
    },
  ],
};

export const workSection = [
  {
    name: "Edge App",
    img: RamaniLogo,
    desc: `Work on futuristic technology to make cameras see and keep
    records using neural networks and AI technology, resulting in
    an increase of sales by 200%.`
  },
  {
    name: "Reach24",
    img: ReachLogo,
    desc: `Developed and maintained end-to-end web applications for a
    logistics truck repairing company, enhancing operational
    efficiency by 10% and streamlining workflows.`,
  },
  {
    name: "React Dev Portfolio",
    img: Portflio,
    desc: "This is my first own open-source projects, for the developers like me to build there portfolio website in no-time.",
  },
  {
    name: "Peakflo",
    img: Peakflo,
    desc: "Develop core features like Accounts Payable & Accounts Receivable which generate more than $10K MRR within first few months of the launch",
  },
  {
    name: "PolicyBazaar",
    img: Policy,
    desc: `Spearheaded the successful migration of the company's
    flagship product to a new frontend framework, resulting in a
    65% reduction in website load time and a seamless user
    experience for millions of customers.`,
  },
  {
    name: "Meeting App",
    img: NodeXpertLogo,
    desc: "Worked as a full stack engineer to create a internal solution which help in booking the conference room of the office",
  },
];

export const footerSection = {
  greeting: 'Made with love ❤️ Shraddha'
}