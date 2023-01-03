//console.log("hello");

// let months = ["January","february","March","April","May","June", "Jully",
// "August","September","October","November","December"];
// let days = ["SUN", "MON", "TUE", "WED","THU","FRI","SAT"];



let today = new Date();
console.log(today);
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let currentdate = today.getDay();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let date = document.getElementsByTagName("td");
console.log(date);

let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let tbl = document.getElementById("calendar-body");
    tbl.innerHTML = "";
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (
                    date === today.getDate() &&
                    year === today.getFullYear() &&
                    month === today.getMonth()
                ) {
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        tbl.appendChild(row);
    }
}

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let searchValue = e.target.search.value;
    let dateList = document.querySelectorAll("td");
    Array.from(dateList).forEach((singleDate) => {
        if (singleDate.innerText == searchValue) {
            if (singleDate.style.backgroundColor == "green") {
                singleDate.style.backgroundColor = "white";
            } else {
                singleDate.style.backgroundColor = "green";
            }
        }
    });
});






















































// let now = new Date();
// document.write(now);//Fri Dec 30 2022 03:06:16 GMT+0530 (India Standard Time)
// console.log(now);
// document.write(now.toDateString());//Fri Dec 30 2022
// document.write(now.getDate());//30
// document.write(now.getFullYear()); //2022
// document.write(now.getMonth()); // beacuse it take jan as 0 therefore dec as 11
// document.write(now.getDay()); //5
// document.write(now.getHours()); //3
// //document.write(now.getMinutes()); //13
// //document.write(now.getSeconds()); //54
// document.write(now.getMilliseconds());//449


//https://www.youtube.com/watch?v=VSKwgWPVA9M

// function getMonthName(e){
//     let monthName = [
//         "January","february","March","April","May","June", "Jully",
//         "August","September","October","November","December"
//     ];
//     return(monthName);
// }
// let monthName;
// document.write(getMonthName(monthName));
// let e = getElementById("drop-down1")
// appendchild()