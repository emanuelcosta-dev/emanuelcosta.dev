import Link from "@/app/components/Link";
import React from "react";

interface GearItem {
  category: string;
  items: {
    name: string;
    description: string;
    link?: string;
  }[];
}

const gearList: GearItem[] = [
  {
    category: "Hardware",
    items: [
      {
        name: '14" MacBook Pro M3, 16GB RAM',
        description:
          "Perfect form factor for development. Has all the power I need and the battery life is great on the go.",
        link: "https://www.apple.com/macbook-pro/",
      },
      {
        name: "Dell UltraSharp 27-inch 4K Display",
        description:
          "Good 4k display that gives me screen real estate for development and accurate colors for design work.",
        link: "https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-hub-monitor-u2723qe/apd/210-bdpf/monitors-monitor-accessories",
      },
      {
        name: "Neo 65",
        description:
          "65% Custom mechanical keyboard with Gateron Milky Yellow Pro switches and GMK Monokai.",
        link: "https://qwertykeys.notion.site/Neo-65-6c8ae7895ec442dea809057c3dc5e113",
      },
      {
        name: "Logitech G Pro X Superlight",
        description:
          "The mouse I use at my desk. I love the shape and the weight.",
        link: "https://www.logitechg.com/en-us/products/gaming-mice/pro-x-superlight-wireless-mouse.html",
      },
      {
        name: "Logitech MX Master 3",
        description:
          "The mouse I use when I travel. The bluetooth connection is convenient and I really like the side scroll wheel.",
        link: "https://www.logitech.com/en-us/products/mice/mx-master-3.html",
      },
    ],
  },
  {
    category: "Software",
    items: [
      {
        name: "Visual Studio Code",
        description:
          "My main code editor. I'm consering switching to neovim and join the cool kids.",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "iTerm2",
        description:
          "My go-to terminal emulator for macOS. Been using it for years.",
        link: "https://iterm2.com/",
      },
      {
        name: "Claude 3.5",
        description:
          "Currently trying out Claude as an AI assistant for coding and general tasks. So far it feels more advanced than ChatGPT.",
        link: "https://www.anthropic.com/",
      },
      {
        name: "Notion",
        description:
          "All-in-one tool for notes, project planning and second brain.",
        link: "https://www.notion.so/",
      },
      {
        name: "Bruno",
        description:
          "Been using bruno for a few months now as an Open-source Postman alternative. It feels less bloated and more straight to the point.",
        link: "https://www.usebruno.com/",
      },
      {
        name: "TablePlus",
        description:
          "My favorite, premium, database management tool. The fact that you can buy a license and not have to deal with the hassle of a subscription is a huge plus.",
        link: "https://tableplus.com/",
      },
      {
        name: "Raycast",
        description:
          "Spotlight replacement for macOS, helps me find things fast.",
        link: "https://www.raycast.com/",
      },
      {
        name: "Rectangle",
        description:
          "Great to move and resize windows in macOS using keyboard shortcuts, can't live without it.",
        link: "https://rectangleapp.com",
      },
      {
        name: "1Password",
        description: "Good, solid password manager.",
        link: "https://1password.com/",
      },
    ],
  },
];

const ToolsSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 animate-in"
      style={{ "--index": 1 } as React.CSSProperties}
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <div className="md:col-span-3">
          <ul role="list" className="space-y-16">
            {children}
          </ul>
        </div>
      </div>
    </section>
  );
};

const Tool = ({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) => {
  const content = (
    <>
      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
        {title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {children}
      </p>
    </>
  );

  return (
    <li className="group relative flex flex-col items-start">
      {href ? (
        <Link
          href={href}
          className="block w-full transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg p-3 -m-3 no-underline"
        >
          {content}
        </Link>
      ) : (
        <div className="block w-full p-3 -m-3">{content}</div>
      )}
    </li>
  );
};

export default function GearPage() {
  return (
    <div className="space-y-16">
      <h1
        className="text-4xl font-bold mb-4 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        The tech I use, love, and recommend.
      </h1>
      <p
        className="text-muted-foreground mb-8 animate-in"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        Here&apos;s a list of the gear I use for work and play. No affiliate
        links.
      </p>
      {gearList.map((category) => (
        <ToolsSection key={category.category} title={category.category}>
          {category.items.map((item) => (
            <Tool key={item.name} title={item.name} href={item.link}>
              {item.description}
            </Tool>
          ))}
        </ToolsSection>
      ))}
    </div>
  );
}
