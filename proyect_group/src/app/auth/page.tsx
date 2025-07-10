"use client";

import { useState } from "react";
import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";
import Button from "@/components/ui/Button/Button";

export default function PageAuth() {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="">
      <div className="">
        <div className="">
          <Button
            onClick={() => setIsLoginView(true)}
            variant={isLoginView ? "primary" : "secondary"}
            className=""
          >
            Login
          </Button>
          <Button
            onClick={() => setIsLoginView(false)}
            variant={!isLoginView ? "primary" : "secondary"}
            className=""
          >
            Register
          </Button>
        </div>

        <div className="">
          {isLoginView ? (
            <>
              <h2 className="">Bienvenido</h2>
              <p className="">Por favor, introduce tus credenciales.</p>
              <LoginForm />
            </>
          ) : (
            <>
              <h2 className="">Crear Cuenta</h2>
              <RegisterForm />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
