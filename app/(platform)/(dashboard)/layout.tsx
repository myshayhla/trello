// import { startCase } from "lodash";
// import { auth } from "@clerk/nextjs/server";

// import { OrgControl } from "./_components/org-control";

// export async function generateMetadata() {
//   const { orgSlug } = await auth();

//   return {
//     title: startCase(orgSlug || "organization"),
//   };
// }

import React from 'react';
import Navbar from './_components/navbar';

export default function DashboardLayout({children}:{children: React.ReactNode}) {
  return (
    <div className='h-screen'>
      <Navbar />
      {children}
    </div>
  );
}

