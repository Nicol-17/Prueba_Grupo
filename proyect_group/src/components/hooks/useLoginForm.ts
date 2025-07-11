import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/components/utility/validation";
import { supabase } from "@/components/utility/supaBaseClient";

export function useLoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "" });
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: emailError }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const emailError = validateEmail(formData.email);
    if (emailError) {
      setErrors({ email: emailError });
      alert("Por favor, introduce un correo válido.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      alert("Credenciales inválidas: " + error.message);
    } else {
      router.push("/dashboard"); 
    }
  };

  return { formData, errors, handleChange, handleSubmit };
}
