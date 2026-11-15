"use client";
import { useAuth, UserButton, useUser } from "@clerk/nextjs";

export default function ProtectedPage() {
  const { user } = useUser();
  const { userId } = useAuth();

  return (
    <div>
      {/* <p>User: {user?.firstName}</p>
      <p>User ID: {userId}</p> */}
          
          <UserButton/>
    </div>
  );
}
