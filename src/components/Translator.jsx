import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import {translateText} from '../services/Translation'


export default function Translator() {
    const [text, setText] = useState('');
    const [sourceLanguage, setSourceLanguage] = useState('en');
    const [targetLanguage, setTargetLanguage] = useState('es');
    const [translatedText, setTranslatedText] = useState('');
    

    useEffect(() => {
        if (translatedText !== '') {
            
        }
    }, [translatedText]);

    

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSourceLanguageChange = (event) => {
        setSourceLanguage(event.target.value);
    };

    const handleTargetLanguageChange = (event) => {
        setTargetLanguage(event.target.value);
    };

    const handleTranslation = async (event) => {
        event.preventDefault();

        try {
            // const response = await axios.post('/api/translate', {
            //     text,
            //     sourceLanguage,
            //     targetLanguage,
            // });
            // const translatedText = await translateText(text, sourceLanguage, targetLanguage);

            // setTranslatedText(response.data.translatedText);
            setTranslatedText(text);
        } catch (error) {
            console.log(error);
        }
    };

    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Text Translation</h1>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Form onSubmit={handleTranslation}>
                        <Form.Group controlId="formText">
                            <Form.Label>Enter text to translate</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                value={text}
                                onChange={handleTextChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formSourceLanguage">
                            <Form.Label>Source language</Form.Label>
                            <Form.Control
                                as="select"
                                value={sourceLanguage}
                                onChange={handleSourceLanguageChange}
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="formTargetLanguage">
                            <Form.Label>Target language</Form.Label>
                            <Form.Control
                                as="select"
                                value={targetLanguage}
                                onChange={handleTargetLanguageChange}
                            >
                                <option value="en">English</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                            </Form.Control>
                        </Form.Group>

                        <Button className='mt-3 mb-3' variant="primary" type="submit">
                            Translate
                        </Button>
                    </Form>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Translation</Card.Title>
                            <Card.Text>{translatedText}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>);

}
