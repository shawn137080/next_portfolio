import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_APP_SANITY_PROJECT_ID,
  dataset: 'production',
//   dataset: 'dev',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: '2022-01-12', // use current date (YYYY-MM-DD) to target the latest API version
  token: process.env.NEXT_PUBLIC_APP_SANITY_PROJECT_TOKEN // Only if you want to update content with the client
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)