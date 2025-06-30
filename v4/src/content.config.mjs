import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

// define collections
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/work/' })
})

export const collections = { work }
