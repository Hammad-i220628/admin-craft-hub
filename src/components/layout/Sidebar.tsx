import {
  LayoutDashboard,
  Package,
  Inbox,
  MessageSquare,
  ClipboardList,
  BarChart2,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    path: "/products",
    icon: Package,
  },
  {
    title: "Inbox",
    path: "/inbox",
    icon: Inbox,
  },
  {
    title: "Chat",
    path: "/chat",
    icon: MessageSquare,
  },
  {
    title: "Orders",
    path: "/orders",
    icon: ClipboardList,
  },
  {
    title: "Stock",
    path: "/stock",
    icon: BarChart2,
  },
];

export function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.path)}
                    className={location.pathname === item.path ? "bg-primary/10" : ""}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};