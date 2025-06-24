import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "Building Renovation",
    about:
      "Expert renovation services to upgrade and modernize existing structures, enhancing functionality and aesthetic appeal.",
  },
  {
    icon: construction,
    title: "Construction Services",
    about:
      "Comprehensive construction solutions, from project planning to execution, ensuring high-quality and timely completion.",
  },
  {
    icon: design,
    title: "Design & Planning",
    about:
      "Professional design and planning services to create efficient and innovative spaces tailored to client needs.",
  },
  {
    icon: document,
    title: "Documentation",
    about:
      "Detailed documentation for all project stages, providing clear records and ensuring compliance with industry standards.",
  },
  {
    icon: paint,
    title: "Interior Design",
    about:
      "Creative interior design services to craft comfortable and visually stunning spaces that reflect individual style.",
  },
  {
    icon: support,
    title: "Customer Support",
    about:
      "Dedicated customer support to assist with inquiries, provide updates, and ensure a smooth project experience from start to finish.",
  },
];


export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Planning",
    about:
      "Detailed research and strategizing to establish project goals, requirements, and timelines for a successful outcome.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design",
    about:
      "Crafting user-centered designs, wireframes, and mockups to create a visually appealing and functional interface.",
  },
  {
    icon: FaRegBuilding,
    title: "Building",
    about:
      "Developing the core functionalities and implementing features with clean, efficient code to bring the design to life.",
  },
  {
    icon: FaSitemap,
    title: "Finish",
    about:
      "Thorough testing, debugging, and deployment to ensure the project meets all specifications and functions seamlessly.",
  },
];


export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "An experienced constructor known for meticulous planning and project management, ensuring every construction project meets quality standards and deadlines.",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "A visionary architect who blends modern design with sustainable practices to create innovative, environmentally friendly buildings.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "A skilled builder with a strong focus on craftsmanship and attention to detail, dedicated to bringing architectural designs to life with precision.",
    post: "Builder",
  },
];

