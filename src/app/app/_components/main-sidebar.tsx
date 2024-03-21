"use client";

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from "@/components/dashboard/sidebar";
import { Logo } from "@/components/logo";
import { DashboardIcon, GearIcon } from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";
import { UserDropdown } from "./user-dropdown";
import Link from "next/link";

type MainSidebarProps = {
  user: Session["user"];
};

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Link href="/">
          <Logo/>
        </Link>
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive("/app")}>
              <DashboardIcon className="w-4 h-4 mr-3" />
              Dashboard
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive("/app/settings")}
            >
              <GearIcon className="w-4 h-4 mr-3" />
              Settings
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>

        <DashboardSidebarNav className="mt-auto">
          <DashboardSidebarNavMain className="flex flex-row">
            <DashboardSidebarNavLink href="/">
              Need some help?
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
}
