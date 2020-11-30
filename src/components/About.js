import React from "react";

//Assets
import profile from "../assets/profile2.jpg";

import user from "../assets/user.svg";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import calendar from "../assets/calendar.svg";
import plane from "../assets/plane.svg";
import world from "../assets/world.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

export const About = () => {
  return (
    <section className="about__main">
      <div className="about__profile">
        <img className="about__img" src={profile} alt="" />
        <div className="about__social-media">
          <ul className="about__list-social">
            <li className="about__list-social-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/matiassalicru"
              >
                <img src={twitter} alt="twitter logo" />
              </a>
            </li>
            <li className="about__list-social-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/matias-salicru"
              >
                <img src={linkedin} alt="linkedin logo" />
              </a>
            </li>
            <li className="about__list-social-item">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/matiassalicru"
              >
                <img src={github} alt="github logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="about__container">
        <h2 className="about__subtitle">Know about me</h2>

        <h1 className="about__title">About me</h1>

        <ul className="about__list">
          <li className="about__list-item">
            <img src={user} alt="user" />
            <h4>Name:</h4>
            <p>Matías Salicrú</p>
          </li>
          <li className="about__list-item">
            <img src={email} alt="user" />
            <h4>Email:</h4>
            <p>mattiassalicru@gmail.com</p>
          </li>
          <li className="about__list-item">
            <img src={phone} alt="user" />
            <h4>Phone:</h4>
            <p>+54 9 3834681214</p>
          </li>
        </ul>

        <ul className="about__list">
          <li className="about__list-item">
            <img src={calendar} alt="user" />
            <h4>Date of birth:</h4>
            <p>22 September - 1996</p>
          </li>
          <li className="about__list-item">
            <img src={plane} alt="user" />
            <h4>Address:</h4>
            <p>
              Alto Alberdi, Córdoba <br />
              Argentina
            </p>
          </li>
          <li className="about__list-item">
            <img src={world} alt="user" />
            <h4>Nationality:</h4>
            <p>Argentinian</p>
          </li>
        </ul>
      </section>
    </section>
  );
};
