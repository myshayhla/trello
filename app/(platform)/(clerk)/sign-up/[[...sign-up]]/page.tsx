import { Suspense } from "react";
import { SignUp as ClerkSignUp } from "@clerk/nextjs";

export default function SignUp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClerkSignUp />
    </Suspense>
  );
}
