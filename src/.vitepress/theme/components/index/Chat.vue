<template>
  <div>
    <header class="flex flex-col justify-center items-center gap-3 w-full">
      <h2 class="headline text-5xl">
        ¿Tienes dudas?
      </h2>
      <h3 class="subhead text-xl">
        Chatea con un asistente virtual en la siguiente aplicación creada con EsJS en modo Terminal
      </h3>
      <section class="flex flex-col gap-3 w-full">
        <ClientOnly>
          <iframe
            src="https://esjs-mendable-app.vercel.app/"
            frameborder="0"
            title="Asistente virtual EsJS"
            class="w-full h-[70vh] sm:h-[60vh] border-0 rounded-[8px] bg-transparent"
          />
        </ClientOnly>
      </section>
    </header>
  </div>
</template>
