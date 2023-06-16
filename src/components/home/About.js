import img1 from "../../assets/img/nat-1-large.jpg";
import img2 from "../../assets/img/nat-2-large.jpg";
import img3 from "../../assets/img/nat-3-large.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-mb-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-mb-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eius quae illo ea voluptates tenetur non quis expedita error dicta,
            provident molestiae libero sunt sint est cum laborum. Tempora,
            ducimus.
          </p>
          <h3 className="heading-tertiary u-mb-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            eius quae illo ea voluptates tenetur non quis expedita error dicta,
            provident molestiae libero sunt sint est cum laborum. Tempora,
            ducimus.
          </p>
          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={img1}
              alt="img 01"
              className="composition__img composition__img--p1"
            />
            <img
              src={img2}
              alt="img 02"
              className="composition__img composition__img--p2"
            />
            <img
              src={img3}
              alt="img 03"
              className="composition__img composition__img--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
