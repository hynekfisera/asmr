import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return <h1 className="text-2xl md:text-3xl font-light text-gray-200 text-center">{children}</h1>;
}
