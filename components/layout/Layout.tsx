type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return <main className="flex flex-col justify-center items-center px-6 py-12 md:py-6">{children}</main>;
}
