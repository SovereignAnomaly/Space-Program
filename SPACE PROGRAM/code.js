function play() {
    //sets variables for the dice
    var die1 = 0
    var die2 = 0 

    die1 = Math.ceil(Math.random() * 6)
    die2 = Math.ceil(Math.random() * 6)

    var sum = die1+die2
    document.write("Die 1 = " + die1)
    document.write("<br/>")
    document.write("Die 2 = " + die2)
    document.write("<br/>")
    document.write("Sum = " + sum)
    document.write("<br/>")
    // if else statements used to find a final output and it will either be you win, you lose or try again
    if (sum == 7 || sum == 11)
    { document.write("CRAPS - you lose")
    document.write("<br/>")
    }
    else if (die1== die2 && die1%2 == 0)
    {
    document.write("DOUBLES - you win")
    document.write("<br/>")
    }
    //else is the final factor and it runs everything else under the sun that if and else if don't catch
    else {
        document.write("Try again")
    }
}

//Following what I learned in class, I was able to make the buttons flawlessly and it felt good not having an error!!
//I was able to link them to the HTML code and they work perfectly, along with the Stop button not being active when it is running!!!
//Note-to-Self, one line of code messed up will prevent rest of code from running. gps_altitude was accidentally set to gps_longitude and prevented rest of table underneath from running
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML="Reading Data..."
    document.getElementById("data").rows["latitude"].innerHTML="Reading Data..."
    document.getElementById("data").rows["longitude"].innerHTML="Reading Data..."
    document.getElementById("data").rows["gps_altitude"].innerHTML="Reading Data..."
    document.getElementById("data").rows["bmpSensor_Altitude"].innerHTML="Reading Data..."
    document.getElementById("data").rows["bmpSensor_pressure"].innerHTML="Reading Data..."
    document.getElementById("data").rows["bmpSensor_temp"].innerHTML="Reading Data..."
    document.getElementById("data").rows["Digital_Sensor"].innerHTML="Reading Data..."
    document.getElementById("data").rows["cssSensor_Temp"].innerHTML="Reading Data..."
    document.getElementById("data").rows["cssSensor_eCO2"].innerHTML="Reading Data..."
    document.getElementById("data").rows["cssSensor_TVOC"].innerHTML="Reading Data..."
    document.getElementById("data").rows["UV"].innerHTML="Reading Data..."
    document.getElementById("data").rows["accelX"].innerHTML="Reading Data..."
    document.getElementById("data").rows["accelY"].innerHTML="Reading Data..."
    document.getElementById("data").rows["accelZ"].innerHTML="Reading Data..."
    document.getElementById("data").rows["MagneticX"].innerHTML="Reading Data..."
    document.getElementById("data").rows["MagneticY"].innerHTML="Reading Data..."
    document.getElementById("data").rows["MagneticZ"].innerHTML="Reading Data..."
    document.getElementById("data").rows["GyroX"].innerHTML="Reading Data..."
    document.getElementById("data").rows["GyroY"].innerHTML="Reading Data..."
    document.getElementById("data").rows["GyroZ"].innerHTML="Reading Data..."
    
    index = 0; 
    timer = setInterval(updateDisplay, time_interval);
}

function stop() {
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function checkCreds() {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName
    
    
    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Full Name has invalid number of characters!!";
    }
    else if (badgeNumb > 999 || badgeNumb < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge ID has an Invalid Number!";
    }
    else {
        alert("Access Granted, Welcome " + fullName);
        location.replace("SpaceProgram.html");
    }

    //alert("hi " + fullName + " with Badge Number " + badgeNumb);

}


//I wanted to control the level of the volume and used the code below but for some reason, it is still loud, is there another way you can control volume? 
function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
    Audio.volume = 0.2;
}


//This sets up all the information for the sound and button once clicked on the webpage
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}


class InputData {
    constructor(
        seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_Altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        Digital_Sensor,
        cssSensor_Temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        uv,
        accelX,
        accelY,
        accelZ,
        MagneticX,
        MagneticY,
        MagneticZ,
        GyroX,
        GyroY,
        GyroZ,
    ) 
    
    {
        this.seconds = seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_Altitude = bmpSensor_Altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.Digital_Sensor = Digital_Sensor;
        this.cssSensor_Temp = cssSensor_Temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.uv = uv;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.MagneticX = MagneticX;
        this.MagneticY = MagneticY;
        this.MagneticZ = MagneticZ;
        this.GyroX = GyroX;
        this.GyroY = GyroY;
        this.GyroZ = GyroZ;
    }
}

function getData() {
    var loadedData = loadData();
    return loadedData;
}


function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}