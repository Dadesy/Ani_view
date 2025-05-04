export interface TopViewsResponse {
  data: TopViewItem[];
  links: PaginationLinks;
  meta: PaginationMeta;
}

export interface TopViewItem {
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
  views_day: number;
  rating: Rating;
  status: LabelledItem;
  releaseDateString: string;
  shiki_rate: number | null;
}

export interface Cover {
  filename: string;
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
