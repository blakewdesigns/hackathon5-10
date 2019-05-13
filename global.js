parseDogs()

function parseDogs() {
    fetch('https://raw.githubusercontent.com/gabe1331/dog-api/master/db.json')
        .then((res) => res.json())
        .then((dogs) => {
            console.log(dogs)
            dogs.forEach(doggo => {
                let doggoDeets = `
                    <div class="dog-card">
                        <div class="dog-content">
                            <div>
                                <h3>${doggo.breed}</h3>
                                <p>${doggo.height + " " + doggo.weight}</p>
                                <div class="imgwrapper">
                                    <img src=${doggo.image} alt="doggo">
                                </div>
                                <p>${doggo.lifespan}</p>
                                <p>${doggo.bred_for}</p>
                            </div>
                        </div>
                    </div>`

                console.log(doggoDeets)
                document.querySelector("#dogsWrapper").innerHTML += doggoDeets
            })
        })
}