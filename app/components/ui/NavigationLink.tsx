import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type NavigationLinkProps = {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export default function NavigationLink({
  href,
  children,
  target,
  rel,
}: NavigationLinkProps) {
  const pathname = `/${usePathname().split("/")[1]}`;
  const active = pathname === href;

  return (
    <Link
      className={clsx(
        "px-6 py-3 rounded-lg text-sm hover:text-primary transition-colors",
        active ? "bg-secondary text-primary" : "text-muted-foreground"
      )}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
