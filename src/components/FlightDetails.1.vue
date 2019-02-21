<template>
	<section>
		<div
			class="flights__container"
			v-for="(segData, index) in allData.results.legs[0].flightOptionDates[0].flightOptions"
			:key="`A-${index}`"
		>
			<FlightDetail :flightData="segData"></FlightDetail>
		</div>
		
	</section>
</template>

<script>
import { mapGetters } from "vuex";

import FlightDetail from "@/components/FlightDetail.vue";

export default {
	name: "FlightDetails",
	props: { },
	components: {
		FlightDetail, 
	},
	computed: {
	...mapGetters({
			allData: "allData"
	})
	},
	errorCaptured: ( err, vm, info ) => {
		console.error ('opps! error at component level: ', err, info)
	},
	data: () => ({
		first: "matteo",
		last: "carr"
	})
};
</script>

<style scoped lang="scss">
 
 .flights {
	&__container {
		margin: 1rem;
	}
}


</style>
