import React from "react";

// Images
import html from "../assets/icons/html5.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import sass from "../assets/icons/sass.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import firebase from "../assets/icons/firebase.png";

export const Skills = () => {
  return (
    <section className="skills__main">
      <div className="skills__header">
        <h1 className="skills__title">Skills</h1>

        <h2 className="skills__subtitle">
          Here is a list of my actual skills in technology. They are growing
          every day thanks to courses and practice! :D
        </h2>
      </div>

      <ul className="skills__list">
        <li className="skills__list-item">
          <img src={html} alt="html5" />
          <h1>HTML5</h1>
          <p>
            Markup language where I can manage the SEO of the website and make
            semantic all the web information.
          </p>
        </li>
        <li className="skills__list-item">
          <img src={css} alt="css3" />
          <h1>CSS3</h1>
          <p>
            Cascade Style Sheets, the first and more important style sheet, to
            make your website better looking.
          </p>
        </li>
        <li className="skills__list-item">
          <img src={js} alt="javaScript" />
          <h1>JavaScript</h1>
          <p>
            The language of the web, almost... The main language that will make
            your website get full of functionalities!
          </p>
        </li>
        <li className="skills__list-item">
          <img src={sass} alt="sass" />
          <h1>Sass</h1>
          <p>
            The preprocessor of CSS that help a lot with the management and to
            keep small files of css.
          </p>
        </li>
        <li className="skills__list-item">
          <img src={react} alt="react" />
          <h1>React</h1>
          <p>
            React, one of the three bests Frameworks to work with JavaScript,
            with Redux, routers, sass, etc. Let us work with components that
            make out life better at coding.
          </p>
        </li>
        <li className="skills__list-item">
            <img src={redux} alt="redux"/>
            <h1>Redux</h1>
            <p>This is an alternative of the hook useContext, where we can manage a global state in our application, it works with actions, dispatchers and the <b>STORE</b> where our global state is saved. </p>
        </li>
        <li className="skills__list-item">
          <img src={firebase} alt="firebase" />
          <h1>Firebase</h1>
          <p>
            When you need to store some data, or to make a Login with google, there
            is when firebase comes to action, letting us to implement all these
            important functionalities, and even host our website.
          </p>
        </li>
      </ul>
    </section>
  );
};
