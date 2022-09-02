import { useSelector } from "react-redux";

import React from "react";

export const Hello = () => {
  const selector = useSelector((state) => state.count.count);
  console.log(selector);
  return <div>Hello</div>;
};
