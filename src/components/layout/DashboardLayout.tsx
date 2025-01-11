import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar";
import { Toaster } from "@/components/ui/sonner";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};