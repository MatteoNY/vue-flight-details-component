<template>
	<section>
		<article class="flex-container">
			<div v-for="(flightPath, index) in flightData.flightPaths" :key="`FP-${index}`">
				<div style="background: white;">
					<i	v-if="(flightData.flightPaths.length -1) == index"
						class="fas fa-circle">
					</i>
					<span>{{flightPath}}</span>
					<i v-if="index ===0" class="fas fa-plane" style="padding-left: .5rem;"></i>
						<!-- <span v-if="(flightData.flightPaths.length -1) != index" v-drawline class="z-line"></span> -->

						<canvas ref="myCanvas"  v-if="(flightData.flightPaths.length -1) != index" v-drawline  >Your browser does not support the HTML5 canvas tag.</canvas>
					 
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

		<article class="flex-container" style="text-align: left;">
			<div class="static-data__container">
				<ul>
					<li>Connecting {{flightData.tripDurationString}}</li>
					<li>Operated by {{flightData.operatedByDisplay}}</li>
					<li>
						<button
							style="background: white; vertical-align: middle!important; border: none; color: #0174b8; font-weight: 600; padding:0; margin:0; font-size: .8rem;"
						>
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

			 el.style.backgroundColor = '#00ff00';

		// el.style.position = 'fixed'
		// el.style.width = '100%'
		//   el.style.borderBottom = '1px solid red'

	//	var c = $refs.myCanvas
	const c = el;
var ctx = c.getContext("2d");
ctx.beginPath();
//ctx.moveTo(1, 1);
 
//ctx.lineTo(1000, 1);
 ctx.stroke();
		

        // const delay = 0;
        // if (binding.modifiers['delayed']) {
        //     delay = 3000;
        // }
    //     setTimeout(() => {
    //         if (binding.arg == 'background') {
	// 		  //  el.style.backgroundColor = binding.value;
	// 		  el.style.borderBottom = '1px solid red'
	// 		  el.style.position = 'relative'
	// 		  el.style.bottom = '1rem'
    //         } else {
    //              el.style.color = binding.value;
    //         }
    //     }, delay);
    // },
		 
			// inserted: function(el) {
			// 	console.log ('el?', el)
			// }
	//	}
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
 	 content: ' \0020';
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
	width: 100%;
	
 
	border-bottom: .1rem solid $clientBarColor;
	 
	// left: 5rem;
	top: 1.1rem;
	z-index: -100;
	position: absolute;
	height: 0.1rem;
 
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
	border-bottom: .1rem solid $clientBarColor;
	left: 5rem;
	top: 1rem;
	z-index: -100;
	position: absolute;
	height: 0.1rem;
	// 	text-decoration: line-through!important;
}

// desktop
@media only screen and (min-width: 768px) {
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
