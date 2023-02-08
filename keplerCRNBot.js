async function keplerFillCrnAndSubmit() {
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // Find a text box and fill the box with input number value
  function setCRN() {
  // enter your course CRN as it is: 
  // crn = [11111, 11112, 11113, 11114];
    crn = [20934, 20935];
    var x = document.querySelectorAll("input");
    for (var i = 0; i < crn.length; i++) {
      x[i].value = crn[i];
      x[i].dispatchEvent(new Event("input"));
    }
    void 0;
  }

  setCRN();
  await delay(3000);

  // Click sumbit button and wait 3 seconds
  const selectButton = document.querySelectorAll("button[type=submit]");
  selectButton[0].click();
  await delay(3000);

  // Click a other button
  const selectButton2 = document.getElementsByClassName("btn ml-2 btn btn-success");
  selectButton2[0].click();
}

keplerFillCrnAndSubmit();
setTimeout(keplerFillCrnAndSubmit, 60000); // 60000ms = 1 minute
