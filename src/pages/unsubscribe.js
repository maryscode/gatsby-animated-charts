import React, { useState } from "react";

import { Form } from "../components/Form";
import { TextInput } from "../components/TextInput";
import { Checkbox } from "../components/Checkbox";
import Layout from "../components/Layout";
import Modals from "../components/Modals";
import { GATSBY_API_ENDPOINT } from "../constants/";
import { H1, Container } from "../components/Core";

import { HeadApi } from "../components/HeadApi";

const pageName = "Unsubscribe";

const Unsubscribe = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  
  const onSubmit = (data) => {
    
    fetch(`${GATSBY_API_ENDPOINT}/api/unsubscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          setSuccessModalOpen(true);
        }
      })
      .catch(error => console.error(`error returning from /api/unsubscribe ${error}`));
  };

  return (
    <>
      <Layout isHome={true}>
        <Container width="custom" className="bg-opacity-60 pb-9 lg:w-[688px]">
          <H1 lineWidth={["72px", "160px"]}>Unsubscribe</H1>
          <p>
            Enter your email to unsubscribe from all communications from{" "}
            RethinkBronchiectasis.com.
          </p>
          <Form resetOnSubmit={true} submit="Submit" hasRequired={true} onSubmit={onSubmit}>
            <TextInput
              name="email"
              label="email*"
              required={true}
              pattern="email"
              message="Email address should follow the format user@domain.com."
              useForm={true}
              style={{ marginBottom: "36px" }}
              autoComplete="email"
            />
            <Checkbox
              name="topics"
              value={[
                "I received emails too often.",
                "I was not satisfied with the email content.",
                "I’m no longer interested in receiving this information.",
                "I don’t recall signing up to receive emails.",
              ]}
              useForm={true}
            >
              <p className="bold">What is your reason for unsubscribing?</p>
            </Checkbox>
          </Form>

          <Modals.UnsubscribeConfirmation
            isOpen={successModalOpen}
            setOpen={setSuccessModalOpen}
          />
        </Container>
      </Layout>
    </>
  );
};

export const Head = () => <HeadApi page={pageName} />;

export default Unsubscribe;
