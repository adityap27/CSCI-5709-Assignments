// Footer Component of the webpage.
export function Footer() {
  return (
    <footer className="bg-sky-700 shadow mt-2">
      <div className="w-full mx-auto max-w-screen p-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-sm text-white sm:text-center ">
          © 2024{" "}
          <a href="#" className="hover:underline">
            ParkFlex™
          </a>
          . All Rights Reserved.
        </span>

        <a href="#" className="hover:underline text-sm text-white">
          Help Center
        </a>
      </div>
    </footer>
  );
}
