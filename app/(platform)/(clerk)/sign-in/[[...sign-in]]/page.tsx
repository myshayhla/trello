import { Suspense } from "react";
import { SignIn as ClerkSignIn } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClerkSignIn />
    </Suspense>
  );
}
