import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../utils/AppContext';
import { Button } from "../components/Button";
import Modals from "../components/Modals";

const References = ({pageName}) => {
  const { refModalOpen, setRefModalOpen } = useContext(AppContext);

  return (
    <>
      <Modals.References
        isOpen={refModalOpen}
        setOpen={setRefModalOpen}
        pageName={pageName}
      />
      <Button type="open" className="!m-auto" onClick={() => setRefModalOpen(!refModalOpen)}>References</Button>
    </>
  );
}

export default References;
