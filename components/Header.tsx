import Link from 'next/link';
export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="font-bold text-xl">YogaVideos</span>
        </Link>
        <div className="space-x-6">
          <Link href="/videos">Videos</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}