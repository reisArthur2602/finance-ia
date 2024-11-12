"use client";

import Logo from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderDashboard = () => {
  const pathname = usePathname();

  const NAV_LINKS = [
    { path: "/dashboard", name: "Dashboard" },
    { path: "/dashboard/transactions", name: "Transações" },
    { path: "/dashboard/", name: "Assinatura" },
  ];

  return (
    <header className="flex items-center justify-between border-b px-8 py-4">
      <nav className="flex items-center gap-12">
        <Logo />

        {NAV_LINKS.map(({ name, path }) => (
          <Link
            href={path}
            className={`font-bold ${pathname === path ? "text-primary" : "text-muted-foreground"}`}
          >
            {name}
          </Link>
        ))}
      </nav>

      <UserButton showName />
    </header>
  );
};

export default HeaderDashboard;
