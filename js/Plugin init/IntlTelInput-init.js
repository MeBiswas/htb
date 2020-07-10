// IntlTelInput Plugin Initialization
$("#teleCode").intlTelInput();
var input = document.querySelector("#teleCode");
window.intlTelInput(input, {
  // allowDropdown: false,
  autoHideDialCode: false,
  autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
  geoIpLookup: function(callback) {
    $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  nationalMode: false,
  // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  // placeholderNumberType: "MOBILE",
  preferredCountries: [],
  // separateDialCode: true,
  utilsScript: "js/utils.js",
});