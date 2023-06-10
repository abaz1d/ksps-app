<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import LOGO from '@renderer/assets/images/icons.svg'
// Toggle menu
const mobile_toggle = () => {
  var mobileMenu = document.getElementById('mobile-menu-2')
  mobileMenu.classList.toggle('block')
  if (mobileMenu.classList.contains('block')) {
    mobileMenu.classList.remove('hidden')
  } else {
    mobileMenu.classList.add('hidden')
  }
}

const dismissDropdownMenu = () => {
  document.querySelectorAll('.dropdown-menu').forEach(function (item) {
    item.classList.remove('block')
    item.classList.add('hidden')
  })
  document.querySelectorAll('.dropdown-toggle').forEach(function (item) {
    let svg = item.lastChild
    item.classList.remove('block')
    item.classList.remove('text-white')
    //console.log(item, svg.nodeName == 'svg')
    if (svg.classList && svg.nodeName == 'svg') {
      if (svg.classList.contains('-rotate-180')) {
        svg.classList.remove('-rotate-180')
      }
    }
  })
}

onMounted(() => {
  document.querySelectorAll('.dropdown').forEach(function (item) {
    item.querySelectorAll('.dropdown-toggle').forEach(function (subitem) {
      subitem.addEventListener('click', function (event) {
        let svg = subitem.lastChild
        subitem.classList.toggle('block')
        // console.log(subitem)
        if (subitem.classList.contains('block') != true) {
          if (svg.classList && svg.nodeName == 'svg') {
            svg.classList.remove('-rotate-180')
          }
          item.querySelector('.dropdown-menu').classList.remove('block')
          item.querySelector('.dropdown-menu').classList.add('hidden')
          subitem.classList.remove('text-white')
        } else {
          dismissDropdownMenu()
          if (svg.classList && svg.nodeName == 'svg') {
            svg.classList.add('-rotate-180')
          }
          if (item.querySelector('.dropdown-menu')) {
            item.querySelector('.dropdown-menu').classList.add('block')
            item.querySelector('.dropdown-menu').classList.remove('hidden')
            if (item.querySelector('.dropdown-menu').classList.contains('block')) {
              subitem.classList.add('block')
            } else {
              subitem.classList.remove('block')
            }
            subitem.classList.add('text-white')
          }
          event.stopPropagation()
        }
      })
    })
  })
  window.addEventListener('click', function (e) {
    dismissDropdownMenu()
  })
})
onBeforeUnmount(() => {
  document.querySelectorAll('.dropdown').forEach(function (item) {
    item.querySelectorAll('.dropdown-toggle').forEach(function (subitem) {
      subitem.removeEventListener('click', function (event) {
        let svg = subitem.lastChild
        subitem.classList.toggle('block')
        if (subitem.classList.contains('block') != true) {
          if (svg.classList && svg.nodeName == 'svg') {
            svg.classList.remove('-rotate-180')
          }
          item.querySelector('.dropdown-menu').classList.remove('block')
          item.querySelector('.dropdown-menu').classList.add('hidden')
        } else {
          dismissDropdownMenu()
          if (svg.classList && svg.nodeName == 'svg') {
            svg.classList.add('-rotate-180')
          }
          if (item.querySelector('.dropdown-menu')) {
            item.querySelector('.dropdown-menu').classList.add('block')
            item.querySelector('.dropdown-menu').classList.remove('hidden')
            if (item.querySelector('.dropdown-menu').classList.contains('block')) {
              subitem.classList.add('block')
            } else {
              subitem.classList.remove('block')
            }
          }
          event.stopPropagation()
        }
      })
    })
  })
  window.removeEventListener('click', function (e) {
    dismissDropdownMenu()
  })
})
</script>

<template>
  <nav
    class="border-gray-200 bg-gray-900 px-2.5 py-2.5 shadow-sm dark:bg-slate-800 sm:px-4 block print:hidden"
  >
    <div class="container mx-0 flex max-w-full flex-wrap items-center lg:mx-auto">
      <div class="flex items-center border-r border-white pr-2 xl:pr-5">
        <a href="#" class="flex items-center outline-none">
          <img :src="LOGO" alt="logo" class="h-6" />
          <span class="ml-2 hidden min-[1120px]:block text-white font-mono whitespace-nowrap"
            >KSPS</span
          >
        </a>
      </div>

      <div
        class="order-2 hidden w-full items-center justify-between md:order-1 md:ml-5 md:flex md:w-auto"
        id="mobile-menu-2"
      >
        <ul
          class="font-body mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:text-sm md:font-medium space-x-0 md:space-x-4 lg:space-x-6 xl:space-x-8 navbar"
        >
          <li class="dropdown">
            <button
              id="navDashboardLink"
              data-dropdown-toggle="navDashboard"
              class="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0"
            >
              <HomeIcon class="mr-1 h-5 w-5 text-lg" />Dashboards
            </button>
          </li>
          <li class="dropdown">
            <button
              id="navSystemLink"
              data-dropdown-toggle="navSystem"
              class="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0"
            >
              <CpuIcon class="mr-1 h-5 w-5 text-lg" /> System
              <ChevronDownIcon
                class="ml-auto lg:ml-1 h-4 w-4 transform transition duration-150 ease-in-out stroke-[2.5px] mt-0.5"
              />
            </button>
            <!-- Dropdown menu -->
            <div
              id="navSystem"
              class="dropdown-menu z-10 my-1 hidden w-full list-none divide-y divide-gray-100 rounded bg-gray-800 md:bg-white text-base shadow dark:divide-gray-600 border border-slate-700 md:border-white dark:border-slate-700/50 dark:bg-gray-900 md:w-44 dropdown-menu"
            >
              <ul class="py-1 ring-1 rounded">
                <li>
                  <RouterLink to="/profile-client">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Profil Client</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/profil-lembaga">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Profil Lembaga</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/setting-user">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Setting User</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/pembatasan-tanggal">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Pembatasan Tanggal</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/about">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >About</a
                    >
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
          <li class="dropdown">
            <button
              id="navSettingLink"
              data-dropdown-toggle="navSetting"
              class="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0"
            >
              <SettingsIcon class="mr-1 h-5 w-5 text-lg" /> Setting
              <ChevronDownIcon
                class="ml-auto lg:ml-1 h-4 w-4 transform transition duration-150 ease-in-out stroke-[2.5px] mt-0.5"
              />
            </button>
            <!-- Dropdown menu -->
            <div
              id="navSetting"
              class="dropdown-menu z-20 my-1 hidden w-full sm:left-0 sm:right-0 md:left-0 md:right-0 lg:left-0 lg:right-0 xl:left-auto xl:right-auto xl:max-w-screen-lg list-none divide-y divide-gray-100 rounded bg-gray-800 md:bg-white text-base shadow dark:divide-gray-600 border border-slate-700 md:border-white dark:border-slate-700/50 dark:bg-gray-900 bg-[url('../images/widgets/m-p2.png')] bg-no-repeat bg-right-bottom dropdown-menu"
            >
              <div class="grid grid-cols-12 gap-4 px-4 pb-4 ring-1 rounded">
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-pink-500 bg-opacity-10"
                    >
                      <CornerLeftUpIcon class="text-pink-500 h-4 w-4" />
                    </span>
                    Pembiayaan
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/produk-pembiayaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Produk Pembiayaan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/cara-hitung-pembiayaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Cara Hitung Pembiayaan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/margin-pembiayaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Margin Pembiayaan</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-blue-500 bg-opacity-10"
                    >
                      <CornerLeftDownIcon class="text-blue-500 h-4 w-4" />
                    </span>
                    Simpanan
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/produk-simpanan-biasa">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Produk Simpanan Biasa</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/produk-simpanan-berjangka">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Produk Simpanan Berjangka</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/produk-modal-penyertaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Produk Modal Penyertaan</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-yellow-500 bg-opacity-10"
                    >
                      <ScaleIcon class="text-yellow-500 h-4 w-4" />
                    </span>
                    Akuntansi
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/kode-perkiraan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Kode Perkiraan</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-teal-500 bg-opacity-10"
                    >
                      <PaperclipIcon class="text-teal-500 h-4 w-4" />
                    </span>
                    Lain - Lain
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/daftar-petugas">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar Petugas/ Marketing</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <button
              id="navTransaksiLink"
              data-dropdown-toggle="navTransaksi"
              class="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0"
            >
              <HeartHandshakeIcon class="mr-1 h-5 w-5 text-lg" /> Transaksi
              <ChevronDownIcon
                class="ml-auto lg:ml-1 h-4 w-4 transform transition duration-150 ease-in-out stroke-[2.5px] mt-0.5"
              />
            </button>
            <!-- Dropdown menu -->
            <div
              id="navTransaksi"
              class="dropdown-menu z-20 my-1 hidden w-full sm:left-0 sm:right-0 md:left-0 md:right-0 lg:left-0 lg:right-0 xl:left-auto xl:right-auto xl:max-w-screen-lg list-none divide-y divide-gray-100 rounded bg-gray-800 md:bg-white text-base shadow dark:divide-gray-600 border border-slate-700 md:border-white dark:border-slate-700/50 dark:bg-gray-900 bg-[url('../images/widgets/m-p2.png')] bg-no-repeat bg-right-bottom dropdown-menu"
            >
              <div class="grid grid-cols-12 gap-4 px-4 pb-4 ring-1 rounded">
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-primary-500 bg-opacity-10"
                    >
                      <PaperclipIcon class="text-primary-500 h-4 w-4" />
                    </span>
                    Lain - Lain
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/kasir">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Kasir</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <div>
                    <h5
                      class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                    >
                      <span
                        class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-pink-500 bg-opacity-10"
                      >
                        <CornerLeftUpIcon class="text-pink-500 h-4 w-4" />
                      </span>
                      Pembiayaan
                    </h5>
                    <ul class="py-1">
                      <li>
                        <RouterLink to="/daftar-pembiayaan">
                          <a
                            href="javascript:void(0);"
                            class="nav-link dark:hover:bg-slate-800/70 capitalize"
                            >Daftar Pembiayaan</a
                          >
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/history-pembiayaan">
                          <a
                            href="javascript:void(0);"
                            class="nav-link dark:hover:bg-slate-800/70 capitalize"
                            >History Pembiayaan</a
                          >
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-blue-500 bg-opacity-10"
                    >
                      <CornerLeftDownIcon class="text-blue-500 h-4 w-4" />
                    </span>
                    Simpanan
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/daftar-simpanan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar Simpanan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/history-simpanan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >History Simpanan</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-yellow-500 bg-opacity-10"
                    >
                      <ScaleIcon class="text-yellow-500 h-4 w-4" />
                    </span>
                    Akuntansi
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/jurnal-transaksi">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Jurnal Transaksi</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/daftar-perkiraan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar Perkiraan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/daftar-inventaris">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar Inventaris</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-teal-500 bg-opacity-10"
                    >
                      <UsersIcon class="text-teal-500 h-4 w-4" />
                    </span>
                    Keanggotaan
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/daftar-anggota">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar Anggota</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/history-anggota">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >History Anggota</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <button
              id="navLaporanLink"
              data-dropdown-toggle="navLaporan"
              class="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0"
            >
              <FilesIcon class="mr-1 h-5 w-5 text-lg" /> Laporan
              <ChevronDownIcon
                class="ml-auto lg:ml-1 h-4 w-4 transform transition duration-150 ease-in-out stroke-[2.5px] mt-0.5"
              />
            </button>
            <!-- Dropdown menu -->
            <div
              id="navLaporan"
              class="dropdown-menu z-20 my-1 hidden w-full sm:left-0 sm:right-0 md:left-0 md:right-0 lg:left-0 lg:right-0 xl:left-auto xl:right-auto xl:max-w-screen-lg list-none divide-y divide-gray-100 rounded bg-gray-800 md:bg-white text-base shadow dark:divide-gray-600 border border-slate-700 md:border-white dark:border-slate-700/50 dark:bg-gray-900 bg-[url('../images/widgets/m-p2.png')] bg-no-repeat bg-right-bottom dropdown-menu"
            >
              <div class="grid grid-cols-12 gap-4 px-4 pb-4 ring-1 rounded">
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-teal-500 bg-opacity-10"
                    >
                      <UsersIcon class="text-teal-500 h-4 w-4" />
                    </span>
                    Laporan Anggota
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/daftar-anggota">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar anggota</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/daftar-mutasi-simpanan-pokok">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar mutasi simpanan pokok</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/daftar-mutasi-simpanan-wajib">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >Daftar mutasi simpanan wajib</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/anggota-masuk">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >anggota masuk</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/anggota-keluar">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >anggota keluar</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/nominatif-simpanan-pokok-anggota">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >nominatif simpanan pokok</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/nominatif-simpanan-wajib-anggota">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >nominatif simpanan wajib</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-pink-500 bg-opacity-10"
                    >
                      <CornerLeftUpIcon class="text-pink-500 h-4 w-4" />
                    </span>
                    Laporan Pembiayaan
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/realisasi-pembiayaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >realisasi Pembiayaan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/penerimaan-angsuran">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >penerimaan angsuran</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/nominatif-pembiayaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >nominatif Pembiayaan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/pelunasan-pembiayaan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >pelunasan Pembiayaan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/nasabah-belum-bayar">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >nasabah belum bayar</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-blue-500 bg-opacity-10"
                    >
                      <CornerLeftDownIcon class="text-blue-500 h-4 w-4" />
                    </span>
                    Laporan Simpanan
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/pembukaan-rekening-baru">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >pembukaan rekening baru</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/mutasi-simpanan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >mutasi Simpanan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/nominatif-simpanan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >nominatif Simpanan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/penutupan-rekening">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >penutupan rekening</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                  <div>
                    <h5
                      class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                    >
                      <span
                        class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-primary-500 bg-opacity-10"
                      >
                        <CalculatorIcon class="text-primary-500 h-4 w-4" />
                      </span>
                      Laporan Kasir
                    </h5>
                    <ul class="py-1">
                      <li>
                        <RouterLink to="/rician-uang-kas">
                          <a
                            href="javascript:void(0);"
                            class="nav-link dark:hover:bg-slate-800/70 capitalize"
                            >rician uang kas</a
                          >
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/penerimaan-uang-kas">
                          <a
                            href="javascript:void(0);"
                            class="nav-link dark:hover:bg-slate-800/70 capitalize"
                            >Penerimaan uang kas</a
                          >
                        </RouterLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-span-6 md:col-span-3">
                  <h5
                    class="font-medium text-base p-4 border-b border-dashed border-slate-500 dark:border-slate-600 md:border-slate-300 text-slate-300 dark:text-slate-500 md:text-slate-700"
                  >
                    <span
                      class="w-8 h-8 rounded-md inline-flex justify-center items-center mr-1 bg-yellow-500 bg-opacity-10"
                    >
                      <ScaleIcon class="text-yellow-500 h-4 w-4" />
                    </span>
                    laporan Akuntansi
                  </h5>
                  <ul class="py-1">
                    <li>
                      <RouterLink to="/laporan-neraca">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >neraca</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-laba-rugi">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >laba rugi</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-neraca-perbandingan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >neraca perbandingan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-laba-rugi-perbandingan">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >laba rugi perbandingan</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-neraca-harian">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >neraca harian</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-laba-rugi-harian">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >laba rugi harian</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-rician-transaksi">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >rician transaksi</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-daftar-inventaris">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >daftar inventaris</a
                        >
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink to="/laporan-jurnal-transaksi">
                        <a
                          href="javascript:void(0);"
                          class="nav-link dark:hover:bg-slate-800/70 capitalize"
                          >jurnal transaksi</a
                        >
                      </RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown">
            <button
              id="navAuthLink"
              data-dropdown-toggle="navAuth"
              class="dropdown-toggle flex w-full items-center border-b border-gray-800 py-2 px-3 font-medium md:border-0 md:p-0"
            >
              <RecycleIcon class="mr-1 h-5 w-5 text-lg" /> Proses
              <ChevronDownIcon
                class="ml-auto lg:ml-1 h-4 w-4 transform transition duration-150 ease-in-out stroke-[2.5px] mt-0.5"
              />
            </button>
            <!-- Dropdown menu -->
            <div
              id="navAuth"
              class="dropdown-menu z-10 my-1 hidden w-full list-none divide-y divide-gray-100 rounded bg-gray-800 md:bg-white text-base shadow dark:divide-gray-600 border border-slate-700 md:border-white dark:border-slate-700/50 dark:bg-gray-900 md:w-64 dropdown-menu"
            >
              <ul class="py-1 ring-1 rounded">
                <li>
                  <RouterLink to="/hitung-perbagian">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Hitung Perbagian</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/hitung-saldo-simpanan">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Hitung saldo simpanan</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/hitung-simpanan-pokok-wajib">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >Hitung simpanan pokok & wajib</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/tutup-buku">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >tutup buku / akhir tahun</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/batal-tutup-buku">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >batal proses tutup buku</a
                    >
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/perhitungan-SHU">
                    <a
                      href="javascript:void(0);"
                      class="nav-link dark:hover:bg-slate-800/70 capitalize"
                      >perhitungan proses SHU</a
                    >
                  </RouterLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="order-1 ml-auto flex items-center md:order-2">
        <div class="relative mr-2 hidden lg:mr-4 min-[1170px]:block group">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon class="mr-1 h-5 w-5 text-gray-400 z-10" />
          </div>
          <input
            type="text"
            id="email-adress-icon"
            class="block focus:bg-white focus:text-gray-900 w-full rounded-lg border border-gray-700 bg-gray-900 p-2 pl-10 text-gray-300 outline-none focus:border-blue-700 focus:ring-gray-700 dark:bg-slate-800 sm:text-sm"
            placeholder="Search..."
          />
        </div>
        <div class="mr-2 lg:mr-4">
          <button id="toggle-theme" class="flex rounded-full md:mr-0 relative">
            <SunIcon class="text-gray-400" />
          </button>
        </div>
        <div class="mr-2 lg:mr-4 dropdown relative">
          <button
            type="button"
            class="dropdown-toggle flex rounded-full md:mr-0"
            id="Notifications"
            aria-expanded="false"
            data-dropdown-toggle="navNotifications"
          >
            <BellIcon class="text-2xl text-gray-400" />
          </button>

          <div
            class="dropdown-menu dropdown-menu-right z-50 my-1 hidden w-64 list-none divide-y h-52 divide-gray-100 rounded border-slate-700 md:border-white text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800"
            id="navNotifications"
            data-simplebar
          >
            <ul class="py-1 ring-1 rounded" aria-labelledby="navNotifications">
              <li class="py-2 px-4">
                <a href="javascript:void(0);" class="dropdown-item">
                  <div class="flex align-items-start">
                    <img
                      class="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                      :src="LOGO"
                      alt="logo"
                    />
                    <div class="flex-grow ml-0.5 overflow-hidden">
                      <p class="text-sm font-medium text-gray-800 truncate dark:text-gray-300">
                        Karen Robinson
                      </p>
                      <p class="text-gray-500 mb-0 text-xs truncate dark:text-gray-400">
                        Hey ! i'm available here
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="py-2 px-4">
                <a href="javascript:void(0);" class="dropdown-item">
                  <div class="flex align-items-start">
                    <img
                      class="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                      :src="LOGO"
                      alt="logo"
                    />
                    <div class="flex-grow ml-0.5 overflow-hidden">
                      <p class="text-sm font-medium text-gray-800 truncate dark:text-gray-300">
                        Your order is placed
                      </p>
                      <p class="text-gray-500 mb-0 text-xs truncate dark:text-gray-400">
                        Dummy text of the printing and industry.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="py-2 px-4">
                <a href="javascript:void(0);" class="dropdown-item">
                  <div class="flex align-items-start">
                    <img
                      class="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                      :src="LOGO"
                      alt="logo"
                    />
                    <div class="flex-grow ml-0.5 overflow-hidden">
                      <p class="text-sm font-medium text-gray-800 truncate dark:text-gray-300">
                        Robert McCray
                      </p>
                      <p class="text-gray-500 mb-0 text-xs truncate dark:text-gray-400">
                        Good Morning!
                      </p>
                    </div>
                  </div>
                </a>
              </li>
              <li class="py-2 px-4">
                <a href="javascript:void(0);" class="dropdown-item">
                  <div class="flex align-items-start">
                    <img
                      class="object-cover rounded-full h-8 w-8 shrink-0 mr-3"
                      :src="LOGO"
                      alt="logo"
                    />
                    <div class="flex-grow ml-0.5 overflow-hidden">
                      <p class="text-sm font-medium text-gray-800 truncate dark:text-gray-300">
                        Meeting with designers
                      </p>
                      <p class="text-gray-500 mb-0 text-xs truncate dark:text-gray-400">
                        It is a long established fact that a reader.
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mr-2 lg:mr-0 dropdown relative">
          <button
            type="button"
            class="dropdown-toggle flex items-center rounded-full text-sm focus:bg-none focus:ring-0 dark:focus:ring-0 md:mr-0"
            id="user-profile"
            aria-expanded="false"
            data-dropdown-toggle="navUserdata"
          >
            <UserCircle2Icon class="h-8 w-8 rounded-full text-gray-400" />
            <span class="ml-2 hidden text-left xl:block">
              <span class="block font-medium text-gray-400">Maria Gibson</span>
              <span class="-mt-1 block text-sm font-medium text-gray-500">Admin</span>
            </span>
          </button>

          <div
            class="dropdown-menu dropdown-menu-right z-50 my-1 hidden list-none divide-y divide-gray-100 border-slate-700 md:border-white text-base shadow dark:divide-gray-600 bg-white dark:bg-slate-800 ring-1 rounded"
            id="navUserdata"
          >
            <div class="py-3 px-4">
              <span class="block text-sm font-medium text-gray-900 dark:text-white"
                >Bonnie Green</span
              >
              <span class="block truncate text-sm font-normal text-gray-500 dark:text-gray-400"
                >name@flowbite.com</span
              >
            </div>
            <ul class="py-1" aria-labelledby="navUserdata">
              <li>
                <a
                  href="#"
                  class="inline-flex w-full mb-2 items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-900/20 dark:hover:text-white"
                  ><HelpCircleIcon class="w-4 h-4 mr-2 inline-block" />Bantuan</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="py-2 px-4 text-sm font-semibold text-white hover:bg-gray-100 bg-red-500 hover:text-red-500 rounded inline-flex items-center justify-center w-[95%] mx-1"
                  ><LogOutIcon class="w-4 h-4 mr-2" /> Sign out</a
                >
              </li>
            </ul>
          </div>
        </div>

        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          @click="mobile_toggle"
          id="toggle-menu"
          class="ml-1 inline-flex items-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <MenuIcon class="h-6 w-6 text-lg leading-6" />
          <!-- <XIcon class="hidden h-6 w-6 text-lg leading-6" /> -->
        </button>
      </div>
    </div>
  </nav>
</template>
