import React, { useState } from "react";

import { Form } from "../components/Form";
import Layout from "../components/Layout";
import { Survey } from "../components/Survey";
import Modals from "../components/Modals";
import { GATSBY_API_ENDPOINT } from "../constants/";
import { H1, Container } from "../components/Core";

import { HeadApi } from "../components/HeadApi";

const pageName = "SurveyPage";

const SurveyPage = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const onSubmit = (data) => {
    fetch(`${GATSBY_API_ENDPOINT}/api/survey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setSuccessModalOpen(true);
        }
      });
  };
  return (
    <>
      <Layout isHome>
        <Container width="custom" bg="transparent-white" className=' lg:w-[688px] pb-9'>
          <H1>We want to hear from you</H1>
          <Form resetOnSubmit={true} onSubmit={onSubmit} submit="Submit">
            <p>
              Let us know what you’d like to hear more about so that we can
              tailor future communications to topics you are most interested in.
            </p>
            <Survey useForm={true} required={"noerrors"} />
          </Form>

          <Modals.SurveyConfirmation
            isOpen={successModalOpen}
            setOpen={setSuccessModalOpen}
          />
        </Container>
      </Layout>
    </>
  );
};

export const Head = () => <HeadApi page={pageName} />;

export default SurveyPage;
