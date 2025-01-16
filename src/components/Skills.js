import {
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiElasticsearch, SiRedux } from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={1500}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                keyBoardControl={true}
                autoPlay={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <div className="skill-icon">
                    <FaHtml5 size={50} color="#E44D26" />
                  </div>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <FaCss3Alt size={50} color="#1572B6" />
                  </div>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <FaJs size={50} color="#F7DF1E" />
                  </div>
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <FaReact size={50} color="#61DAFB" />
                  </div>
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <SiRedux size={50} color="#764ABC" />
                  </div>
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <FaNodeJs size={50} color="#339933" />
                  </div>
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <SiElasticsearch size={50} color="#005571" />
                  </div>
                  <h5>Elasticsearch</h5>
                </div>
                <div className="item">
                  <div className="skill-icon">
                    <FaDatabase size={50} color="#4479A1" />
                  </div>
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="colorSharp"
      />
    </section>
  );
};
