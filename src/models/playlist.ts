import { Music } from "./music";

export interface Playlist {
    id: string;
    user : string;
    name: string;
    musics: Array<Music>;
  }