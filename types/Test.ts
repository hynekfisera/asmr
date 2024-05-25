import { StaticImageData } from "next/image";

export type Test = {
  id: string;
  image: StaticImageData;
  title: string;
  href: string;
  description: string;
  descriptionLong?: string;
  openInNewTab?: boolean;
  disabled?: boolean;
  tutorial?: string[];
  resultMessage?: string;
};
