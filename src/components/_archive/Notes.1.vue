<template>
    <p style="text-align:left; border-top: 1px dashed gray; padding-top: 1rem; font-size: .8rem;">
  Notes: 
  <ol style="width: 50%;">
    <li>
      Connecting (invalid) taken from last segment. Need to have flattened data. 
      This version loops thru sections three times! ... that's 9 individual loops x worse case of 50 flights is not a best practice. 
    </li>
  <li>
      Operated by taken from last segment may not be accurate since it could have started or ended with a partner airline. Same loop issue as note 1.
  </li>
  <li>
      For the flight details (modal link) and higher performance it would be great not to explore using a static id and allow the lazy-loaded modal to pull the data from the .json data or REST API when 
      the modal is invoked vs having to repeat all of the data inside the loops. 
  </li>
  <li>

    Recommended to flatten data for this component so a single loop is needed or reduce loops to single level deep. 
    <br/>
  Could use an array for each row of data, for example (based on this example of three connections) -- 
  <ul>
    <li>
         flightCodes: [YYZ, LGA, FLL], 
    </li>
    <li>
          flightTimes: [23:15,17:25],
    </li>
    <li>
       togalConnections: [12h 12m],
    </li>
    <li>
          flightDetailsUID: [fd123] (unique id could be based on flight optionId)  
    </li>
  </ul>
  </li>
  </ol>

</p>
</template>
