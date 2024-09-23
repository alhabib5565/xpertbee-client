"use client";
import MyForm from "@/components/from/MyForm";
import MyInput from "@/components/from/MyInput";
import { Button } from "@/components/ui/button";
import {
  loginFormDefaultValue,
  loginFormValidation,
} from "@/schemaWithDefaultValue/loginFormSchemaWithDValue";
import Link from "next/link";
import React from "react";
import { FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const LoginPage = () => {
  const onSubmit = (value: FieldValues) => {
    console.log(value);
    toast.success("Form submited. See console!!");
  };
  return (
    <div className="min-h-[calc(100vh-57px)] grid place-items-center">
      <div className="max-w-xl w-full p-4 lg:p-8 rounded-md bg-white shadow-lg border my-10">
        <h4 className="text-lg font-[400] mb-6">Hi, Welcome back!</h4>
        <MyForm
          // defaultValues={loginFormDefaultValue}
          resolver={zodResolver(loginFormValidation)}
          onSubmit={onSubmit}
        >
          <div className="space-y-4">
            <MyInput name="email" label="Your Email" type="email" />
            <MyInput name="password" label="Password" type="password" />
            <div className="flex justify-end">
              <Link
                href={"#"}
                className="text-sm text-gray-500 font-[400] hover:text-primary"
              >
                Forget password
              </Link>
            </div>
            <Button className="w-full">Sing In</Button>
            <p className="text-gray-700 text-center">
              {`Don't have an account?`}{" "}
              <Link className="text-primary underline" href="/register">
                Register now
              </Link>
            </p>
          </div>
        </MyForm>
      </div>
    </div>
  );
};

export default LoginPage;
