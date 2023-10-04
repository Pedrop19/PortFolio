document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.getElementById("input_textarea");
    let resultado = document.getElementById("output");

    textarea.addEventListener("keydown", function (event) {


        if (event.key === "Enter") {
            let divElement = document.createElement("div");
            divElement.className = "linea";
            event.preventDefault();
            let textoIngresado = textarea.value;
            if (textoIngresado == "clear" || textoIngresado == "cls") {
                resultado.textContent = " ";
            } else if (textoIngresado == "help") {
                divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/ </a>"
                    + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                    + "<span class='green'>proyectos</span>: <span class='blue'>Muestra una selección de mis proyectos más relevantes.<span><br><br>"
                    + "<span class='green'>clear o cls</span>: <span class='blue'>Limpia la consola<span>";
            } else if (textoIngresado == "proyectos") {
                resultado.textContent = " ";
                divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/ </a>"
                    + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                    + "<span class='blue'>💻 Proyectos(escribe el comando para acceder al proyecto deseado):</span><br><br>"
                    + "<span class='green'>codificador</span><br><br>"
                    + "<span class='green'>cuentaatras</span><br><br>"
                    + "<span class='green'>millionarios</span><br><br>"
                    + "<span class='green'>calendario</span><br><br>"
            } else if (textoIngresado == "codificador") {
                resultado.textContent = " ";
                divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/ </a>"
                    + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                    + "<table class='tabla'>"
                    + "<tr>"
                    +  "<th colspan='3'><span class='yellow' id='title'>🎖️ Codificador de Mensajes 🎖️<span></th>"
                    + "</tr>"
                    + "<tr>"
                    +  "<td rowspan='3'><img src='/img/codifi.PNG' width='300px'></td>"
                    +  "<td colspan='3' align='center'><h3 class='blue'>Descripción<h3></td>"
                    + "</tr>"
                    + "<tr>"
                    +  "<td><span>Un grupo de inteligencia militar desea codificar los mensajes secretos de tal forma que no puedan ser interpretados con una lectura directa, para lo cual han establecido las siguientes reglas:<br><br>"
                    + "<ul>"
                    +  "<li>El texto cifrado deberá contener sólo letras en mayúscula.</li><br>"
                    + "<li>Reemplazar cada letra por la que sigue según abecedario, excepto Z que se deberá reemplazar con la letra A.</li><br>"
                    + "<li>Reemplazar cada dígito encontrado por el siguiente número excepto el 9 que deberá ser reemplazado por el 0.</li><br>"
                    + "<li>El carácter blanco no se codifica.</li><br>"
                    + "<li>Una imagen que al hacer click sobre ella, se cambie por otra o se le añada un estilo css diferente.</li>"
                    + "</ul>"
                    + "</span></td>"
                    + "<td>"
                    + "</tr>"
                    + "<tr>"
                    + "<td colspan='3'>"
                    + "<a class='blue' href='https://pedrop19.github.io/CuentraAtras/'>Ir al proyecto</a>"
                    + "</td>"
                    + "</tr>"
                    + "</table>"
            } else if (textoIngresado == "cuentaatras") {
                resultado.textContent = " ";
                divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/ </a>"
                    + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                    + "<table class='tabla'>"
                    + "<tr>"
                    +  "<th colspan='3'><span class='yellow' id='title'>⏳ Cuenta Atrás ⏳<span></th>"
                    + "</tr>"
                    + "<tr>"
                    +  "<td rowspan='3'><img src='/img/cuentaatr.PNG' width='300px'></td>"
                    +  "<td colspan='3' align='center'><h3 class='blue'>Descripción<h3></td>"
                    + "</tr>"
                    + "<tr>"
                    +  "<td><span>Diseña una página web que muestre una cuenta atrás de los días, minutos y segundos que faltan para tu fecha de cumpleaños. Además, en función de la estación en la que nos encontremos:<br><br>"
                    + "<ul>"
                    +  "<li>Otoño: Empieza a finales de Septiembre.</li><br>"
                    + "<li>Invierno: Empieza a finales de Diciembre.</li><br>"
                    + "<li>Primavera: Empieza a finales de Marzo.</li><br>"
                    + "<li>Verano: Empieza a finales de Junio.</li><br>"
                    + "</ul>"
                    + "<span>Deberemos mostrar un fondo, imágenes y cualquier elemento extra característico de cada estación. El día de tu cumpleaños, estos elementos deberán ser característicos de un cumpleaños, como la imagen de una tarta, además, el contador deberá ocultarse y mostrar el mensaje: “¡Felicidades!”</span>"
                    + "</span></td>"
                    + "<td>"
                    + "</tr>"
                    + "<tr>"
                    + "<td colspan='3'>"
                    + "<a class='blue' href='https://pedrop19.github.io/CodificadorMensajes/'>Ir al proyecto</a>"
                    + "</td>"
                    + "</tr>"
                    + "</table>"
            }else if (textoIngresado == "millionarios") {
                resultado.textContent = " ";
                divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/ </a>"
                    + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                    + "<table class='tabla'>"
                    + "<tr>"
                    +  "<th colspan='3'><span class='yellow' id='title'>💸 Millionarios 💸<span></th>"
                    + "</tr>"
                    + "<tr>"
                    +  "<td rowspan='3'><img src='/img/mill.PNG' width='300px'></td>"
                    +  "<td colspan='3' align='center'><h3 class='blue'>Descripción<h3></td>"
                    + "</tr>"
                    + "<tr>"
                    +  "<td><span>Inicialmente la aplicación deberá mostrar un usuario como se muestra en la pantalla, se proporciona un método que genera un nombre aleatorio, sólo hay que generar su dinero, que será aleatorio con un máximo de 1.000.000. Diseñar las funcionalidades de los botones que aparecen en pantalla:<br><br>"
                    + "<ul>"
                    +  "<li>Añadir usuario: Añade debajo otro usuario aleatorio.</li><br>"
                    + "<li>Doblar el dinero de cada usuario.</li><br>"
                    + "<li>Mostrar millonarios, filtrará aquellos usuarios con dinero mayor a 1.000.000 (el resto desaparece).</li><br>"
                    + "<li>Ordenar por dinero, de mayor a menor.</li><br>"
                    + "<li>Calcular el dinero total.</li>"
                    + "</ul>"
                    + "</span></td>"
                    + "<td>"
                    + "</tr>"
                    + "<tr>"
                    + "<td colspan='3'>"
                    + "<a class='blue' href='https://pedrop19.github.io/Millionarios/'>Ir al proyecto</a>"
                    + "</td>"
                    + "</tr>"
                    + "</table>"
            } else if(textoIngresado == "calendario"){
                resultado.textContent = " ";
                divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/ </a>"
                + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                + "<span class='blue'>🔨 Actualmente en desarrollo 🔨</span>"
            } else {
                divElement.innerHTML = "<a>github.com/Pedrop19/ </a>"
                    + "<span class='yellow'>" + textoIngresado + "</span><br><br>"
                    + "<span class='red'>comando desconocido</span><br>";
            }

            textarea.value = "";
            resultado.append(divElement);


        }
    });

});