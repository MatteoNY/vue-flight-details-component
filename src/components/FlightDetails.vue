<template>
	<section>
		<div
			class="container"
			v-for="(segData, index) in allData.results.legs[0].flightOptionDates[0].flightOptions"
			:key="`A-${index}`"
		>
			<FlightDetailDetails :flightData="segData"  ></FlightDetailDetails>
		</div>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

import FlightDetailDetails from "@/components/FlightDetail.vue";

export default {
	name: "FlightDetails",
	props: {
		msg: String
	},
	components: {
		FlightDetailDetails, 
	},
	computed: {
		...mapGetters({
			flightData: "flightData",
			allData: "allData"
		})
		// ...mapGetters([
		//   'flightData'
		// ])
	},
	data: () => ({
		showNotes: false,
		first: "matteo",
		last: "carr"
	})
};
</script>

<style scoped lang="scss">
$clientBarColor: #0174b8;
$clientTextColor: #444;

.flex-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.flex-container > div {
	margin: 0.2rem;
	color: $clientBarColor;
	text-align: center;
	font-size: 1.5rem;
}

.flex-container > .static-data__container {
	ul {
		list-style-type: none;
		margin-left: 0;
		padding-left: 0;
	}
	margin: 0.2rem;
	color: $clientTextColor;
	text-align: left;
	font-size: 1rem;
}

.flex-container-times {
	display: flex;
	justify-content: space-between;
	align-items: left;
	font-size: 1.4rem;
	margin: 0.1rem 0.2rem 0.1rem 0.2rem;
	&__details {
		color: $clientTextColor;
	}
}

.linex-x {
	content: "";
	padding: 0;
	margin: 0;
	background: $clientBarColor;
	flex-flow: row nowrap;
	width: 80%;
	left: 3.5rem;
	top: 1.5rem;
	z-index: -100;
	position: absolute;
	height: 0.1rem;
	// 	text-decoration: line-through!important;
}

// desktop
@media only screen and (min-width: 768px) {
	.linex-x {
		width: 95%;
	}
}

.fa-circle {
	font-size: 1rem;
	color: $clientBarColor;
	vertical-align: baseline;
}
.fa-plane {
	font-size: 1.5rem;
	color: $clientBarColor;
	vertical-align: sub;
}

#app {
	$box-background-color: rgb(199, 199, 199);
	$line-background-color: black;
	$line-inner-background-color: slategray;
	$lineWH: 0.5em;
	$lineH: 0.1em;
	$lineW: 4em;
	$lineT: 0.2em;
	$widthMax: 23.3rem;
	$widthMaxPathLine: 21rem;
	$flexStartLeft: -1.7rem;
	$flexEndLeft: 2.5rem;
	$fontSize: 0.8rem;
	$fontSizeMobile: 0.5rem;
	$barContainerColor: #eee;

	.smaller {
		font-size: 0.9rem;
		color: $line-background-color;
	}
	.default-size {
		font-size: 0.9rem;
		color: $line-background-color;
	}

	.flights-container {
		background: #eee;
		width: 100%;
		white-space: nowrap;
		border: 1px solid gray;
	}
}
</style>
