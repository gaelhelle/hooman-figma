// Fake Data for the exercice

export type MenuItemType = {
  id: string;
  title: string;
  icon: IconType;
};

export type IconType = {
  name: string;
  set?: "bold" | "broken" | "bulk" | "light";
};

export const data = {
  menu: [
    {
      id: "news-and-articles",
      title: "News and articles",
      icon: { name: "Edit" },
    },
    {
      id: "lawyers",
      title: "Lawyers",
      icon: { name: "Work" },
    },
    {
      id: "webinars",
      title: "Webinars",
      icon: { name: "VolumeDown" },
    },
    {
      id: "investments",
      title: "Investments",
      icon: { name: "Category" },
    },
    {
      id: "closed-investments",
      title: "Closed investments",
      icon: { name: "Category" },
    },
  ],
};

export type WysiwygOptionsType = {
  name: string;
  type: "block" | "mark";
  icon: string;
};

export const wysiwygOptions: WysiwygOptionsType[] = [
  {
    name: "heading-two",
    type: "block",
    icon: "h2.svg",
  },
  {
    name: "heading-three",
    type: "block",
    icon: "h3.svg",
  },
  {
    name: "bold",
    type: "mark",
    icon: "bold.svg",
  },
  {
    name: "italic",
    type: "mark",
    icon: "italic.svg",
  },
  {
    name: "link",
    type: "mark",
    icon: "link.svg",
  },
  {
    name: "list-item",
    type: "block",
    icon: "u-list.svg",
  },
  {
    name: "numbered-list",
    type: "block",
    icon: "o-list.svg",
  },
];

export const categories = [
  { id: 1, name: "All" },
  { id: 2, name: "Fundamentals" },
  { id: 3, name: "Processing Times" },
  { id: 4, name: "Politics & Policy" },
  { id: 5, name: "Legal Drama" },
  { id: 6, name: "Fraud" },
  { id: 7, name: "Global Market" },
  { id: 8, name: "Commentary" },
];
