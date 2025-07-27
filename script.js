/*------------------Characters remaining-----------------------------*/ 
        const fullnameInput = document.getElementById("fullname");
        const textarea = document.getElementById("comments");
        const characterCount = document.getElementById("characterCount");
        const maxLength = textarea.getAttribute("maxlength");
        const errorMsg = document.getElementById("errorMsg");

        /*pattern, only allows a-z, A-Z, and space*/
        const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;

        /**/
        fullnameInput.addEventListener("input",function(e){
            const value = e.target.value;

            /*remove previous flash and errorMsg*/
            fullnameInput.classList.remove("flash");
            errorMsg.textContent="";

            /*character validation*/
            if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(value)) {
                errorMsg.textContent = "Illegal characters detected. Only alphabets and spaces are allowed.";
                errorMsg.style.opacity=1;
            } 
            /*fallback to check format*/
            else if (!namePattern.test(value)) {
                errorMsg.textContent = "Please enter full name: first and last name, with one space.";
                errorMsg.style.opacity=1;
            }

            /*add flash*/
            fullnameInput.classList.add("flash");
            setTimeout(() => fullnameInput.classList.remove("flash"), 5000);

            //errorMsg for 5 seconds
            setTimeout(() => {
            errorMsg.style.opacity = 0;
            }, 5000);
        });

        textarea.addEventListener("input" ,()=> {
            const remaining = maxLength - textarea.value.length;
            characterCount.textContent = `You have ${remaining} characters remaining.`;

            if(remaining <=0){
                characterCount.style.color = "red";
            }
            else if(remaining<=50){
                characterCount.style.color = "orange";
            }
            else{
                characterCount.style.color = "#767c7e";
            }
        }        
        );
        /*-----------------------------DARK MODE-----------------------------*/ 
        function toggleDarkMode() {
        document.body.classList.toggle("Dark-Mode");
        }

        function toggleMenu(){
            /*select the main-nav*/
            const nav = document.querySelector(".main-nav");
            nav.classList.toggle("show");
        }
    




