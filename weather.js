const https=require("https");
const {key}=require("./api.json");


//APPID=test&units=imperial&zip=14221
function fetchWeather(zipCode){
    const queryParams={
        APPID:key,
        units:"imperial",
        zip:zipCode
    }
    const url="https://api.openweathermap.org/data/2.5/weather?APPID="+
    queryParams.APPID+
    "&units="+
    queryParams.units+
    "&zip="+
    queryParams.zip;

    try{
        const request=https.get(url,(res)=>{
            //console.log(res.statusCode);
            //console.log(res);
            if(res.statusCode==200){
                let body="";
                res.on("data",(buffer)=>{
                    body+=buffer;
                })

                res.on("end",()=>{
                    const data=JSON.parse(body);
                    const name=data.name;
                    const temp=data.main.temp;

                    console.log("The temp in "+ name + " is "+ temp);
                })
            }else{
                console.log("Something went Wrong"+res.statusCode+"error");
                return;
            }
        })
    }catch(err){
        console.log(err);
    }
}

module.exports=fetchWeather;