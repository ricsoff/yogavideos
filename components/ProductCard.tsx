interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
      <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
      <p className="text-gray-800">{product.price}</p>
    </div>
  );
}