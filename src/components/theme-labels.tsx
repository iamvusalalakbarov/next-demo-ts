"use client";

import { useState } from "react";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import MonitorRoundedIcon from "@mui/icons-material/MonitorRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Label from "@/components/label";
import ThemeRadio from "@/components/theme-radio";

export default function ThemeLabels() {
  const [currentTheme, setCurrentTheme] = useState("system");

  return (
    <div className="flex justify-center items-center gap-x-1">
      <Label value="light" currentTheme={currentTheme}>
        <WbSunnyRoundedIcon className="text-blue-800" />
        <ThemeRadio
          value="light"
          currentTheme={currentTheme}
          onRadioChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentTheme(e.target.value)
          }
        />
      </Label>
      <Label value="system" currentTheme={currentTheme}>
        <MonitorRoundedIcon className="text-blue-800" />
        <ThemeRadio
          value="system"
          currentTheme={currentTheme}
          onRadioChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentTheme(e.target.value)
          }
        />
      </Label>
      <Label value="dark" currentTheme={currentTheme}>
        <DarkModeIcon className="text-blue-800" />
        <ThemeRadio
          value="dark"
          currentTheme={currentTheme}
          onRadioChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentTheme(e.target.value)
          }
        />
      </Label>
    </div>
  );
}
