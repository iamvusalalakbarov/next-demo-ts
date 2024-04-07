"use client";

import { useRouter } from "../navigation";
import { usePathname } from "next/navigation";
import Select, { SelectProps } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Az, Tr, Gb } from "react-flags-select";

export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push("/", { locale });
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={currentLocale}
      onChange={changeLanguage}
      placeholder="deneme"
      className="w-52 h-10 dark:text-white dark:bg-stone-700"
      sx={{
        "& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline, &.Mui-focused > .MuiOutlinedInput-notchedOutline":
          {
            borderWidth: "2px",
            borderColor: "#1e40af",
          },
        "& .MuiSvgIcon-root path": {
          fill: "#1e40af",
        },
      }}
    >
      <MenuItem value="az">
        <div className="flex items-center gap-x-4">
          <Az />
          Azərbaycan Dili
        </div>
      </MenuItem>
      <MenuItem value="tr" className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-4">
          <Tr />
          Türkçe
        </div>
      </MenuItem>
      <MenuItem value="en" className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-4">
          <Gb />
          English
        </div>
      </MenuItem>
    </Select>
  );
}
