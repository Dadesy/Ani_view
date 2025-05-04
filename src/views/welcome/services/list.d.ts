interface ImageCover {
  filename: string | null;
  thumbnail: string;
  default: string;
  md: string;
}

interface TeamStats {
  value: number;
  formated: string;
  short: string;
  label: string;
  tag: string;
}

interface Team {
  id: number;
  slug: string;
  slug_url: string;
  model: string;
  name: string;
  cover: ImageCover;
  stats: TeamStats[];
}

interface TranslationType {
  id: number;
  label: string;
}

interface Player {
  id: number;
  episode_id: number;
  player: string;
  translation_type: TranslationType;
  team: Team;
  created_at: string;
  views: number;
  src?: string;
}

interface EpisodeStatus {
  id: string;
  label: string;
  abbr: string | null;
}

interface Episode {
  id: number;
  model: string;
  name: string;
  number: string;
  number_secondary: string;
  season: string;
  status: EpisodeStatus;
  anime_id: number;
  created_at: string;
  players: Player[];
  item_number: number;
  type: string;
}

interface Metadata {
  last_item?: Episode;
  latest_items?: {
    count: number;
    items: Episode[];
  };
}

interface AnimeStatus {
  id: number;
  label: string;
}

interface AnimeType {
  id: number;
  label: string;
}

interface Rating {
  average: string;
  averageFormated: string;
  votes: number;
  votesFormated: string;
  user: number;
}

interface AgeRestriction {
  id: number;
  label: string;
}

interface AnimeItem {
  id: number;
  name: string;
  rus_name: string;
  eng_name: string;
  model: string;
  slug: string;
  slug_url: string;
  cover: ImageCover;
  ageRestriction: AgeRestriction;
  site: number;
  type: AnimeType;
  rating: Rating;
  last_item_at?: string;
  metadata: Metadata;
  status: AnimeStatus;
  releaseDateString: string;
  shiki_rate: any;
  items_count?: {
    uploaded: number | null;
    total: number;
  };
}

interface CollectionPreview {
  filename: string;
  thumbnail: string;
  default: string;
  md: string;
}

interface Collection {
  id: number;
  model: string;
  name: string;
  type: string;
  views: number;
  favorites_count: number;
  items_count: number;
  comments_count: number;
  votes: {
    up: number;
    down: number;
    user: any;
  };
  user_id: number;
  site_id: number;
  created_at: string;
  updated_at: string;
  spoiler: boolean;
  interactive: boolean;
  adult: boolean;
  previews: CollectionPreview[];
}

interface ReviewContent {
  type: string;
  content: any;
}

interface ReviewRating {
  label: string;
  value: number;
}

interface ReviewStatus {
  id: string;
  label: string;
}

interface ReviewType {
  id: string;
  label: string;
}

interface Evaluation {
  id: string;
  label: string;
}

interface ReviewSettings {
  disable_comments: boolean;
}

interface ReviewMetadata {
  settings: ReviewSettings;
}

interface Review {
  id: number;
  model: string;
  title: string;
  content: ReviewContent;
  views: number;
  comments_count: number;
  rating: ReviewRating[];
  status: ReviewStatus;
  type: ReviewType;
  evaluation: Evaluation;
  votes: {
    up: number;
    down: number;
    user: any;
  };
  metadata: ReviewMetadata;
  related: AnimeItem;
  site_id: number;
  created_at: string;
  updated_at: string;
}

interface ViewsItem {
  views: number;
  media: AnimeItem;
}

interface CurrentlyViews {
  time_filter: string;
  items: Record<string, ViewsItem[]>;
}

interface UserAvatar {
  filename: string;
  url: string;
}

interface WeeklyUserPoints {
  top: any;
  total_points: number;
  level: number;
  max_level_points: number;
  current_level_points: number;
  point_percent_progress: number;
}

interface WeeklyUser {
  id: number;
  username: string;
  avatar: UserAvatar;
  last_online_at: string | null;
  points_info: WeeklyUserPoints;
  premium: {
    enabled: boolean;
  };
}

interface ForumCategory {
  id: number;
  name: string;
  color: string;
  icon: string;
}

interface ForumOwner {
  id: number;
  username: string;
  avatar: UserAvatar;
}

interface ForumTopic {
  id: number;
  chatter_category_id: number;
  title: string;
  user_id: number;
  source_id: number;
  source_type: string;
  sticky: number;
  locked: boolean;
  views: number;
  answered: number;
  last_reply_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  yaoi: boolean;
  content: string | null;
  owner: ForumOwner;
  category: ForumCategory;
}

export interface AnimeListResponse {
  data: {
    popular: AnimeItem[];
    collections: Collection[];
    reviews: Review[];
    newest: AnimeItem[];
    latest_updates: AnimeItem[];
    currently_views: CurrentlyViews;
    weekly_top_users: WeeklyUser[];
    news: any[];
    forum: ForumTopic[];
    slider: any[];
  };
}
