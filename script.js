var results = 0;

function dashboard(evt, dashboardName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dashboardName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function outputperShed(){
    let mySheds = ["A","B","C","D"]
    let myLitres = [510, 308, 486, 572]

    for ( let i = 0; i < mySheds.length; i++){
        let parentUl = document.getElementById("mySheds")
        let list = document.createElement("li");
        list.innerHTML = "Your production in Shed" + " " + mySheds[i] + " " + "is" + " " + myLitres[i] + " " + "per day";
        parentUl.appendChild(list);

        results += myLitres[i]
        
    }
}
function weeklyProduction(){
    weekly = results * 7;

    let weeklyproduction = document.getElementById("weeklyproduction")
    weeklyproduction.innerHTML = "Weekly production is" + " " + weekly
}

function monthlyProduction(){
    monthly = results * 30;

    let monthlyproduction = document.getElementById("monthlyproduction")
    monthlyproduction.innerHTML = "Monthly production is" + " " + monthly
}

function yearlyProduction(){
    yearly = results * 365;

    let yearlyproduction = document.getElementById("yearlyproduction")
    yearlyproduction.innerHTML = "Yearly production is" + " " + yearly
}