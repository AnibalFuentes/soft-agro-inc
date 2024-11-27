"use client";
import React, { useState } from "react";
import {
  BadgeDollarSign,
  LayoutDashboard,
  PackageOpen,
  Slack,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { redirect } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Inventario",
    url: "/dashboard/inventory",
    icon: PackageOpen,
  },
  {
    title: "Ventas",
    url: "/dashboard/sales",
    icon: BadgeDollarSign,
  },
];

export function AppSidebar() {
  const [selected, setSelected] = useState<string>("Dashboard");

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size={"lg"}
              onClick={() => {
                setSelected("Dashboard");
                redirect("/dashboard");
              }}
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Slack className="size-10" />
              </div>

              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Soft-Agro-Inc.</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        selected === item.title
                          ? "bg-gray-200 dark:bg-gray-800 shadow-lg scale-105"
                          : "hover:bg-gray-100 hover:dark:bg-gray-700 hover:scale-105"
                      }`}
                      onClick={() => setSelected(item.title)}
                    >
                      <item.icon
                        className={`transition-transform ${
                          selected === item.title ? "scale-110" : ""
                        }`}
                      />
                      <span
                        className={`text-md ${
                          selected === item.title
                            ? "text-black dark:text-white"
                            : "text-gray-600 dark:text-gray-300"
                        }`}
                      >
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
