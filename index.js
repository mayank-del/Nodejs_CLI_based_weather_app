const weather=require("./weather");
const zipCode=process.argv.slice(2).join(" ");

weather(zipCode)
