var string = "";
var buttons = document.querySelectorAll(".box");

// eventlistener to each button of calci.
Array.from(buttons).forEach((item) => {
    item.addEventListener("click", (e) => {

        // To evaluate answer
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input").value = string;
        }

        //To clear ans.
        else if (e.target.innerHTML == "C") {
            string = " ";
            document.querySelector(".input").value = string;

        }
        else if (e.target.innerHTML == "del") {
            string=string.erase ([string.length-1],1);
            document.querySelector(".input").value = string;

        }
        

        // To show answer.
        else {
            
            
                string = string + e.target.innerHTML;
                document.querySelector(".input").value = string;
        
        }
    })
})
