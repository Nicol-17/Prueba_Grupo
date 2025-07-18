"use client";
import "./style.css";

import { useState } from "react";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import Button from "@/components/ui/Button/Button";

export default function PageAuth() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="container">
      <div className="forms-container">
        <div className="title-container">
          <Button
            onClick={() => setIsLoginView(true)}
            variant={isLoginView ? "primary" : "secondary"}
            className=""
          >
            LOG IN
          </Button>
          <Button
            onClick={() => setIsLoginView(false)}
            variant={!isLoginView ? "primary" : "secondary"}
            className=""
          >
            SIGN UP
          </Button>
        </div>

        <div className="">
          {isLoginView ? (
            <>
              <h2 >Welcome</h2>
              <p >Please enter your credentials.</p>
              <LoginForm />
            </>
          ) : (
            <>
              <h2>Create account</h2>
              <RegisterForm />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
