document = document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr =JSON.parse(localStorage.getItem("studentData"))|| [];

function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var regNo = document.querySelector("#regNo").value;
    var degree = document.querySelector("#degree").value;

    var studentObj = {
        name: name,
        regNo: regNo,
        degree: degree,
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr);
}

function displayFun(studentDataArr) {

    document.querySelector("#tbody").innerHTML = "";

    studentDataArr.forEach(function (item, index) {
    
        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = index + 1;

        var td2 = document.createElement("td");
        td2.innerHTML = item.name;

        var td3 = document.createElement("td");
        td3.innerHTML = item.regNo;

        var td4 = document.createElement("td");
        td4.innerHTML = item.degree;

        var td6 = document.createElement("td");

        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () 
        {
            td6.innerHTML = "<button>Present</button>";
        });

        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () 
        {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        });

        var btn3 = document.createElement("button");
        btn3.innerHTML = "D";
        btn3.addEventListener("click", function () 
        {
            studentDataArr.splice(index, 1);
            localStorage.setItem("studentData", JSON.stringify(studentDataArr));
            tr.remove();
            displayFun(studentDataArr);
        });

        td6.classList.add("td6");
        td6.append(btn1, btn2, btn3);

        tr.append(td1, td2, td3, td4, td6);

        document.querySelector("#tbody").append(tr);

    });

}

displayFun(studentDataArr);