export interface SimilarResponse {
  data: SimilarItem[];
}

export interface SimilarItem {
  id: number;
  similar: string;
  user_id: number;
  media: Media;
  votes: Votes;
}

export interface Media {
  id: number;
  name: string;
  rus_name: string;
  eng_name: string;
  model: string;
  slug: string;
  slug_url: string;
  cover: Cover;
  ageRestriction: AgeRestriction;
  site: number;
  type: MediaType;
  is_licensed: boolean;
  status: MediaStatus;
  releaseDateString: string;
  shikimori_href: string;
  shiki_rate: number;
}

export interface Cover {
  filename: string;
  thumbnail: string;
  default: string;
  md: string;
}

export interface AgeRestriction {
  id: number;
  label: string;
}

export interface MediaType {
  id: number;
  label: string;
}

export interface MediaStatus {
  id: number;
  label: string;
}

export interface Votes {
  up: number;
  down: number;
  user: null | any;
}
