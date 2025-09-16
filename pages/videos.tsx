import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';

const videos = [
  {
    id: 1,
    title: "Morning Flow",
    description: "Start your day with a gentle yoga sequence.",
    thumbnail: "/thumbnails/morning-flow.jpg",
  },
  {
    id: 2,
    title: "Power Vinyasa",
    description: "Energize with a dynamic vinyasa class.",
    thumbnail: "/thumbnails/power-vinyasa.jpg",
  },
  // Add more videos as needed
];

export default function Videos() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Yoga Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}