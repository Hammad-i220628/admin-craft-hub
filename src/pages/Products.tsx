import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Truck } from "lucide-react";

export const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Products</h1>
      
      <Card className="bg-blue-50 p-6">
        <div className="flex items-center space-x-3 text-blue-600">
          <Truck className="w-6 h-6" />
          <p className="text-lg font-semibold">
            Enjoy free home delivery this summer!
          </p>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.products?.map((product: any) => (
          <Card key={product.id} className="p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};