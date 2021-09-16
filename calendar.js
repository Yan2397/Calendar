class Calendar {
    constructor(x, y) {
        x = x  ?? new Date().getFullYear();
        y = y  ?? new Date().getMonth();
        this.date = new Date(x, y);
    }

    play() {
        let arr = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        root.innerHTML = "";

        let monthyear = document.getElementById("month-year");
        let font = document.getElementById("month")
        let font1 = document.getElementById("year")

        if (this.date.getMonth() == 11 || this.date.getMonth() == 0 || this.date.getMonth() == 1) {
            monthyear.style.backgroundImage = "url('w.jpg')";
            font.style.color = "#f00"
            font1.style.color = "#f00"
        }

        if (this.date.getMonth() == 2 || this.date.getMonth() == 3 || this.date.getMonth() == 4) {
            monthyear.style.backgroundImage = "url('s.jpg')"
            font.style.color = "#fff"
            font1.style.color = "#fff"
        }

        if (this.date.getMonth() == 5 || this.date.getMonth() == 6 || this.date.getMonth() == 7) {
            monthyear.style.backgroundImage = "url('s1.jpg')";
            font.style.color = "#f00"
            font1.style.color = "#f00"
        }

        if (this.date.getMonth() == 8 || this.date.getMonth() == 9 || this.date.getMonth() == 10) {
            monthyear.style.backgroundImage = "url('a.jpg')"
            font.style.color = "#fff"
            font1.style.color = "#fff"

        }




        let tab = document.createElement("table");
        root.append(tab);
        let tr = document.createElement("tr");
        for (let e of arr) {
            let th = document.createElement("th")
            th.innerHTML = e;
            tr.append(th)
        }
        tab.append(tr);

        let day = 31;
        if (this.date.getMonth() == 1) {
            if (this.date.getFullYear() % 4 == 0) {
                day = 29
            } else {
                day = 28
            }
        } else {
            let a = new Date(this.date.getFullYear(), this.date.getMonth());
            a.setDate(31);
            if (a.getMonth() != this.date.getMonth()) {
                day = 30
            }
        }


        let x = this.date.getDay()
        let z = new Date().getDate()

        tr = document.createElement("tr");

        for (let j = 0, i = 1; i <= day; i++, j++) {

            if (x >= 6) {
                x = 0;


            }

            if (j >= 7) {

                tab.append(tr);
                tr = document.createElement("tr");
                j = 0

            }

            let td = document.createElement("td");


            if (x > 0) {
                td.innerHTML = ""
                x--;
                i--;
            } else {
                td.innerHTML = i
            }
            if (i == z) {
                td.style.background = "#cc99ff"
            }
            tr.append(td);

        }
        tab.append(tr);
        month.innerHTML = monthNames[this.date.getMonth()];
        year.innerHTML = this.date.getFullYear();



    }
}


let c = new Calendar();
c.play()

let main={}


document.getElementById("minus").addEventListener("click", () => {
    c.date.setMonth(c.date.getMonth() - 1);
    let obj1= {
        a: c.date.getFullYear(),
        b: c.date.getMonth(),
    }
    main={obj1}
    localStorage.main=JSON.stringify(main)
    c.play();
});


document.getElementById("plus").addEventListener("click", () => {
    c.date.setMonth(c.date.getMonth() + 1);

    let obj1={
        a: c.date.getFullYear(),
        b: c.date.getMonth(),
    }
    main={obj1}
    localStorage.main=JSON.stringify(main)
    c.play();
});



document.getElementById("show").addEventListener("click", function () {

    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");

    inp1.style.border = "2px solid #8c1aff";
    inp2.style.border = "2px solid #8c1aff";

    if (inp1.value != "" || inp2.value != "") {
        let inp11 = +inp1.value;
        let inp21 = +inp2.value - 1;

       let obj1= {
            a: inp11,
            b: inp21,
        }
        main={obj1}
        console.log(inp11, inp21)
        localStorage.main=JSON.stringify(main)
       

        c = new Calendar(inp11, inp21);
        c.play();

        inp1.value = ""
        inp2.value = ""

    } else {
        inp1.style.border = "3px solid red";
        inp2.style.border = "3px solid red";
        alert("Please Fill 'Year' and 'Month' Areas");
        c = new Calendar()
        c.play()
    }
});

function f1(){
    if(localStorage.main){
        let obj=JSON.parse(localStorage.main);
        console.log(obj)
        console.log(new Calendar(obj.obj1.a,obj.obj1.b))
        let c= new Calendar(obj.obj1.a,obj.obj1.b);
        c.play()

    }else{
        localStorage.main=JSON.stringify(main);
    }
}
f1()


let btn1 = document.getElementById("btn1").addEventListener("click", () => {
    localStorage.removeItem("main")
    c = new Calendar()
    c.play()
})