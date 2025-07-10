import LoginForm from "@/components/Forms/LoginForm/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm/RegisterForm";

export default function PageAuth() {
  return (
    <div className="">
      <h1 className="">Welcomo to this page.</h1>
      <p className="">Pleace put your credentials</p>
      <LoginForm />
      <RegisterForm />
    </div>
  );
}