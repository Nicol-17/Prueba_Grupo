"use client";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { useLoginForm } from "@/components/hooks/useLoginForm";

export default function LoginForm() {
  const { formData, errors, handleChange, handleSubmit } = useLoginForm();

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          id="login-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <Button type="submit" variant="primary">
        Entrar
      </Button>
    </form>
  );
}
