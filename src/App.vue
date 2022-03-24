<script setup>
import { ref, onMounted, defineComponent } from 'vue'
import CovidDataService from '@/services/CovidDataService';
import Menu from './components/Menu.vue'

const covidData = ref({})
const loading = ref(true)
const covidCasesVisible = ref(false)

function fetchData() {
  loading.value = true
  CovidDataService.getAll()
  .then (res => {
    covidData.value = res.data
  })
  .catch (err => {
    console.log(err)
  })
  loading.value = false
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div>
    <header class="bg-white shadow">
      <span class="iconify ml-2 mt-2 text-4xl text-red-500" data-icon="eva:menu-fill" @click="toggleMenuVisibility"></span>
      <Menu/>
      <div class="flex flex-col items-center max-w-7xl px-6 py-8 sm:px-6 lg:px-8">
        <h2 class="text-2xl"><strong>Covid19 Data viewing app</strong></h2>
        <p class="mt-2">This application has been made purely out for fun and the data represented may or may not be accurate at the time.</p>
        <p>This application is using data provided for free from <a href="https://covid19tracking.narrativa.com/index_en.html" class="text-red-500">Narrativa</a>'s API. This Data is updated every day between 1pm and 3pm CET.</p>
        <button @click="covidCasesVisible = !covidCasesVisible"><span class="iconify text-red-500 mt-5 text-4xl" data-icon="bi:arrow-down-circle-fill"></span></button>
      </div>
      <transition>
        <div v-if="covidCasesVisible" class="flex flex-col items-center m-w-7xl px-4 py-6 transition-all">
          <h6 class=""><strong>Total Cases Worldwide: {{ covidData.cases }}</strong></h6>
          <h6 class=""><strong>Total Deaths Worldwide: {{ covidData.deaths }}</strong></h6>
          <h6 class=""><strong>New Cases Today: {{ covidData.todayCases }}</strong></h6>
          <h6 class=""><strong>Deaths Today: {{ covidData.todayDeaths }}</strong></h6>
        </div>
      </transition>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  margin-top: -100px;
  opacity: 0;
}
</style>
