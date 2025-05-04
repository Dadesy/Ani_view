export interface EpisodesListResponse {
  data: AnimeEpisode[];
}

export interface AnimeEpisode {
  id: number;
  model: 'episodes';
  name: string;
  number: string;
  number_secondary: string;
  season: string;
  status: EpisodeStatus;
  anime_id: number;
  created_at: string;
  item_number: number;
  type: 'episodes';
}

export interface EpisodeDetailsResponse {
  data: EpisodeWithPlayers;
}

export interface EpisodeWithPlayers extends Omit<AnimeEpisode, 'item_number'> {
  players: EpisodePlayer[];
}

export interface EpisodeStatus {
  id: string;
  label: string;
  abbr: string | null;
}

export interface EpisodePlayer {
  id: number;
  episode_id: number;
  player: string;
  translation_type: TranslationType;
  team: TeamInfo;
  created_at: string;
  views: number;
  src: string;
}

export interface TranslationType {
  id: number;
  label: string;
}

export interface TeamInfo {
  id: number;
  slug: string;
  slug_url: string;
  model: 'team';
  name: string;
  cover: ImageVariant;
  stats: TeamStat[];
}

export interface ImageVariant {
  filename: string | null;
  thumbnail: string;
  default: string;
  md: string;
}

export interface TeamStat {
  value: number;
  formated: string;
  short: string;
  label: string;
  tag: string;
}
