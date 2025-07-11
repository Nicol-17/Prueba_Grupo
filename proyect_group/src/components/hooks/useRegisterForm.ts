import { useState, FormEvent } from "react";
import { validateEmail, validatePassword, validateConfirmPassword } from "@/components/utility/validation";
import { log } from "console";

export function useRegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
        const newData = { ...prev, [name]: value };
        
        let error = '';
        if (name === 'email') error = validateEmail(value);
        if (name === 'password') error = validatePassword(value);
        if (name === 'confirmPassword') error = validateConfirmPassword(newData.password, value);
        
        setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
        return newData;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return { formData, errors, handleChange, handleSubmit };
}