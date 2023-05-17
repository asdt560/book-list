export interface Books {
  count: number;
  next: string;
  previous: string | null;
  results: Book[];
}

export interface Book {
    id: number;
    title: string;
    authors: [
      {
        name: string;
        birth_year: number;
        death_year: number;
      }
    ];
    subjects: string[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean;
    media_type: string;
    formats: {
      [key: string]: string;
    };
    download_count: number;
}
