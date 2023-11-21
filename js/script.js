document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.getElementById("input_textarea");
    let resultado = document.getElementById("output");

    fetch('./proyectos.json')
        .then(response => response.json())
        .then(data => {
            const proyectos = data;

            textarea.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    let divElement = document.createElement("div");
                    divElement.className = "linea";
                    event.preventDefault();
                    let textoIngresado = textarea.value.toLowerCase();
                    if (textoIngresado.includes("clear") || textoIngresado.includes("cls")) {
                        resultado.textContent = " ";
                    } else if (textoIngresado.includes("help")) {
                        divElement.innerHTML =
                            "<a href='github.com/Pedrop19/'>github.com/Pedrop19/</a>" +
                            "<span class='yellow'>" +
                            textoIngresado +
                            "</span><br><br>" +
                            "<span class='green'>clear o cls</span>: <span class='blue'>Limpia la consola<span><br><br>"
                            +  "<span class='green'>proyectos</span>: <span class='blue'>Muestra los proyectos disponibles<span>";
                    } else if (textoIngresado.includes("proyectos")) {
                        resultado.textContent = " ";
                        divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/</a>" +
                            "<span class='yellow'>" + textoIngresado + "</span><br><br>" +
                            "<span class='blue'>💻 Proyectos(escribe el comando para acceder al proyecto deseado):</span><br><br>" +
                            "<span class='green'>codificador</span><br><br>" +
                            "<span class='green'>cuentaatras</span><br><br>" +
                            "<span class='green'>millionarios</span><br><br>" +
                            "<span class='green'>calendario</span><br><br>" +
                            "<span class='green'>cuadro</span><br><br>" +
                            "<span class='green'>animacion</span><br><br>" +
                            "<span class='green'>blanconegro</span><br><br>" +
                            "<span class='green'>asteroids</span><br><br>" +
                            "<span class='green'>millionarios2</span><br><br>" +
                            "<span class='green'>notas</span><br><br>";                           
                    } else if (proyectos.hasOwnProperty(textoIngresado)) {
                        resultado.textContent = " ";
                        const proyecto = proyectos[textoIngresado];
                        divElement.innerHTML = `
                            <a href="${proyecto.github_link}">${proyecto.github_link}</a>
                            <span class="yellow">${textoIngresado}</span><br><br>
                            <table class="tabla">
                            <tr>
                                <th colspan="3"><span class="yellow" id="title">${proyecto.title}</span></th>
                            </tr>
                            <tr>
                                <td rowspan="3"><img src="${proyecto.image_url}" width="300px"></td>
                                <td colspan="3" align="center"><h3 class="blue">Descripción</h3></td>
                            </tr>
                            <tr>
                                <td><span>${proyecto.description}</span></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                <a class="blue" href="${proyecto.project_link}">Ir al proyecto</a>
                                </td>
                            </tr>
                            </table>
                        `;
                    } else {
                        divElement.innerHTML =
                            "<a href='github.com/Pedrop19/'>github.com/Pedrop19/</a>" +
                            "<span class='yellow'>" +
                            textoIngresado +
                            "</span><br><br>" +
                            "<span class='red'>comando desconocido</span><br>";
                    }
                    
                    textarea.value = "";
                    resultado.append(divElement);
                }
            });
        });
});
