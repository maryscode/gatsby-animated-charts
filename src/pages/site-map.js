import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import { H1, H2, H3, Container, Refs, Main } from "../components/Core/";
import { ExternalLink } from "../components/ExternalLink";
import { NavigationData } from "../data/NavigationData";

import { HeadApi } from "../components/HeadApi";

const pageName = "Sitemap";

const Li = ({ children, className }) => {
  return <li className={`mb-4 flex flex-col gap-2 ${className ? className : ''}`}>{children}</li>;
};


const MapLink = ({ to, href, isTrusted, children, bold = true, className }) => {
  let linkTailwindCss = "underline block text-black hover:text-burnt-brick";
  return (
    <>
      {to && (
        <Link className={`${bold ? "site-map-parent-page-link font-bold" : "site-map-page-link font-normal"} ${linkTailwindCss} ${className ? className : ''}`} to={to}>
          {children}
        </Link>
      )}
      {href && (
        <ExternalLink className={`${className ? className : ''}  text-black  font-bold`} href={href} isTrusted={isTrusted}>
          {children}
        </ExternalLink>
      )}
    </>
  );
};

const Sitemap = () => {
  return (
    <SitemapStyles>
      <Layout isHome={true}>
        <Container width="custom" className="bg-opacity-60 lg:w-[688px] !pb-[36px]">
          <H1 lineWidth="short">Site map</H1>
          <ul className="mb-12">
            <Li className="!mb-6"><MapLink to="/">Home</MapLink></Li>
            {NavigationData.map((item, index) => {
              return (
                <Li key={index}>
                  <MapLink to={item.path}>{item.copy}</MapLink>
                  {item.children && (
                    <ul className="dotted !mb-2">
                      {item.children.map((child, i) => {
                        return (
                          <Li key={i}>
                            <MapLink bold={false} to={child.path}>{child.copy}</MapLink>
                          </Li>
                        );
                      })}
                    </ul>
                  )}
                </Li>
              );
            })}
          </ul>
          <ul>
{/* 
            <Li>
              <MapLink to="/ATS2023">Insmed at ATS 2023</MapLink>
            </Li> */}
            <Li>
              <MapLink href="https://insmed.com/terms-of-use/" isTrusted={true}>
                Terms of use
              </MapLink>
            </Li>
            <Li>
              <MapLink href="https://insmed.com/privacy-policy/" isTrusted={true}>
                Privacy policy
              </MapLink>
            </Li>
            <Li>
              <MapLink to="/stay-informed">
                Stay informed
              </MapLink>
            </Li>
            <Li>
              <MapLink to="/survey">Survey</MapLink>
            </Li>            
            <Li>
              <MapLink to="/site-map">
                Site map
              </MapLink>
            </Li>
            <Li>
              <MapLink to="/accessibility-statement">
                Accessibility statement
              </MapLink>
            </Li>
          </ul>
        </Container>
      </Layout>
    </SitemapStyles>
  );
};

export const Head = () => <HeadApi page={pageName} />;

export default Sitemap;

const SitemapStyles = styled.div`
  .text-black {
    color: #000;
  }
`;