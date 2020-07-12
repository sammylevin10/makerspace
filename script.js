function nextStep() {
  let denied = document.getElementById("denied").checked;
  let starting = document.getElementById("starting").checked;
  let chartfield = document.getElementById("chartfield").checked;
  let machineDenied = document.getElementById("machine-denied").checked;
  if(denied) {
    document.getElementById("deny").style.visibility = "visible";
    document.getElementById("approve-start").style.visibility = "hidden";
    document.getElementById("approve-chartfield").style.visibility = "hidden";
    document.getElementById("approve-machine").style.visibility = "hidden";
  }
  else if(starting) {
    document.getElementById("deny").style.visibility = "hidden";
    document.getElementById("approve-start").style.visibility = "visible";
    document.getElementById("approve-chartfield").style.visibility = "hidden";
    document.getElementById("approve-machine").style.visibility = "hidden";
  }
  else if(chartfield) {
    document.getElementById("deny").style.visibility = "hidden";
    document.getElementById("approve-start").style.visibility = "hidden";
    document.getElementById("approve-chartfield").style.visibility = "visible";
    document.getElementById("approve-machine").style.visibility = "hidden";
  }
  else if(machineDenied) {
    document.getElementById("deny").style.visibility = "hidden";
    document.getElementById("approve-start").style.visibility = "hidden";
    document.getElementById("approve-chartfield").style.visibility = "hidden";
    document.getElementById("approve-machine").style.visibility = "visible";
  }
}

var mainLoopId = setInterval(function(){
  let denied = document.getElementById("denied").checked;
  console.log(denied);
  if(denied) {
    document.getElementById("starting").disabled = true;
    document.getElementById("chartfield").disabled = true;
    document.getElementById("machine-denied").disabled = true;
  }
  else {
    document.getElementById("starting").disabled = false;
    document.getElementById("chartfield").disabled = false;
    document.getElementById("machine-denied").disabled = false;
  }
}, 40);


function getInfo() {
  var input = document.getElementById('netid');
  email = input.value+"@nyu.edu";
  var input = document.getElementById('name');
  name = input.value;
  var input = document.getElementById('ta-name');
  taName = input.value+" | MakerSpace TA";
  var info = [email, name, taName];
  return info;
}
function approvedStart() {
  console.log("approvedStart");
  var info = getInfo();
  window.location.href = "mailto:" + info[0] +
  "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
  "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20has%20been%20approved%20to%20begin%20printing.%20Please%20look%20out%20for%20future%20updates%20on%20your%20part.%20%0A%0A" +
  "Best%2C%0A" + info[2];
}
function approvedChartfield() {
  console.log("approvedChartfield");
  var info = getInfo();
  var input = document.getElementById('machine-requested');
  machineRequested = input.value;
  var input = document.getElementById('print-cost');
  cost = input.value;
  window.location.href = "mailto:" + info[0] +
  "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
  "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20has%20been%20approved%20to%20print%20on%20" + machineRequested + ".%20The%20print%20cost%20is%20%24" + cost + ".%20Please%20provide%20a%20Chartfield%20number%20so%20we%20can%20move%20forward%20with%20starting%20the%20print.%20%0A%0A" +
  "Best%2C%0A" + info[2];
}
function approvedMachine() {
  console.log("approvedMachine");
  var info = getInfo();
  var input = document.getElementById('machine-requested-2');
  machineRequested = input.value;
  var input = document.getElementById('machine-requested-cost');
  costRequested = input.value;
  var input = document.getElementById('not-recommended-reason');
  notRecommended = input.value;
  var input = document.getElementById('machine-recommended');
  machineRecommended = input.value;
  var input = document.getElementById('machine-recommended-cost');
  costRecommended = input.value;
  window.location.href = "mailto:" + info[0] +
  "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
  "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20has%20been%20approved%20to%20print.%20However%2C%20the%20" + machineRequested + "%20does%20not%20seem%20like%20the%20best%20option%20for%20the%20print%20because%20" + notRecommended + ".%20We%20suggest%20" + machineRecommended + "%20for%20this%20project.%20The%20price%20for%20the%20" + machineRequested + "%20is%20%24" + costRequested + "%20and%20the%20price%20for%20the%20" + machineRecommended + "%20is%20%24" + costRecommended + ".%20Please%20confirm%20if%20we%20should%20continue%20to%20print%20on%20" + machineRequested + "%20or%20if%20you%20would%20rather%20us%20to%20continue%20the%20print%20on%20" + machineRecommended + ".%20%0A%0A" +
  "Best%2C%0A" + info[2];
}
function denied() {
  console.log("denied");
  var info = getInfo();
  var input = document.getElementById('machine-requested-3');
  machineRequested = input.value;
  var input = document.getElementById('problem');
  problem = input.value;
  var input = document.getElementById('fix');
  fix = input.value;
  window.location.href = "mailto:" + info[0] +
  "?cc=tandon-makerspace@nyu.edu&subject=Your%20MakerSpace%20Service%20Order&body=Dear%20" + info[1] + "%0D%0A%0D%0A" +
  "We%20have%20reviewed%20your%203D%20printing%20order%20and%20it%20is%20not%20yet%20ready%20to%20be%20printed%20on%20" + machineRequested + ".%20The%20print%20had%20been%20denied%20because%20" + problem + "%2C%20and%20this%20could%20be%20fixed%20by%20" + fix + ".%20%0A%0A" +
  "Best%2C%0A" + info[2];
}
