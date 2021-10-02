let getData = async () => {
    let allData = await fetch("https://static.pipezero.com/covid/data.json?fbclid=IwAR0ZAK4Kw7s9G9kM0ptiX3lOEBnpA2ZY9gBDhGf4HEC8fE8cFfKu4NTEkSk")

    let data = await allData.json()
    
    console.log(data);

    renderData(data)
}

let renderData = (data) => {

    // let worldCase = data.total.world.cases
    // let worldDeath = data.total.world.death
    // let worldRecovered = data.total.world.recovered

    // let internalCase = data.total.internal.cases
    // let internalDeath = data.total.internal.death
    // let internalRecovered = data.total.internal.recovered

    let locations = data.locations
    let cases = data.locations.cases
    let death = data.locations.death
    let recovered = data.locations.recovered
    
    var arr = [ ['name', locations ]  ];
    console.log(arr);

    var obj = Object.fromEntries(arr);
    console.log(obj);



    // let arrayName = [data]

    // arrayName.filter((inputSearch) => {
    //     return inputSearch == inputSearch.name
    // })

    


    let domCovid = document.querySelector('.theme')

    let html = `
    <h2>${cases}</h2>
    <h2>Cases : ${death} </h2>
    <h2>Dead : ${death}</h2>
    <h2>Recovered : ${recovered}</h2>
    <img src="" alt="">
    <p></p>`

    domCovid.innerHTML = html
}


let Search = document.getElementById("form")

Search.onsubmit = (e) => {
    e.preventDefault();

    let city = Search.city.value;

    getData(city)
}
getData()



