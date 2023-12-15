---
layout: home
title: EsJS
titleTemplate: Lenguaje de programación con sintaxis en Español basado en JavaScript
sidebar: false
---

<script setup>
import Home from '@theme/components/Home.vue';
import Feature from '@theme/components/index/Feature.vue';
import Playground from '@theme/components/index/Playground.vue';
import Learn from '@theme/components/index/Learn.vue';
import Quickstart from '@theme/components/index/Quickstart.vue';
</script>

<Home class="relative" />

<div class="max-w-7xl mx-auto px-3">

<div class="w-full h-20"></div>

<Feature title="JavaScript con sintaxis en Español" description="Escribe código en Español y ejecútalo en JavaScript" hide-console="false" hide-preview="true" browser-window-url="/fibonacci.esjs">

<!--@include: ./public/codigos/fibonacci.md -->

</Feature>

<div class="w-full h-20"></div>

<Feature title="Modo Terminal" description="Ejecuta código en una interfaz sencilla" hide-console="true" hide-preview="false" play-height="10rem" browser-window-url="/terminal.esjs">

<!--@include: ./public/codigos/terminal.md -->

</Feature>

<div class="w-full h-20"></div>

<Feature title="Aprovecha la potencia de JavaScript" description="EsJS está basado en JavaScript, por lo que puedes utilizar todas las librerías y frameworks que ya conoces" hide-console="true" hide-preview="false" play-height="30rem" browser-window-url="/calculadora.esjs">

<!--@include: ./public/codigos/calculadora.md -->

</Feature>

<div class="w-full h-20"></div>

<h1 class="my-3 text-4xl font-bold text-center">¿Tienes dudas?</h1>

<p class="text-center">Chatea con un asistente virtual en la siguiente aplicación creada con EsJS en modo Terminal.</p>

<ClientOnly>
    <iframe
        src="https://esjs-mendable-app.vercel.app/"
        frameborder="0"
        title="Asistente virtual EsJS"
        class="w-full h-[80vh] border-0 rounded-[8px] bg-transparent"
    />
</ClientOnly>

<div class="w-full h-20"></div>

<Playground />

<div class="w-full h-20"></div>

<Learn />

<div class="w-full h-20"></div>

<Quickstart />

</div>
