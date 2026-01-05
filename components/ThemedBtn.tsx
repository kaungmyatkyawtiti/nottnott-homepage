"use client";

import { RiMoonClearLine, RiSunLine } from "@remixicon/react";

function ThemedBtn() {
  return (
    <button
      className="themed-btn"
    >
      {/* when theme is dark, hide this */}
      <RiMoonClearLine
        size={20}
        data-hide-on-theme="dark"
      />

      {/* when theme is light, hide this */}
      <RiSunLine
        size={20}
        data-hide-on-theme="light"
      />
    </button>
  )
}

export default ThemedBtn; 
