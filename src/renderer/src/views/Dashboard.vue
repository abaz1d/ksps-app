<script setup>
import { ref } from 'vue'
import Breadcrumbs from '@renderer/components/breadcrumbs/Breadcrumbs.vue'

const modalstandard = ref(false)
</script>

<template>
  <Breadcrumbs title="KSPS App" subTitle="" icon="home" />
  <div class="feature-item">
    <article>
      <h2 class="title">Packaging</h2>
      <p class="detail">
        Use
        <a target="_blank" href="https://www.electron.build">electron-builder</a>
        and pre-configured to pack your app.
      </p>
    </article>
  </div>
  <a
    @click="modalstandard = true"
    hhref="javascript:void(0);"
    data-modal-toggle="modal"
    class="mb-1 inline-block focus:outline-none focus:text-black hover:text-black dark:bg-slate-700 dark:text-slate-300 dark:hover:text-slate-200 text-indigo-700 hover:bg-opacity-50 bg-gray-100 text-sm font-medium py-2 px-3 rounded"
    >Standerd</a
  >
  <div class="modal fade" id="modalstandard" v-if="modalstandard" @close="modalstandard = false">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title mt-0" id="staticBackdropLabel1">Modal Heading</h6>
          <button
            type="button"
            class="btn-close"
            @click="modalstandard = false"
            data-tw-dismiss="modal"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div class="modal-body leading-relaxed">
          <p class="font-medium">Title Text</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, pariatur.</p>
          <br />
          <p class="font-medium">SubTitle Text</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eos voluptas saepe
            officia! Aperiam deleniti laboriosam quo neque non quia, facere, dignissimos impedit
            fuga hic at culpa iusto similique ad laudantium nesciunt, error consectetur voluptatem
            ipsa vitae accusamus eaque nihil!
          </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="focus:outline-none text-white bg-red-500 hover:bg-red-600 font-medium rounded text-sm px-3 py-2 mr-2 dark:bg-red-500 dark:hover:bg-red-600 close"
          >
            Close
          </button>
          <button
            type="button"
            class="text-white bg-blue-500 hover:bg-blue-600 font-medium rounded text-sm px-3 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none my-auto"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
