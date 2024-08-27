import React, { useState } from "react";
import "./portfolio.css";
import portfolioData from "../../helpers/portfolioData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        arial-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: "200px" }} />
        </Modal.Body>

        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: "0.7rem", marginRight: "auto" }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapped = portfolioData.map((e, index) => {
    return (
      <Card key={index} id="portfolio__card__container">
        <Image
          className="portfolio__image"
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              title: e.desc,
              summary: e.summary,
              tech: e.tech,
            });
            setModalShow(true);
          }}
          src={e.image}
        />
        <div className="portfolio__click__info"> &#x1F50E;&#xFE0E;</div>
        {createModal(tempData)}
      </Card>
    );
  });

  return (
    <div className="portfolio__main__container" id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>
        {/* This is my LinkedIn page */}
        {/* <link
          href={"https://www.linkedin.com/in/charlosgary/"}
          target="_blank"
          rel="noreferrer"
        ></a> */}
      </p>
      <Container fluid="lg" style={{ padding: "2rem 0" }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
