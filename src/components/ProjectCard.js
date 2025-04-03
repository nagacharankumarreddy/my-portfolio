import { Col } from "react-bootstrap";
import "./Styles/projectcard.css";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col xs={12} sm={6} md={4} data-aos="flip-left">
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
