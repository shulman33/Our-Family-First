import Image from "next/image";
import Link from "next/link";

export default function Example() {
return (
  <div className="relative isolate overflow-hidden bg-sectionBlue" id="home">
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-1">
        <h1 className="mt-10 sm:mt-20 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Support our <span className="text-customBlue">Heros</span> and their{" "}
          <span className="text-customBlue">Families</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          “Our families can not be the casualties of this war” - Lieutenant
          Colonel Daniel Jacob
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <Link
            href="/donate"
            className="rounded-md bg-customBlue px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Donate Now
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-2 flex max-w-2xl lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2">
            <Image
              alt="App screenshot"
              src="/hero-image.png"
              width={1000}
              height={1100}
              className="w-[62.5rem] rounded-md "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
