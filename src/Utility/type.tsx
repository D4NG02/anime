export interface animeType {
    mal_id: number,
    url: string,
    images: {
        jpg: {
            image_url: string
        },
        webp: {
            image_url: string,
            large_image_url: string
        }
    },
    title: string,
    title_japanese: string,
    title_synonyms: string,
    titles: { type: string, title: string }[],
    type: string,
    duration: string,
    rating: string,
    score: number,
    episodes: number,
    popularity: number,
    synopsis: string,
    season: string,
    year: number,
    broadcast: {
        day: string,
        time: string,
        timezone: string
    },
    aired: { from: string, to: string },
    status: string,
    genres: { name: string }[],
    producers: { name: string }[],
    studios: { name: string }[]
}