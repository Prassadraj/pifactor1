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
  // title: "Movies / Short Films / Album",
  {
    // "Movies / Short Films / Album",
    category: "vfx",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[0],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
      {
        id: 2,
        title: "title2",
        subTitle: "subTitle2",
        mainImg: images[0],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
      {
        id: 3,
        title: "title3",
        subTitle: "subTitle3",
        mainImg: images[0],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  {
    category: "TitleAnimation",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[1],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  {
    category: "LyricVideos",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[1],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  // title: "2D Animations",
  {
    category: "Stories",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[1],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  {
    category: "Explainers",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[1],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  // title: "3D Animations / Previsualization",
  {
    category: "Animations",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[2],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  {
    category: "ProductPreviz",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[2],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  // title: "Wedding Invites",
  {
    category: "ShortInvites",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[3],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  {
    category: "StoryInvites",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[3],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  // title: "Ads / Corporate",
  {
    category: "Ads",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[3],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
  {
    category: "Corporate",
    items: [
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        mainImg: images[3],
        images: [images[0], images[1], images[2]],
        video: "/intro.mp4",
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        client: "clientName",
        services: ["services1", "services2", "services3", "services4"],
        industries: "cine",
        date: "1/6/2001",
        objective: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            maxime alias illum placeat eveniet quos magni repudiandae sed atque?
            Velit impedit nihil temporibus tempore fuga? Quae quod in corporis
            aperiam.`,
        solution: "solution content",
      },
    ],
  },
];
export default allData;
