// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API:'https://love-calculator.p.rapidapi.com/getPercentage?',
  param: { sname: '', fname: ''},
  Headers: {
    'X-RapidAPI-Key': 'a9757bb5famshe6b1f7265548816p153cd5jsnc61c6caf58fb',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
