document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.getElementById("input_textarea");
    let resultado = document.getElementById("output");

    fetch('http://localhost:3000/api/proyectos')
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
                            + "<span class='green'>js</span>: <span class='blue'>Muestra los proyectos en JavaScript<span><br><br>";
                    } else if (textoIngresado.includes("js")) {
                        resultado.textContent = " ";
                        divElement.innerHTML = "<a href='github.com/Pedrop19/'>github.com/Pedrop19/</a>" +
                            "<span class='yellow'>" + textoIngresado + "</span><br><br>" +
                            "<span class='blue'>💻 Proyectos(escribe el comando para acceder al proyecto deseado):</span><br><br>";
                        Object.keys(proyectos.js).forEach(proyectoKey => {
                            divElement.innerHTML += `<span class='green'>${proyectoKey}</span><br><br>`;
                        });
                    } else {
                        let proyectoEncontrado = null;

                        if (proyectos.js.hasOwnProperty(textoIngresado)) {
                            proyectoEncontrado = proyectos.js[textoIngresado];
                        }

                        if (proyectoEncontrado) {
                            resultado.textContent = " ";
                            divElement.innerHTML = `
                                <a href="${proyectoEncontrado.github_link}">${proyectoEncontrado.github_link}</a>
                                <span class="yellow">${textoIngresado}</span><br><br>
                                <table class="tabla">
                                <tr>
                                    <th colspan="3"><span class="yellow" id="title">${proyectoEncontrado.title}</span></th>
                                </tr>
                                <tr>
                                    <td rowspan="3"><img src="${proyectoEncontrado.image_url}" width="300px"></td>
                                    <td colspan="3" align="center"><h3 class="blue">Descripción</h3></td>
                                </tr>
                                <tr>
                                    <td><span>${proyectoEncontrado.description}</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td colspan="3">
                                        <a class="blue" href="${proyectoEncontrado.project_link}">Ir al proyecto</a>
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
                    }

                    textarea.value = "";
                    resultado.append(divElement);
                }
            });
        });
});
