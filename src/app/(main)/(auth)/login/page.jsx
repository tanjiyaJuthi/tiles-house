"use client";
import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { useState } from "react";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log({ data, error });
  };

  return (
    <div className="mt-21">
      <div className="relative w-full h-52 lg:h-96">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <Image
          src="https://images.pexels.com/photos/6444255/pexels-photo-6444255.jpeg"
          alt="all tiles"
          fill
          className="object-cover"
        />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center text-white h-full">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 mt-5">
              User login
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-center items-center py-12 mt-20">
        <Form
          className="border border-mist-200 w-full max-w-md flex flex-col gap-4 shadow-lg bg-white p-6"
          onSubmit={login}
        >
          <Fieldset.Legend className="text-center mb-10 text-xl">
            Login with Us!
          </Fieldset.Legend>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="john@example.com"
              className="rounded-none"
            />
            <FieldError />
          </TextField>

          <TextField className="w-full max-w-70" name="password">
            <Label>Password</Label>
            <InputGroup className="rounded-none">
              <InputGroup.Input
                className="w-full max-w-70"
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="your password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          <div className="flex gap-2">
            <Button
              type="submit"
              isDisabled={loading}
              className="rounded-none bg-mist-800"
            >
              {loading ? (
                "Logging..."
              ) : (
                <>
                  {" "}
                  <Check /> Login{" "}
                </>
              )}
            </Button>

            <Button
              type="reset"
              className="rounded-none text-black bg-transparent border border-mist-800"
            >
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
