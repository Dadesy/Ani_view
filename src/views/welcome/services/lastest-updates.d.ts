export interface LastUpdatesResponse {
  data: LastUpdateItem[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface LastUpdateItem {
  id: number;
  name: string;
  rus_name: string;
  eng_name: string;
  model: string;
  slug: string;
  slug_url: string;
  cover: Cover;
  ageRestriction: LabelledItem;
  site: number;
  type: LabelledItem;
  rating: Rating;
  last_item_at: string;
  metadata: Metadata;
  status: LabelledItem;
  items_count: ItemsCount;
  releaseDateString: string;
  shiki_rate: number | null;
}

export interface Metadata {
  latest_items: LatestItems;
}

export interface LatestItems {
  count: number;
  items: LatestItem[];
}

export interface LatestItem {
  id: number;
  model: string;
  name: string;
  number: string;
  number_secondary: string;
  season: string;
  status: LatestItemStatus;
  anime_id: number;
  created_at: string;
  players: Player[];
  item_number: number;
  type: string;
}

export interface LatestItemStatus {
  id: string;
  label: string;
  abbr: string | null;
}

export interface Player {
  id: number;
  episode_id: number;
  player: string;
  translation_type: LabelledItem;
  team: Team;
  created_at: string;
  views: number;
  src: string;
}

export interface Team {
  id: number;
  slug: string;
  slug_url: string;
  model: string;
  name: string;
  cover: Cover;
  stats: Stat[];
}

export interface Stat {
  value: number;
  formated: string;
  short: string;
  label: string;
  tag: string;
}

export interface ItemsCount {
  uploaded: number | null;
  total: number;
}

export interface Cover {
  filename: string | null;
  thumbnail: string;
  default: string;
  md: string;
}

export interface LabelledItem {
  id: number;
  label: string;
}

export interface Rating {
  average: string;
  averageFormated: string;
  votes: number;
  votesFormated: string;
  user: number;
}

export interface PaginationLinks {
  first: string;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  path: string;
  per_page: number;
  to: number;
}
