import React, { useState, useEffect } from "react";
import { getArtistAlbums } from "../services/spotifyApi"; // Assuming this is your API call

const Home = ({ artistId }) => {
  // Destructure artistId from props
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      const albumData = await getArtistAlbums(artistId);
      if (albumData) {
        setAlbums(albumData);
      }
      setLoading(false);
    };

    fetchAlbums();
  }, [artistId]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {albums.map((album) => (
        <div key={album.id} className="card">
          <img src={album.images[0]?.url} alt={album.name} className="w-full" />
          <h3 className="text-center text-lg">{album.name}</h3>
          <a
            href={album.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Listen on Spotify
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
