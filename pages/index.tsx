import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to YogaVideos.com</h1>
        <p className="mb-8">Find your flow. Explore free yoga videos, classes, and shop for your favorite gear.</p>
      </main>
      <Footer />
    </>
  );
}
