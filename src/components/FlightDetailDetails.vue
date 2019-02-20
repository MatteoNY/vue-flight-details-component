<template>
	<section id="flight-path">
		<article class="flex-container">
			<div v-for="(flightPath, index) in flightData.flightPaths" :key="`FP-${index}`" >
				<div class="flex-container__paths">
					<i v-if="(flightData.flightPaths.length -1) == index" class="fas fa-circle"></i>
					<span>{{flightPath}}</span>
					<i v-if="index ===0" class="fas fa-plane flex-container__ico--left-pad"></i>
					<span v-if="(flightData.flightPaths.length -1) != index"  class="z-line"></span>
				</div>
				 
			</div>
		</article>

		<div style="clear:both;"></div>

		<article class="flex-container-times">
			<div class="flex-container-times__details">{{flightData.startTime}}</div>
			<div class="flex-container-times__details">{{flightData.endTime}}</div>
		</article>

		<article
		 class="flex-container"
		 style="text-align: left;"
		>
			<div class="static-data__container">
				<ul>
					<li>Connecting {{flightData.tripDurationString}}</li>
					<li>Operated by {{flightData.operatedByDisplay}}</li>
					<li>
						<button class="flex-container__btn">
							Flight Details
							<i class="fas fa-angle-right"></i>
						</button>
					</li>
				</ul>
			</div>
		</article>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

const Notes = () => import("@/components/Notes");

export default {
	name: "FlightDetailDetails",
	props: {
		flightData: Object
	},
	components: {
		Notes
	},
	computed: {},
	directives: {},
	data: () => ({
		showNotes: false,
		first: "matteo",
		last: "carr"
	})
};
</script>

<style scoped lang="scss">

#flight-path {

	$clientBarColor: #0174b8;
	$clientTextColor: #444;

	.flex-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		position: relative;
		
		&__paths {
			background: white;
		}

		&__ico--left-pad {
			padding-left: .5rem;
		}

		&__btn {
			background: white; vertical-align: middle!important; 
			border: none; 
			color: $clientBarColor;
			font-weight: 600; padding:0; margin:0; font-size: .8rem;
		}
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

		.z-line::before {
		// space
		content: '\0020';
		padding: 0;
		margin: 0;
		width: 92%;
		border-bottom: 0.1rem solid $clientBarColor;
		z-index: -100;
		position: absolute;
		height: 1px;
		margin-top: 3px;
		top: 14.5px;
		right: 4px;
	}

	// desktop
	@media only screen and (min-width: 768px) {

		.z-line::before {
			width: 98%;
			margin-top: 3px;
			top: 14.5px;
			right: 4px;
		}

	}
	
	.fa-circle {
		font-size: .9rem;
		color: $clientBarColor;
		vertical-align: top;
		margin-top: 9px;
	}
	.fa-plane {
		font-size: 1.5rem;
		color: $clientBarColor;
		vertical-align: top;
		margin-top: 4px;
	}

}
</style>
