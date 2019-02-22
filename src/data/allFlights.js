const AllFlightsData = {
  "status": "SUCCESS",
  "errors": null,
  "results": {
    "from": "New York (LaGuardia)(LGA)",
    "to": "Calgary (YYC)",
    "type": "ROUND_TRIP",
    "legNum": 1,
    "maxLegs": 2,
    "fareType": [
      {
        "name": "Basic",
        "fareCode": "BR",
        "fareCodeContent": "Fee for checked bag<sup>1</sup> | No seat selection | No changes or cancellations | Basic fares cannot be combined with any other fare."
      },
      {
        "name": "Econo (Lowest)",
        "fareCode": "LR",
        "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>"
      },
      {
        "name": "Econo",
        "fareCode": "LB",
        "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee."
      },
      {
        "name": "EconoFlex",
        "fareCode": "LF",
        "fareCodeContent": "First checked bag<sup>1</sup> | Standard seat selection | Flexibility within Canada<sup>2</sup>"
      },
      {
        "name": "Flex",
        "fareCode": "MB",
        "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>"
      },
      {
        "name": "Premium",
        "fareCode": "HR",
        "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>"
      },
      {
        "name": "PremiumFlex",
        "fareCode": "HB",
        "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>"
      }
    ],
    "legs": [
      {
        "originAirport": {
          "name": "Pearson International Airport",
          "code": "YYZ",
          "city": "Toronto",
          "cityCode": "YTO",
          "countryCode": "CA"
        },
        "destinationAirport": {
          "name": "Fort Lauderdale-Hollywood International Airport",
          "code": "FLL",
          "city": "Fort Lauderdale",
          "cityCode": "FLL",
          "countryCode": "US"
        },
        "dates": [
          {
            "id": 1,
            "date": "2018-09-19",
            "dateDisplay": "Wed",
            "dateDisplayDay": "Wed",
            "dateDisplayDate": "19-Sep",
            "price": {
              "amount": "282.65",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          },
          {
            "id": 2,
            "date": "2018-09-20",
            "dateDisplay": "Thu",
            "dateDisplayDay": "Thu",
            "dateDisplayDate": "20-Sep",
            "price": {
              "amount": "300.85",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          },
          {
            "id": 3,
            "date": "2018-09-21",
            "dateDisplay": "Fri",
            "dateDisplayDay": "Fri",
            "dateDisplayDate": "21-Sep",
            "price": {
              "amount": "300.85",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          },
          {
            "id": 4,
            "date": "2018-09-22",
            "dateDisplay": "Sat",
            "dateDisplayDay": "Sat",
            "dateDisplayDate": "22-Sep",
            "price": {
              "amount": "296.85",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          },
          {
            "id": 5,
            "date": "2018-09-23",
            "dateDisplay": "Sun",
            "dateDisplayDay": "Sun",
            "dateDisplayDate": "23-Sep",
            "price": {
              "amount": "300.85",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          },
          {
            "id": 6,
            "date": "2018-09-24",
            "dateDisplay": "Mon",
            "dateDisplayDay": "Mon",
            "dateDisplayDate": "24-Sep",
            "price": {
              "amount": "293.15",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          },
          {
            "id": 7,
            "date": "2018-09-25",
            "dateDisplay": "Tue",
            "dateDisplayDay": "Tue",
            "dateDisplayDate": "25-Sep",
            "price": {
              "amount": "261.65",
              "currencySymbol": "$",
              "currencyCode": "CAD"
            }
          }
        ],
        "flightOptionDates": [
          {
            "date": "2018-09-22",
            "flightOptions": [
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 9,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 12,
                      "minute": 52,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 09:45",
                    "arrivalDate": "Sat 22 Sep, 2018 12:52",
                    "departureTime": "09:45",
                    "arrivalTime": "12:52",
                    "flightNumber": "1232",
                    "duration": "3h 07m",
                    "equipment": "73H",
                    "aircraftType": "737-800",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "49.93 CAD",
                    "lowFareIndicator": true,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1232_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "337.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1232_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Premium",
                    "type": "H",
                    "flightNumber": "1_1232_H",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-premium-fare.pdf",
                    "brandDesc": "Compare Premium fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": "49.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1232_LR",
                    "remainingSeats": 1,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "478.85",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1232_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "578.65",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1232_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "569.95",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1232_HR",
                    "remainingSeats": "4",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "899.65",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1232_HB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "selectedBrandName": "LB",
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$378.85",
                "lowestFare": 378.85,
                "tripDuration": 187,
                "tripDurationString": "3h 07m",
                "lowfareIndicator": true,
                "startDate": "Sat 22 Sep",
                "startTime": "09:45",
                "endDate": "Sat 22 Sep",
                "endTime": "12:52",
                "operatedByDisplay": "Operated by WestJet",
                "connections": false,
                "operatedByWestjet": 0,
                "stops": 0,
                "flightPaths": [
                  "YYZ",
                  "BOS"
                ]
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 9,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 11,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 09:35",
                    "arrivalDate": "Sat 22 Sep, 2018 11:06",
                    "departureTime": "09:35",
                    "arrivalTime": "11:06",
                    "flightNumber": "1202",
                    "duration": "1h 31m",
                    "equipment": "73H",
                    "aircraftType": "737-800",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 0,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 19,
                      "minute": 14,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 16:00",
                    "arrivalDate": "Sat 22 Sep, 2018 19:14",
                    "departureTime": "16:00",
                    "arrivalTime": "19:14",
                    "flightNumber": "6616",
                    "duration": "3h 14m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1202,6616_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1202,6616_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "ATL",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 579,
                "tripDurationString": "9h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "09:35",
                "endDate": "Sat 22 Sep",
                "endTime": "19:14",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "CCC",
                  "LGB"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "currencyName": "Canadian Dollar",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1208,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6624_MB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1280,
                "tripDurationString": "21h 20m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "<i class=\"material-icons info-circle\">info</i> Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "flightPaths": [
                  "DDD",
                  "YYC",
                  "BOS"
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "flightPaths": [
                  "ZZZ",
                  "YYC",
                  "ATL"
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "ZZZ",
                  "YYC",
                  "ATL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "currencySymbol": "$",
                    "optionId": "1_1208,6620_LB",
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1208,6620_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1208,6620_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1208,6620_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 14,
                      "minute": 35,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 16,
                      "minute": 6,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 14:35",
                    "arrivalDate": "Sat 22 Sep, 2018 16:06",
                    "departureTime": "14:35",
                    "arrivalTime": "16:06",
                    "flightNumber": "1208",
                    "duration": "1h 31m",
                    "equipment": "736",
                    "aircraftType": "737-600",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1208,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1208,6620_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": "null",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1433,
                "tripDurationString": "23h 53m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "14:35",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 19,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 21,
                      "minute": 1,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 19:30",
                    "arrivalDate": "Sat 22 Sep, 2018 21:01",
                    "departureTime": "19:30",
                    "arrivalTime": "21:01",
                    "flightNumber": "1214",
                    "duration": "1h 31m",
                    "equipment": "73H",
                    "aircraftType": "737-800",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 8,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 55,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 08:30",
                    "arrivalDate": "Sun 23 Sep, 2018 11:55",
                    "departureTime": "08:30",
                    "arrivalTime": "11:55",
                    "flightNumber": "6624",
                    "duration": "3h 25m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1214,6624_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1214,6624_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1214,6624_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "optionId": "1_1214,6624_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 985,
                "tripDurationString": "16h 25m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "19:30",
                "endDate": "Sun 23 Sep",
                "endTime": "11:55",
                "operatedByDisplay": "zz-Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 0,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 19,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 21,
                      "minute": 1,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 19:30",
                    "arrivalDate": "Sat 22 Sep, 2018 21:01",
                    "departureTime": "19:30",
                    "arrivalTime": "21:01",
                    "flightNumber": "1214",
                    "duration": "1h 31m",
                    "equipment": "73H",
                    "aircraftType": "737-800",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 11,
                      "minute": 5,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 14,
                      "minute": 28,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 11:05",
                    "arrivalDate": "Sun 23 Sep, 2018 14:28",
                    "departureTime": "11:05",
                    "arrivalTime": "14:28",
                    "flightNumber": "6620",
                    "duration": "3h 23m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1214,6620_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1214,6620_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1214,6620_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "optionId": "1_1214,6620_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1138,
                "tripDurationString": "18h 58m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "19:30",
                "endDate": "Sun 23 Sep",
                "endTime": "14:28",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 19,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 21,
                      "minute": 1,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 19:30",
                    "arrivalDate": "Sat 22 Sep, 2018 21:01",
                    "departureTime": "19:30",
                    "arrivalTime": "21:01",
                    "flightNumber": "1214",
                    "duration": "1h 31m",
                    "equipment": "73H",
                    "aircraftType": "737-800",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WestJet",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Saturday 22 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 15,
                      "minute": 40,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 18,
                      "minute": 58,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 15:40",
                    "arrivalDate": "Sun 23 Sep, 2018 18:58",
                    "departureTime": "15:40",
                    "arrivalTime": "18:58",
                    "flightNumber": "6616",
                    "duration": "3h 18m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": true,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_1214,6616_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_1214,6616_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "549.93",
                    "currencyCode": "CAD",
                    "optionId": "1_1214,6616_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "737.14",
                    "currencyCode": "CAD",
                    "optionId": "1_1214,6616_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$549.93",
                "lowestFare": 549.93,
                "tripDuration": 1408,
                "tripDurationString": "23h 28m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "19:30",
                "endDate": "Sun 23 Sep",
                "endTime": "18:58",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 17,
                      "minute": 25,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 20,
                      "minute": 34,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 17:25",
                    "arrivalDate": "Sun 23 Sep, 2018 20:34",
                    "departureTime": "17:25",
                    "arrivalTime": "20:34",
                    "flightNumber": "6622",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6622_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6622_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6622_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6622_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6622_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6622_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1279,
                "tripDurationString": "21h 19m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "20:34",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 19,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 22,
                      "minute": 54,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 19:45",
                    "arrivalDate": "Sun 23 Sep, 2018 22:54",
                    "departureTime": "19:45",
                    "arrivalTime": "22:54",
                    "flightNumber": "6618",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6618_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6618_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1419,
                "tripDurationString": "23h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "22:54",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 19,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 22,
                      "minute": 54,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 19:45",
                    "arrivalDate": "Sun 23 Sep, 2018 22:54",
                    "departureTime": "19:45",
                    "arrivalTime": "22:54",
                    "flightNumber": "6618",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6618_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6618_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1419,
                "tripDurationString": "23h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "22:54",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 19,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 22,
                      "minute": 54,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 19:45",
                    "arrivalDate": "Sun 23 Sep, 2018 22:54",
                    "departureTime": "19:45",
                    "arrivalTime": "22:54",
                    "flightNumber": "6618",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6618_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6618_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1419,
                "tripDurationString": "23h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "22:54",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 19,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 22,
                      "minute": 54,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 19:45",
                    "arrivalDate": "Sun 23 Sep, 2018 22:54",
                    "departureTime": "19:45",
                    "arrivalTime": "22:54",
                    "flightNumber": "6618",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6618_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6618_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1419,
                "tripDurationString": "23h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "22:54",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 19,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 22,
                      "minute": 54,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 19:45",
                    "arrivalDate": "Sun 23 Sep, 2018 22:54",
                    "departureTime": "19:45",
                    "arrivalTime": "22:54",
                    "flightNumber": "6618",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6618_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6618_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1419,
                "tripDurationString": "23h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "22:54",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              },
              {
                "flightOptionKey": null,
                "segments": [
                  {
                    "departureAirport": {
                      "name": "Pearson International Airport",
                      "code": "YYZ",
                      "city": "Toronto",
                      "cityCode": "YTO",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "WestJet",
                    "operatingAirlineCode": "WS",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 22,
                      "hour": 23,
                      "minute": 15,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SATURDAY",
                      "dayOfYear": 265,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 0,
                      "minute": 23,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sat 22 Sep, 2018 23:15",
                    "arrivalDate": "Sun 23 Sep, 2018 00:23",
                    "departureTime": "23:15",
                    "arrivalTime": "00:23",
                    "flightNumber": "3480",
                    "duration": "1h 08m",
                    "equipment": "DH4",
                    "aircraftType": "Q400",
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": true,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "WESTJET ENCORE",
                    "deptDate": "Saturday 22 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "Ottawa/Macdonald-Cartier International Airport",
                      "code": "YOW",
                      "city": "Ottawa",
                      "cityCode": "YOW",
                      "countryCode": "CA"
                    },
                    "arrivalAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 6,
                      "minute": 30,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 7,
                      "minute": 57,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 06:30",
                    "arrivalDate": "Sun 23 Sep, 2018 07:57",
                    "departureTime": "06:30",
                    "arrivalTime": "07:57",
                    "flightNumber": "7759",
                    "duration": "1h 27m",
                    "equipment": "CR9",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "ENDEAVOR AIR DBA DELTA CONNECTION",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  },
                  {
                    "departureAirport": {
                      "name": "LaGuardia Airport",
                      "code": "LGA",
                      "city": "New York (LaGuardia)",
                      "cityCode": "NYC",
                      "countryCode": "US"
                    },
                    "arrivalAirport": {
                      "name": "Fort Lauderdale-Hollywood International Airport",
                      "code": "FLL",
                      "city": "Fort Lauderdale",
                      "cityCode": "FLL",
                      "countryCode": "US"
                    },
                    "marketingAirline": "WestJet",
                    "marketingAirlineCode": "WS",
                    "operatingAirline": "DL",
                    "operatingAirlineCode": "DL",
                    "localDateTimeDepartureDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 19,
                      "minute": 45,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "localDateTimeArrivalDate": {
                      "monthValue": 9,
                      "dayOfMonth": 23,
                      "hour": 22,
                      "minute": 54,
                      "second": 0,
                      "nano": 0,
                      "dayOfWeek": "SUNDAY",
                      "dayOfYear": 266,
                      "year": 2018,
                      "month": "SEPTEMBER",
                      "chronology": {
                        "calendarType": "iso8601",
                        "id": "ISO"
                      }
                    },
                    "departureDate": "Sun 23 Sep, 2018 19:45",
                    "arrivalDate": "Sun 23 Sep, 2018 22:54",
                    "departureTime": "19:45",
                    "arrivalTime": "22:54",
                    "flightNumber": "6618",
                    "duration": "3h 09m",
                    "equipment": "717",
                    "aircraftType": null,
                    "stops": 0,
                    "stopsDisplay": "",
                    "stopAirports": null,
                    "includesOvernight": false,
                    "includesStopoverOvernight": false,
                    "remaingSeats": "9",
                    "showRemainingSeats": false,
                    "operationalDisclosureText": "DL",
                    "deptDate": "Sunday 23 Sep, 2018",
                    "avlDate": "Sunday 23 Sep, 2018"
                  }
                ],
                "cabins": [
                  {
                    "fare": "549.93 CAD",
                    "lowFareIndicator": false,
                    "brand": "Economy",
                    "type": "L",
                    "flightNumber": "1_3480,7759,6618_L",
                    "brandUrl": "route66.pdf",
                    "brandDesc": "Compare Economy fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  },
                  {
                    "fare": "737.14 CAD",
                    "lowFareIndicator": false,
                    "brand": "Flex",
                    "type": "M",
                    "flightNumber": "1_3480,7759,6618_M",
                    "brandUrl": "https://d36n5c7sr2fzxk.cloudfront.net/test/wj-flex-fare.pdf",
                    "brandDesc": "Compare Flex fares",
                    "brandAriaLabel": "Opens in a new window",
                    "isActive": false
                  }
                ],
                "fares": [
                  {
                    "fareCode": "LR",
                    "fareCodeDisplay": "Econo (Lowest)",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Changes or cancellations for a fee<sup>2</sup>",
                    "amount": null,
                    "currencyCode": null,
                    "optionId": null,
                    "nuCurrency": null,
                    "remainingSeats": null,
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "LB",
                    "fareCodeDisplay": "Econo",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee.",
                    "amount": "876.74",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_LB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "MB",
                    "fareCodeDisplay": "Flex",
                    "fareCodeContent": "Fee for checked bag<sup>1</sup> | Seat selection for a fee | Flexibility within Canada<sup>2</sup>",
                    "amount": "1,095.29",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_MB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": false,
                    "mixedCabinMessage": ""
                  },
                  {
                    "fareCode": "HR",
                    "fareCodeDisplay": "Plus Lowest",
                    "fareCodeContent": "Includes seats with more space<sup>3</sup> (varies by aircraft type) | Inflight amenities<sup>4</sup>",
                    "amount": "969.39",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HR",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "3",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  },
                  {
                    "fareCode": "HB",
                    "fareCodeDisplay": "Plus Flexible",
                    "fareCodeContent": "The same Premium amenities but with full fare flexibility.<sup>5</sup>",
                    "amount": "1,118.44",
                    "currencyCode": "CAD",
                    "optionId": "1_3480,7759,6618_HB",
                    "nuCurrency": {
                      "currencyCode": "CAD",
                      "shortCurrencyCode": "CA",
                      "currencyName": "Canadian Dollar",
                      "currencySymbol": "$",
                      "defaultFractionDigits": 2,
                      "conversionRateToUSD": 1,
                      "conversionRateFromUSD": 1
                    },
                    "remainingSeats": "9",
                    "mixedCabinIndicator": true,
                    "mixedCabinMessage": "MIxed Cabin. You'll not get the same class on some flights that you booked for."
                  }
                ],
                "flightPaths": [
                  "YYZ",
                  "LGA",
                  "FLL"
                ],
                "selectedBrandName": null,
                "selectedBrandNameDisplay": null,
                "selectedBrandFareBenefits": null,
                "lowestFareString": "$876.74",
                "lowestFare": 876.74,
                "tripDuration": 1419,
                "tripDurationString": "23h 39m",
                "lowfareIndicator": false,
                "startDate": "Sat 22 Sep",
                "startTime": "23:15",
                "endDate": "Sun 23 Sep",
                "endTime": "22:54",
                "operatedByDisplay": "Operated by WestJet and Delta Air Lines",
                "connections": true,
                "operatedByWestjet": 9,
                "stops": 0
              }
            ]
          }
        ],
        "selectedAirDate": "2018-09-22",
        "currentSelectedOptionId": null,
        "currentSelectedTabBookmarkKey": null,
        "currentSelectedTabBookmarkTab": null
      }
    ]
  }
}

export default AllFlightsData