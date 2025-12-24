// src/data/portfolioData.js
export const projects = [
  {
    title: "Gestion du Cycle d'Ingénieur",
    description: "Application web de gestion des parcours académiques des élèves ingénieurs, depuis l'intégration jusqu'à la diplomation",
    tech: ["Node.js", "React.js", "MongoDB"],
    category: "Web",
    media: {
      type: "carousel",
      images: [
        "/images/c1.png",
        "/images/c2.png",
        "/images/c3.png",
        "/images/c4.png"
      ]
    }
  },
  {
    title: "Simulation de Trafic en Temps Réel",
    description: "Développement d'une solution permettant de simuler le trafic urbain et d'optimiser la circulation à l'aide d'un tableau de bord interactif en utilisant l'apprentissage par renforcement",
    tech: ["React.js", "FastAPI", "Python", "SUMO", "Stable-Baselines3"],
    category: "IA & ML",
    media: {
      type: "carousel",
      images: [
        "/images/sumo1.png",
        "/images/sumo2.png", 
          "/images/sumo3.png"

      ]
    }
  },
  {
    title: "Street Incident Reporter",
    description: "Application web permettant aux citoyens de signaler les incidents urbains (nids-de-poule, infrastructures endommagées) pour faciliter l'intervention des autorités gouvernementales",
    tech: ["Spring Boot", "Thymeleaf", "PostgreSQL", "Google Maps API"],
    category: "Web",
    media: {
      type: "carousel",
      images: [
        "/images/si_login.png",
        "/images/si_db.png",
      ]
    }
  },
  {
    title: "Smart Farm Mobile App",
    description: "Application mobile connectée à un système IoT pour le suivi en temps réel des données environnementales d'une smart farm. Contrôle à distance des équipements (caméras, pompes)",
    tech: ["Flutter", "Dart", "Firebase", "IoT"],
    category: "Mobile & IoT",
    media: {
      type: "carousel",
      images: [
        "/images/2.jpg",
        "/images/5.jpg",
        "/images/6.jpg",
        "/images/7.jpg", 
        "/images/11.jpg",
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpg"  
      ]
    }
  },
  {
    title: "Crypto Price Prediction",
    description: "Système d'extraction automatique de données depuis différentes sources en ligne pour collecter des informations sur les cryptomonnaies et construire un modèle prédictif",
    tech: ["Python", "Selenium", "React.js", "Jupyter Notebook"],
    category: "Data Science",
    media: {
      type: "carousel",
      images: [
        "/images/image.png",
      ]
    }
  },
  {
    title: "Jeu 2D Interactif",
    description: "Création d'un jeu 2D avec interface fluide, mécaniques de jeu dynamiques et gestion des scores et niveaux",
    tech: ["Unity", "C#"],
    category: "Game Dev",
    media: {
      type: "carousel",
      images: [
        "/images/game1.png",
        "/images/game2.png",
        "/images/game3.png",
      ]
    }
  }
];

export const experiences = [
  {
    company: "Blue Jet Engineering",
    role: "Développeur Full Stack",
    period: "Juillet - Août 2025",
    description: "Développement d'une application mobile de contrôle et supervision de ferme, conçue pour optimiser la gestion quotidienne et anticiper les maladies grâce à l'analyse de facteurs clés",
    tech: ["Node.js", "Express.js", "MongoDB", "React Native"],
    logo: "/images/si_login.png"
  },
  {
    company: "IT Progress",
    role: "Développeur Full Stack",
    period: "Juillet - Août 2024",
    description: "Conception et développement d'une application de gestion de laboratoire pour automatiser la gestion des équipements, stocks, utilisateurs, et des tâches et tests réalisés",
    tech: ["Angular", "Spring Boot", "MongoDB", "JHipster"],
    logo: "/images/si_login.png"
  },
  {
    company: "Comar Assurances",
    role: "Développeur Full Stack",
    period: "Février - Juin 2023",
    description: "Conception et développement d'une application web pour la mécanisation et la centralisation des méthodes de paiement",
    tech: ["Angular", "Spring Boot", "MongoDB", "JHipster"],
    logo: "/images/si_login.png"
  },
  {
    company: "Tunisair",
    role: "Développeur Full Stack",
    period: "Juillet - Août 2022",
    description: "Conception et développement d'une application web pour la gestion des billets d'avion",
    tech: ["Angular", "Spring Boot", "PostgreSQL"],
    logo: "/images/si_login.png"
  }
];

export const skills = {
  "Langages": ["Java", "Python", "C#", "JavaScript", "TypeScript", "Dart", "C"],
  "Frontend": ["React.js", "Angular", "Flutter", "HTML/CSS"],
  "Backend": ["Node.js", "Express.js", "Spring Boot", "FastAPI"],
  "Bases de données": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  "Outils & DevOps": ["Git", "Docker", "Kubernetes", "SUMO"]
};

export const education = [
  {
    institution: "ISAMM - Institut Supérieur des Arts Multimédia",
    degree: "Ingénierie en Génie Logiciel",
    period: "2023 - Présent",
    description: "Spécialisation en développement logiciel, intelligence artificielle et technologies multimédia"
  },
  {
    institution: "FSEGT - Faculté des Sciences Économiques",
    degree: "Licence en Business Intelligence",
    period: "2020 - 2023",
    description: "Formation en analyse de données, business intelligence et systèmes d'information"
  },
  {
    institution: "Lycée Beb El Khadra - Tunis",
    degree: "Baccalauréat Sciences Expérimentales",
    period: "2019 - 2020",
    description: "Mention Assez Bien, spécialité Sciences Expérimentales"
  }
];

export const associations = [
  {
    name: "Orenda Junior Entreprise",
    role: "Responsable Affaires Étrangères",
    period: "2025 - Présent"
  },
  {
    name: "Orenda Junior Entreprise",
    role: "Chargé de mission RSE",
    period: "2024 - 2025"
  },
  {
    name: "Orenda Junior Entreprise",
    role: "Consultant International",
    period: "2023 - 2024"
  },
  {
    name: "Club Robotique ISAMM",
    role: "Responsable des Ressources Humaines",
    period: "2023 - 2024"
  },
  {
    name: "JCI Étudiant FSEGT",
    role: "Conseiller Juridique",
    period: "2021 - 2022"
  }
];