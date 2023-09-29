let input = document.querySelector
("#cpf")
// querySelector: tag, id, classe
// para id e classe utilixar a mesma notação usada pelo css
// () função anônima
// => arrow function
// function nome( )
//{

//}
input.addEventListener("keypress", () =>
{
    let inputlenght = input.value.length

    if(inputlenght==2 || inputlenght==6){
        input.value+="."
    }
    if (inputlenght==10)
    
    {
        input.value+="/"
    }
    if(inputlenght==15){
        input.value+="-"
    }
})