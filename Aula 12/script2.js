let inputcnpj = document.querySelector
("#cnpj")

cnpj.addEventListener("keypress", () =>
{
    let cnpjlenght = cnpj.value.length

    if(cnpjlenght==2 || cnpjlenght==6){
        cnpj.value+="."
    }
    if (cnpjlenght==10)
    
    {
        cnpj.value+="/"
    }
    if(cnpjlenght==15){
        cnpj.value+="-"
    }
})