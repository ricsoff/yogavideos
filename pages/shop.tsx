import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
export default function Shop() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shop Yoga Gear</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}