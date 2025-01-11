import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Mail, Star, Trash2 } from "lucide-react";

const inboxData = [
  {
    id: 1,
    from: "Supplier A",
    subject: "Product Restock Request",
    message: "We need to restock Product X. Current inventory is low.",
    date: "2024-03-10",
    read: false,
  },
  {
    id: 2,
    from: "Customer Support",
    subject: "Weekly Support Summary",
    message: "Here's the summary of customer support tickets this week.",
    date: "2024-03-09",
    read: true,
  },
  {
    id: 3,
    from: "Marketing Team",
    subject: "New Campaign Proposal",
    message: "Review the new marketing campaign for Q2.",
    date: "2024-03-08",
    read: true,
  },
  {
    id: 4,
    from: "Logistics Partner",
    subject: "Shipping Updates",
    message: "Important updates regarding shipping rates for Q2.",
    date: "2024-03-07",
    read: false,
  },
  {
    id: 5,
    from: "Tech Support",
    subject: "System Maintenance Notice",
    message: "Scheduled maintenance for the inventory system this weekend.",
    date: "2024-03-06",
    read: true,
  },
  {
    id: 6,
    from: "Finance Department",
    subject: "Monthly Revenue Report",
    message: "Attached is the detailed revenue report for last month.",
    date: "2024-03-05",
    read: true,
  },
];

export const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState(inboxData);

  const filteredMessages = messages.filter(
    (message) =>
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.from.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inbox</h1>
        <div className="relative w-72">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search messages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredMessages.map((message) => (
          <Card key={message.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <Mail className={`h-5 w-5 ${message.read ? 'text-gray-400' : 'text-blue-500'}`} />
                <div>
                  <h3 className="font-semibold">{message.from}</h3>
                  <p className="text-sm text-gray-600">{message.subject}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{message.date}</span>
                <Button variant="ghost" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-600">{message.message}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};