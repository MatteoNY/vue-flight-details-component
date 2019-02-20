<template>

	<section>
		<!-- <h1>The flex-wrap Property</h1>

 

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  
</div> -->

		<div class="flex-container" v-for="(segment, index) in segments" :key="index">

 
			<div v-for="(item, idx) in segment" :key="idx">
				<div v-if="idx===0" style="background: white;"> 
          
          
          {{item.departureAirport.code}}<i class="fas fa-plane" style="margin-left: .5rem;"></i>
          <!-- <span class="divider">&nbsp;</span> -->
              <!-- <span class="linex-x"></span> -->
              
				</div>

				<div v-else-if="idx > 0" style="background: white;  ">					
					<span v-if="segment.length-1 === idx">
						<i class="fas fa-circle"></i>
					</span>
          <span  class="linex-x" ></span>
					{{item.arrivalAirport.code}} 
           
				</div>


      
        

			</div>
		</div>

		<div class="flights-container">

			<div class="parent">
				<div class="child child1">
					<div class="child childnested col5-child1">
						<strong>{{itemsTimes[0]}}</strong>
					</div>
					<div class="child childnested col5-child2" />
					<div class="child childnested col5-child3 smaller">
						{{itemsTotalTimes[0]}}
					</div>
					<div class="child childnested col5-child4" />
					<div class="child childnested col5-child5">
						<strong>{{itemsTimes[2]}}</strong>
					</div>
				</div>
			</div>

			<span class="bar">
				<i class="fas fa-circle smaller" />
				<div class="linex-3" />
				<i class="fas fa-circle smaller" />
				<div class="linex-3" />
				<i class="fas fa-circle smaller" />
			</span>

			<div class="parent">
				<div class="child child1">
					<div class="child childnested col5-child1">
						{{itemSpell[0]}}
					</div>
					<div class="child childnested col5-child2">
						<i class={this.completedClass(this.itemsWifi[0])} />
					</div>
					<div class="child childnested col5-child3">
						{{itemSpell[1]}}
					</div>
					<div class="child childnested col5-child4">
						<i class={this.completedClass(this.itemsWifi[1])} />
					</div>
					<div class="child childnested col5-child5">
						{{itemSpell[2]}}
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String
	},
	data: () => ({
		first: "matteo",
		last: "carr",
		itemsTimes: ["12:00am", "01:00pm", "3hr"],
		itemsTotalTimes: ["1hr", "3hr"],
		itemSpell: ["JFK", "BOS", "LAX"],
		segments: [
			[
				{
					departureAirport: {
						name: "Pearson International Airport",
						code: "YYZ",
						city: "Toronto",
						cityCode: "YTO",
						countryCode: "CA"
					},
					arrivalAirport: {
						name: "Ottawa/Macdonald-Cartier International Airport",
						code: "YOW",
						city: "Ottawa",
						cityCode: "YOW",
						countryCode: "CA"
					},
					marketingAirline: "WestJet",
					marketingAirlineCode: "WS",
					operatingAirline: "WestJet",
					operatingAirlineCode: "WS",
					localDateTimeDepartureDate: {
						monthValue: 9,
						dayOfMonth: 22,
						hour: 23,
						minute: 15,
						second: 0,
						nano: 0,
						dayOfWeek: "SATURDAY",
						dayOfYear: 265,
						year: 2018,
						month: "SEPTEMBER",
						chronology: {
							calendarType: "iso8601",
							id: "ISO"
						}
					},
					localDateTimeArrivalDate: {
						monthValue: 9,
						dayOfMonth: 23,
						hour: 0,
						minute: 23,
						second: 0,
						nano: 0,
						dayOfWeek: "SUNDAY",
						dayOfYear: 266,
						year: 2018,
						month: "SEPTEMBER",
						chronology: {
							calendarType: "iso8601",
							id: "ISO"
						}
					},
					departureDate: "Sat 22 Sep, 2018 23:15",
					arrivalDate: "Sun 23 Sep, 2018 00:23",
					departureTime: "23:15",
					arrivalTime: "00:23",
					flightNumber: "3480",
					duration: "1h 08m",
					equipment: "DH4",
					aircraftType: "Q400",
					stops: 0,
					stopsDisplay: "",
					stopAirports: null,
					includesOvernight: true,
					includesStopoverOvernight: false,
					remaingSeats: "9",
					showRemainingSeats: false,
					operationalDisclosureText: "WESTJET ENCORE",
					deptDate: "Saturday 22 Sep, 2018",
					avlDate: "Sunday 23 Sep, 2018"
				},
				{
					departureAirport: {
						name: "Ottawa/Macdonald-Cartier International Airport",
						code: "YOW",
						city: "Ottawa",
						cityCode: "YOW",
						countryCode: "CA"
					},
					arrivalAirport: {
						name: "LaGuardia Airport",
						code: "LGA",
						city: "New York (LaGuardia)",
						cityCode: "NYC",
						countryCode: "US"
					},
					marketingAirline: "WestJet",
					marketingAirlineCode: "WS",
					operatingAirline: "DL",
					operatingAirlineCode: "DL",
					localDateTimeDepartureDate: {
						monthValue: 9,
						dayOfMonth: 23,
						hour: 6,
						minute: 30,
						second: 0,
						nano: 0,
						dayOfWeek: "SUNDAY",
						dayOfYear: 266,
						year: 2018,
						month: "SEPTEMBER",
						chronology: {
							calendarType: "iso8601",
							id: "ISO"
						}
					},
					localDateTimeArrivalDate: {
						monthValue: 9,
						dayOfMonth: 23,
						hour: 7,
						minute: 57,
						second: 0,
						nano: 0,
						dayOfWeek: "SUNDAY",
						dayOfYear: 266,
						year: 2018,
						month: "SEPTEMBER",
						chronology: {
							calendarType: "iso8601",
							id: "ISO"
						}
					},
					departureDate: "Sun 23 Sep, 2018 06:30",
					arrivalDate: "Sun 23 Sep, 2018 07:57",
					departureTime: "06:30",
					arrivalTime: "07:57",
					flightNumber: "7759",
					duration: "1h 27m",
					equipment: "CR9",
					aircraftType: null,
					stops: 0,
					stopsDisplay: "",
					stopAirports: null,
					includesOvernight: false,
					includesStopoverOvernight: false,
					remaingSeats: "9",
					showRemainingSeats: false,
					operationalDisclosureText: "ENDEAVOR AIR DBA DELTA CONNECTION",
					deptDate: "Sunday 23 Sep, 2018",
					avlDate: "Sunday 23 Sep, 2018"
				},
				{
					departureAirport: {
						name: "LaGuardia Airport",
						code: "LGA",
						city: "New York (LaGuardia)",
						cityCode: "NYC",
						countryCode: "US"
					},
					arrivalAirport: {
						name: "Fort Lauderdale-Hollywood International Airport",
						code: "FLL",
						city: "Fort Lauderdale",
						cityCode: "FLL",
						countryCode: "US"
					},
					marketingAirline: "WestJet",
					marketingAirlineCode: "WS",
					operatingAirline: "DL",
					operatingAirlineCode: "DL",
					localDateTimeDepartureDate: {
						monthValue: 9,
						dayOfMonth: 23,
						hour: 17,
						minute: 25,
						second: 0,
						nano: 0,
						dayOfWeek: "SUNDAY",
						dayOfYear: 266,
						year: 2018,
						month: "SEPTEMBER",
						chronology: {
							calendarType: "iso8601",
							id: "ISO"
						}
					},
					localDateTimeArrivalDate: {
						monthValue: 9,
						dayOfMonth: 23,
						hour: 20,
						minute: 34,
						second: 0,
						nano: 0,
						dayOfWeek: "SUNDAY",
						dayOfYear: 266,
						year: 2018,
						month: "SEPTEMBER",
						chronology: {
							calendarType: "iso8601",
							id: "ISO"
						}
					},
					departureDate: "Sun 23 Sep, 2018 17:25",
					arrivalDate: "Sun 23 Sep, 2018 20:34",
					departureTime: "17:25",
					arrivalTime: "20:34",
					flightNumber: "6622",
					duration: "3h 09m",
					equipment: "717",
					aircraftType: null,
					stops: 0,
					stopsDisplay: "",
					stopAirports: null,
					includesOvernight: false,
					includesStopoverOvernight: false,
					remaingSeats: "9",
					showRemainingSeats: false,
					operationalDisclosureText: "DL",
					deptDate: "Sunday 23 Sep, 2018",
					avlDate: "Sunday 23 Sep, 2018"
				}
			]
		]
	})
};
</script>

 <style scoped lang="scss">
$clientBarColor: #0174b8;

.flex-container {
	display: flex;
	justify-content: space-between;
  align-items: center;
	// flex-wrap: wrap;
	// background-color: DodgerBlue;
}

.flex-container > div {
	// background-color: #f1f1f1;
	// width: 4rem;
	margin: 0.2rem;

	color: $clientBarColor;
	// font-weight: bold;

	text-align: center;
	// line-height: 4rem;
	font-size: 1.5rem;
}

 
// .divider {
//   flex-grow: 1;
//   border-bottom: 1px solid black;
//   margin: 5px
// }

	.linex-x {
	 
		content: "";
	 
		padding: 0;
		margin: 0;
		 
		background: $clientBarColor;
	//	white-space: nowrap;
		flex-flow: row nowrap;
	//	width: 100%;
  width: 95%;
  max-width: 100%;
		left: 3.5rem;
    
		top: 1.7rem;
		z-index: -100;
		position: absolute;
		height: 0.1rem;
	}

  @media only screen and (min-width: 320px) {
  // .flex-container {
  //   background-color: lightblue;
  // }
  .linex-x {
       width: 80%;
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

// .line-thru {
//  // text-decoration: line-through!important;

//     content: "x ";
//       flex-basis: 50%;
//     //width: 100%;
//      padding: 0;
//      margin: 0;
//     position: relative;
//     left: -30px;
//     width: 1000px;
//     height: 0.1rem!important;
//     background: red;

// }

// .fa-plane:after {
//   // border-bottom: 1px solid red;

// }

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

	.clear {
		clear: both;
		margin: 0;
		padding: 0;
	}

	.flights-container {
		background: #eee;
		width: 100%;
		white-space: nowrap;
		border: 1px solid gray;
	}

	.bar {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
	}




	.linex-y {
	 
		content: "";
	 
		padding: 0;
		margin: 0;
		 
		background: red;
	 	white-space: nowrap;
		flex-flow: row nowrap;
		width: 100%;
	 //	left: 3.5rem;
    right: -100rem;
		top: 1.7rem;
		z-index: -99;
		position: absolute;
		height: 0.1rem;
	}

	// .line-x:before {
  //   content: '$$$'
  // }

	.linex-3 {
		content: "";
		flex-basis: 50%;
		padding: 0;
		margin: 0;
		height: 0.1em;
		background: slategray;
	}

	.parent {
		display: flex;
		flex-flow: row nowrap;
	}

	.child {
		min-height: 30px;
	}
	.childnested {
		flex-grow: 1;
	}

	.child1 {
		// background: pink;
		flex: 1 1 100%;
		display: flex;
		flex-flow: row nowrap;
	}

	.col5-child1 {
		// background: indianred;
		order: 1;
		text-align: left;
		width: 20%;
		@extend .default-size;
	}
	.col5-child2 {
		// background: salmon;
		order: 2;
		text-align: center;
		width: 20%;
		@extend .default-size;
	}
	.col5-child3 {
		// background: orange;
		order: 3;
		text-align: center;
		width: 20%;
		@extend .default-size;

		white-space: nowrap;
		overflow: hidden;

		//  text-overflow: clip;
		text-overflow: ellipsis;
	}
	.col5-child4 {
		// background: indianred;
		order: 4;
		text-align: center;
		width: 20%;
		@extend .default-size;
	}
	.col5-child5 {
		// background: salmon;
		order: 5;
		text-align: right;
		width: 20%;
		@extend .default-size;
		white-space: nowrap;
		overflow: hidden;

		text-overflow: ellipsis;
	}

	.col3-child1 {
		// background: indianred;
		order: 1;
		text-align: left;
		width: 33%;
		@extend .default-size;
	}
	.col3-child2 {
		// background: salmon;
		order: 2;
		text-align: center;
		width: 33%;
		@extend .default-size;
	}
	.col3-child3 {
		// background: orange;
		order: 3;
		text-align: right;
		width: 33%;
		@extend .default-size;

		white-space: nowrap;
		overflow: hidden;

		//  text-overflow: clip;
		text-overflow: ellipsis;
	}

	// ***
}
</style>
