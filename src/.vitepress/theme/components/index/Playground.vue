<script setup>
</script>

<template>
  <div>
    <header class="flex flex-col justify-center items-center gap-3 w-full">
      <h2 class="headline">
        Prueba en línea
      </h2>
      <h3 class="subhead">
        EsJS Editor es un editor de código en línea para EsJS
      </h3>
      <section class="w-full flex flex-col justify-center items-center gap-6 my-6 h-[33rem]">
        <EsIframe
          src="https://editor.esjs.dev?embed=true"
          width="100%"
          height="100%"
          loading="lazy"
          title="EsJS Editor"
          class="rounded border border-gray-300 dark:border-gray-700"
        />

        <a
          href="https://editor.esjs.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="text-center block mt-1"
        >
          <div class="action primary-soft space-x-2">
            <span>Abrir EsJS Editor</span>
            <span class="i-mdi-open-in-new" />
          </div>
        </a>
      </section>
    </header>
  </div>
</template>
