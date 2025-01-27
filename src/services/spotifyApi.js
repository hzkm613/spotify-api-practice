import axios from "axios";

// Fetch the access token from Spotify
const getAccessToken = async () => {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  // Prepare the request body (as form data)
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
  });

  try {
    // Send POST request to get access token
    const response = await axios.post("https://accounts.spotify.com/api/token", body, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",  // This is important
      },
    });

    // Return the access token
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
};

// Get artist's albums by Spotify ID
const getArtistAlbums = async (artistId) => {
  const accessToken = await getAccessToken();
  if (!accessToken) return;

  const url = `https://api.spotify.com/v1/artists/${artistId}/albums`;
  const headers = {
    'Authorization': `Bearer ${accessToken}`,
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching artist albums:', error);
  }
};

export { getArtistAlbums };
