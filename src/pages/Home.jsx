import React, { useState, useEffect } from "react";
import { getArtistAlbums } from "../services/spotifyApi";
import Album from "../components/Album";
import Player from "../components/Player";
import RobotDance from "../components/RobotDance";

const Home = ({ artistId }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 h-screen">
      <div className="col-span-1 row-span-2 h-full">
        <Player />
      </div>
      <div className="col-span-1 row-span-1 h-full">
        <Album />
      </div>
      <div className="col-span-1 row-span-1 h-full">
        <RobotDance />
      </div>
    </div>
  );
};
// Destructure artistId from props
//   const [albums, setAlbums] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAlbums = async () => {
//       const albumData = await getArtistAlbums(artistId);
//       if (albumData) {
//         setAlbums(albumData);
//       }
//       setLoading(false);
//     };

//     fetchAlbums();
//   }, [artistId]);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="grid grid-cols-3 gap-4">
//       {albums.map((album) => (
//         <div key={album.id} className="card">
//           <img src={album.images[0]?.url} alt={album.name} className="w-full" />
//           <h3 className="text-center text-lg">{album.name}</h3>
//           <a
//             href={album.external_urls.spotify}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Listen on Spotify
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

export default Home;
