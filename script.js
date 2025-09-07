let divId1 = document.getElementById("reLocation_2");
let j = 0;
for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.className = "form-check ps-0";
  divId1.appendChild(div);
  let input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "radio";
  input.name = "reLocation";
  input.id = "reLocation" + j;
  input.value = location1[i];
  input.checked = false;
  input.disabled = true;
  div.appendChild(input);
  let label = document.createElement("label");
  label.className = "custom-control-label";
  label.htmlFor = "reLocation" + j;
  label.innerHTML = location1[i];
  div.appendChild(label);
  j += 1;
}
let divId2 = document.getElementById("reLocation_3");
for (let i = 10; i < 20; i++) {
  let div = document.createElement("div");
  div.className = "form-check ps-0";
  divId2.appendChild(div);
  let input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "radio";
  input.name = "reLocation";
  input.id = "reLocation" + j;
  input.value = location1[i];
  input.checked = false;
  input.disabled = true;
  div.appendChild(input);
  let label = document.createElement("label");
  label.className = "custom-control-label";
  label.htmlFor = "reLocation" + j;
  label.innerHTML = location1[i];
  div.appendChild(label);
  j++;
}
let divId3 = document.getElementById("reLocation_4");
for (let i = 20; i < 28; i++) {
  let div = document.createElement("div");
  div.className = "form-check ps-0";
  divId3.appendChild(div);
  let input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "radio";
  input.name = "reLocation";
  input.id = "reLocation" + j;
  input.value = location1[i];
  input.checked = false;
  input.disabled = true;
  div.appendChild(input);
  let label = document.createElement("label");
  label.className = "custom-control-label";
  label.htmlFor = "reLocation" + j;
  label.innerHTML = location1[i];
  div.appendChild(label);
  j++;
}
let divId4 = document.getElementById("reLocation_5");
for (let i = 0; i < location2.length; i++) {
  let div = document.createElement("div");
  div.className = "form-check ps-0";
  divId4.appendChild(div);
  let input = document.createElement("input");
  input.className = "form-check-input";
  input.type = "radio";
  input.name = "reLocation";
  input.id = "reLocation" + j;
  input.value = location2[i];
  input.checked = false;
  input.disabled = true;
  div.appendChild(input);
  let label = document.createElement("label");
  label.className = "custom-control-label";
  label.htmlFor = "reLocation" + j;
  label.innerHTML = location2[i];
  div.appendChild(label);
  j++;
}

function activateRadioOptions(id, className) {
  var idSelector = document.getElementById(id);
  //   console.log(idSelector);
  var classSelector = "." + className + " input";
  //   console.log(classSelector);
  var selectors = document.querySelectorAll(classSelector);
  //   console.log(selectors);
  if (idSelector.checked) {
    for (var i = 0, len = selectors.length; i < len; i++) {
      selectors[i].removeAttribute("disabled");
    }
    // document
    //   .querySelectorAll(".garage-space input")
    //   .removeAttribute("disabled");
    // document.getElementById("first").removeAttribute("disabled");
    // document.getElementById("second").removeAttribute("disabled");
  } else {
    for (var i = 0, len = selectors.length; i < len; i++) {
      selectors[i].disabled = true;
      selectors[i].checked = false;
    }
    // document.querySelectorAll(".garage-space input").disabled = true;
    // document.getElementById("first").disabled = true;
    // document.getElementById("second").disabled = true;
  }
}

function getValue(id, target) {
  var idSelector = document.getElementById(id);
  var targetSelector = document.getElementById(target);
  if (idSelector.value == "Selling") {
    targetSelector.innerHTML = "Price:";
  } else if (idSelector.value == "Buying") {
    targetSelector.innerHTML = "Budget:";
  }else if (idSelector.value == "wife") {
    targetSelector.innerHTML = "Looking:";
  }
}

// document.addEventListener("keydown", outputTemplate());
// document.addEventListener("click", outputTemplate());
// var activeElementID = "";
// var navPillsLink = document.querySelectorAll(".nav-pills .nav-link");
// for (var i = 0, len = navPillsLink.length; i < len; i++) {
//   navPillsLink[i].addEventListener("click", function (event) {
//     event.preventDefault();
//     getActiveTab();
//   });
// }
// function getActiveTab() {
//   activeElementID = document
//     .querySelector(".tab-pane.active")
//     .getAttribute("id");
// }
// console.log(activeElementID);
// console.log(activeElement);

// var realEstate = document.getElementById("real-estate");
// document.addEventListener("click", function (e) {
//   var activeElementID = "";
//   setTimeout(function () {
//     activeElementID = document
//       .querySelector(".tab-pane.active")
//       .getAttribute("id");
//   }, 500);
// });
// console.log(activeElementID);
initTemplate("#real-estate", realEstateTemplate);
const tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]');
for (var i = 0, len = tabEl.length; i < len; i++) {
  tabEl[i].addEventListener("shown.bs.tab", (event) => {
    console.log(event.target); // newly activated tab
    var activeElementID = event.target.getAttribute("href");
    console.log(activeElementID);
    //console.log(event.relatedTarget); // previous active tab

    if (activeElementID == "#real-estate") {
      initTemplate("#real-estate", realEstateTemplate);
    } else if (activeElementID == "#auto") {
	initTemplate("#auto", autoTemplate); }
	  else if
	  (activeElementID == "#other") {
	  initTemplate("#other", otherTemplate); }
    
  });
}

function initTemplate(activeElementID, templateFunction) {
  var activeInputs = document.querySelectorAll(activeElementID + " input");
  // console.log(activeElementID);
  // console.log(activeInputs);
  templateFunction();
  for (var i = 0, len = activeInputs.length; i < len; i++) {
    //   console.log(tabEl[i]);
    // console.log(activeInputs[i]);
    activeInputs[i].addEventListener("change", function (event) {
      event.preventDefault();
      // console.log(this);
      templateFunction();
    });
  }
}

// if (document.querySelector(".tab-pane.active").getAttribute("id") == "auto") {
//   var activeInputs = document.querySelectorAll(
//     "#" + activeElementID + " input"
//   );
//   autoTemplate();
//   for (var i = 0, len = activeInputs.length; i < len; i++) {
//     //   console.log(tabEl[i]);
//     activeInputs[i].addEventListener("change", function (event) {
//       event.preventDefault();
//       // console.log(this);
//       // console.log(activeInputs[i]);
//       autoTemplate();
//     });
//   }
// }

// ----- REAL ESTATE TEMPLATE FUNCTION ----- //
function realEstateTemplate() {
  var rePurpose = document.getElementsByName("rePurpose");
  for (var i = 0, len = rePurpose.length; i < len; i++) {
    if (rePurpose[i].checked) {
      var rePurposeValue = rePurpose[i].value;
    }
  }

  var reType = document.getElementsByName("reType");
  for (var i = 0, len = reType.length; i < len; i++) {
    if (reType[i].checked) {
      var reTypeValue = reType[i].value;
    }
  }

  var reNumberValue = document.getElementById("reNumber").value;

  var reGarden = document.getElementById("reGarden");
  if (reGarden.checked) {
    var reGardenValue = reGarden.value;
  }

  var garageSpace = document.getElementsByName("garageSpace");
  for (var i = 0, len = garageSpace.length; i < len; i++) {
    if (garageSpace[i].checked) {
      var reGarageSpace = garageSpace[i].value;
    }
  }

  var warehouse = document.getElementsByName("warehouse");
  for (var i = 0, len = warehouse.length; i < len; i++) {
    if (warehouse[i].checked) {
      var reWarehouse = warehouse[i].value;
    }
  }

  var reCustomInterior = document.getElementById("reCustomInterior");
  if (reCustomInterior.checked) {
    var reCustomInteriorValue = reCustomInterior.value;
  }

  var reInsurance = document.getElementById("reInsurance");
  if (reInsurance.checked) {
    var reInsuranceValue = reInsurance.value;
  }

  var reSwimmingPool = document.getElementById("reSwimmingPool");
  if (reSwimmingPool.checked) {
    var reSwimmingPoolValue = reSwimmingPool.value;
  }

  var reTennisCourt = document.getElementById("reTennisCourt");
  if (reTennisCourt.checked) {
    var reTennisCourtValue = reTennisCourt.value;
  }

  var reHelipad = document.getElementById("reHelipad");
  if (reHelipad.checked) {
    var reHelipadValue = reHelipad.value;
  }

  var reDriveway = document.getElementById("reDriveway");
  if (reDriveway.checked) {
    var reDrivewayValue = reDriveway.value;
  }

  var reBackyard = document.getElementById("reBackyard");
  if (reBackyard.checked) {
    var reBackyardValue = reBackyard.value;
  }

  var reView = document.getElementsByName("reView");
  for (var i = 0, len = reView.length; i < len; i++) {
    if (reView[i].checked) {
      var reViewValue = reView[i].value + " view";
    }
  }

  var reValue = document.getElementById("reValue").innerHTML;

  var rePrice = document.getElementById("rePrice").value;

  var beforeLocation = document.getElementsByName("beforeLocation");
  var beforeLocationValue = "";
  for (var i = 0, len = beforeLocation.length; i < len; i++) {
    if (beforeLocation[i].checked) {
      beforeLocationValue = " " + beforeLocation[i].value;
    }
  }

  var reLocation = document.getElementsByName("reLocation");
  var reLocationValue = "";
  for (var i = 0, len = reLocation.length; i < len; i++) {
    if (reLocation[i].checked) {
      reLocationValue = " " + reLocation[i].value;
    }
  }

  //   console.log(reGarden);
  var reFeatures = {};

  //   if (reNumberValue) {
  //     reFeatures.reNumberValue = reNumberValue;
  //   }
  if (reGardenValue) {
    reFeatures.reGardenValue = reGardenValue;
  }
  if (reGarageSpace) {
    reFeatures.reGarageSpace = reGarageSpace;
  }
  if (reWarehouse) {
    reFeatures.reWarehouse = reWarehouse;
  }
  if (reCustomInteriorValue) {
    reFeatures.reCustomInteriorValue = reCustomInteriorValue;
  }
  if (reInsuranceValue) {
    reFeatures.reInsuranceValue = reInsuranceValue;
  }
  if (reSwimmingPoolValue) {
    reFeatures.reSwimmingPoolValue = reSwimmingPoolValue;
  }
  if (reTennisCourtValue) {
    reFeatures.reTennisCourtValue = reTennisCourtValue;
  }
  if (reHelipadValue) {
    reFeatures.reHelipadValue = reHelipadValue;
  }
  if (reDrivewayValue) {
    reFeatures.reDrivewayValue = reDrivewayValue;
  }
  if (reBackyardValue) {
    reFeatures.reBackyardValue = reBackyardValue;
  }
  if (reViewValue) {
    reFeatures.reViewValue = reViewValue;
  }
  //   if (rePrice) {
  //     reFeatures.rePrice = rePrice;
  //   }
  //   if (reValueMValue) {
  //     reFeatures.reValueMValue = reValueMValue;
  //   }

  var featureFormatted = formatArray(reFeatures);

  // console.log(featureFormatted);

  var beforeType = "";
  if (reNumberValue) {
    beforeType = "";
  } else if (!reNumberValue && reTypeValue == "apartment") {
    beforeType = " an";
  } else if (!reNumberValue) {
    beforeType = " a";
  }

  if (reNumberValue) {
    var beforeNumber = " №";
  } else {
    beforeNumber = "";
  }

  if (featureFormatted) {
    var beforeFeatures = " with ";
  } else {
    beforeFeatures = "";
  }


var reValueM = document.getElementById("reValueM");
var reValueK = document.getElementById("reValueK");

// Initialize reValueMValue and reValueKValue
var reValueMValue = "";
var reValueKValue = "";

// Handle reValueM
if (reValueM.checked) {
  reValueMValue = reValueM.value;
} else {
  reValueMValue = "";
}

// Handle reValueK
if (reValueK.checked) {
  reValueKValue = reValueK.value;
  reValueM.checked = false; // Reset reValueM if reValueK is checked
  reValueMValue = ""
} else {
  reValueKValue = "";
}

// Set the price display
var beforePrice;
if (rePrice) {
  beforePrice = " $";
} else {
  beforePrice = " Negotiable.";
  reValueM.checked = false; // Reset reValueM if price is not set
  reValueMValue = "";
  reValueK.checked = false; // Also reset reValueK if price is not set
  reValueKValue = "";
}

  var priceFormatted = formatCurrency(rePrice);

  document.getElementById("finalOutput").value =
    rePurposeValue +
    beforeType +
    " " +
    reTypeValue +
    beforeNumber +
    reNumberValue +
    beforeFeatures +
    featureFormatted +
    beforeLocationValue +
    reLocationValue +
    ". " +
    reValue +
    beforePrice +
    priceFormatted +
    reValueKValue+
    reValueMValue;
}


function otherTemplate() {
	var otherPurpose = document.getElementsByName("otherPurpose");
	for (var i = 0, len = otherPurpose.length; i < len; i++) {
		 if (otherPurpose[i].checked) {
      var otherPurposeValue = otherPurpose[i].value;
    }
	}
	var otherNameValue = ' "' + document.getElementById("otherName").value + '"';

  var otherValue = document.getElementById("otherValue").innerHTML;

  var otherPrice = document.getElementById("otherPrice").value;

  var priceFormatted = formatCurrency(otherPrice);

  var otherPriceM = document.getElementById("otherPriceM");

  if (otherPriceM.checked) {
    var otherPriceMValue = otherPriceM.value;
  } else {
    otherPriceMValue = "";
  }
var otherPriceK = document.getElementById("otherPriceK");
if (otherPriceK.checked) {
    var otherPriceKValue = otherPriceK.value;
otherPriceM.checked = false;
otherPriceMValue = "";
  } else {
    otherPriceKValue = "";
  }
  if (otherPrice) {
    var beforePrice = " $";
  } else {
    beforePrice = " Negotiable.";
    otherPriceM.checked = false;
    otherPriceMValue = "";
    otherPriceMValue = "";
    otherPriceK.checked = false;
    otherPriceKValue = "";
  }

  var features = {};

 
  var featureFormatted = formatArray(features);

  if (featureFormatted) {
    var beforeFeatures = " with ";
  } else {
    beforeFeatures = "";
  }

  document.getElementById("finalOutput").value =
    otherPurposeValue +
    otherNameValue +
    beforeFeatures +
    featureFormatted +
    ". " +
    otherValue +
    beforePrice +
    priceFormatted +
    otherPriceKValue +
    otherPriceMValue ;
	
}
// ----- AUTO TEMPLATE FUNCTION ----- //
function autoTemplate() {
  var autoPurpose = document.getElementsByName("autoPurpose");
  for (var i = 0, len = autoPurpose.length; i < len; i++) {
    if (autoPurpose[i].checked) {
      var autoPurposeValue = autoPurpose[i].value;
    }
  }

  var autoNameValue = ' "' + document.getElementById("autoName").value + '"';

  var autoValue = document.getElementById("autoValue").innerHTML;

  var autoPrice = document.getElementById("autoPrice").value;

  var priceFormatted = formatCurrency(autoPrice);

  var autoPriceM = document.getElementById("autoPriceM");

  if (autoPriceM.checked) {
    var autoPriceMValue = autoPriceM.value;
  } else {
    autoPriceMValue = "";
  }
var autoPriceK = document.getElementById("autoPriceK");
if (autoPriceK.checked) {
    var autoPriceKValue = autoPriceK.value;
autoPriceM.checked = false;
autoPriceMValue = "";
  } else {
    autoPriceKValue = "";
  }
  if (autoPrice) {
    var beforePrice = " $";
  } else {
    beforePrice = " Negotiable.";
    autoPriceM.checked = false;
    autoPriceMValue = "";
    autoPriceMValue = "";
    autoPriceK.checked = false;
    autoPriceKValue = "";
  }

  var features = {};

  var autoConfig = document.getElementsByName("autoConfig");
  for (var i = 0, len = autoConfig.length; i < len; i++) {
    if (autoConfig[i].checked) {
      var autoConfigValue = autoConfig[i].value;
    }
  }

  var autoVisuals = document.getElementById("autoVisuals");
  if (autoVisuals.checked) {
    var autoVisualsValue = autoVisuals.value;
  }

  var autoLumiWheels = document.getElementById("autoLumiWheels");
  if (autoLumiWheels.checked) {
    var autoLumiWheelsValue = autoLumiWheels.value;
  }

  var autoInsurance = document.getElementById("autoInsurance");
  if (autoInsurance.checked) {
    var autoInsuranceValue = autoInsurance.value;
  }

  var autoTurboKit = document.getElementById("autoTurboKit");
  if (autoTurboKit.checked) {
    var autoTurboKitValue = autoTurboKit.value;
  }

  var autoDriftKit = document.getElementById("autoDriftKit");
  if (autoDriftKit.checked) {
    var autoDriftKitValue = autoDriftKit.value;
  }

  if (autoConfigValue) {
    features.autoConfigValue = autoConfigValue;
  }
  if (autoVisualsValue) {
    features.autoVisualsValue = autoVisualsValue;
  }
  if (autoLumiWheelsValue) {
    features.autoLumiWheelsValue = autoLumiWheelsValue;
  }
  if (autoInsuranceValue) {
    features.autoInsuranceValue = autoInsuranceValue;
  }
  if (autoTurboKitValue) {
    features.autoTurboKitValue = autoTurboKitValue;
  }
  if (autoDriftKitValue) {
    features.autoDriftKitValue = autoDriftKitValue;
  }

  var featureFormatted = formatArray(features);

  if (featureFormatted) {
    var beforeFeatures = " with ";
  } else {
    beforeFeatures = "";
  }

  document.getElementById("finalOutput").value =
    autoPurposeValue +
    autoNameValue +
    beforeFeatures +
    featureFormatted +
    ". " +
    autoValue +
    beforePrice +
    priceFormatted +
    autoPriceKValue +
    autoPriceMValue ;
}

// tabEl.addEventListener("shown.bs.tab", function (event) {
//   console.log(event.target); // newly activated tab
//   event.relatedTarget; // previous active tab
// });
function formatArray(arr) {
  var outStr = "";
  var arrLength = Object.keys(arr).length;
  var arrValues = Object.values(arr);
  if (arrLength === 1) {
    outStr = arrValues[0];
    // console.log(outStr);
  } else if (arrLength === 2) {
    //joins all with "and" but no commas
    //example: "bob and sam"
    outStr = arrValues.join(" and ");
  } else if (arrLength > 2) {
    //joins all with commas, but last one gets ", and" (oxford comma!)
    //example: "bob, joe, and sam"
    outStr = arrValues.slice(0, -1).join(", ") + " and " + arrValues.slice(-1);
  }
  //   console.log(outStr);
  return outStr;
}

// function formatDollar(num) {
//   //   var p = num.toFixed(2).split(".");
//   var p = num;
//   p.toFixed().replace(/\d(?=(\d{3})+\.)/g, "$&,");
//   //   return (
//   //     "$" +
//   //     p
//   //       .split("")
//   //       .reverse()
//   //       .reduce(function (acc, num, i, orig) {
//   //         return num + (num != "" && i && !(i % 3) ? "," : "");
//   //       }, "") +
//   //     "." +
//   //     p[1]
//   //   );
// }
function formatCurrency(amount) {
  return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
}

// location1.forEach((item) => {
//   var j = 0;
//   let div = document.createElement("div");
//   div.className = "form-check ps-0";
//   divId.appendChild(div);
//   let input = document.createElement("input");
//   input.className = "form-check-input";
//   input.type = "radio";
//   input.name = "reLocation";
//   input.id = "reLocation" + j;
//   input.value = item;
//   input.disabled = true;
//   div.appendChild(input);
// });

function clearFields(id, templateFunction) {
  var id = document.getElementById(id);
  id.value = "";
  templateFunction();
}

function clearForm(id, templateFunction) {
  var form = document.getElementById(id);
  form.reset();
  document.getElementById("finalOutputForm").reset();
  templateFunction();
}

function copyText() {
  // Get the text field
  var copyText = document.getElementById("finalOutput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  // alert("Copied the text: " + copyText.value);
  // realEstateTemplate();
}

// The autoComplete.js Engine instance creator
const autoCompleteJS = new autoComplete({
  selector: "#autoName",
  placeHolder: "Search for auto...",
  data: {
    src: autoNames,
    cache: true,
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});

const otherCompleteJS = new autoComplete({
  selector: "#otherName",
  placeHolder: "Search for other...",
  data: {
    src: otherNames,
    cache: true,
  },
  resultsList: {
    element: (list, data) => {
      if (!data.results.length) {
        // Create "No Results" message element
        const message = document.createElement("div");
        // Add class to the created element
        message.setAttribute("class", "no_result");
        // Add message text content
        message.innerHTML = `<span>Found No Results for "${data.query}"</span>`;
        // Append message element to the results list
        list.prepend(message);
      }
    },
    noResults: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        otherComplete.input.value = selection;
      },
    },
  },
});