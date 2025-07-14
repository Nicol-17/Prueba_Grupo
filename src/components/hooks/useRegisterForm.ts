import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/components/utility/supaBaseClient"
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "@/components/utility/validation";

export function useRegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };

      let error = "";
      if (name === "email") error = validateEmail(value);
      if (name === "password") error = validatePassword(value);
      if (name === "confirmPassword")
        error = validateConfirmPassword(newData.password, value);

      setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
      return newData;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(
      formData.password,
      formData.confirmPassword
    );

    if (emailError || passwordError || confirmPasswordError) {
      setErrors({
        email: emailError,
        password: passwordError,
        confirmPassword: confirmPasswordError,
      });
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert("Error al registrar: " + error.message);
      return;
    }

    const user = data.user;
    if (user) {
      const { error: profileError } = await supabase.from("profiles").insert([
        {
          id: user.id,
          username: formData.username,
        },
      ]);

      if (profileError) {
        alert("Usuario creado, pero hubo error al guardar el perfil: " + profileError.message);
      }
    }

    alert("Registro exitoso. Revisa tu correo para confirmar.");
    router.push("/auth");
  };

  return { formData, errors, handleChange, handleSubmit };
}
