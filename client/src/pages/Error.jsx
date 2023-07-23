import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! Page not found</h3>
          <p>We can't find the page you are looking for</p>
          <Link to="/dashboard">Back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Something went wrong!</h1>
      <Link to="/">Back Home</Link>
    </Wrapper>
  );
};

export default Error;
