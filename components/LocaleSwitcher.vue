<template>
  <div>
    <select v-model="currentLocale">
      <option v-for="locale in locales" :key="`locale-${locale}`" :value="locale.code">{{ locale.name }}</option>
    </select>
  </div>
</template>

<script setup>
const { locale, locales, setLocale, loadLocaleMessages } = useI18n()

const currentLocale = ref(locale.value)

watch(currentLocale, async () => {
  await loadLocaleMessages(currentLocale.value)
  setLocale(currentLocale.value)
})
</script>