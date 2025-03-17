import { z } from "zod";

export const navbarSchema = z.array(
    z.object({
        artist_name: z.string(),
        artist_uuid: z.string(),
    })
);

// Coordinates
const CoordinatesSchema = z.object({
    lat: z.number(),
    lng: z.number(),
});

// Country
const CountrySchema = z.object({
    code: z.string(),
    iso3: z.string(),
    slug: z.string(),
    name: z.string(),
    coordinates: CoordinatesSchema,
    continent_code: z.string(),
});

// Genre
const GenreSchema = z.object({
    id: z.number(),
    slug: z.string(),
    name: z.string(),
    subgenres: z.union([z.array(z.any()), z.null()]),
});

// Subgenre
const SubgenreSchema = z.object({
    id: z.number(),
    slug: z.string(),
    name: z.string(),
});

// Rank (for channels like airplay, social, spotify, youtube)
const GenericRankSchema = z.object({
    genre: z.number().optional(),
    country: z.number(),
    overall: z.number(),
    subgenre_1: z.number(),
    subgenre_2: z.number().nullable(),
});

// Rank (for beatport)
const BeatportRankSchema = z.object({
    country: z.number(),
    overall: z.number(),
    subgenre_1: z.number(),
    subgenre_2: z.number(),
    subgenre_3: z.number(),
});

// Rank categories
const RankCategoriesSchema = z.object({
    current: GenericRankSchema,
    previous: GenericRankSchema,
});

// Social Link
const SocialLinkSchema = z.object({
    channel: z.string(),
    link: z.string(),
});

// Beatport Genre
const BeatportGenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});

// Channel Ranks
const ChannelRanksSchema = z.object({
    airplay: z.object({
        current: GenericRankSchema,
        previous: GenericRankSchema,
    }),
    beatport: z.object({
        current: BeatportRankSchema,
        previous: BeatportRankSchema,
    }),
    social: z.object({
        current: GenericRankSchema,
        previous: GenericRankSchema,
    }),
    spotify: z.object({
        current: GenericRankSchema,
        previous: GenericRankSchema,
    }),
    youtube: z.object({
        current: GenericRankSchema,
        previous: GenericRankSchema,
    }),
});

// Analytics
const AnalyticsSchema = z.object({
    airplay: z.boolean(),
    audience: z.boolean(),
    basic: z.boolean(),
    beatport: z.boolean(),
    overview: z.boolean(),
    social: z.boolean(),
    spotify: z.boolean(),
    youtube: z.boolean(),
    shazam: z.boolean(),
    soundcloud: z.boolean(),
    deezer: z.boolean(),
    playlists: z.boolean(),
    "apple-playlists": z.boolean(),
    facebook: z.boolean(),
    instagram: z.boolean(),
    tiktok: z.boolean(),
    twitter: z.boolean(),
    events: z.boolean(),
    tracks: z.boolean(),
    network: z.boolean(),
});

// Most Popular
const MostPopularSchema = z.object({
    city: z.string(),
    value: z.string(),
});

// Artist Schema
export const artistSchema = z.object({
    uuid: z.string(),
    slug: z.string(),
    name: z.string(),
    image: z.string(),
    country: CountrySchema,
    genre: GenreSchema,
    subgenres: z.array(SubgenreSchema),
    rank: z.number(),
    rank_categories: RankCategoriesSchema,
    bookmarked: z.boolean(),
    verified: z.boolean(),
    claimed: z.boolean(),
    trending: z.boolean(),
    badges: z.any().nullable(),
    social_links: z.array(SocialLinkSchema),
    status: z.string(),
    booking_available: z.boolean(),
    contact_available: z.boolean(),
    meta_image: z.string(),
    hot_on_charts: z.any().nullable(),
    created_at: z.string(),
    beatport_genres: z.array(BeatportGenreSchema),
    channel_ranks: ChannelRanksSchema,
    analytics: AnalyticsSchema,
    most_popular_in: z.array(MostPopularSchema),
});
