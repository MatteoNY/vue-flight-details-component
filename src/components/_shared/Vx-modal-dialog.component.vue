<template>
<section>
   <v-btn v-if="btnTitle" class="dialog-modal__btn--open" ref="ODBtn" slot="activator" @click.prevent="eventHandler_openDialog('init')" >{{btnTitle}}</v-btn> 
  <v-dialog v-model="dialogModel" class="dialog-modal"
        :scrollable=isScrollable :fullscreen = isMobile lazy
        @keydown.esc="eventHandler('ESC')" v-on:update:returnValue="eventHandler('dialogClosedBehindOrESC')">
          <v-card>
              <!-- ?? {{dialogID}} btns {{dialogBtns}} -->
             <div tabindex="0" ref="focus"></div>
            <v-card-actions class="dialog-modal__card">
              <v-btn tabindex="0"  v-if="isMobile"  class="dialog-modal__close--mobile" flat @click.prevent="eventHandler('close')" :aria-label="dialogBtns.close">X</v-btn>    
              <v-spacer></v-spacer>
              <v-btn tabindex="0"  v-if="!isMobile" class="dialog-modal__close--default"  flat @click.prevent="eventHandler('close')" :aria-label="dialogBtns.close">X</v-btn>
            </v-card-actions>

            <slot name="title"></slot>
            <slot name="text"></slot>
            <slot></slot>
    
            <slot name="actions"> 
               <div class="dialog-modal__actions">  
                    <v-btn class="dialog-modal__actions--agree"  v-if="dialogBtns.agree" flat @click.prevent="eventHandler('agree')" :aria-label="dialogBtns.agree">{{dialogBtns.agree}}</v-btn>
                    <v-btn class="dialog-modal__actions--ok"      v-if="dialogBtns.ok"     flat @click.prevent="eventHandler('ok')"     :aria-label="dialogBtns.ok">{{dialogBtns.ok}}</v-btn>
                    <v-btn class="dialog-modal__actions--cancel"  v-if="dialogBtns.cancel" flat @click.prevent="eventHandler('cancel')" :aria-label="dialogBtns.cancel">{{dialogBtns.cancel}}</v-btn>
                  
               </div>  
            </slot>
   
          </v-card>
   </v-dialog>
</section>

</template>

<script>

  export default {
    name: "Vx-modal-dialog",
    props: {
        dialogModel: {
            type: Boolean,
            default: false
        },
        isMobile: {
            type: Boolean,
            default: false
        },
        btnTitle: {
            type: String,
            default: ''
        },
        dialogBtns: Object,
         modalWidth: {
             type: String,
             default: '50%'
         },
         isScrollable: {
             type: Boolean,
             default: false
         },
         focusAfterClose: {
             type: Element
         },
         dialogID: {
             type: String,
             default: 'none'
         }
        
  },
   methods: {    
      eventHandler_openDialog(e) { 

          const dm = this.dialogModel
          const ev = e

          if ( dm || ev === 'init' ) {
               // console.log ('@component open modal events: ', dm, ev)
                 const eventPayload = {
                    targetValue: e,
                    showModal: true,
                    openModalWithID: this.dialogID,
                    focusAfterClose: this.focusAfterClose
              }
              this.$emit('update:modal', eventPayload)
          }

      },
      eventHandler(e) {

          const dm = this.dialogModel
          const ev = e

          //  console.log ('@dialog close eventHandler ', e, dm, this.$refs)
           // console.log ('@dialog ref ', this.$refs['ODBtn'])

          if ( dm || ev === 'init' ) {
           //  console.log ('got focus after close ', this.focusAfterClose) 
        
              if (this.focusAfterClose) {
               // console.log ('got focus after close.... yea!',  this.focusAfterClose)
                this.focusAfterClose.focus()
              } else if  (this.$refs.ODBtn) {
                // return focus after closing dialog 
                 //  console.log ('@dialog :: using default focus')
                this.$refs.ODBtn.$el.focus()
              } else {
                   console.error ('@dialog :: using no focus set by caller')
              }
            //  console.log ('active element', document.activeElement)  
            // console.log ('this.dialogModel from component is: ' , this.dialogModel )
            // console.log ('this.dialogModel from event is: ' , e )
             
              const eventPayload = {
                targetValue: e,
                showModal: false,
                openModalWithID: this.dialogID,
                focusAfterClose: this.focusAfterClose
              }
              this.$emit('update:modal', eventPayload)
          }

   
      }
  },
   watch: {
    dialogModel (val) {
        // get focus on dialog when opened. 
        if (!val) return
            requestAnimationFrame(() => {
                this.$refs.focus.focus()
               //  console.log ("@debug: dialog component opened with val...", val)
               // console.log ('refs', document.activeElement, ' val is? ', val)  
      })

    }
  },
    data: () => ({
          
    })
  }
</script>

<style>
</style>
