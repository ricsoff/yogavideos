import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Shop() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shop Yoga Gear</h1>
        <p>Coming soon: curated mats, props, and apparel to support your practice.</p>
      </main>
      <Footer />
    </>
  );
}