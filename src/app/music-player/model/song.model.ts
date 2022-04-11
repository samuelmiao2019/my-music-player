import { Album } from "./album.model";
import { Artist } from "./artist.model";

export interface Song {
  name: string;
  artist: Artist;
  album: Album;
  albumArt: string;
}