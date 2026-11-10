import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0e0e0] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-[40px] font-bold mb-6">Inventory Manament</h1>
          <p className="text-xl text-[#141414] ">
            Streamline your inventory tracking with your powerful, easy-to-use
            managment system.
          </p>
          <div className="flex gap-6 justify-center mt-6">
            <Link
              href="/sign-in"
              className="bg-[#c40a0a] px-6 py-3 rounded-xl text-[18px] text-[#e0e0e0]"
            >
              Sign in
            </Link>
            <Link
              href="#"
              className="bg-[#e0e0e0] px-6 py-3 rounded-xl text-[18px] text-[#c40a0a]"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
