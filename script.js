function getChecked(id) {
  return document.getElementById(id).checked;
}

function getValue(id) {
  return document.getElementById(id).value;
}

function makeVisible(id) {
  let ids = ["deny", "approve-start", "approve-chartfield", "approve-machine", "complete"];
  for (let i = 0; i < ids.length; i++) {
    if (id != ids[i]) document.getElementById(ids[i]).style.visibility = "hidden";
    else document.getElementById(ids[i]).style.visibility = "visible";
  }
}


function nextStep() {
  let denied = getChecked("denied");
  let completed = getChecked("completed");
  let starting = getChecked("starting");
  let chartfield = getChecked("chartfield");
  let machineDenied = getChecked("machine-denied");
  if (denied) {
    makeVisible("deny");
  } else if (completed) {
    makeVisible("complete");
  } else if (starting) {
    makeVisible("approve-start");
  } else if (chartfield) {
    makeVisible("approve-chartfield");
  } else if (machineDenied) {
    makeVisible("approve-machine");
  }
}

let mainLoopId = setInterval(function() {
  let denied = getChecked("denied");
  let completed = getChecked("completed");

  if (denied || completed) {
    document.getElementById("starting").disabled = true;
    document.getElementById("chartfield").disabled = true;
    document.getElementById("machine-denied").disabled = true;
  } else {
    document.getElementById("starting").disabled = false;
    document.getElementById("chartfield").disabled = false;
    document.getElementById("machine-denied").disabled = false;
  }
}, 40);


function getInfo() {
  let email = getValue("netid")+ "@nyu.edu";
  let name = getValue("name");
  let taName = getValue("ta-name") + " | MakerSpace TA";
  return [email, name, taName];
}

function approvedStart() {
  console.log("approvedStart");
  let info = getInfo();
  let cost = getValue("cost-2");
  window.location.href = "mailto:" + info[0] +
    "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
    "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20has%20been%20approved%20to%20begin%20printing.%20The%20cost%20of%20your%20print%20is%20%24" + cost + ".%20We%20will%20notify%20you%20when%20your%20print%20is%20ready%20for%20pickup.%0A%0A" +
    "Best%2C%0A" + info[2];
}

function approvedChartfield() {
  console.log("approvedChartfield");
  let info = getInfo();
  let machineRequested = getValue("machine-requested");
  let cost = getValue('print-cost');
  window.location.href = "mailto:" + info[0] +
    "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
    "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20has%20been%20approved%20to%20print%20on%20" + machineRequested + ".%20The%20print%20cost%20is%20%24" + cost + ".%20Please%20provide%20a%20Chartfield%20number%20so%20we%20can%20move%20forward%20with%20starting%20the%20print.%20%0A%0A" +
    "Best%2C%0A" + info[2];
}

function approvedMachine() {
  console.log("approvedMachine");
  let info = getInfo();
  let machineRequested = getValue("machine-requested-2");
  let costRequested = getValue("machine-requested-cost");
  let notRecommended = getValue("not-recommended-reason");
  let machineRecommended = getValue("machine-recommended");
  let costRecommended = getValue("machine-recommended-cost");
  window.location.href = "mailto:" + info[0] +
    "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
    "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20has%20been%20approved%20to%20print.%20However%2C%20the%20" + machineRequested + "%20does%20not%20seem%20like%20the%20best%20option%20for%20the%20print%20because%20" + notRecommended + ".%20We%20suggest%20" + machineRecommended + "%20for%20this%20project.%20The%20price%20for%20the%20" + machineRequested + "%20is%20%24" + costRequested + "%20and%20the%20price%20for%20the%20" + machineRecommended + "%20is%20%24" + costRecommended + ".%20Please%20confirm%20if%20we%20should%20continue%20to%20print%20on%20" + machineRequested + "%20or%20if%20you%20would%20rather%20us%20to%20continue%20the%20print%20on%20" + machineRecommended + ".%20%0A%0A" +
    "Best%2C%0A" + info[2];
}

function denied() {
  console.log("denied");
  let info = getInfo();
  let machineRequested = getValue("machine-requested-3");
  let problem = getValue("problem");
  let fix = getValue("fix");
  window.location.href = "mailto:" + info[0] +
    "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
    "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20is%20not%20yet%20ready%20to%20be%20printed%20on%20" + machineRequested + ".%20The%20print%20had%20been%20denied%20because%20" + problem + "%2C%20and%20this%20could%20be%20fixed%20by%20" + fix + ".%20%0A%0A" +
    "Best%2C%0A" + info[2];
}

function completed() {
  console.log("completed");
  let info = getInfo();
  window.location.href = "mailto:" + info[0] +
    "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
    "Your%203D%20print%20is%20ready%20for%20pickup%20at%20the%20NYU%20MakerSpace%20at%206%20MetroTech%20Center.%20Please%20pick%20up%20your%20print%20between%20the%20hours%20of%2011AM%20and%202PM%20Tuesday-Friday.%20Your%20print%20is%20in%20a%20Ziploc%20bag%20labelled%20with%20your%20order%20specifications.%0A%0AIf%20you%20are%20unable%20to%20enter%206%20MetroTech%20Center%20or%20cannot%20pick%20up%20the%20print%20during%20our%20summer%20hours%2C%20please%20email%20tandon-makerspace%40nyu.edu%20to%20arrange%20for%20an%20alternative%20pickup%20method.%0A%0A" +
    "Best%2C%0A" + info[2];
}
