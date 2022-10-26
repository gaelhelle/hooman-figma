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
  icon: string;
};

export const wysiwygOptions: WysiwygOptionsType[] = [
  {
    name: "h2",
    icon: "h2.svg",
  },
  {
    name: "h3",
    icon: "h3.svg",
  },
  {
    name: "bold",
    icon: "bold.svg",
  },
  {
    name: "italic",
    icon: "italic.svg",
  },
  {
    name: "link",
    icon: "link.svg",
  },
  {
    name: "u-list",
    icon: "u-list.svg",
  },
  {
    name: "o-list",
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
