import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCard from '../components/VideoCard';
import videos from '../data/videos';
export default function Videos() {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Yoga Videos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map(video => <VideoCard key={video.id} video={video} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
