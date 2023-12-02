<script setup lang="ts">
import { useCode } from '@es-js/docs-components'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  hidePreview: {
    type: [Boolean, String],
    default: false,
  },
  hideConsole: {
    type: [Boolean, String],
    default: false,
  },
  hideOptions: {
    type: [Boolean, String],
    default: true,
  },
  playHeight: {
    type: String,
    default: '300px',
  },
  showOpenButton: {
    type: Boolean,
    default: false,
  },
})

const codeSlot: Ref<null | HTMLElement> = ref(null)

const openUrl = computed(
  () => {
    const code = useCode().getCodeFromCodeBlock(codeSlot.value)

    if (!code)
      return ''

    return useCode().getEditorUrl(code)
  },
)
</script>

<template>
  <h1 class="my-3 text-4xl font-bold text-center">
    {{ props.title }}
  </h1>

  <p class="text-center text-gray-500 dark:text-gray-400 mb-4">
    {{ props.description }}
  </p>

  <div class="vp-doc grid grid-cols-1 md:grid-cols-2">
    <div ref="codeSlot" class="flex flex-col justify-center max-h-[42rem] max-w-[85%] sm:max-w-[100%] mx-auto sm:mx-0">
      <slot />
    </div>

    <div class="flex flex-col justify-center">
      <EsEjecutar :hide-preview="props.hidePreview" :hide-console="props.hideConsole" :hide-options="props.hideOptions" :height="props.playHeight" :show-open-button="props.showOpenButton">
        <slot />
      </EsEjecutar>
    </div>
  </div>

  <a :href="openUrl" target="_blank" class="text-center block mt-1">
    <div class="open-editor-button">
      <span>Abrir ejemplo en EsJS Editor</span>
      <span class="inline-block ml-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z" /></svg>
      </span>
    </div>
  </a>
</template>

<style scoped>
.open-editor-button {
  @apply inline-flex items-center justify-center
  bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
  border border-gray-300 dark:border-gray-700
  rounded-lg px-4 py-2;
}
</style>
