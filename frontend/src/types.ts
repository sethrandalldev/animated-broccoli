export interface Launch {
  id: string;
  links: {
    patch: {
      small: string;
    };
    youtube_id: string;
  };
  crew: Array<{
    crew: string;
    role: string;
  }>;
  upcoming: Boolean;
  success: Boolean;
  date_local: string;
  name: string;
  date_precision: string;
}
