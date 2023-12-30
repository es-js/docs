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
import Chat from '@theme/components/index/Chat.vue';
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

<Chat />

<div class="w-full h-20"></div>

<Playground />

<div class="w-full h-20"></div>

<Learn />

<div class="w-full h-20"></div>

<Quickstart />

</div>
