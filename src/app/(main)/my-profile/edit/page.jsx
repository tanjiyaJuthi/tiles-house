"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
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

const ProfileEditPage = () => {
  const [loading, setLoading] = useState(false);

  const updateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const userData = Object.fromEntries(formData.entries());

      const { data, error } = await authClient.updateUser({
        name: userData.name,
        image: userData.image,
      });

      if (error) {
        console.error(error);
        alert(error.message);
        return;
      }

      redirect("/my-profile");
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
              Edit Your Profile
            </h2>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-center items-center py-12 mt-20">
        <Form
          className="border border-mist-200 w-full max-w-md flex flex-col gap-4 shadow-lg bg-white p-6"
          onSubmit={updateProfile}
        >
          <Fieldset.Legend className="text-center mb-10 text-xl">
            Update your profile!
          </Fieldset.Legend>

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

          <div className="flex gap-2">
            <Button
              type="submit"
              isDisabled={loading}
              className="rounded-none bg-mist-800"
            >
              {loading ? (
                "Updating..."
              ) : (
                <>
                  {" "}
                  <Check /> Update Profile{" "}
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

export default ProfileEditPage;
