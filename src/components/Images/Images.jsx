import React, { lazy } from "react";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

const Images = ({...props}) => {
  return (
    <Wrapper>
      <article>
        <h4>Contrained Image</h4>
        <StaticImage 
          alt="hero image"
          as="article"
          className="type-1"
          layout="constrained"
          loading="lazy" 
          placeholder="tracedSVG" 
          src="../../images/hero.jpeg" 
        />
      </article>
      <article>
        <h4>Fixed Image</h4>
        <StaticImage 
          alt="hero image"
          as="article"
          className="type-1"
          layout="fixed"
          loading="lazy" 
          placeholder="blurred" 
          width={200}
          src="../../images/hero.jpeg" 
        />
      </article>
      <article>
        <h4>Full Width Image</h4>
        <StaticImage 
          alt="hero image"
          as="article"
          className="type-1"
          layout="fullWidth"
          loading="lazy" 
          placeholder="dominantColor"
          src="../../images/hero.jpeg" 
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  text-align: center;
  width: 70vw;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  article {
    border: 1px solid red;
    border-radius: 1rem;

    height: 200px;
  }
  .type-1 {
    color: red;
  }
`;

export default Images;