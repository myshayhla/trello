import React from "react";

interface TestLayoutProps {
  children: React.ReactNode;
}

export default function TestLayout({ children }: TestLayoutProps) {
  return (
    <div className="bg-rose-600 h-full">
      <h1>Layout</h1>
      {children}
    </div>
  );
}
