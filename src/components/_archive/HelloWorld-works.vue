<template>
    
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
    
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
		first: 'matteo',
		last: 'carr',
		itemsTimes: ['12:00am', '01:00pm', '3hr'],
		itemsTotalTimes: ['1hr', '3hr'],
		itemSpell: ['JFK', 'BOS', 'LAX']
	}),
}
</script>

 <style scoped lang="scss">
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

  .fa-circle {
    font-size: 0.5rem;
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
