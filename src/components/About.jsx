import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>About Translator</h1>
          <p>
            Translator makes it possible to translate text into several languages. It leverages the most recent neural machine translation technology and is driven by the Cloud Translation API to deliver precise and excellent translations.
          </p>
          {/* <p>
            Translator also includes a speech option that allows you to listen to the translated text in the target language. Simply click on the "Listen" button next to the translated text to hear it spoken out loud.
          </p> */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
