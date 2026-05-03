"use client";

import { authClient } from "@/lib/auth-client";
import { useGoogleAuth } from "@/lib/helper/utils";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState } from "react";

const RegistrationPage = () => {
  const { handleGoogleAuth, googleLoading } = useGoogleAuth();
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signUp.email({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        image: userData.image,
      });

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      console.log(data);

      redirect("/");
    } finally {
      setLoading(false);
    }
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
              User Registration
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center pt-10 px-4">
        <div className="border border-mist-200 w-full max-w-md shadow-lg bg-white p-6 flex flex-col gap-4">
          <h2 className="text-center text-2xl font-semibold">
            Register
          </h2>

          <Form onSubmit={handleRegistration} className="flex flex-col gap-4">
            <TextField
              isRequired
              name="name"
              type="text"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input
                name="name"
                placeholder="John Doe"
                className="rounded-none"
              />
              <FieldError />
            </TextField>

            <TextField isRequired name="image" type="text">
              <Label>Image Url</Label>
              <Input
                name="image"
                placeholder="Place an image url"
                className="rounded-none"
              />
              <FieldError />
            </TextField>

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

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input
                name="password"
                placeholder="Enter your password"
                className="rounded-none"
              />
              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2">
              <Button
                type="submit"
                isDisabled={loading}
                className="rounded-none bg-mist-800"
              >
                {loading ? (
                  "Registering..."
                ) : (
                  <>
                    {" "}
                    <Check /> Registration{" "}
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
          
          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-xs text-gray-400">or</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Google Button */}
          <Button
            isDisabled={googleLoading}
            type="button"
            className="w-full rounded-none flex items-center justify-center gap-2 text-white px-2 py-4 bg-rose-800"
            onClick={handleGoogleAuth}
          >
            {googleLoading ? "Redirect to google..." : <>Continue with Google</>}
          </Button>
        </div>  
      </div>
    </div>
  );
};

export default RegistrationPage;
