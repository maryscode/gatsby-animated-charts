import React from "react";
import { Container, H1 } from "../components/Core";
import { Button } from "../components/Button";
import Layout from "../components/Layout";

import { HeadApi } from "../components/HeadApi";

const pageName = "PageNotFound";

const PageNotFound = () => {
  return (
    <>
      <Layout isHome={true}>
        <Container bg="transparent-white" width="custom" className="lg:w-[688px] pb-9">
            <H1 lineWidth="short">Error</H1>
            <p>
              The page you’re looking for does not exist.
            </p>
            <div className="button-row">
              <Button to="/" className="button">
                Home
              </Button>
            </div>
          </Container>
      </Layout>
    </>
  );
};

export const Head = () => <HeadApi page={pageName} />;

export default PageNotFound;
