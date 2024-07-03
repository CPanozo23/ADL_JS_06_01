/*const arreglo1 = [1,2,3,4,5]
let arreglo2 = arreglo1
arreglo2[0] = 5
console.log(arreglo1)*/

async function getRandomUser()
{
     const res = await fetch("https://randomuser.me/api")
     const data = await res.json()
     console.log(data);

     }
     
getRandomUser()

async function getRandomUserDOM()
{
    const email = document.querySelector(".email")
    const fullName = document.querySelector(".fullName")
    const phone = document.querySelector(".phone")
    const city = document.querySelector(".city")
    const imgPerson = document.querySelector(".imgPerson")
    const imgPerson2 = document.querySelector(".imgPerson2")

    try {
        const res = await fetch("https://randomuser.me/api")
        const data = await res.json()
        //console.log(data);
        email.innerHTML = data.results[0]['email']
        fullName.innerHTML = `${data.results[0]['name'].title} ${data.results[0]['name'].first} ${data.results[0]['name'].last}`
        phone.innerHTML = data.results[0]['phone']
        city.innerHTML = data.results[0]['location'].city
        imgPerson.innerHTML = data.results[0]['picture'].large
        imgPerson2.src=data.results[0]['picture'].large
        imgPerson2.alt=`${data.results[0]['name'].title} ${data.results[0]['name'].first} ${data.results[0]['name'].last}`
    } catch (error) {
        alert(error.message)
        alert(error.state)
        console.log(error)
        
    }
     
    }
     
getRandomUserDOM()

async function getDolar() {
    const res = await fetch('https://api.gael.cloud/general/public/monedas/USD')
    const data = await res.json()
    console.log(data)
}
getDolar()