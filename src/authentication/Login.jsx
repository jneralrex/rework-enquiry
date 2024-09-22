import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import logo from "../assets/images/reworklogo.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container
            fluid
            style={{
                backgroundColor: "#042331",
                height: "100vh",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Card
                style={{
                    backgroundColor: "white",
                    height: "582px",
                    width: "378px",
                    borderRadius: "10px",
                }}
            >
                <div style={{top:'0',}}>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <img src={logo} alt="Rework logo" style={{marginBottom:'15px'}}/>
                        <div
                            className=""
                            style={{
                                width: "314px",
                                height: "24px",
                                textAlign: "center",
                                alignItems: "center",
                                opacity: "70%",
                                fontWeight: "700",
                                fontSize: "19px",
                                lineHeight: "23.85px",
                                color: "#A4A6B3",
                                letterSpacing: "0.4px",
                            }}
                        >
                            REWORK MANAGEMENT
                        </div>
                        <div
                            className=""
                            style={{
                                width: "314px",
                                height: "30px",
                                marginTop: "15px",
                                textAlign: "center",
                                alignItems: "center",
                                fontWeight: "700",
                                fontSize: "24px",
                                lineHeight: "30.12px",
                                color: "#252733",
                                letterSpacing: "0.3px",
                            }}
                        >
                            ADMIN LOGIN
                        </div>
                        <div
                            className=""
                            style={{
                                width: "314px",
                                height: "20px",
                                marginTop: "10px",
                                textAlign: "center",
                                alignItems: "center",
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "20px",
                                color: "#9fa2ba",
                                letterSpacing: "0.3px",
                            }}
                        >
                            Enter your email and password
                        </div>
                    </div>
                    <div style={{margin:'50px'}}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{width:'100%', height:'48px', backgroundColor:'#00afef', }}>
                           <Link to='drawer/dashboard' className=""> Log in</Link>
                        </Button>
                    </Form>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Login;
