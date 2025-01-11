import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [bannerIndex, setBannerIndex] = useState(0);
  const bannerMessages = [
    "Enjoy free home delivery this summer!",
    "Special discount on bulk orders!",
    "Next day delivery available!",
  ];

  const nextBanner = () => {
    setBannerIndex((prev) => (prev + 1) % bannerMessages.length);
  };

  const prevBanner = () => {
    setBannerIndex((prev) => 
      prev === 0 ? bannerMessages.length - 1 : prev - 1
    );
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>
      
      <Card className="bg-blue-50 p-8">
        <div className="flex items-center justify-between text-blue-600">
          <button 
            onClick={prevBanner}
            className="p-2 hover:bg-blue-100 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <Truck className="w-8 h-8" />
            <p className="text-xl font-semibold">
              {bannerMessages[bannerIndex]}
            </p>
          </div>
          <button 
            onClick={nextBanner}
            className="p-2 hover:bg-blue-100 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.products?.map((product: any) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-500">${product.price}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};