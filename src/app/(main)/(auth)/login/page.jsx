"use client";
import { authClient } from "@/lib/auth-client";
import { useGoogleAuth } from "@/lib/helper/utils-client";
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
  const { handleGoogleAuth, googleLoading } = useGoogleAuth();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.signIn.email({
        email: userData.email,
        password: userData.password,
        rememberMe: true,
        callbackURL: "/",
      });

      if (error) {
        alert(error.message);
      }
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
              User login
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center pt-10 px-4">
        <div className="border border-mist-200 w-full max-w-md shadow-lg bg-white p-6 flex flex-col gap-4">
          <h2 className="text-center text-2xl font-semibold">
            Login
          </h2>

          <Form onSubmit={handleLogin} className="flex flex-col gap-4"> 
            <TextField isRequired>
              <Label>Email</Label>
              <Input
                name="email"
                placeholder="john@example.com"
                className="rounded-none"
              />
              <FieldError />
            </TextField>

            <TextField isRequired className="w-full max-w-70">
              <Label>Password</Label>
              <InputGroup className="rounded-none">
                <InputGroup.Input
                  type={isVisible ? "text" : "password"}
                  name="password"
                  placeholder="your password"
                />
                <InputGroup.Suffix className="pr-0">
                  <Button
                    isIconOnly
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
                {loading ? "Logging..." : <><Check /> Login</>}
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

export default LoginPage;
