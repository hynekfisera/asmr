import { StaticImageData } from "next/image";

export type Test = {
  image: StaticImageData;
  title: string;
  href: string;
  description: string;
  openInNewTab?: boolean;
  disabled?: boolean;
};
