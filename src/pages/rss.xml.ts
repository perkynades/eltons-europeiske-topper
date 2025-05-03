import rss from '@astrojs/rss'
import { getCollection } from 'astro:content';

export const GET = async (context) => {

    const topper = await getCollection("topper");

    return rss({
        title: 'Eltons europeiske topper',
        description: 'Eltons reise til alle land i Europa sine høyeste topper',
        site: context.site,
        trailingSlash: false,
        items: topper.map((topp) => ({
            title: `${topp.data.rang}. ${topp.data.høyestePunkt}, ${topp.data.land}, ${topp.data.moh} moh`,
            link: `/topper/${topp.slug}`
        }))
    })
} 