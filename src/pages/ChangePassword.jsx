import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoLockClosedOutline, IoEyeOffOutline, IoEyeOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { FcCancel } from "react-icons/fc"; // Importing FcCancel

const ChangePassword = () => {
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });
    const [passwordError, setPasswordError] = useState('');
    const [passwordCriteria, setPasswordCriteria] = useState({
        length: false,
        uppercase: false,
        number: false
    });
    const [passwordMatch, setPasswordMatch] = useState(false);

    const togglePasswordVisibility = (field) => {
        setShowPassword(prevState => ({
            ...prevState,
            [field]: !prevState[field]
        }));
    };

    const validatePassword = (password) => {
        const criteria = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password)
        };
        setPasswordCriteria(criteria);
        return criteria.length && criteria.uppercase && criteria.number;
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        validatePassword(newPassword);
        checkPasswordMatch();
    };

    const checkPasswordMatch = () => {
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        setPasswordMatch(newPassword && confirmPassword && newPassword === confirmPassword);
    };

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        const newPassword = form.elements['newPassword'].value;

        if (!validatePassword(newPassword)) {
            setPasswordError("Password must contain: At least 1 uppercase letter (A-Z), at least 1 number (0-9), and at least 8 characters.");
        } else if (!passwordMatch) {
            setPasswordError("Passwords do not match.");
        } else {
            setPasswordError('');
            setValidated(true);

            // Data submission
            const data = {
                currentPassword: form.elements['currentPassword'].value,
                newPassword: newPassword
            };

            try {
                const response = await fetch('/api/change-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error('Failed to change password.');
                }

                // Handle success
                alert('Password changed successfully!');
            } catch (error) {
                setPasswordError(error.message);
            }
        }
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col md={8}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Col className="mb-3">
                                {/* Current Password */}
                                <Form.Group as={Col} md="8" controlId="validationCurrentPassword">
                                    <Form.Label>Current Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <IoLockClosedOutline />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type={showPassword.current ? 'text' : 'password'}
                                            placeholder="Current Password"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            name="currentPassword"
                                        />
                                        <InputGroup.Text onClick={() => togglePasswordVisibility('current')}>
                                            {showPassword.current ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </InputGroup.Text>
                                        <Form.Control.Feedback type="invalid">
                                            Please enter your current password.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                {/* New Password */}
                                <Form.Group as={Col} md="8" controlId="validationNewPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <IoLockClosedOutline />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type={showPassword.new ? 'text' : 'password'}
                                            placeholder="New Password"
                                            id="newPassword"
                                            aria-describedby="inputGroupPrepend"
                                            name="newPassword"
                                            onChange={handlePasswordChange}
                                            required
                                        />
                                        <InputGroup.Text onClick={() => togglePasswordVisibility('new')}>
                                            {showPassword.new ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </InputGroup.Text>
                                        {passwordMatch && (
                                            <InputGroup.Text className="text-success">
                                                <IoCheckmarkCircleOutline />
                                            </InputGroup.Text>
                                        )}
                                        <Form.Control.Feedback type="invalid">
                                            Please enter a valid new password.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                {/* Confirm Password */}
                                <Form.Group as={Col} md="8" controlId="validationConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text id="inputGroupPrepend">
                                            <IoLockClosedOutline />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type={showPassword.confirm ? 'text' : 'password'}
                                            placeholder="Confirm Password"
                                            id="confirmPassword"
                                            aria-describedby="inputGroupPrepend"
                                            onChange={checkPasswordMatch}
                                            required
                                        />
                                        <InputGroup.Text onClick={() => togglePasswordVisibility('confirm')}>
                                            {showPassword.confirm ? <IoEyeOutline /> : <IoEyeOffOutline />}
                                        </InputGroup.Text>
                                        {passwordMatch ? (
                                            <InputGroup.Text className="text-success">
                                                <IoCheckmarkCircleOutline />
                                            </InputGroup.Text>
                                        ) : (
                                            <InputGroup.Text className="text-danger">
                                                <FcCancel />
                                            </InputGroup.Text>
                                        )}
                                        <Form.Control.Feedback type="invalid">
                                            Please confirm your new password.
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                            </Col>

                            <Button type="submit">Confirm Password</Button>
                        </Form>
                    </Col>

                    {/* Password criteria checklist */}
                    <Col md={4} className="mt-3 mt-md-0">
                        <div className="password-criteria">
                            <p>Password must contain</p>
                            <p className={passwordCriteria.length ? 'text-success strike' : ''}>
                             At least 8 characters
                            </p>
                            <p className={passwordCriteria.uppercase ? 'text-success strike' : ''}>
                                At least 1 uppercase letter (A-Z)
                            </p>
                            <p className={passwordCriteria.number ? 'text-success strike' : ''}>
                             At least 1 number (0-9)
                            </p>
                        </div>
            {passwordError && <div className="text-danger mt-1">{passwordError}</div>}
                    </Col>
                </Row>
            </Container>

            <style jsx>{`
                .strike {
                    text-decoration: line-through;
                }
            `}</style>
        </div>
    );
};

export default ChangePassword;
