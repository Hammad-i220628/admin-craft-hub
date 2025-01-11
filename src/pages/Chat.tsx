import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Sample chat data
const initialChats = [
  {
    id: 1,
    sender: "John Doe",
    message: "Hi, I have a question about my order #12345",
    timestamp: "10:30 AM",
    isAdmin: false,
  },
  {
    id: 2,
    sender: "Admin",
    message: "Hello John, I'd be happy to help. What's your question?",
    timestamp: "10:31 AM",
    isAdmin: true,
  },
  {
    id: 3,
    sender: "John Doe",
    message: "When will my order be delivered?",
    timestamp: "10:32 AM",
    isAdmin: false,
  },
];

export const Chat = () => {
  const [messages, setMessages] = useState(initialChats);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: messages.length + 1,
      sender: "Admin",
      message: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAdmin: true,
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="space-y-8 h-[calc(100vh-12rem)]">
      <h1 className="text-3xl font-bold">Chat</h1>
      
      <Card className="flex flex-col h-full">
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isAdmin ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] p-3 rounded-lg ${
                  message.isAdmin
                    ? 'bg-primary text-primary-foreground ml-auto'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm font-semibold">{message.sender}</p>
                <p className="text-sm">{message.message}</p>
                <p className="text-xs text-right mt-1 opacity-70">
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};