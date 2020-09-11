/*let x = document.getElementById("one");



function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        x.innerHTML = "Geolocation not found";
    }
}
getLocation();
//document.getElementById("generate").addEventListener('click', getLocation);
//
    function showPosition(position) {
  //  x.innerHTML = "Latitude: " + position.coords.latitude + 
   // "<br>Longitude: " + position.coords.longitude; 
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log(lat, lon);

    async function fetchText() {
        let loco = "https://api.openweathermap.org/data/2.5/weather";
                loco += "?lat=" + position.coords.latitude;
                loco += "&lon=" + position.coords.longitude;
                loco += "&appid=" + "f0e2943c54eee9694592b0107d1f2315";
        let response = await fetch(loco);
        let data = await response.json();

        let KtoC = - 273.15;
            data.main.temp += KtoC;
            //
        document.getElementById("temp").innerHTML = Math.round(data.main.temp);

        document.getElementById("humid").innerHTML = data.main.humidity;

        document.getElementById("press").innerHTML = data.main.pressure;

        let wspeed = 3.6;
            data.wind.speed *=wspeed;
            document.getElementById("wind").innerHTML = Math.round(data.wind.speed);

        document.getElementById("locat").innerHTML = data.name + ", " + data.sys.country;

        document.getElementById("status").innerHTML = data.weather[0].main;
        let display = data.weather[0].main;
    //
        if (display==="Clouds"){
          document.getElementById("sun").src = "images/cloud.png";
      }

        if (display==="Clear") {
            document.getElementById("sun").src = "images/sun.png";
        }

        if (display==="Rain") {
            document.getElementById("sun").src = "images/rain.png";
        }

        if (display==="Mist") {
            document.getElementById("bg").src = "images/rain.png";
        }

        localStorage.setItem("current", JSON.stringify(data));
        let notagain = localStorage.getItem("current");
        console.log(notagain, data);

    }
    fetchText();
    //
    }
    
    
    
    */

    //City Library
    

    async function cities() { 
        let compare = document.getElementById("city").value;
        try {
            let response = await fetch("https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json");
        let answer = await response.json();

        //Locating City on Array (collecting input and by looping through)
        
        console.log(answer);
       let gads = "City Not Found";
        for (let i=0; i < answer.length; i++){
            if (answer[i].name = compare){
                gads = compare;
                break;
            }
        }
        console.log(gads);

        //Local Storage set
         localStorage.setItem("where", compare);
        var notagain = localStorage.getItem("where");
        console.log(notagain);


        } catch (error) {
          console.log("error");
        }
        



//Passing Input Value (City) to Call Weather API
        async function full() {

            //To control the error
            try {
                let tired = "https://api.openweathermap.org/data/2.5/weather";
                tired += "?q=" + compare;
                tired += "&appid=" + "f0e2943c54eee9694592b0107d1f2315";
                let response = await fetch(tired);
                let data = await response.json();
    
                let KtoC = - 273.15;
                data.main.temp += KtoC;
    
                localStorage.setItem("rookie", JSON.stringify(data));
    

              document.getElementById("temp").innerHTML = Math.round(data.main.temp);
    
              document.getElementById("humid").innerHTML = data.main.humidity;
      
              document.getElementById("press").innerHTML = data.main.pressure;
    
              let wspeed = 3.6;
              data.wind.speed *=wspeed;
              document.getElementById("wind").innerHTML = Math.round(data.wind.speed);
      
              document.getElementById("locat").innerHTML = data.name + ", " + data.sys.country;
              console.log(data);
    
              document.getElementById("status").innerHTML = data.weather[0].main;
             let display = data.weather[0].main;
            console.log(display);
    
            if (display==="Clouds"){
              document.getElementById("sun").src = "images/cloud.png";
            }
    
            if (display==="Clear") {
                document.getElementById("sun").src = "images/sun.png"
            }
    
            if (display==="Rain") {
                document.getElementById("sun").src = "images/rain.png"
            }
            if (display==="Mist") {
                document.getElementById("sun").src = "images/rain.png"
            }

            // Display from LocalStorage

              function displayResultsFromLocal(){
                  if (localStorage.getItem("rookie") !== null){
                      let newB = JSON.parse(localStorage.getItem("rookie"))

                        document.getElementById("temp").innerHTML = Math.round(newB.main.temp);
    
                      document.getElementById("humid").innerHTML = newB.main.humidity;
              
                      document.getElementById("press").innerHTML = newB.main.pressure;
            
                      let wspeed = 3.6;
                      data.wind.speed *=wspeed;
                      document.getElementById("wind").innerHTML = Math.round(newB.wind.speed);
              
                      document.getElementById("locat").innerHTML = newB.name + ", " + data.sys.country;
                      console.log(data);
            
                      document.getElementById("status").innerHTML = newB.weather[0].main;
                     let display = newB.weather[0].main;
                    console.log(display);
            
                    if (display==="Clouds"){
                      document.getElementById("sun").src = "images/cloud.png";
                    }
            
                    if (display==="Clear") {
                        document.getElementById("sun").src = "images/sun.png"
                    }
            
                    if (display==="Rain") {
                        document.getElementById("sun").src = "images/rain.png"
                    }
                    if (display==="Mist") {
                        document.getElementById("sun").src = "images/rain.png"
                    }
                  }
              }
              displayResultsFromLocal();

              // Catch the error
            } catch (error) {
             alert('Input correct city');
            }  
            
        }
        full();
    }
    
    document.getElementById("nna").addEventListener("click", cities);
