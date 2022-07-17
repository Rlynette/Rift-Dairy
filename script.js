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

function incomeOverTime(){
    let selling_price = 45;
      weekly = results * 7 * selling_price;
      Average_monthly = results * 30 * selling_price;
      Yearly = results * 365 *selling_price;
  
    let weeklyincome = document.getElementById("weeklysales")
      weeklyincome.innerHTML = "The weekly income is" + " " + weekly
    let monthlyincome = document.getElementById("monthlysales")
      monthlyincome.innerHTML = "The monthly income is" + " " + Average_monthly
    let yearlyincome = document.getElementById("yearlysales")
      yearlyincome.innerHTML = "The yearly income is" + " " + Yearly
  }
  
  
  function totalincomeperWeek(){
      weekly = results * 7 * 45;
  
      let totalincomeperWeek = document.getElementById("totalincomeweek")
      totalincomeperWeek.innerHTML = "Weekly income is" + " " + weekly
  }
  
  function totalIncomeEachMonth(){
      numberofdays_permonth = [31,29,31,30,31,30,31,31,30,31,30,31]
  
      for( let i = 0; i<numberofdays_permonth.length; i ++){
          let parentUl = document.getElementById("monthly")
          let list = document.createElement("li");
          month = i+1;
  
          total = numberofdays_permonth[i] * results * 45
          list.innerHTML = "Income for month " + " " + month + " " + "is" + " " + total
          parentUl.appendChild(list);
      }
  
  
  }