import * as React from 'react';
import { Html, Head, Body, Container, Heading, Text } from '@react-email/components';

const EmailTemplate = ({ name, email, phone, message }) => (
    <div style={main}>
        <Container style={container}>
            <Heading style={heading}>New Contact Form Submission</Heading>
            <Text style={text}><strong>Name:</strong> {name}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>Phone:</strong> {phone}</Text>
            <Text style={text}><strong>Message:</strong> {message}</Text>
        </Container>
    </div>
);

export default EmailTemplate;

const main = {
    backgroundColor: '#f3f4f6',
    padding: '40px',
    fontFamily: "'Roboto', sans-serif",
    display: 'flex',
    justifyContent: 'center'
};

const container = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    maxWidth: '600px',
    width: '100%',
    ':hover': {
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-5px)'
    }
};

const heading = {
    fontSize: '30px',
    marginBottom: '25px',
    color: '#333',
    fontWeight: '700',
    borderBottom: '3px solid #eee',
    paddingBottom: '15px',
    textAlign: 'center'
};

const text = {
    fontSize: '18px',
    marginBottom: '15px',
    color: '#555',
    lineHeight: '1.6'
};
