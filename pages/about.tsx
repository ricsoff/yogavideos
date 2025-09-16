import Header from '../components/Header';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">About YogaVideos.com</h1>
        <p>YogaVideos.com is your online destination for free yoga videos, classes, and high-quality gear to help you find your flow.</p>
      </main>
      <Footer />
    </>
  );
}