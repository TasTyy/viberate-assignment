// Interfaces.ts

export interface ICoordinates {
    lat: number;
    lng: number;
}

export interface ICountry {
    code: string;
    iso3: string;
    slug: string;
    name: string;
    coordinates: ICoordinates;
    continent_code: string;
}

export interface IGenre {
    id: number;
    slug: string;
    name: string;
    subgenres: null | any;
}

export interface ISubgenre {
    id: number;
    slug: string;
    name: string;
}

export interface ICurrentRank {
    overall: number;
    country: number;
    // Note: beatport channel does not include genre so make it optional
    genre?: number;
    subgenre_1: number;
    subgenre_2: number | null;
    // Some channels (beatport) include a third subgenre rank
    subgenre_3?: number | null;
}

export interface IRankCategories {
    current: ICurrentRank;
    previous: ICurrentRank;
}

export interface ISocialLink {
    channel: string;
    link: string;
}

export interface IBeatportGenre {
    id: number;
    name: string;
}

export interface IChannelRankGeneric {
    // For channels like airplay, social, spotify, and youtube
    genre?: number;
    country: number;
    overall: number;
    subgenre_1: number;
    subgenre_2: number | null;
}

export interface IChannelRankBeatport {
    // Beatport includes an extra subgenre rank and no genre key
    country: number;
    overall: number;
    subgenre_1: number;
    subgenre_2: number;
    subgenre_3: number;
}

export interface IChannelRanks {
    airplay: {
        current: IChannelRankGeneric;
        previous: IChannelRankGeneric;
    };
    beatport: {
        current: IChannelRankBeatport;
        previous: IChannelRankBeatport;
    };
    social: {
        current: IChannelRankGeneric;
        previous: IChannelRankGeneric;
    };
    spotify: {
        current: IChannelRankGeneric;
        previous: IChannelRankGeneric;
    };
    youtube: {
        current: IChannelRankGeneric;
        previous: IChannelRankGeneric;
    };
}

export interface IAnalytics {
    airplay: boolean;
    audience: boolean;
    basic: boolean;
    beatport: boolean;
    overview: boolean;
    social: boolean;
    spotify: boolean;
    youtube: boolean;
    shazam: boolean;
    soundcloud: boolean;
    deezer: boolean;
    playlists: boolean;
    "apple-playlists": boolean;
    facebook: boolean;
    instagram: boolean;
    tiktok: boolean;
    twitter: boolean;
    events: boolean;
    tracks: boolean;
    network: boolean;
}

export interface IMostPopular {
    city: string;
    value: string;
}

export interface IArtist {
    uuid: string;
    slug: string;
    name: string;
    image: string;
    country: ICountry;
    genre: IGenre;
    subgenres: ISubgenre[];
    rank: number;
    rank_categories: IRankCategories;
    bookmarked: boolean;
    verified: boolean;
    claimed: boolean;
    trending: boolean;
    badges: any;
    social_links: ISocialLink[];
    status: string;
    booking_available: boolean;
    contact_available: boolean;
    meta_image: string;
    hot_on_charts: any;
    created_at: string;
    beatport_genres: IBeatportGenre[];
    channel_ranks: IChannelRanks;
    analytics: IAnalytics;
    most_popular_in: IMostPopular[];
}
