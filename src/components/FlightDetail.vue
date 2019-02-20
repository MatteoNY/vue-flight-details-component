<template>
	<section>
 
  
		  <!-- ?? {{results}}  -->

		<div v-for="(segment, idx) in flightData" :key="idx" class="flex-container">
			<!-- ?? key  {{idx}} -->
			<!-- ?? {{flightData.length}} -->
			<!-- <div style="background: white;  ">
					{{idx}}	{{segment.departureAirport.code}}
						<i class="fas fa-plane" style="margin-left: .5rem;"></i>
					</div>

					<div>
						<span>
							<i class="fas fa-circle"></i>
						</span>
				{{idx}}		{{segment.arrivalAirport.code}}
		 start of goodies -->
			<template v-if="flightData.length === 1">
				<div style="background: white;  ">
					{{segment.departureAirport.code}}
					<i class="fas fa-plane" style="margin-left: .5rem;"></i>
				</div>
				<div>
					<span>
						<i class="fas fa-circle"></i>
					</span>
					{{segment.arrivalAirport.code}}
				</div>
			</template>
			<template v-else>
				<template v-if="idx===0" style="background: white;">
					<div>
						{{segment.departureAirport.code}}
						<i class="fas fa-plane" style="margin-left: .5rem;"></i>
					</div>
				</template>
				<template v-else-if="idx > 0" style="background: pink;">
					<div>
						<span v-if="flightData.length-1 === idx">
							<i class="fas fa-circle"></i>
						</span>
						{{segment.arrivalAirport.code}}
					</div>
				</template>
			</template>

			<!-- end of loop -->
		</div>
	</section>
</template>

<script>

function formatResult (res) {

	console.log ('res', res)
	const combined = combineLatest(res);
	console.log ('combined...', combined);
	 
  return {
    departCode: res,
  //  matches: res.map((title, i) => ({
    //  title: title,
    //   description: res[2][i],
    //   url: res[3][i]
   // }))
  }
}

import { mapGetters } from "vuex";

import { map, startWith, scan, pluck, filter, debounceTime, distinctUntilChanged, switchMap, mergeMap, tap, mergeAll, concatAll, combineLatest  } from 'rxjs/operators'
import { from, of, Subject } from 'rxjs'
  

const Notes = () => import("@/components/Notes");

export default {
	name: "FlightDetail",
	props: {
		flightData: Array
	},
	components: {
		Notes
	},
	 subscriptions () {

		 //emit 'Hello'
const source = of(this.flightData);
// const higherOrder = source.map ((ev) => ev)
//   console.log ('this.flightData', higherOrder)
//map to inner observable and flatten
 // const example = source.pipe(mergeMap(val => of(`${val}`)));
//output: 'Hello World!'
 //const subscribe = example.subscribe(val => console.log(val))
 

 
		//this.rxxData = subscribe2;
	 return { results: source.pipe (
		/// mergeMap(val => of(`${val}`)),   
		// tap(val => console.log(`BEFORE MAP: ${val}`)),
		//  mergeAll(), // or concatAll()
	 
		mergeAll(),
		
	    map(formatResult)
	 ) }
	
 

 
 
	},
	methods: {
	}, 
	computed: {
		flattened() {
			const flattendData = this.flatten(this.flightData, "/", []);
			console.log ('this.flatten(this.flightData, "/", []);', this.flatten(this.flightData, "/", []))
			return this.flatten(this.flightData, "/", []);
		}
	},
	data: () => ({
		showNotes: false,
		first: "matteo",
		last: "carr",
		rxxData: null
	})
};
</script>

<style scoped lang="scss">
$clientBarColor: #0174b8;
$clientTextColor: #444;

.flex-container {
	display: flex;
	justify-content: space-between;
	//	justify-content: space-evenly;
	align-items: center;
}

.flex-container > div {
	display: flex;
	flex-shrink: 1;
	margin: 0.2rem;
	color: red;
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
	justify-content: space-evenly;
	align-items: center;
	font-size: 1.4rem;
	margin: 0.1rem 0.2rem 0.1rem 0.2rem;

	border: 1px solid red;

	&__details {
		color: $clientTextColor;
	}

	ul {
		list-style-type: none;
		border: 1px solid red;
		display: flex;
		flex-flow: nowrap;
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

// #app {

//   border: 1px dashed gray;

// }
</style>
