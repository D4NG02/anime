export interface animeType {
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
    titles: { type: string, title: string }[],
    type: string,
    duration: string,
    rating: string,
    score: number,
    episodes: string,
    synopsis: string,
    aired: { from: string, to: string },
    status: string,
    genres: { name: string }[]
}