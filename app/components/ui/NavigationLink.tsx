import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavigationLink({
  href,
  children,
}: NavigationLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors",
        active ? "bg-secondary text-primary" : "text-muted-foreground",
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
