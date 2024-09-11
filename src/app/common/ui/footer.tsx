import { PageWidth } from "./page-width";

const columns = [
  [
    {
      title: "Section 1",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
    {
      title: "Section 2",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
  ],
  [
    {
      title: "Section 3",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
    {
      title: "Section 4",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
  ],
  [
    {
      title: "Section 5",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
    {
      title: "Section 6",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
  ],
  [
    {
      title: "Section 7",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
    {
      title: "Section 8",
      items: [
        {
          title: "Item 1",
          url: "#",
        },
        {
          title: "Item 2",
          url: "#",
        },
        {
          title: "Item 3",
          url: "#",
        },
      ],
    },
  ],
];

export const CFooter = () => {
  return (
    <div className="bg-gray-900 text-white">
      <PageWidth>
        <footer className="px-6 py-12">
          <div className="grid grid-cols-12 gap-4">
            {columns.map((column, index) => (
              <div
                key={index}
                className={`col-span-12 sm:col-span-6 md:col-span-3 div flex flex-col gap-6`}
              >
                {column.map((section, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <h5 className="font-bold text-sm uppercase underline underline-offset-4	">
                      {section.title}
                    </h5>
                    <div className="flex flex-col gap-1">
                      {section.items.map((item, index) => (
                        <a
                          key={index}
                          className="font-normal text-sm w-fit text-white"
                          href={item.url}
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </footer>
      </PageWidth>
    </div>
  );
};
