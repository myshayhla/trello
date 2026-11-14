

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
      <Link href="/">
          <div className='flex justify-center items-center g-3 '>
              <Image src="/images/logo.svg" alt="logo" width={30}
                  height={30} />
              <p className="text-lg text-neutral-700 ">Taskify</p>
          </div>

   </Link>
  );
}
