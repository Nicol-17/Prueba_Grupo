"use client";

import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import { useRegisterForm } from "@/components/hooks/useRegisterForm";
export default function RegisterForm() {
  const { formData, errors, handleChange, handleSubmit } = useRegisterForm();

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <div>
          <label htmlFor="username" className="">
            Username
          </label>
          <Input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="password" className="">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="confirmPassword" className="">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </form>
    </>
  );
}
