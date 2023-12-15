<script setup lang="ts">
import { useCode } from '@es-js/docs-components'
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
import { BeakerIcon } from '@heroicons/vue/solid'

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
  browserWindowUrl: {
    type: String,
    default: '/',
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
  <div class="flex flex-col items-center gap-3">
    <h2 class="headline">
      {{ props.title }}
    </h2>

    <h3 class="subhead">
      {{ props.description }}
    </h3>

    <div class="vp-doc w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2">
      <div ref="codeSlot" class="flex flex-col justify-center max-h-[42rem] max-w-[85%] sm:max-w-[100%] mx-auto sm:mx-0">
        <slot />
      </div>

      <div class="flex flex-col justify-center">
        <EsEjecutar
          :hide-preview="props.hidePreview"
          :hide-console="props.hideConsole"
          :hide-options="props.hideOptions"
          :height="props.playHeight"
          :show-open-button="props.showOpenButton"
          browser-window
          :browser-window-url="props.browserWindowUrl"
          class="my-0"
        >
          <slot />
        </EsEjecutar>
      </div>
    </div>

    <a :href="openUrl" target="_blank" class="text-center block mt-1">
      <div class="action primary-soft space-x-2">
        <span>Abrir ejemplo en EsJS Editor</span>
        <span class="i-mdi-open-in-new" />
      </div>
    </a>
  </div>
</template>
