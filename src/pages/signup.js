import React, { useState, useContext } from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid =
    firstName === "" ||
    password === "" ||
    emailAddress === "" ||
    password.length < 8 ||
    !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!~()]).*$/.test(password);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (firstName === "" || password === "" || emailAddress === "") {
      setError("Please fill out all the fields.");
      return;
    }

    if (isInvalid) {
      setError(
        "Password should be at least 8 characters and include a letter, number, and special character."
      );
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            navigate(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && (
            <Form.Error>
              {error}
              <img
                onClick={() => setError("")}
                src="/images/icons/close-slim.png"
                alt="close"
              />
            </Form.Error>
          )}

          <Form.Base onSubmit={handleSignUp} method="POST">
            <Form.Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />
            <Form.Input
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Email Address"
            />
            <Form.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Form.Submit type="submit" onClick={() => isInvalid}>
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default SignUp;
