import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import logo from "../assets/images/reworklogo.png";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { allowLogin } from "../redux/user/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user); // Map state from Redux
    const user = useSelector((state) => state.user); // Map state from Redux

  
    const [validated, setValidated] = useState(false);
    const [login, setLogin] = useState({ email: "", password: "" });
  
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
  
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        dispatch(allowLogin(login))
          .unwrap()
          .then(() => navigate("/dashboard/home")) // Navigate on success
          .catch((err) => console.error("Login failed:", err)); // Handle error
      }
  
      setValidated(true);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setLogin({ ...login, [name]: value });
    };
  
    console.log(user)

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
                <div style={{ top: "0" }}>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <img src={logo} alt="Rework logo" style={{ marginBottom: "15px" }} />
                        <h2>REWORK ERMS</h2>
                        <p>Enter your email and password</p>
                    </div>
                    <div style={{ margin: "50px" }}>
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

                            {error && <p style={{ color: "red" }}>{error}</p>}

                            <Button
                                variant="primary"
                                type="submit"
                                style={{ width: "100%", height: "48px", backgroundColor: "#00afef" }}
                                disabled={loading}
                            >
                                {loading ? <Spinner animation="border" variant="primary" /> : "Log in"}
                            </Button>
                        </Form>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default Login;
