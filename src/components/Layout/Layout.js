import React from "react";

export const Layout = ({ children, modal }) => {
  return (
    <>
      <main>{children}{modal}</main>
    </>
  );
};
