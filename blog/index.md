---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  tagline: Blog posts
---

<script setup>
import { data as allPosts } from './.vitepress/posts.data.js'
import { ref, computed } from 'vue'

const currentPage = ref(1)
const postsPerPage = 5

const totalPages = computed(() => Math.ceil(allPosts.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return allPosts.slice(start, end)
})

const goToPage = (page) => {
  currentPage.value = page
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>

<article v-for="post in paginatedPosts" :key="post.url" class="post-item">
  <a :href="post.url" class="post-link">
    <h2>{{ post.title }}</h2>
    <p class="post-date">{{ new Date(post.date).toLocaleDateString() }}</p>
    <p class="post-description">{{ post.description }}</p>
  </a>
</article>

<div v-if="totalPages > 1" class="pagination">
  <button @click="prevPage" :disabled="currentPage === 1" class="vp-button">Previous</button>
  
  <div class="pagination-numbers">
    <button 
      v-for="page in totalPages" 
      :key="page"
      @click="goToPage(page)"
      class="vp-button"
      :class="{ active: page === currentPage }"
    >
      {{ page }}
    </button>
  </div>
  
  <button @click="nextPage" :disabled="currentPage === totalPages" class="vp-button">Next</button>
</div>

<p class="post-count">
  Showing {{ (currentPage - 1) * postsPerPage + 1 }} - {{ Math.min(currentPage * postsPerPage, allPosts.length) }} of {{ allPosts.length }} posts
</p>

<style scoped>
.post-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-item:last-child {
  border-bottom: none;
}

.post-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.post-link h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
  font-style: italic;
}

.post-description {
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.6;
}

.post-count {
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  margin-top: 1rem;
  font-style: italic;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 2rem 0;
  border-top: 1px solid var(--vp-c-divider);
}

.pagination-numbers {
  display: flex;
  gap: 0.5rem;
}

.vp-button {
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 0.9rem;
}

.vp-button:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.vp-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.vp-button.active {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  border-color: var(--vp-c-brand-1);
}
</style>