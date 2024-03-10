
import artisanat from "../assets/img/artisanat.jpg";
import painCare from "../assets/img/painCare.jpg";
import it from "../assets/img/it.jpg";
import locaPulse from "../assets/img/locaPulse.jpg";

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
    name: "PainCare",
    description:
      "Application web basée sur l’architecture Spring & Angular pour le suivi, la gestion des douleurs et la détection du l’endométriose", 
    stack: ["Spring", "Angular", "JWT", "Docker"],
    sourceCode: "https://github.com/randilt/cyberscourge-hub",
    img: painCare,
    preview: "https://rtharusha.tech",
  },
  {
    name: "It Holic Web site",
    description:
      "It holic event web app",
    stack: ["React", "NodeJS", "firebase"],
    sourceCode: "https://github.com/randilt/notion-clone",
    img: it,
    preview: "https://ensias-it-club.netlify.app/itholic",
  },
  {
    name: "LocaPulse",
    description:
      "Application web basée sur l’architecture Symfony MVC & React pour la gestion des locations immobiliers",
    stack: ["React", "NodeJS", "Express", "MongoDB"],
    sourceCode: "https://github.com/randilt/notion-clone",
    img: locaPulse,
    preview: "#",
  },
];

//projects end
export default projects;
