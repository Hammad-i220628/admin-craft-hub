import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Dashboard } from "@/pages/Dashboard";
import { Products } from "@/pages/Products";
import { Inbox } from "@/pages/Inbox";
import { Chat } from "@/pages/Chat";
import { Orders } from "@/pages/Orders";
import { Stock } from "@/pages/Stock";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/stock" element={<Stock />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;