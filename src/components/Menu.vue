<template>
  <nav class="bg-red-500 absolute p-4">
      <CountryCard :countryData="covidCountriesData"/>
  </nav>
</template>

<script setup>
import { ref,onMounted, reactive} from 'vue'
import CovidDataService from '../services/CovidDataService'
import moment from 'moment'
import CountryCard from './CountryCard.vue'
import { findDir } from '@vue/compiler-core';
import { looseIndexOf } from '@vue/shared';

const covidCountriesData = reactive({})
const loading = ref(true)
const currentDate = ref(moment().format('YYYY-MM-DD'))

function fetchData() {
  loading.value = true
  const countriesData = []
  CovidDataService.getCountries()
  .then (res => {
    countriesData.push(res.data)
  })
  .catch (err => {
  console.log(err)
  })

  covidCountriesData.value = countriesData
  loading.value = false
}

function filterCountry(arr) {

}

onMounted(() => {
  fetchData()
  filterCountry(covidCountriesData.value)
})
</script>


