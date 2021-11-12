//função 1
function validarcampos(){
    let data = document.getElementById("day").value;
    let mes = document.getElementById("month").value;
    let ano = document.getElementById("year").value;
    let cpf = document.getElementById("cpf").value;
    let cpfvalido = /^(([ 0-9] {3}.[0-9] {3}.[0-9] {3}-[0-9] {2}))$/;
    let atual = new Date();

    if((data >=1 && data <=31) && (mes >=1 && mes <=12) && (ano >= 1900 && ano <=atual)){

    }
    else{
         window.location.href = "autoriza.html";
         alert("Sua data de nascimento foi recusada verifique o campo")


    }
    if (cpfvalido.test(cpf)== false){
        cpf = cpf.replace(/\D/g, " ");
        if (cpf.length == 11) { //transformando para o padrão}
       cpf = cpf.replace(/(\d{3}))(\d))/, "$1.$2");
       cpf = cpf.replace(/(\d{3}))(\d))/, "$1.$2");      
       cpf = cpf.replace(/(\d{3}))(\d{1,2})$/, "$1.$2");
       let valorvalido = document.getElementById("cpf").value = cpf;


    }
    else {
        window.location.href = "autoriza.html";
        alert("Reveja seu CPF Inválido");


    }

}
//função 2
 var verify_form = () => {
     if (validarcampos() == false) {
         alert("Dados incompletos");
         return;

     }
     var obj_form = {
         name: "",

         nickname: "",

         birth_date: "",
         
         tean_id: "",

         sport: []

     }

     var campo_nome = document.getElementById("name");
     if (campo_nome.value == "") return null;
     obj_form.name = campo_nome.value;
     
     var campo_apelido = document.getElementById("nickname")
     obj_form,nickname = campo_apelido.value;

     var campo_dia = document.getElementById("day");
     var campo_mes = document.getElementById("month");
     var campo_ano = document.getElementById("year");
     
     obj_form.birth_date = campo_ano.value + "/" + campo_mes.value + "/" + campo_dia.value;

     var campo_disp_1 = document.getElementById("sport_1").checked;
     obj_form.tean_id = campo_tean_id.value;

     var campo_disp_2 = document.getElementById("sport_2").checked; 
     obj_form.tean_id = campo_tean_id.value;

     var campo_disp_3 = document.getElementById("sport_3");checked; 
     obj_form.tean_id = campo_tean_id.value;

     var campo_disp_4 = document.getElementById("sport_4");checked; 
     obj_form.tean_id = campo_tean_id.value;

     var campo_disp_5 = document.getElementById("sport_5");checked; 
     obj_form.tean_id = campo_tean_id.value;

     var campo_disp_6 = document.getElementById("sport_6");checked; 
     obj_form.tean_id = campo_tean_id.value;

     var campo_disp_7 = document.getElementById("sport_7");checked; 
     obj_form.tean_id = campo_tean_id.value;

    
    }
}
