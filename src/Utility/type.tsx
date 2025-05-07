export interface searchAnimeType {
    mal_id: number,
    url: string,
    images: {
        jpg: {
            image_url: string
        },
        webp: {
            image_url: string
        }
    },
    title: string,
    title_japanese : string,
    title_synonyms : string,
    titles: { type: string, title: string }[],
    type: string,
    duration: string,
    rating: string,
    score: number,
    episodes: string,
    synopsis: string,
    season : string,
    year : number,
    aired: { from: string, to: string },
    status: string,
    genres: { name: string }[],
    producers: { name: string }[],
    studios: { name: string }[]
}