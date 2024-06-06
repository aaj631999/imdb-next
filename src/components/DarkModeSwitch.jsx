"use client"

import { MdLightMode, MdDarkMode  } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme == 'system' ? systemTheme : theme
  return (
    <div>
      { currentTheme  === 'dark' ? 
       <MdDarkMode 
       onClick={()=>setTheme('light')} 
       className="text-xl cursor-pointer hover:text-amber-500"/> 
      :
       <MdLightMode
       onClick={()=>setTheme('dark')} 
       className="text-xl cursor-pointer  hover:text-amber-500"/> 
      }
    </div>
  )
}
