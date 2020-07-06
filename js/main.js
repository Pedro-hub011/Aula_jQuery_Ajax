//alert("funcionou");
function consulta(){
    var cep = document.getElementById("cep").value;
    var url = "http://viacep.com.br/ws/" + cep +"/json/";
    console.log(url);
    $.ajax({
        url: url, 
        type: "GET",
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html(" CEP " + response.cep);
            $(".Cep").show();
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //alert(response.logradouro);    
        }
    })
}
$(function(){
    $(".Cep").hide();
})
