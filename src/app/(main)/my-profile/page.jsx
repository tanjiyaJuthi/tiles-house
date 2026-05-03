import { Button, Card } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import Image from "next/image";
import Link from "next/link";

const MyProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "",
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
                <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-5">
                    My Profile
                </h1>
            </div>
        </div>
      </div>
    
      <div className="max-w-7xl mx-auto">
        <div className="p-6 shadow-md mt-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            {/* Avatar */}
            <div className="shrink-0">
              {user.image ? (
                <Image
                  src={user.image}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover border"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-default-200 flex items-center justify-center">
                  <Person className="w-10 h-10 text-default-500" />
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-default-500">{user.email}</p>
            </div>

            {/* Action */}
            <div>
              <Link href="/profile/edit" className="px-4 py-2 border no-underline rounded-none">
                  Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;