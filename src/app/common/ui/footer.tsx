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
    <PageWidth>
      <footer>
        <div className="container">
          <div className="grid grid-cols-12">
            {columns.map((column, index) => (
              <div key={index} className={`col-span-4`}>
                {column.map((section, index) => (
                  <div key={index}>
                    <h5>{section.title}</h5>
                    <ul>
                      {section.items.map((item, index) => (
                        <li key={index}>
                          <a href={item.url}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </PageWidth>
  );
};
