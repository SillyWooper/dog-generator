// Pegar foto dos cãozinhos
async function getPhoto() {

    try {

        const response = await fetch('https://dog.ceo/api/breeds/image/random')

        if(!response.ok){

            throw new Error("Ta dando merda legal")

        }

        const data = await response.json()
        const linkIMG = data.message
        const imgElement = document.getElementById('dogImg')

        imgElement.src = linkIMG
        imgElement.style.display = 'block'


    } catch (error) {

        console.log(error)

    }
}