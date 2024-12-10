<template>
  <header>
    <nav>
      <ul>
        <li v-for="page in pages" :key="page.to">
          <NuxtLinkLocale :to="page.to" active-class="current-page">{{ page.name }}</NuxtLinkLocale>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n()

const pages = computed(() => [
  { name: t('home.title'), to: '/' },
  { name: t('about.title'), to: '/about' }
])
</script>

<style scoped lang="css">
ul {
  list-style-type: none;
  display: flex;
  gap: 10px; 
  padding: 0;
}

a {
  text-decoration: none;
  color: green;
}

a.current-page {
  text-decoration: underline;
}
</style>