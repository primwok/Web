import { title } from "process";
import { PageWidth } from "./page-width";

const data = [
  {
    title: "Title 1",
    image: "https://unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
    url: "#",
    buttonS: [
      {
        text: "Get Started",
        url: "#",
      },
      {
        text: "Learn More",
        url: "#",
      },
    ],
  },
  {
    title: "Title 2",
    image: "https://unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
    url: "#",
    buttonS: [
      {
        text: "Get Started",
        url: "#",
      },
      {
        text: "Learn More",
        url: "#",
      },
    ],
  },
  {
    title: "Title 3",
    image: "https://unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
    url: "#",
    buttonS: [
      {
        text: "Get Started",
        url: "#",
      },
      {
        text: "Learn More",
        url: "#",
      },
    ],
  },
  {
    title: "Title 4",
    image: "https://unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
    url: "#",
    buttonS: [
      {
        text: "Get Started",
        url: "#",
      },
      {
        text: "Learn More",
        url: "#",
      },
    ],
  },
  {
    title: "Title 5",
    image: "https://unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
    url: "#",
    buttonS: [
      {
        text: "Get Started",
        url: "#",
      },
      {
        text: "Learn More",
        url: "#",
      },
    ],
  },
  {
    title: "Title 6",
    image: "https://unsplash.com/photo-1634170380004-4b3b3b3b3b3b",
    url: "#",
    buttonS: [
      {
        text: "Get Started",
        url: "#",
      },
      {
        text: "Learn More",
        url: "#",
      },
    ],
  },
];

export const CImageCardGrid = () => {
  return (
    <PageWidth>
      <div className="grid grid-cols-12 gap-4 py-6">
        {data.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="relative h-[15vw]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-white text-center">
                  <h1 className="text-4xl font-bold">{item.title}</h1>
                  <div className="flex items-center gap-3">
                    {item.buttonS.map((button, index) => (
                      <button
                        key={index}
                        className="bg-white text-black px-4 py-2 rounded-lg"
                      >
                        {button.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWidth>
  );
};
