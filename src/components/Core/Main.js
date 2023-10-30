import React from 'react';

const Main = ({children}) => {
  return (
    <main id="main" className="mx-auto w-full">
      {children}
    </main>
  );
}

export default Main;