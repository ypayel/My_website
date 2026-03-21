import "./LinksProjects.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  liveDemo?: string;
  code: string;
  internal?: boolean;
};

export const LinksProjects = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      title: "Project 1 (Book Store)",
      description:
        "In this project, my team and I developed an online bookstore where users can search for books, add them to the cart, and switch between languages using a built-in language selector.",
      image: "/images/BookStore.jpg",
      alt: "bookStore",
      liveDemo: "/second",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/BookStore",
      internal: true,
    },
    {
      id: 2,
      title: "Project 2 (Calculator)",
      description:
        "A basic calculator that supports all standard arithmetic operations such as addition, subtraction, multiplication, and division.",
      image: "/images/Calculator.jpg",
      alt: "calculator",
      liveDemo: "/calculator",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Calculator",
      internal: true,
    },
    {
      id: 3,
      title: "Project 3 (Color Picker)",
      description:
        "A color palette tool that allows users to pick any color and preview how it will appear on the page in real time.",
      image: "/images/ColorPicker.jpg",
      alt: "colorPicker",
      liveDemo: "/colorPicker",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/ColorPicker",
      internal: true,
    },
    {
      id: 4,
      title: "Project 4 (Credit Card Form)",
      description:
        "A simple and responsive form for entering credit card details during online purchases.",
      image: "/images/CreditCard.jpg",
      alt: "creditCard",
      liveDemo: "/creditCard",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/CreditCard",
      internal: true,
    },
    {
      id: 5,
      title: "Project 5 (Barber Shop)",
      description:
        "A hair salon website where users can browse different haircut styles and see the price for each one.",
      image: "/images/Fryzjer.jpg",
      alt: "fryzjer",
      liveDemo: "/salon",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Fryzjer",
      internal: true,
    },
    {
      id: 6,
      title: "Project 6 (Newspaper Website)",
      description:
        "In this project, I created a digital newspaper website that displays articles from various categories such as politics, technology, and entertainment.",
      image: "/images/Gazeta.jpg",
      alt: "gazeta",
      liveDemo: "/gazeta",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Gazeta",
      internal: true,
    },
    {
      id: 7,
      title: "Project 7 (Gallery)",
      description:
        "A photo gallery with images that automatically change in sequence, creating a simple slideshow effect.",
      image: "/images/Galleria.jpg",
      alt: "galleria",
      liveDemo: "/galleria",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Galleria",
      internal: true,
    },
    {
      id: 8,
      title: "Project 8 (Social Links)",
      description:
        "A responsive webpage with styled buttons and icons that link to social platforms and useful external websites.",
      image: "/images/LinkPage.jpg",
      alt: "linkPage",
      liveDemo: "/linkPage",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/SocialLinks",
      internal: true,
    },
    {
      id: 9,
      title: "Project 9 (Omelette Recipe)",
      description:
        "A mobile-friendly recipe page featuring a detailed omelette recipe, including ingredients and clear cooking steps.",
      image: "/images/Omlette.jpg",
      alt: "omlette",
      liveDemo: "/omlette",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/OmletRecipet",
      internal: true,
    },
    {
      id: 10,
      title: "Project 10 (Responsive Website)",
      description:
        "A simple landing page with a fully responsive layout, optimized for both desktop and mobile devices.",
      image: "/images/ResponseWeb.jpg",
      alt: "responseWeb",
      liveDemo: "/responseWeb",
      code: "https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/ResponseWebSite",
      internal: true,
    },
    {
      id: 11,
      title: "Project 11 (QR Code)",
      description:
        "A clean and responsive QR code component that encourages users to visit Frontend Mentor and improve their frontend skills by building real projects.",
      image: "/images/image-qr-code.png",
      alt: "qrCode",
      liveDemo: "/qr-code",
      code: "https://github.com/ypayel/My_website/tree/main/src/components/Projects/QrCode",
      internal: true,
    },
    {
      id: 12,
      title: "Project 12 (Fuel Station)",
      description:
        "This website displays the opening hours of a gas station and includes a simple calculator to estimate the fuel cost based on the fuel type and the number of liters.",
      image: "/images/stacja.png",
      alt: "fuelStation",
      liveDemo: "/stacjaPaliw",
      code: "https://github.com/ypayel/My_website/tree/main/src/components/Projects/StacjaPaliw",
      internal: true,
    },
    {
      id: 13,
      title: "Project 13 (Strong Card)",
      description:
        "StrongCard – an interactive platform displaying restaurants and entertainment venues on a map that offer discounts.",
      image: "/images/strongCard-image.png",
      alt: "strongCard",
      liveDemo: "https://strong-card.vercel.app/",
      code: "https://github.com/ypayel/StrongCard",
      internal: false,
    },
    {
      id: 14,
      title: "Project 14 (Train API)",
      description:
        "Roller Coaster Queue Management API – a TypeScript backend system with REST API and Redis integration. It manages roller coasters, wagons, staff, and clients while ensuring performance, scalability, and real-time monitoring.",
      image: "/images/TrainApi-image.png",
      alt: "TrainApi",
      code: "https://github.com/ypayel/Train_Mountains",
    },
    {
      id: 15,
      title: "Project 15 (MVP Page)",
      description:
        "The project was created as a simple MVP application. The purpose of the application is to enable the user to plan healthy meals throughout the day.",
      image: "/images/MvpPage.png",
      alt: "MvpPage",
      liveDemo: "/mvpPage",
      code: "https://github.com/ypayel/Mvp_task",
      internal: true,
    },
    {
      id: 16,
      title: "Project 16 (Konfigurator)",
      description:
        "The Style Configurator is an interactive React application that allows users to dynamically customize the appearance of various elements on the page. The project demonstrates practical use of component state (useState) and inline styling to produce instant visual changes without reloading the application.",
      image: "/images/konfigurator.png",
      alt: "Konfigurator",
      liveDemo: "/konfigurator",
      code: "https://github.com/ypayel/Konfigurator",
      internal: true,
    },
    {
      id: 17,
      title: "Project 17 (Beauty Salon)",
      description:
        "This project is a simple single-page application built with React, designed for a beauty salon website. The application allows users to explore the available cosmetic services and calculate the price of their selected facial treatments.",
      image: "/images/beatysalon_3.png",
      alt: "BeautySalon",
      liveDemo: "/beaty-salon",
      code: "https://github.com/ypayel/Salon_kosmietyczny",
      internal: true,
    },
    {
      id: 18,
      title: "Project 18 (SQL Database)",
      description:
        "WydarzeniaDB is an event management database that supports users, roles, events, registrations, payments, and reviews. The project consists of 10 relational tables, views, and stored procedures and was implemented in MS SQL Server.",
      image: "/images/Sql_Database.png",
      alt: "SqlDatabase",
      code: "https://github.com/ypayel/Sql_practice/blob/main/Wydarzenia_project.txt",
    },
  ];

 return (
  <div className="links-container">
    {projects.map((project, index) => (
      <motion.div
        className="project-container"
        key={project.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <div className="project-image-wrapper">
          <img
            src={process.env.PUBLIC_URL + project.image}
            className="project-image"
            alt={project.alt}
          />

          <div className="project-image-overlay">
            <div className="project-overlay-buttons">
              {project.liveDemo &&
                (project.internal ? (
                  <Link className="project-link-demo" to={project.liveDemo}>
                    Live Demo
                  </Link>
                ) : (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-demo"
                  >
                    Live Demo
                  </a>
                ))}

              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="project-link-code"
              >
                Code
              </a>
            </div>
          </div>
        </div>

        <div className="project-info">
          <h3 className="project-header">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <div className="project-buttons-link">
            {project.liveDemo &&
              (project.internal ? (
                <Link className="project-link-demo" to={project.liveDemo}>
                  Live Demo
                </Link>
              ) : (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-demo"
                >
                  Live Demo
                </a>
              ))}

            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
};

export default LinksProjects;
