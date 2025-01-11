import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

// Sample orders data
const ordersData = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2024-03-10",
    total: 299.99,
    status: "pending",
    items: [
      { name: "Product A", quantity: 2, price: 149.99 }
    ]
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2024-03-09",
    total: 499.99,
    status: "delivered",
    items: [
      { name: "Product B", quantity: 1, price: 499.99 }
    ]
  },
  {
    id: "ORD-003",
    customer: "Bob Wilson",
    date: "2024-03-08",
    total: 199.99,
    status: "processing",
    items: [
      { name: "Product C", quantity: 3, price: 66.66 }
    ]
  },
];

const statusColors = {
  pending: "bg-yellow-500",
  processing: "bg-blue-500",
  delivered: "bg-green-500",
  cancelled: "bg-red-500",
};

export const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = ordersData.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders</h1>
        <div className="flex space-x-4">
          <div className="relative w-72">
            <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredOrders.map((order) => (
          <Card key={order.id} className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{order.id}</h3>
                  <Badge className={statusColors[order.status as keyof typeof statusColors]}>
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                <p className="text-sm text-gray-600">Date: {order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${order.total.toFixed(2)}</p>
                <p className="text-sm text-gray-600">
                  {order.items.length} item{order.items.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};