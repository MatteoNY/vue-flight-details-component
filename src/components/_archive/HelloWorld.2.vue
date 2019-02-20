<template>

	<section>

		<div class="flex-container" v-for="(segment, index) in segments" :key="`A-${index}`">
      <div v-for="(item, idx) in segment" :key="idx"  >
				<div v-if="idx===0" style="background: white;">     
          {{item.departureAirport.code}}<i class="fas fa-plane" style="margin-left: .5rem;"></i>
				</div>
				<div v-else-if="idx > 0" style="background: white;">					
					<span v-if="segment.length-1 === idx">
						<i class="fas fa-circle"></i>
					</span>
          <span  class="linex-x" ></span>
					{{item.arrivalAirport.code}}            
				</div>
      </div>
		</div>

  <!-- second loop -->
	<div class="flex-container" v-for="(segment, index) in segments" :key="`B-${index}`">
      <div v-for="(item, idx) in segment" :key="idx">
          <div v-if="idx===0"  style="color: black!important;" > 
              {{item.departureTime}}
          </div>
         <div v-else-if="segment.length-1 === idx"  style="color: black!important;" >
                {{item.departureTime}}
        </div>
          
      </div>
	</div>
  <!-- end of second loop -->

	<div class="flex-container" style="text-align: left;">
			<ul>
			<li>
				Connecting {{flightData.tripDurationString}}  
			</li>
			<li>
				Operated by   {{flightData.operatedByDisplay}} 
			</li>
			<li>
				 <button  style="background: white; vertical-align: middle!important; border: none; color: #0174b8; font-weight: 600; padding:0; margin:0; font-size: .8rem;">
        Flight Details <i class="fas fa-angle-right"></i></button>
			</li>
		</ul>
	</div>

 
  
  <!-- third loop -->
	<!-- <div style="text-align: left;" v-for="(segment, index) in segments" :key="`C-${index}`">
      <div v-for="(item, idx) in segment" :key="idx"> -->
          
         <!-- <div v-if="segment.length-1 === idx"> -->
            Connecting {{flightData.tripDurationString}}  
        <!-- </div>  -->
         <!-- <div v-if="segment.length-1 === idx">  -->
            Operated by   {{flightData.operatedByDisplay}} 
        <!-- </div>  -->
        <button  style="background: white; vertical-align: middle!important; border: none; color: #0174b8; font-weight: 600; padding:0; margin:0; font-size: .8rem;">
        Flight Details <i class="fas fa-angle-right"></i></button>
      <!-- </div>
	</div> -->
  <!-- end of third loop -->

	  

	<button @click="showNotes = !showNotes">Show Notes</button>
	<Notes v-if="showNotes"/> 
	<!-- <div>
 ?? {{flightData.operatedByDisplay}}
 ?? {{flightData.tripDurationString}}
 ?? {{flightData.connections}}
 ?? {{flightData.startTime}}
 ?? {{flightData.endTime}}
 </div> -->

	</section>

</template>

<script>

import { mapGetters } from "vuex";

const Notes = () =>
  import("@/components/Notes");


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
      flightData: 'flightData'
      // ...
		 })
    // ...mapGetters([
    //   'flightData'  
    // ])
  },
	data: () => ({
		showNotes: false,
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
}

.flex-container > div {

	margin: 0.2rem;
	color: $clientBarColor;
	text-align: center;
	font-size: 1.5rem;
}

.linex-x {
		content: "";
		padding: 0;
		margin: 0;
		background: $clientBarColor;
		flex-flow: row nowrap;
   	width: 80%;
  	max-width: 100%;
		left: 3.5rem;
		top: 1.7rem;
		z-index: -100;
		position: absolute;
		height: 0.1rem;
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
