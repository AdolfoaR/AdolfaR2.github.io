function Calcular(){
    let Categ=parseInt(document.querySelector("#Categ").value);
    let Cantidad2 =parseInt(document.getElementById("Cantidad").value);
   let Descuento=0;
    switch (Categ) {
        case 1: Descuento=80; break;
        case 2: Descuento=50; break;
        case 3: Descuento=15; break;
    }

    
    let Result1 = Cantidad2 * 200;
    let Result2 = Result1 * Descuento /100;
    let Total = Result1-Result2;

    document.querySelector("#Total").innerHTML= "<h2>Total a pagar $"+Total+"</h2>" ;

   

}
