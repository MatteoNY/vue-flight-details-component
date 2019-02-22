<template>
	<section>
		<div class="flights__container" v-for="(segData, index) in allData.results.legs[0].flightOptionDates[0].flightOptions" :key="`A-${index}`">
			<FlightDetail :flightData="segData" @openModal:segment="openModalHandler($event)"></FlightDetail>
		</div>
		<v-app>
			
			<vxDialog
				ref="dialogFlights"
				:btnTitle="''"
				:aria-label="''"
				:focusAfterClose="showModalFlightDetails.refFocusAfterClose"
				:dialogID="'showDialog'"
				:dialogModel="dialog.showDialog"
				:dialogBtns="dialogBtns"
				:isScrollable="false"
				:isMobile="isMobileDevice"
				v-on:update:modal="eventHandler($event)"
			>
				<div class="modal__container">
					<h2 class="modal__container--title" slot="title">Flight Details:</h2>
					 
					<div class="modal__container--text" slot="text" v-for="(segDetails, index) in segmentData"	:key="`FD-${index}`">
						<ul style="text-align: left; list-style-type: none; margin-bottom: 1rem;">
							<li><b>Depart</b> {{segDetails.departureAirport.name}} {{segDetails.departureAirport.code}}</li>
							<li>Operated by {{segDetails.operatingAirline}} {{segDetails.departureAirport.code}}</li>
							<li>  {{segDetails.departureDate}}  </li>
							 
						</ul>
						<ul style="text-align: left; list-style-type: none; margin-bottom: 1rem;">
							<li><b>Arive</b> {{segDetails.arrivalAirport.name}} {{segDetails.arrivalAirport.code}}</li>
							<li>   {{segDetails.arrivalDate}}</li>
						</ul>
						
					</div>


						<div class="modal__container--text" slot="text" v-for="(segDetails, index) in segmentData"	:key="`FA-${index}`">
						<ul style="text-align: left; list-style-type: none; margin-bottom: 1rem;">
							<li><b>Depart</b> {{segDetails.departureAirport.name}} {{segDetails.departureAirport.code}}</li>
							<li>Operated by {{segDetails.operatingAirline}} {{segDetails.departureAirport.code}}</li>
							<li>  {{segDetails.departureDate}}  </li>
							 
						</ul>
						<ul style="text-align: left; list-style-type: none; margin-bottom: 1rem;">
							<li><b>Arive</b> {{segDetails.arrivalAirport.name}} {{segDetails.arrivalAirport.code}}</li>
							<li>   {{segDetails.arrivalDate}}</li>
						</ul>
						
					</div>
					 
				 
				</div>
			</vxDialog>
		</v-app>
	</section>
</template>

<script>
import { mapGetters } from "vuex";

import FlightDetail from "@/components/FlightDetail.vue";

const vxDialog = () => import("@/components/_shared/Vx-modal-dialog.component");

export default {
	name: "FlightDetails",
	props: {},
	components: {
		FlightDetail,
		vxDialog
	},
	computed: {
		...mapGetters(["allData", "getModalFlightDetails"]),
		showModalFlightDetails: function() {
			// const showModal = this.$store.getters[AIR_RESULTS_SERVICES + "/" + GET_MODAL_TAXES_FEES];
			// console.log ('showModalFlightDetails', this.getModalFlightDetails)
			//	const showModal = { show: true };
			const showModal = this.getModalFlightDetails;
			this.dialog.showDialog = showModal.show;
			this.setFocusOn = showModal.refFocusAfterClose;
			// console.log(
			// 	"@index: show taxes fees modal?",
			// 	showModal,
			// 	this.dialog.showDialog,
			// 	"focus?????",
			// 	this.setFocusOn
			// );
			return showModal;
		},
		dialogBtns: function() {
			return {
				ok: "ok",
				cancel: null,
				close: "close",
				agree: null
			};
		},
		isMobileDevice() {
			const isMobile = "ontouchstart" in window || navigator.msMaxTouchPoints ? true : false;
			   console.log("is mobile?", isMobile);
			return isMobile;
		}
	},
	methods: {
		openModalHandler(e) {
			// console.log ('got event',e.show, e.data, e.ref )
			this.segmentData = e.data;
			this.$store.dispatch("setModalFlightDetails", {
				show: e.show,
				ref: e.ref
			});
		},
		getDialogEvent(type) {
			const dialogEventTypes = {
				ok: "ok",
				close: "close",
				cancel: "cancel",
				agree: "agree",
				esc: "esc",
				default: "dialogClosedBehindOrESC"
			};
			return dialogEventTypes[type] || dialogEventTypes["default"];
		},
		eventHandler(e) {
			//	console.log("got event", e);
			const showThisModal = e.openModalWithID;
			const dialogEvent = this.getDialogEvent(e.targetValue);

			if (showThisModal === "showDialog") {
				// console.log ('hide modal '  );
				this.$store.dispatch("setModalFlightDetails", {
					show: false,
					ref: this.setFocusOn
				});
				return;
			}
		}
	},
	errorCaptured: (err, vm, info) => {
		console.error("opps! error at component level: ", err, info);
	},
	data: () => ({
		dialog: { showDialog: false },
		setFocusOn: null,
		segmentData: [],
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
