import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, ShoppingBag, DollarSign, Package } from "lucide-react";

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

      {/* Placeholder for charts - we'll implement these later */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
        <div className="h-[400px] flex items-center justify-center text-gray-500">
          Sales chart will be implemented here
        </div>
      </Card>
    </div>
  );
};