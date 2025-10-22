
//skapa variabel "jokeElement" som pekar på element med id "joke".
//skapa variabel "jokeBtn" som pekar på element med id "jokeBtn".
//skapa en function, "generateJokesom generate  skämt"  
//skapa ett obj "config " med inställningar för fetch;
//hämta skämt från Api och lägg den in i jokeElement



const jokeElement = document.querySelector("#joke");
const jokeBtn    = document.querySelector("#jokeBtn");
generateJoke()
function  generateJoke(){
const config ={
    headers :  {
     Accept: 'application/json',
    }
}
fetch('https://icanhazdadjoke.com', config)
.then((res) => res.json())

.then((data) => {
    
    jokeElement.innerHTML = data.joke;
});
}
jokeBtn.addEventListener("click", generateJoke);