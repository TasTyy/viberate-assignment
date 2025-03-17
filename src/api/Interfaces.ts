export interface INavbar {
    artist_name: string;
    artist_uuid: string;
}

export interface IGraphData {
    id: string;
    label: string;
    value: number;
    color: string;
}

interface ICoordinates {
    lat: number;
    lng: number;
}

interface ICountry {
    code: string;
    iso3: string;
    slug: string;
    name: string;
    coordinates: ICoordinates;
    continent_code: string;
}

interface IGenre {
    id: number;
    slug: string;
    name: string;
}

interface ISubgenre {
    id: number;
    slug: string;
    name: string;
}

interface ICurrentRank {
    overall: number;
    country: number;
    genre?: number;
    subgenre_1: number;
    subgenre_2: number | null;
    subgenre_3?: number | null;
}

interface IRankCategories {
    current: ICurrentRank;
    previous: ICurrentRank;
}

interface ISocialLink {
    channel: string;
    link: string;
}

interface IBeatportGenre {
    id: number;
    name: string;
}

interface IChannelRankGeneric {
    genre?: number;
    country: number;
    overall: number;
    subgenre_1: number;
    subgenre_2: number | null;
}

interface IChannelRankBeatport {
    country: number;
    overall: number;
    subgenre_1: number;
    subgenre_2: number;
    subgenre_3: number;
}

interface IChannelRanks {
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

interface IAnalytics {
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
    social_links: ISocialLink[];
    status: string;
    booking_available: boolean;
    contact_available: boolean;
    meta_image: string;
    created_at: string;
    beatport_genres: IBeatportGenre[];
    channel_ranks: IChannelRanks;
    analytics: IAnalytics;
    most_popular_in: IMostPopular[];
}
