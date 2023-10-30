import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { ExternalLink } from "../components/ExternalLink";
import { H1, H2, H3, Container } from "../components/Core";

import { HeadApi } from "../components/HeadApi";

const pageName = "AccessibilityStatement";

const AccessibilityStatement = () => {
  return (
    <>
      <Layout isHome={true}>
        <Container width="custom" className="bg-opacity-60 tablet:pb-8 lg:w-[688px] ">
          <H1>Accessibility statement for Rethink Bronchiectasis</H1>
          <AccessibilityStyles className="flex-start">
           
            <p className="last-of-section">
              This is an accessibility statement from Insmed.
            </p>
            <H2 underline={false} className="custom-spacing">Measures to support accessibility</H2>
            <p className="!mb-3">
              Insmed takes the following measures to ensure accessibility of{" "}
              RethinkBronchiectasis.com:
            </p>
            <ul className="dotted">
              <li>Include accessibility throughout our internal policies</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>
            <H2 underline={false} className="custom-spacing">Conformance status</H2>
            <p className="last-of-section">
              The{" "}
              <ExternalLink className="!inline" href="https://www.w3.org/WAI/standards-guidelines/wcag/">
                Web Content Accessibility Guidelines (WCAG)
              </ExternalLink>{" "}
              defines requirements for designers and developers to improve
              accessibility for people with disabilities. It defines three levels
              of conformance: Level A, Level AA, and Level AAA.
              RethinkBronchiectasis.com is fully conformant with WCAG 2.1 level
              AA. Fully conformant means that the content fully conforms to the
              accessibility standard without any exceptions.
            </p>
            <H2 underline={false} className="custom-spacing">Compatibility with browsers and assistive technology</H2>
            <p className="!pb-0 !mb-3">
              RethinkBronchiectasis.com is designed to be compatible with the
              following assistive technologies:
            </p>
            <ul className="dotted !pb-0 !mb-3">
              <li>Microsoft Edge</li>
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Apple Safari</li>
            </ul>
            <p className="!pb-0 !mb-3">RethinkBronchiectasis.com is not compatible with:</p>
            <ul className="dotted">
              <li>
                Older browser versions or any operating system or software that is
                out of date
              </li>
            </ul>
            <H2 underline={false} className="custom-spacing">Technical specifications</H2>
            <p className="!pb-0 !mb-3">
              Accessibility of RethinkBronchiectasis.com relies on the following
              technologies to work with the particular combination of web browser
              and any assistive technologies or plugins installed on your
              computer:
            </p>
            <ul className="dotted !pb-0 !mb-3">
              <li>HTML</li>
              <li>WAI-ARIA</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>SMIL</li>
            </ul>
            <p className="last-of-section">
              These technologies are relied upon for conformance with the
              accessibility standards used.
            </p>
            <H2 underline={false} className="custom-spacing">Assessment approach</H2>
            <p className="!pb-0 !mb-3">
              Insmed assessed the accessibility of RethinkBronchiectasis.com by
              the following approaches:
            </p>
            <ul className="dotted">
              <li>Self-evaluation</li>
            </ul>
            <H2 underline={false} className="custom-spacing">Date</H2>
            <p className="!pb-0 !mb-0">
              This statement was created on May 18, 2023, using the{" "}
              <ExternalLink className="!inline" href="https://www.w3.org/WAI/planning/statements/">
                W3C Accessibility Statement Generator Tool
              </ExternalLink>
              .
            </p>
          </AccessibilityStyles>
        </Container>
      </Layout>
    </>
  );
};

export const Head = () => <HeadApi page={pageName} />;

const AccessibilityStyles = styled.div`
  & > p:nth-last-child(1) {
    margin: 0;
  }
  .custom-spacing {
    margin: 8px 0 12px;
    padding-bottom: 0;
  }
`;

export default AccessibilityStatement;
