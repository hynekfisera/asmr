import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: Props) {
  return <h2 className="md:text-lg text-purple-300">{children}</h2>;
}
