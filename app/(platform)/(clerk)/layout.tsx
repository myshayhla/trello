import React from "react";

interface ClerkLayoutProps {
  children: React.ReactNode;
}

export default function ClerkLayout({ children }: ClerkLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
