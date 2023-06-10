<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
  icon: String
})
</script>
<template>
  <header class="mx-5 my-2 px-2 flow-root items-center rounded-lg bg-white ring-1">
    <nav class="float-left mt-1" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2">
        <li class="inline-flex items-center">
          <a
            href="javascript:void(0);"
            class="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <HomeIcon v-if="icon == 'home'" class="w-4 h-4 mx-2" />
            {{ title }}
          </a>
        </li>
        <li v-if="subTitle != ''">
          <div class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 stroke-2 stroke-current text-gray-400" />
            <a
              href="javascript:void(0);"
              class="ml-1 text-xs font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >{{ subTitle }}</a
            >
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <ChevronRightIcon class="w-4 h-4 stroke-2 stroke-current text-gray-400" />
            <span
              class="ml-1 text-xs font-medium text-gray-500 md:ml-2 dark:text-gray-400 capitalize hover:text-blue-600 cursor-pointer"
            >
              {{ $route.name.replace(/-/gi, ' ') }}
            </span>
          </div>
        </li>
      </ol>
    </nav>
    <h1 class="float-right mt-1.5 mx-1 md:mx-2 text-xs font-bold uppercase">
      {{ $route.name.replace(/-/gi, ' ') }}
    </h1>
  </header>
</template>
