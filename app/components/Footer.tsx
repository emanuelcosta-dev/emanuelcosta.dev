import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-border" />
      <div className="mx-auto max-w-[700px] px-6 py-12 text-sm text-muted-foreground">
        © {currentYear} Emanuel. All rights reserved.
      </div>
    </footer>
  );
}
