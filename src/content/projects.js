
import artisanat from "../assets/img/artisanat.jpg";
import painCare from "../assets/img/painCare.jpg";
import it from "../assets/img/it.jpg";

//projects start
const projects = [
  {
    name: "PfArtisanat",
    description:
      "Application web basée sur l’architecture JEE & Angular pour la gestion des Artisans, de Produits d’Artisanat et d’Amateurs d’Artisanat",
    stack: ["JAVA EE", "ANGULAR", "MariaDB"],
    sourceCode: "https://github.com/ProjectsAcademic/Artisanat_Frontend_Angular.git",
    img: artisanat,
    preview: "https://bookingcomnext14.netlify.app/",
  },
  {
    name: "Cyberscourge Hub",
    description:
      "An open source ultra fast markdown blog app built using Hugo and deployed on Netlify. The theme of this app is 100% custom built by me. The theme is also open source and can be found on my github profile. And I regularly write articles on this blog.",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
    sourceCode: "https://github.com/randilt/cyberscourge-hub",
    img: painCare,
    preview: "https://rtharusha.tech",
  },
  {
    name: "Jotion (Notion Clone)",
    description:
      "A clone of the popular note taking app Notion. This app is built using Nextjs 13 and Tailwind CSS. It uses clerk for authentication and convex for its real time database. The project is not yet complete ",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
    sourceCode: "https://github.com/randilt/notion-clone",
    img: it,
    preview: "#",
  },
];

//projects end
export default projects;
