<script setup>
import { ref } from 'vue'

const startCode = 'npm create esjs@latest'

const copyText = ref('')

const copyCode = () => {
  navigator.clipboard.writeText(startCode)

  copyText.value = 'Copiado!'

  setTimeout(() => {
    copyText.value = ''
  }, 2000)
}
</script>

<template>
  <div>
    <header class="flex flex-col justify-center items-center gap-3 w-full">
      <h2 class="headline text-5xl">
        Comienza en minutos
      </h2>
      <h3 class="subhead text-xl">
        Crea tu proyecto EsJS a partir de una plantilla
      </h3>
      <section class="flex flex-col justify-center items-center gap-10 my-6">
        <div class="flex flex-row items-center gap-2">
          <code class="text-indigo-500 font-mono font-medium text-lg bg-indigo-200/25 dark:bg-indigo-500/20 px-6 py-2.5 rounded-full">
            {{ startCode }}
          </code>

          <!-- Copy button -->
          <div class="relative flex flex-col items-center gap-2">
            <button class="action primary-soft" @click="copyCode">
              <span class="i-mdi-content-copy" />
            </button>

            <span v-if="copyText" class="absolute -bottom-8 text-sm text-gray-500 dark:text-gray-400">
              {{ copyText }}
            </span>
          </div>
        </div>
        <aside class="flex gap-4">
          <a class="action primary" href="/introduccion">
            Introducción
          </a>
          <a class="action secondary" href="https://github.com/es-js/esjs" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </aside>
      </section>
    </header>
  </div>
</template>
