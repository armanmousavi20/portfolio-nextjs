import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Digital Marketing" icon="ri-apps-line" />

                <ServicesItem title="Wordpress Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Frontend Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
                My expertise is mostly in frontend development with frontend technologies
                such as JavaScript, React and NextJS,
                and I have developed this site with NextJS as well.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
