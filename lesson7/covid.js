let getData = async (city) => {
    let allData = await fetch("https://static.pipezero.com/covid/data.json?fbclid=IwAR0ZAK4Kw7s9G9kM0ptiX3lOEBnpA2ZY9gBDhGf4HEC8fE8cFfKu4NTEkSk")

    let data = await allData.json()



    renderData(data, city)
}

let renderData = (data, city) => {

    let locations = data.locations

    var arr = [].concat(locations)

    arr.filter((searchInput) => {
        if (searchInput.name === city) {
            console.log(searchInput)
            let name = searchInput.name
            let cases = searchInput.cases
            let death = searchInput.death
            let recovered = searchInput.recovered

            let domCovid = document.querySelector('.theme')

            let html = `
            <h2>${name}</h2>
            <h2>Cases : ${cases} </h2>
            <h2>Dead : ${death}</h2>
            <h2>Recovered : ${recovered}</h2>
            <img src="" alt="">
            <p></p>`

            domCovid.innerHTML = html
        }
    });


    if (city === 'internal') {
        let internalCases = data.total.internal.cases
        let internalDeath = data.total.internal.death
        let internalRecovered = data.total.internal.recovered

        let domCovid = document.querySelector('.theme')

        let html = `
        <h2>Internal</h2>
        <h2>Cases : ${internalCases} </h2>
        <h2>Dead : ${internalDeath}</h2>
        <h2>Recovered : ${internalRecovered}</h2>
        <img src="" alt="">
        <p></p>`

        domCovid.innerHTML = html

    } else if (city === 'world') {
        let worldCases = data.total.world.cases
        let worldDeath = data.total.world.death
        let worldRecovered = data.total.world.recovered

        let domCovid = document.querySelector('.theme')

        let html = `
            <h2>World</h2>
            <h2>Cases : ${worldCases} </h2>
            <h2>Dead : ${worldDeath}</h2>
            <h2>Recovered : ${worldRecovered}</h2>
            <img src="" alt="">
            <p></p>`

        domCovid.innerHTML = html
    }

}


let Search = document.getElementById("form")

Search.onsubmit = (e) => {
    e.preventDefault();

    let city = Search.city.value;


    getData(city)
}


