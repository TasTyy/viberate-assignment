import { z } from "zod";

export const navbarSchema = z.array(
    z.object({
        artist_name: z.string(),
        artist_uuid: z.string(),
    })
);

const countrySchema = z.object({
    code: z.string(),
    iso3: z.string(),
    slug: z.string(),
    name: z.string(),
    coordinates: z.object({
        lat: z.number(),
        lng: z.number(),
    }),
    continent_code: z.string(),
});

const genreSchema = z.object({
    id: z.number(),
    slug: z.string(),
    name: z.string(),
    subgenres: z.nullable(z.any()).optional(),
});

const subgenreSchema = z.object({
    id: z.number(),
    slug: z.string(),
    name: z.string(),
});

const rankCategoriesSchema = z.object({
    current: z.object({
        overall: z.number(),
        country: z.number(),
        genre: z.number(),
        subgenre_1: z.number(),
        subgenre_2: z.number().nullable(),
        subgenre_3: z.number().nullable(),
    }),
    previous: z.object({
        overall: z.number(),
        country: z.number(),
        genre: z.number(),
        subgenre_1: z.number(),
        subgenre_2: z.number().nullable(),
        subgenre_3: z.number().nullable(),
    }),
});

const socialLinkSchema = z.object({
    channel: z.string(),
    link: z.string(),
});

const mostPopularInSchema = z.object({
    city: z.string(),
    value: z.string(),
});

export const artistSchema = z
    .object({
        uuid: z.string(),
        slug: z.string(),
        name: z.string(),
        image: z.string(),
        country: countrySchema,
        genre: genreSchema,
        subgenres: z.array(subgenreSchema),
        rank: z.number(),
        rank_categories: rankCategoriesSchema,
        social_links: z.array(socialLinkSchema),
        status: z.string(),
        meta_image: z.string(),
        most_popular_in: z.array(mostPopularInSchema),
    })
    .passthrough();

export const artistResponseSchema = z
    .object({
        api_version: z.string(),
        data: artistSchema,
    })
    .passthrough();
