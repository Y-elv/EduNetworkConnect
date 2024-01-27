import React from 'react';
import styled from "styled-components";

const PublicOppoCard = ({ opportunity }) => {
  /// destructuring opp properties
  const { title, href, url, description } = opportunity;

  /// main return
  return (
    <Wrapper>
      <img src={href} alt="Opportunity Thumbnail" />
      {/* title , details and visit */}
      <div className='info-container'>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
        <a className='view-btn' href={url} target='_blank'>View more</a>
      </div>
    </Wrapper>
  );
}

export default PublicOppoCard;

////////// styles
const Wrapper = styled.article`
  margin: 20px 10px;
  position: relative;

  img {
    height: 200px;
    width: 100%; /* Make sure the image takes the full width of the container */
    object-fit: cover; /* Ensure the image is fully covered without distortion */
    border-radius: 3px;
  }

  .info-container {
    position: absolute;
    top: 0;
    background-color: rgba(7, 0, 0, 0.8); /* Use rgba for a transparent background */
    color: var(--white);
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px; /* Increased gap for better readability */
    align-items: center;
    padding: 20px; /* Added padding for better spacing */
    border-radius: 0 0 3px 3px; /* Rounded corners at the bottom */
  }

  .title {
    color: var(--primary-color);
    font-size: 18px; /* Adjusted font size for better visibility */
    margin: 0; /* Removed margin to have a cleaner appearance */
  }

  .description {
    font-size: 14px; /* Adjusted font size for better readability */
    margin: 0; /* Removed margin to have a cleaner appearance */
  }

  .view-btn {
    background-color: var(--primary-color);
    color: var(--white);
    font-size: 14px;
    padding: 8px 16px;
    text-decoration: none; /* Removed underline for a cleaner appearance */
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .view-btn:hover {
    background-color: var(--dark-primary-color);
  }
`;
