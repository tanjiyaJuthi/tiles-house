import { Button, Card } from "@heroui/react";
import { Person } from "@gravity-ui/icons";
import Image from "next/image";

const MyProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "",
  };

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">My Profile</h2>

      <Card className="p-6 shadow-md">
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
            <Button as="a" href="/profile/edit" color="primary">
                Edit Profile
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MyProfilePage;