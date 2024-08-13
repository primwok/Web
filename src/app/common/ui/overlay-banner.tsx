import { PageWidth } from "./page-width";

export const COverlayBanner = () => {
  return (
    <PageWidth>
      <div
        className="w-full h-[30vw] py-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1634170380004-4b3b3b3b3b3b')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold">Welcome to our website</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae erat ac sem aliquam suscipit.
            </p>
            <div className="flex items-center gap-3">
              <button className="bg-white text-black px-4 py-2 rounded-lg">
                Get Started
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageWidth>
  );
};
