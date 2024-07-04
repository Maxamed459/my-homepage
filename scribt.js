function greet() {
    var names = document.getElementById("name");
    var para = document.getElementById("par");
    para.innerHTML = `hello, ${names.value} welcome to my website here you can know many things about me`;
}

function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburgar-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var tablinks = document.getElementsByClassName("tab-links");
            var tabcontents = document.getElementsByClassName("tab-contents");

            function opentab(tabname){
               for(tablink of tablinks){
                    tablink.classList.remove("active-link");
                }
                for(tabcontent of tabcontents){
                    tabcontent.classList.remove("active-tab");
                }
                event.currentTarget.classList.add("active-link");
                document.getElementById(tabname).classList.add("active-tab");
            }
