//adding booking date
function date() {
    let date = new Date();
    document.getElementById("date").innerText = date;
}


//defining trip place
function place() {
    let depu = document.getElementById("depurture").value;
    let to = document.getElementById("to").value;

    if (depu == '' || to == '') {
        alert("You didnt set your destination. Press ok to go as default!")
    }
    else {
        document.getElementById("dep").innerText = depu;
        let to = document.getElementById("to").value;
        document.getElementById("To").innerText = to;
    }
}


// defining trip dates
function travel() {
    const dDay = document.getElementById("d-day").value;
    const rDay = document.getElementById("r-day").value;
    if (dDay == '' || rDay == '') {
        alert('Travelling deuration not defined. Please set departure and return date. if not dates will be set as default!')
        document.getElementById("depurture-date").innerText = new Date();
        document.getElementById("return-date").innerText = "10 days after depurture";
    }
    else {
        document.getElementById("depurture-date").innerText = dDay;
        document.getElementById("return-date").innerText = rDay;
    }
}

//counting total
function countTotal() {
    const firstInput = document.getElementById("first-input").value;
    const firstCount = parseInt(firstInput);
    const economyInput = document.getElementById("economy-input").value;
    const economyCount = parseInt(economyInput);
    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById("subtotal").innerText = '$' + totalPrice;

    const taxAmmount = totalPrice * 0.1;
    const tax = Math.round(taxAmmount);
    document.getElementById("tax").innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("total").innerText = '$' + grandTotal;
    if (grandTotal <= 0) {
        alert("error! Please enter valid ticket number")
        location.reload();
    }

    document.getElementById("first").innerText = firstCount
    document.getElementById("economy").innerText = economyCount
    document.getElementById("cost").innerText = grandTotal
    document.getElementById("first-count").innerText = firstCount * 150
    document.getElementById("economy-count").innerText = economyCount * 100
}


//counting first class
function first(isIncrease) {
    const firstInput = document.getElementById("first-input");
    const firstCount = parseInt(firstInput.value);
    let firstNewCount = firstCount;
    if (isIncrease == true) {
        firstNewCount = firstCount + 1;
    }
    else if (isIncrease == false && firstCount > 0) {
        firstNewCount = firstCount - 1;
    }
    firstInput.value = firstNewCount;
    const firstTotal = firstNewCount * 150;
    console.log(firstTotal);
    countTotal();

}


//counting economy
function economy(isIncrease) {
    const economyInput = document.getElementById("economy-input");
    const economyCount = parseInt(economyInput.value);
    let economyNewCount = economyCount;
    if (isIncrease == true) {
        economyNewCount = economyCount + 1;
    }
    else if (isIncrease == false && economyCount > 0) {
        economyNewCount = economyCount - 1;
    }
    economyInput.value = economyNewCount;
    const econoyTotal = economyNewCount * 100;
    console.log(econoyTotal);
    countTotal();
}
//swal function
function check(){
    const total =parseFloat(document.getElementById("total").innerText);
    if(total == 0){
        alert("Input invalid");
        location.reload();
    }
    else{
        date();
        place();
        travel();
    }
}
function booked() {
    swal({ icon: "success", text: "Booked", }).then(function () {
        location.reload();
    });
}