import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import logo from "../assets/images/reworklogo.png";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { API_URL } from "../config";

const Login = () => {
    const [validated, setValidated] = useState(false);
    const [login, setLogin] = useState({ email: '', password: '' });
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            allowLogin(); 
        }

        setValidated(true);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLogin({ ...login, [name]: value }); 
    };

    const allowLogin = async () => {
        try {
            const res = await axios.post(`${API_URL}/auth/login`, login);
            const token = res.data.token;
            sessionStorage.setItem('authToken', token);
            navigate('/drawer/dashboard');
            console.log(res)
        } catch (error) {
            console.error("Login failed", error);
        }
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
                <div style={{ top: '0' }}>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <img src={logo} alt="Rework logo" style={{ marginBottom: '15px' }} />
                        <div
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
                    <div style={{ margin: '50px' }}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={login.email}
                                    onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid email.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleInputChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please enter your password.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ width: '100%', height: '48px', backgroundColor: '#00afef' }}>
                                Log in
                            </Button>
                        </Form>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Login;
