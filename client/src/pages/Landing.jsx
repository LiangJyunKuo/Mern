import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job<span>tracking</span>App
          </h1>
          <p>
            The Job Track app is a comprehensive tool that simplifies and
            optimizes the job search process. With its user-friendly interface
            and powerful features, the app enables you to efficiently manage and
            track all aspects of your job applications. From creating a
            personalized dashboard to organizing job listings, scheduling
            interviews, Job Track app enhances your chances of success in
            securing your dream job.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login/Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
