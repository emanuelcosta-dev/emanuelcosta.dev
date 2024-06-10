import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="animate-in text-3xl font-semibold tracking-tight text-primary">
            Hi there, I&apos;m Emanuel!
          </h1>
        </div>
      </div>
    </div>
  );
}
