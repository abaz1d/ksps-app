<script setup>
import LOGO from '@renderer/assets/images/icons.svg'
import ERR from '@renderer/assets/images/widgets/error.png'
</script>

<template>
  <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div
      class="w-full m-auto bg-white dark:bg-slate-800/60 rounded shadow-lg ring-2 ring-slate-300/50 dark:ring-slate-700/50 lg:max-w-md"
    >
      <div class="text-center p-6 bg-slate-900 rounded-t">
        <a href="index.html"><img :src="LOGO" alt="" class="w-14 h-14 mx-auto mb-2" /></a>
        <h3 class="font-semibold text-white text-xl mb-1">Oops! Sorry page does not found</h3>
        <p class="text-xs text-slate-400">Back to dashboard of this app.</p>
      </div>

      <form class="p-6">
        <div class="text-center">
          <img :src="ERR" alt="" class="w-32 h-32 block mx-auto my-6" />
          <h1 class="font-bold text-7xl dark:text-slate-200">404!</h1>
          <h5 class="font-medium text-lg text-slate-400">Somthing went wrong</h5>
        </div>
        <div class="mt-6">
          <RouterLink to="/">
            <a
              href="javascript:void(0);"
              class="w-full block text-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Back to Dashboard
            </a>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
