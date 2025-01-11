import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Minus, Trash2 } from "lucide-react";

// Sample stock data
const stockData = [
  {
    id: 1,
    name: "Product A",
    sku: "SKU001",
    quantity: 150,
    minStock: 50,
    price: 149.99,
  },
  {
    id: 2,
    name: "Product B",
    sku: "SKU002",
    quantity: 30,
    minStock: 40,
    price: 499.99,
  },
  {
    id: 3,
    name: "Product C",
    sku: "SKU003",
    quantity: 200,
    minStock: 100,
    price: 66.66,
  },
];

export const Stock = () => {
  const [inventory, setInventory] = useState(stockData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updateQuantity = (id: number, change: number) => {
    setInventory(inventory.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(0, item.quantity + change) }
        : item
    ));
  };

  const deleteItem = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Stock Management</h1>
        <div className="relative w-72">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredInventory.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">SKU: {item.sku}</p>
                <p className="text-sm text-gray-600">
                  Price: ${item.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge
                  className={
                    item.quantity <= item.minStock
                      ? "bg-red-500"
                      : "bg-green-500"
                  }
                >
                  Stock: {item.quantity}
                </Badge>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => deleteItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};