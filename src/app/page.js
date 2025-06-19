import Image from "next/image";

export default function Home() {
  return (
    <div className="text-xl relative">
      <div className="fixed h-[80vh] top-30 left-10 w-20 flex flex-col justify-between items-center">
        <div className="flex-col gap-5 flex justify-center">
          <span className="uppercase transform rotate-90 block text-black/50 text-[14px]">
            WEB
          </span>
          <span className="uppercase transform rotate-90 block text-black/50 text-[14px]">
            DEVELOPER
          </span>
        </div>
        <div className="border border-black/60 h-[70%] ">

        </div>
        <div className="uppercase transform rotate-90 block text-black/50 text-[14px]">
          2025
        </div>

      </div>
    </div>

  );
}
