//?Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//! Get all the countries from Asia continent /region using Filter function
const req=new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all",true);
req.send();
req.onload=()=>{
    let data=req.response;
    let result=JSON.parse(data)
    let res =result.filter((ele)=> ele.region==="Asia")
    let final=res.forEach((ele)=>console.log(ele.name.common))
    console.log(res);
}
//! Get all the countries with a population of less than 2 lakhs using Filter function

const req1=new XMLHttpRequest();
req1.open("GET","https://restcountries.com/v3.1/all",true);
req1.send();
req1.onload=()=>{
    let data=req1.response;
    let result1=JSON.parse(data)
    let res1 =result1.filter((country)=> country.population < 200000);
            console.log( res1.map(country =>country.name.common));
        
    };

//! Print the following details name, capital, flag, using forEach function
const req2=new XMLHttpRequest();
req2.open("GET","https://restcountries.com/v3.1/all",true);
req2.send();
req2.onload=()=>{
    let data=req2.response;
    let result2=JSON.parse(data)
    result2.forEach(country => {
        console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
        
    })};

//! Print the total population of countries using reduce function
const req3=new XMLHttpRequest();
req3.open("GET","https://restcountries.com/v3.1/all",true);
req3.send();
req3.onload=()=>{
    let data=req3.response;
    let result3=JSON.parse(data)
    const totalPopulation = result3.reduce((accumulator, country) => accumulator + country.population, 0);
        console.log(`Total Population of all countries: ${totalPopulation}`);
        
    };


// const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
//         console.log(`Total Population of all countries: ${totalPopulation}`);
//! Print the country that uses US dollars as currency.

const req4=new XMLHttpRequest();
req4.open("GET","https://restcountries.com/v3.1/all",true);
req4.send();
req4.onload=()=>{
    let data=req4.response;
    let result4=JSON.parse(data)
    const countryWithUSD = result4.find(country => country.currencies && country.currencies.USD);
    if (countryWithUSD) {
        console.log(`Country that uses US Dollar: ${countryWithUSD.name.common}`);
    } else {
        console.log("No country uses US Dollar as currency.");
    }
    };
