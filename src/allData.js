const images = [
  "/images/1.webp",
  "/images/2.webp",
  "/images/3.webp",
  "/images/4.webp",
  "/images/5.webp",
  "/images/6.webp",
  "/images/7.webp",
];
const allData = [
  {
    category: "vfx",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[0],
        images: [images[0], images[1], images[2]],
        description: "description 1",
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: "",
        solution: "solution content",
      },
    ],
  },
  {
    category: "2d",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[1],
        images: [images[0], images[1], images[2]],
        description: "description 1",
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: "",
        solution: "solution content",
      },
    ],
  },
  {
    category: "3d",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[2],
        images: [images[0], images[1], images[2]],
        description: "description 1",
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: "",
        solution: "solution content",
      },
    ],
  },
  {
    category: "wedding",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[3],
        images: [images[0], images[1], images[2]],
        description: "description 1",
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: "",
        solution: "solution content",
      },
    ],
  },
];
export default allData;
