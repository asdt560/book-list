export interface Books {
  count: number;
  next: string;
  previous: string | null;
  results: Book[];
}

export interface Book {
    id: number;
    title: string;
    authors: string[];
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
