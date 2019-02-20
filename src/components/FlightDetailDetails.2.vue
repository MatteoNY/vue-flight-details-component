<template>
	<section>
		<article class="flex-container">
			<div
			 v-for="(flightPath, index) in flightData.flightPaths"
			 :key="`FP-${index}`"
			>
				<div style="background: white;">
					<i
					 v-if="(flightData.flightPaths.length -1) == index"
					 class="fas fa-circle"
					>
					</i>
					<span>{{flightPath}}</span>
					<i
					 v-if="index ===0"
					 class="fas fa-plane"
					 style="padding-left: .5rem;"
					></i>
					<span v-if="(flightData.flightPaths.length -1) != index"  class="z-line"></span>

			 

				</div>
				<!-- <div>
					<span class="linex-x"></span>
				</div> -->
				<!-- <span v-drawline:background="'#ffd100'"></span> -->
				<!-- <span class="linex-x"></span>  -->
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
						<button style="background: white; vertical-align: middle!important; border: none; color: #0174b8; font-weight: 600; padding:0; margin:0; font-size: .8rem;">
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
	directives: {
		drawline: {
			bind(el, binding, vnode) {
				// console.log ('elll', vnode)

				el.style.backgroundColor = "#00ff00";
			//	el.style.height = '.2rem'

				// el.style.position = 'fixed'
				// el.style.width = '100%'
				//   el.style.borderBottom = '1px solid red'

		 
	 
			}
		}
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
	align-items: stretch;
	position: relative;
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

.z-line:after {
	content: " \0020";
	//content: ' \005F';
	padding: 0;
	// background: orange;
	// width: 100%;
	// min-width: 100%;
	// 	width: 100%;

	padding: 0;
	// margin: 0;
	// background: $clientBarColor;
	// flex-flow: row nowrap;
	//	width: 75%;
	width: 92%;

	border-bottom: 0.1rem solid $clientBarColor;

	// left: 5rem;
	
	z-index: -100;
	position: absolute;
	height: 0.1rem;
	
	// left: .5rem;
	top: 1.1rem;
	right: 1rem;

	//	width: 100%;
	//	border-bottom: .1rem solid $clientBarColor;
	// left: 5rem;
	// top: 1rem;
	// z-index: -100;
	// position: absolute;
	// height: 0.1rem;
}

.linex-x {
	content: "";
	padding: 0;
	// margin: 0;
	// background: $clientBarColor;
	// flex-flow: row nowrap;
	//	width: 75%;
	width: 100%;
	border-bottom: 0.1rem solid $clientBarColor;
	left: 5rem;
	top: 1rem;
	z-index: -100;
	position: absolute;
	height: 0.1rem;
	// 	text-decoration: line-through!important;
}

// desktop
@media only screen and (min-width: 768px) {

	.z-line:after {
		width: 95%;
		top: 1.1rem;
		right: 1rem;
	}

	.linex-x {
		// width: 90%;
		left: 5rem;
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
