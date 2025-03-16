export interface Navbar {
    artist_name: string;
    artist_uuid: string;
}

interface SocialLink {
    channel: string;
    link: string;
}

interface RankCategories {
    current: {
        overall: number;
        country: number;
        genre: number;
        subgenre_1: number | null;
        subgenre_2?: number | null;
        subgenre_3?: number | null;
    };
    previous: {
        overall: number;
        country: number;
        genre: number;
        subgenre_1: number | null;
        subgenre_2?: number | null;
        subgenre_3?: number | null;
    };
}

export interface Artist {
    uuid: string;
    slug: string;
    name: string;
    image: string;
    country: {
        code: string;
        iso3: string;
        slug: string;
        name: string;
        coordinates: { lat: number; lng: number };
        continent_code: string;
    };
    genre: {
        id: number;
        slug: string;
        name: string;
    };
    subgenres: { id: number; slug: string; name: string }[];
    rank: number;
    rank_categories: RankCategories;
    social_links: SocialLink[];
    status: string;
    meta_image: string;
    most_popular_in: { city: string; value: string }[];
}
