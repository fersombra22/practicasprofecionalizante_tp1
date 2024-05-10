let i= + prompt("ingrese un numero")||0
    if(i%1!=0){
        alert(i + " es un numero mo entereo. adios")
    }else{
        while(!(i>3)){
            alert(i)
            i=i+1
        }
        alert(i+"adios")
    }