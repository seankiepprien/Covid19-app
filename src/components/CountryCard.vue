<template v-if="covidCountriesData.length">
    <div class="bg-white rounded p-2 flex align-center">
        <h2>{{  }}</h2>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
    countryData: Object
})
onMounted(() => {
    console.log(props.countryData)
})
</script>