import Link from "next/link";

export default function CTA() {
  return (
    <div className="">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mt-2 bg-customTeal p-6 sm:p-12 sm:w-full sm:max-w-5xl rounded-xl">
            <p className="text-lg font-semibold text-white">
              Your donation supports IDF families—please give what you can.
            </p>
            <Link
              href="/donate"
              className="mt-4 inline-block rounded-md bg-customBlue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
