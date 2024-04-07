import clsx from "clsx";

export default function Label({
  children,
  value,
  currentTheme,
}: Readonly<{
  children: React.ReactNode;
  value: string;
  currentTheme: any;
}>) {
  return (
    <label
      className={clsx(
        "flex justify-center items-center p-2 rounded-full hover:bg-blue-200 transition-colors cursor-pointer",
        {
          "bg-blue-200": value === currentTheme,
        }
      )}
    >
      {children}
    </label>
  );
}
