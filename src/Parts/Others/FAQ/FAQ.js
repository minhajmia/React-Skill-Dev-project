import React from "react";

const FAQ = () => {
  return (
    <div>
      <h2 className="text-3xl text-center my-10">Frequently Asked Questions</h2>
      <div className="md:w-1/2	mx-3 md:mx-auto ">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            (1) What web development?
          </div>
          <div className="collapse-content">
            <p>
              Web development is the building and maintenance of websites; it's
              the work that happens behind the scenes to make a website look
              great, work fast and perform well with a seamless user experience.
              Web developers, or 'devs', do this by using a variety of coding
              languages.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (2) What's graphic design?
          </div>
          <div className="collapse-content">
            <p>
              Graphic designers create visual concepts, using computer software
              or by hand, to communicate ideas that inspire, inform, and
              captivate consumers. They develop the overall layout and
              production design for applications such as advertisements,
              brochures, magazines, and reports.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (3) What is ux and ui design?
          </div>
          <div className="collapse-content">
            <p>
              UI refers to the screens, buttons, toggles, icons, and other
              visual elements that you interact with when using a website, app,
              or other electronic device. UX refers to the entire interaction
              you have with a product, including how you feel about the
              interaction.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (4) What is app development?
          </div>
          <div className="collapse-content">
            <p>
              A mobile app developer uses programming languages and development
              skills to create, test, and develop applications on mobile
              devices. They work in popular operating system environments like
              iOS and Android and often take into account UI and UX principles
              when creating applications.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-5"
        >
          <div className="collapse-title text-xl font-medium">
            (5) What is game development?
          </div>
          <div className="collapse-content">
            <p>
              Video game developers take a designer's concepts and build them
              into a playable game for users. Video game developers, also known
              as games developers or video game programmers, write code for
              games for a variety of formats, such as PCs, consoles, web
              browsers and mobile phones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
