export interface AnimeApiResponse {
  data: AnimeData;
  meta: {
    country: string;
  };
}

export interface AnimeData {
  id: number;
  name: string;
  rus_name: string;
  eng_name: string;
  otherNames: string[];
  model: string;
  slug: string;
  slug_url: string;
  cover: ImageVariant;
  background: {
    filename: string;
    url: string;
  };
  ageRestriction: {
    id: number;
    label: string;
  };
  site: number;
  type: {
    id: number;
    label: string;
  };
  summary: string;
  close_view: number;
  releaseDate: string;
  views: {
    total: number;
    short: string;
    formated: string;
  };
  rating: {
    average: string;
    averageFormated: string;
    votes: number;
    votesFormated: string;
    user: number;
  };
  is_licensed: boolean;
  moderated: {
    id: number;
    label: string;
  };
  teams: Team[];
  genres: Genre[];
  tags: Tag[];
  publisher: Publisher[];
  franchise: any[];
  authors: Author[];
  user: User;
  metadata: Metadata;
  status: {
    id: number;
    label: string;
  };
  time: {
    value: number;
    formated: string;
  };
  items_count: {
    uploaded: number;
    total: number;
  };
  episodes_schedule: any[];
  releaseDateString: string;
  shikimori_href: string;
  shiki_rate: number;
}

export interface ImageVariant {
  filename: string | null;
  thumbnail: string;
  default: string;
  md: string;
}

export interface Team {
  id: number;
  slug: string;
  slug_url: string;
  model: string;
  name: string;
  cover: ImageVariant;
  details: {
    branch_id: number | null;
    is_active: number;
    subscriptions_count: number | null;
  };
  donate_enabled: boolean | null;
}

export interface Genre {
  id: number;
  name: string;
  adult: boolean;
  alert: boolean;
}

export interface Tag {
  id: number;
  name: string;
  adult: boolean;
  alert: boolean;
}

export interface Publisher {
  id: number;
  slug: string;
  slug_url: string;
  model: string;
  name: string;
  rus_name: string | null;
  cover: ImageVariant;
  subscription: {
    is_subscribed: boolean;
    source_type: string;
    source_id: number;
    relation: any;
  };
}

export interface Author {
  id: number;
  slug: string;
  slug_url: string;
  model: string;
  name: string;
  rus_name: string | null;
  alt_name: string | null;
  cover: ImageVariant;
  subscription: {
    is_subscribed: boolean;
    source_type: string;
    source_id: number;
    relation: any;
  };
  confirmed: boolean | null;
  user_id: number;
}

export interface User {
  id: number;
  username: string;
  avatar: {
    filename: string;
    url: string;
  };
  last_online_at: string | null;
  premium: {
    enabled: boolean;
  };
}

export interface Metadata {
  close_comments: number;
  comments_disabled: {
    media: boolean;
    content: boolean;
  };
  count: {
    branches: number;
    characters: {
      Main: number;
      Supporting: number;
    };
    reviews: {
      neutral: number;
      positive: number;
      negative: number;
      all: number;
    };
    relations: number;
    people: number;
    covers: number;
  };
}
