import "./LinksProjects.scss";
import { Link } from "react-router-dom";

export const LinksProjects = () => {
  return (
    <div className="links-container">
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/BookStore.jpg"}
          className="project-image"
          alt="bookStore"
        />
        <div className="project-info">
          <h3 className="project-header">Project 1 (Book Store)</h3>
          <p className="project-description">
            In this project, my team and I developed an online bookstore where
            users can search for books, add them to the cart, and switch between
            languages using a built-in language selector.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/second">
              <a href="" className="project-link-demo">
                Live Demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/BookStore"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/Calculator.jpg"}
          className="project-image"
          alt="calculator"
        />
        <div className="project-info">
          <h3 className="project-header">Project 2 (Calculator)</h3>
          <p className="project-description">
            A basic calculator that supports all standard arithmetic operations
            such as addition, subtraction, multiplication, and division.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/calculator">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Calculator"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/ColorPicker.jpg"}
          className="project-image"
          alt="colorPicker"
        />
        <div className="project-info">
          <h3 className="project-header">Project 3 (Color Picker)</h3>
          <p className="project-description">
            A color palette tool that allows users to pick any color and preview
            how it will appear on the page in real time.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/colorPicker">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/ColorPicker"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/CreditCard.jpg"}
          className="project-image"
          alt="creditCard"
        />
        <div className="project-info">
          <h3 className="project-header">Project 4 (Credit Card Form)</h3>
          <p className="project-description">
            A simple and responsive form for entering credit card details during
            online purchases.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/creditCard">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/CreditCard"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/Fryzjer.jpg"}
          className="project-image"
          alt="fryzjer"
        />
        <div className="project-info">
          <h3 className="project-header">Project 5 (Barder Shop)</h3>
          <p className="project-description">
            A hairdressing salon website where users can browse different
            haircut styles and see the price for each one.
          </p>

          <div className="project-buttons-link">
            <Link className="project-link" to="/salon">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Fryzjer"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>

      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/Gazeta.jpg"}
          className="project-image"
          alt="gazeta"
        />
        <div className="project-info">
          <h3 className="project-header">Project 6 (NewsPapper website)</h3>
          <p className="project-description">
            In this project, I created a digital newspaper website that displays
            articles from various categories such as politics, technology, and
            entertainment.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/gazeta">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Gazeta"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/Galleria.jpg"}
          className="project-image"
          alt="galleria"
        />
        <div className="project-info">
          <h3 className="project-header">Project 7 (Galleri)</h3>
          <p className="project-description">
            A photo gallery with images that automatically change in sequence,
            creating a simple slideshow effect.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/galleria">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/Galleria"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/LinkPage.jpg"}
          className="project-image"
          alt="linkPage"
        />
        <div className="project-info">
          <h3 className="project-header">Project 8 (Social Links)</h3>
          <p className="project-description">
            A responsive webpage with styled buttons and icons that link to
            social platforms and useful external websites.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/linkPage">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/SocialLinks"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/Omlette.jpg"}
          className="project-image"
          alt="omlette"
        />
        <div className="project-info">
          <h3 className="project-header">Project 9 (Omlette Recipe)</h3>
          <p className="project-description">
            A mobile-friendly recipe page featuring a detailed omelette recipe,
            including ingredients and clear cooking steps.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/omlette">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/OmletRecipet"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/ResponseWeb.jpg"}
          className="project-image"
          alt="responseWeb"
        />
        <div className="project-info">
          <h3 className="project-header">Project 10 (Resposive Website)</h3>
          <p className="project-description">
            A simple landing page with a fully responsive layout, optimized for
            both desktop and mobile devices.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/responseWeb">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/a3eff856d57992ab49e4bff3ba61368b0154806c/src/components/Projects/ResponseWebSite"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/image-qr-code.png"}
          className="project-image"
          alt="responseWeb"
        />
        <div className="project-info">
          <h3 className="project-header">Project 11 (Qr Code)</h3>
          <p className="project-description">
            A clean and responsive QR code component that encourages users to
            visit Frontend Mentor and improve their frontend skills by building
            real projects.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/qr-code">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/main/src/components/Projects/QrCode"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/stacja.png"}
          className="project-image"
          alt="responseWeb"
        />
        <div className="project-info">
          <h3 className="project-header">Project 12 (Fuel Station)</h3>
          <p className="project-description">
            This website displays the opening hours of a gas station and
            includes a simple calculator to estimate the fuel cost based on the
            fuel type and the number of liters.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/stacjaPaliw">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/My_website/tree/main/src/components/Projects/QrCode"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/strongCard-image.png"}
          className="project-image"
          alt="strongCard"
        />
        <div className="project-info">
          <h3 className="project-header">Project 13 (Strong Card)</h3>
          <p className="project-description">
            StrongCard – an interactive platform displaying restaurants and
            entertainment venues on a map that offer discounts.
          </p>
          <div className="project-buttons-link">
            <a
              className="project-link-demo"
              href="https://strong-card.vercel.app/"
              target="blank"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/ypayel/StrongCard"
              target="blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/TrainApi-image.png"}
          className="project-image"
          alt="TrainApi"
        />
        <div className="project-info">
          <h3 className="project-header">Project 14(TrainApi)</h3>
          <p className="project-description">
            Roller Coaster Queue Management API – A TypeScript backend system
            with REST API and Redis integration. Manages roller coasters,
            wagons, staff, and clients while ensuring performance, scalability,
            and real-time monitoring.
          </p>
          <div className="project-buttons-link">
            <a
              href="https://github.com/ypayel/Train_Mountains"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/MvpPage.png"}
          className="project-image"
          alt="MvpPage"
        />
        <div className="project-info">
          <h3 className="project-header">Project 15(Mvp Page)</h3>
          <p className="project-description">
            The project was created as a simple MVP application. The purpose of
            the application is to enable the user to plan healthy meals
            throughout the day.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/mvpPage">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/Mvp_task"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/konfigurator.png"}
          className="project-image"
          alt="Konfigurator"
        />
        <div className="project-info">
          <h3 className="project-header">Project 16(Konfigurator)</h3>
          <p className="project-description">
            The Style Configurator is an interactive React application that
            allows users to dynamically customize the appearance of various
            elements on the page. The project demonstrates practical use of
            component state (useState) and inline styling to produce instant
            visual changes without reloading the application.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/konfigurator">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a
              href="https://github.com/ypayel/Konfigurator"
              target="_blank"
              className="project-link-code"
            >
              Code
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <img
          src={process.env.PUBLIC_URL + "/images/beatysalon_3.png"}
          className="project-image"
          alt="BeatySalon"
        />
        <div className="project-info">
          <h3 className="project-header">(Project 17)Beaty Salon</h3>
          <p className="project-description">
            This project is a simple single-page application built with React,
            designed for a beauty salon website. The application allows users to
            explore the available cosmetic services and calculate the price of
            their selected facial treatments.
          </p>
          <div className="project-buttons-link">
            <Link className="project-link" to="/beaty-salon">
              <a href="" className="project-link-demo">
                Live demo
              </a>
            </Link>
            <a href="https://github.com/ypayel/Salon_kosmietyczny" 
            className="project-link-code"
             target="_blank">
                Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksProjects;
