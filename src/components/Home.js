import React from "react";

//Assets
export const Home = () => {
  return (
    <section className="home__main">
      <h1 className="home__title">Welcome to my resume</h1>

      <h2 className="home__subtitle">
        In this section you'll find a guide of this web resume, and what you
        will get in the sections on the left sidebar.
      </h2>

      <section className="home__section">
        <div>
          <h4 className="home__section-title">Home</h4>
          <p>You're here! The guide of the resume.</p>
        </div>
        <div>
          <h4 className="home__section-title">About</h4>
          <p>
            In the About section you will find my personal information to get in
            touch with me, also my social media and GitHub!
          </p>
        </div>
        <div>
          <h4 className="home__section-title">Skills</h4>
          <p>
            In the skills section you will get a list of all the technologies
            that I use daily, all related to my carrer as a front-end developer.
          </p>
        </div>
        <div>
          <h4 className="home__section-title">Projects</h4>
          <p>
            There are my projects, maybe not all of them but the more remarkable
            ones, those that have been important to me in my professional
            carrer, and that left a learn in me.
          </p>
        </div>
        <div>
          <h4 className="home__section-title">Experiences</h4>
          <p>
            My experiences in this beautiful world, I have to say that I don't
            have so much experience in the professional world of development
            yet, but I'm always looking for earning more experience.
          </p>
        </div>
      </section>
    </section>
  );
};
