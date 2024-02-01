interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

interface DimensionsDetail {
  depth: null | number;
  width: number;
  height: number;
  diameter: null | number;
  clarification: null | string;
}

interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

interface Artwork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: null | string[];
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: null | number;
  date_start: null | number;
  date_end: null | number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string | null;
  description: string | null;
  short_description: string | null;
  dimensions: string;
  dimensions_detail: DimensionsDetail[];
  medium_display: string;
  inscriptions: string | null;
  credit_line: string;
  catalogue_display: string | null;
  publication_history: string | null;
  exhibition_history: string | null;
  provenance_text: string | null;
  edition: string | null;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: null | number;
  fiscal_year_deaccession: null | number;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: string | null;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  latitude: null | number;
  longitude: null | number;
  latlon: null | string;
  is_on_view: boolean;
  on_loan_display: string | null;
  gallery_title: string | null;
  gallery_id: number | null;
  nomisma_id: number | null;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: number[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: null | number;
  style_title: string | null;
  alt_style_ids: number[];
  style_ids: number[];
  style_titles: string[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: string | null;
  alt_subject_ids: string[];
  subject_ids: string[];
  subject_titles: string[];
  material_id: string | null;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: string | null;
  alt_technique_ids: string[];
  technique_ids: string[];
  technique_titles: string[];
  theme_titles: string[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: string[];
  sound_ids: string[];
  video_ids: string[];
  text_ids: string[];
  section_ids: string[];
  section_titles: string[];
  site_ids: string[];
  suggest_autocomplete_all: any[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export {Artwork}

