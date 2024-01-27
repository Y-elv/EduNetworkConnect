import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RegistrationForm from "./RegistrationForm";
import { useGlobalContext } from "../context";
import LoginForm from "./LoginForm";

const BecomeMember = () => {
  /// global context
  const {
    showRegistrationForm,
    setShowRegistrationForm,
    showLoginForm,
    setShowLoginForm,
  } = useGlobalContext();
  const [showOption, setShowOption] = useState(false);
  const [volunteerRole, setVolunteerRole] = useState("");

  //// handle handleVolunteerOnChange
  const handleVolunteerOnChange = (e) => {
    setVolunteerRole(e.target.value);
  };

  //////// testing
  useEffect(() => {
    console.log("test", volunteerRole);
  }, [volunteerRole]);

  return (
    <Wrapper>
      <div className="box">
        <button
          className="yes-btn"
          onClick={() => setShowOption((prev) => !prev)}
        >
          Become a Volunteer
        </button>
        {!showOption && (
          <div className="volunteer-options-container">
            <div>
              <label>Join as</label> <br />
              <div className="">
                {/* NGO */}
                <div>
                  <input
                    type="radio"
                    name="volunteerRole"
                    value="ngo"
                    onChange={handleVolunteerOnChange}
                    checked={volunteerRole === "ngo"}
                  />
                  <span>NGO</span>
                </div>
                {/* Individual */}
                <div>
                  <input
                    type="radio"
                    name="volunteerRole"
                    value="individual"
                    onChange={handleVolunteerOnChange}
                    checked={volunteerRole === "individual"}
                  />
                  <span>Individual</span>
                </div>
                {/* Other */}
                <div>
                  <input
                    type="radio"
                    name="volunteerRole"
                    value="other"
                    onChange={handleVolunteerOnChange}
                    checked={volunteerRole === "other"}
                  />
                  <span>Other</span>
                </div>
              </div>
            </div>
            <button
              className="yes-btn"
              onClick={() => setShowRegistrationForm((prev) => !prev)}
            >
              Continue
            </button>
          </div>
        )}
        {/* volunteer registration form */}
        {showRegistrationForm && <RegistrationForm />}
        {/*show login form  */}
        {showLoginForm && <LoginForm />}
      </div>
      <div className="box">
        <button className="yes-btn">Opportunities</button>
        <small>Check available opportunities</small>
      </div>
      <div className="box">
        <button className="yes-btn">Request support</button>
        <small>Raise a question</small>
      </div>
    </Wrapper>
  );
};

export default BecomeMember;

const Wrapper = styled.section`
  margin: 25px 0px 20px 0px;
  padding: 10px;
  background-color: var(--backgroundColor);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  width: 100%;

  .box {
    display: flex;
    flex-direction: column;
  }

  .volunteer-options-container {
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    label {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .options-wrapper {
      display: flex;
      gap: 10px;
      border: 1px solid red;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        border: 1px solid var(--primary-color);

        input {
          margin-bottom: 5px;
          font-size: 1rem;
        }

        span {
          font-size: 1.7rem;
          font-weight: bold;
          color: var(--primary-color); /* Add color property for the span */
        }
      }
    }

    .yes-btn {
      margin-top: 20px;
      padding: 12px 20px;
      font-size: 1.1em;
      font-weight: bold;
      cursor: pointer;
      border: 1px solid var(--primary-color); /* Add a border for a button-like appearance */
      color: white; /* Text color */
      transition: background-color 0.3s ease, color 0.3s ease;

      &:hover {
        background-color: var(--primary-color);
        color: #fff;
      }
    }
  }

  .registration-form {
    background-color: #000000c5;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    .close-regi-form-btn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    form {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid var(--primary-color);
      background-color: var(--backgroundColor);
      padding: 5px;
      gap: 5px;
    }
    .form-field {
      display: flex;
      gap: 5px;
      label {
        font-weight: 600;
      }
      input {
        border: 1px solid var(--primary-color);
        padding: 2px;
      }
    }
  }
`;
