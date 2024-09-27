const counterEl = document.querySelectorAll(".counter");
counterEl.forEach((counterEl) =>{
    counterEl.innerText ="0";
    incrementcounter();
    function incrementcounter(){
        let currentnum = +counterEl.innerText;
        const dataceil = counterEl.getAttribute("data-ceil");
        const increment = dataceil / 15 ;
        currentnum = Math.ceil(currentnum + increment);

        if(currentnum < dataceil){
            counterEl.innerText = currentnum;
            setTimeout(incrementcounter,60);
        }else{
            counterEl.innerText = dataceil ;
        }
    }
})