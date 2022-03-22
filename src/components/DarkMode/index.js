import React, { useState } from "react";
export function DarkMode() {
  const [dark, setDark] = useState(false);
  const change = (mode) => {
    if (mode === "light") {
      setDark(false);
    } else if (mode === "dark") {
      setDark(true);
    }
  };
  return (
    <div className={dark ? "todark" : "tolight"}>
      <button className="light-mode" onClick={() => change("light")}>
        Light
      </button>
      <button className="dark-mode" onClick={() => change("dark")}>
        Dark
      </button>
    </div>
  );
}