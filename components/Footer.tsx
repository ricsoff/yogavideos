export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} YogaVideos.com · Find your flow
      </div>
    </footer>
  );
}