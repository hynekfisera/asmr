type Props = { children: React.ReactNode };

export default function Container({ children }: Props) {
  return <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">{children}</div>;
}
