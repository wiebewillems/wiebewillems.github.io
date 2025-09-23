import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

export default {
    watch: ['../articles/*.md'],
    load() {
        const articlesDir = join(process.cwd(), 'blog/articles')

        try {
            const files = readdirSync(articlesDir).filter(file => file.endsWith('.md'))

            const posts = files.map(file => {
                const content = readFileSync(join(articlesDir, file), 'utf-8')
                const { data: frontmatter } = matter(content)

                return {
                    title: frontmatter.title,
                    url: `/articles/${file.replace('.md', '')}`,
                    date: frontmatter.date,
                    description: frontmatter.description
                }
            })

            return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
        } catch (error) {
            console.warn('Could not load articles:', error)
            return []
        }
    }
}