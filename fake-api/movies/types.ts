export type Movie = {
    title: string
    synopsis: string
    details: {
        director: string
        genre: string | string[]
        durationInMinutes: number
        language: string
    }
    functionsDate: string[]
    thumbnailSrc: string
    heroImgSrc: string
    trailerUrl: string
}