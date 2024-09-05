"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import clsx from "clsx";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import NavigationLink from "@/app/components/ui/NavigationLink";
import Image from "next/image";

const links = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Craft", href: "/craft" },
  { label: "Community", href: "/community" },
  { label: "Gear", href: "/gear" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic sub-pages

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="shrink-0 text-primary">
          <Image
            src="/logo_dark.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={29}
            height={36}
            priority
          />
        </Link>
        {/* <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavigationLink href={link.href}>{link.label}</NavigationLink>
            </li>
          ))}
        </ul> */}
        <div className="ml-auto flex h-8 w-8 items-center justify-center md:ml-0">
          <ThemeSwitcher />
        </div>
        {/* <Popover className="relative md:hidden">
          <PopoverButton className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary">
            <Bars3Icon className="h-5 w-5 cursor-pointer text-secondary transition-colors hover:text-primary" />
          </PopoverButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-contrast p-2 text-base shadow-md focus:outline-none sm:text-sm">
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "rounded-md px-4 py-2 transition-colors hover:text-primary",
                      pathname === link.href
                        ? "bg-secondary font-medium"
                        : "font-normal"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Transition>
        </Popover> */}
      </nav>
    </header>
  );
}
