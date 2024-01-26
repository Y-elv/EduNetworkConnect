import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="footer-content">
          <div className="column">
            <p>Empowering education globally for a brighter future.</p>
            <p>
              Privacy Policy | Terms of Use |
              <a href="/project-directory"> Project Directory</a> |
              <a href="/schools"> Schools</a>
            </p>
          </div>
          <div className="column">
            <p>&copy; 2024 Education Connect Network</p>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Footer;

// Styles

const Wrapper = styled.section`
  width: 100%;

  /* Footer styles */
  footer {
    font-family: "Arial", sans-serif;
    background-color: #f0f0f0; /* Set your desired background color */
    padding: 20px;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column; /* Keep the main column direction */
    align-items: center; /* Center content horizontally */
  }

  .column {
    display: flex;
    flex-direction: column; /* Content within each column is stacked vertically */
    align-items: center; /* Center content horizontally within each column */
    margin: 10px; /* Add margin as needed */
    gap:1rem;
  }

  .footer-content p {
    margin: 0;
  }

  .footer-content a {
    text-decoration: none;
    color: #007bff; /* Set your desired link color */
  }

  .network-info {
    margin-top: 10px;
    color: #555;
  }

  /* Responsive styles (adjust as needed) */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
  }
`;
