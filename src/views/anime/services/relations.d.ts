export interface RelatedMediaResponse {
  data: RelatedMediaItem[];
}

export interface RelatedMediaItem {
  order: number;
  related_type: RelatedType;
  media: Media;
}

export interface RelatedType {
  id: number;
  label: string;
}

export interface Media {
  id: number;
  name: string;
  rus_name: string;
  eng_name: string | null;
  model: string;
  slug: string;
  slug_url: string;
  cover: Cover;
  ageRestriction: AgeRestriction;
  site: number;
  type: MediaType;
  status: MediaStatus;
  releaseDateString: string;
  shiki_rate: number | null;
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
