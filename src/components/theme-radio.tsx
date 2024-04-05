import { ChangeEventHandler } from "react";

export default function ThemeRadio({
  value,
  currentTheme,
  onRadioChange,
}: Readonly<{
  value: string;
  currentTheme: string;
  onRadioChange: ChangeEventHandler;
}>) {
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
