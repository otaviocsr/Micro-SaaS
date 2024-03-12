import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <main>
      <div className="bg-[#1f1f1f] h-10 w-fit rounded-lg justify-center items-center flex container mt-4">
        <div className="flex justify-between items-center space-x-4">
          <div className="">
            <a href="/app" className="text-white">
              app
            </a>
          </div>
          <div className="">
            <a href="http://localhost:3000">
              <Logo />
            </a>
          </div>
          <div className="">
            <a href="/pricing" className="text-white">
              pricing
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
