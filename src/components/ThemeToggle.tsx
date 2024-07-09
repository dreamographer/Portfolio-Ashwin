"use client";

import * as React from "react";
import { useTheme } from "next-themes";


export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
  <>
    <button onClick={()=>setTheme('dark')}>dark</button>
    <button onClick={()=>setTheme('light')}>ligthy</button>
  </>
  );
}
