import { defineCollection, z } from "astro:content";

const ToppStatus = ["IKKE_GJENNOMFØRT", "GJENNOMFØRT", "UTILGJENGELIG"] as const

const topperCollection = defineCollection({
    schema: z.object({
        status: z.enum(ToppStatus),
        rang: z.number(),
        land: z.string(),
        høyestePunkt: z.string(),
        moh: z.number(),
        fom: z.string(),
        tom: z.string(),
        landEmoji: z.string()
    })
})

export const collections = {
    topper: topperCollection
}