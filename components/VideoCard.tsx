interface Video {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover mb-2 rounded" />
      <h2 className="font-semibold text-lg mb-1">{video.title}</h2>
      <p className="text-gray-600 text-sm">{video.description}</p>
    </div>
  );
}