import { ChangeEventHandler } from "react";

export default function ThemeRadio({
  value,
  currentTheme,
  onRadioChange,
}: Readonly<{
  value: string;
  currentTheme: any;
  onRadioChange: ChangeEventHandler;
}>) {
  console.log(currentTheme);
  return (
    <input
      type="radio"
      name="theme"
      value={value}
      hidden
      checked={currentTheme === value}
      onChange={onRadioChange}
    />
  );
}
