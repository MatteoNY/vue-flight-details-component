<template>
	<section>
		<div class="flex-container" v-for="(segment, index) in flightData.segments" :key="`A-${index}`">
			<div v-for="(item, idx) in segment" :key="idx">
				<div v-if="idx===0" style="background: white;">
					{{item.departureAirport.code}}
					<i class="fas fa-plane" style="margin-left: .5rem;"></i>
				</div>
				<div v-else-if="idx > 0" style="background: white;">
					<span v-if="segment.length-1 === idx">
						<i class="fas fa-circle"></i>
					</span>
					{{item.arrivalAirport.code}}
					<span class="linex-x"></span>
				</div>
			</div>
		</div>

			<section class="flex-container-times">
				<div class="flex-container-times__details">{{flightData.startTime}}</div>
				<div class="flex-container-times__details">{{flightData.endTime}}</div>
			</section>

		<section class="flex-container" style="text-align: left;">
			<div class="static-data__container">
				<ul>
					<li>Connecting {{flightData.tripDurationString}}</li>
					<li>Operated by {{flightData.operatedByDisplay}}</li>
					<li>
						<button
							style="background: white; vertical-align: middle!important; border: none; color: #0174b8; font-weight: 600; padding:0; margin:0; font-size: .8rem;"
						>Flight Details
							<i class="fas fa-angle-right"></i>
						</button>
					</li>
				</ul>
			</div>
		</section>

		<!-- <button @click="showNotes = !showNotes">Show Notes</button>
		<Notes v-if="showNotes"/> -->

		<!-- ?? {{flightData.segments}} -->
		<!-- <div>
			
 ?? {{flightData.operatedByDisplay}}
 ?? {{flightData.tripDurationString}}
 ?? {{flightData.connections}}
 ?? {{flightData.startTime}}
 ?? {{flightData.endTime}}
		</div>-->
	</section>
</template>

<script>
import { mapGetters } from "vuex";

const Notes = () => import("@/components/Notes");

export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	components: {
		Notes
	},
	computed: {
		...mapGetters({
			flightData: "flightData"
			// ...
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
		margin: .1rem .2rem .1rem .2rem;
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
