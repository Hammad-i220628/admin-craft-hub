import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, ShoppingBag, DollarSign, Package } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, XAxis, YAxis } from "recharts";

export const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Pending Orders",
      value: "45",
      icon: ShoppingBag,
      color: "bg-yellow-500",
      onClick: () => navigate("/orders?status=pending"),
    },
    {
      title: "Total Sales",
      value: "$12,345",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Products",
      value: "890",
      icon: Package,
      color: "bg-purple-500",
      onClick: () => navigate("/products"),
    },
  ];

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
    { month: "Jun", sales: 5500 },
  ];

  const dealsData = [
    {
      id: 1,
      product: "Smartphone X",
      sales: 245,
      revenue: "$24,500",
      growth: "+12%",
    },
    {
      id: 2,
      product: "Laptop Pro",
      sales: 190,
      revenue: "$57,000",
      growth: "+8%",
    },
    {
      id: 3,
      product: "Wireless Earbuds",
      sales: 320,
      revenue: "$16,000",
      growth: "+15%",
    },
  ];

  const additionalMenuItems = [
    { title: "Pricing", path: "/pricing" },
    { title: "Category", path: "/category" },
    { title: "To-Do", path: "/todo" },
    { title: "Contact", path: "/contact" },
    { title: "Invoice", path: "/invoice" },
    { title: "UI Elements", path: "/ui-elements" },
    { title: "Teams", path: "/teams" },
    { title: "Tables", path: "/tables" },
    { title: "Settings", path: "/settings" },
    { title: "Logout", path: "/logout" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className={`p-6 ${
              stat.onClick ? "cursor-pointer hover:shadow-lg transition-shadow" : ""
            }`}
            onClick={stat.onClick}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <div className="h-[400px]">
          <ChartContainer
            className="h-full"
            config={{
              sales: {
                theme: {
                  light: "#3b82f6",
                  dark: "#60a5fa",
                },
              },
            }}
          >
            <AreaChart data={salesData}>
              <defs>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip>
                <ChartTooltipContent />
              </ChartTooltip>
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorSales)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Deals Details</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3">Product</th>
                <th className="text-left py-3">Sales</th>
                <th className="text-left py-3">Revenue</th>
                <th className="text-left py-3">Growth</th>
              </tr>
            </thead>
            <tbody>
              {dealsData.map((deal) => (
                <tr key={deal.id} className="border-b hover:bg-gray-50">
                  <td className="py-3">{deal.product}</td>
                  <td className="py-3">{deal.sales}</td>
                  <td className="py-3">{deal.revenue}</td>
                  <td className="py-3 text-green-500">{deal.growth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {additionalMenuItems.map((item) => (
          <Card
            key={item.title}
            className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => navigate(item.path)}
          >
            <p className="text-center font-medium">{item.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};