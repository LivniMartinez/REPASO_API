<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ajax</title>
</head>
<body>
    <h1>AJAX</h1>
    <h2>CONSULTA A The Rick and Morty API</h2>
    <form>
        <input type="text" id="inputNombre" placeholder="Nombre del personaje">
        <button type="submit">Buscar</button>
    </form>
    <br>
    <p id="estado"></p>
    <table border="1px solid">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Especie</th>
                <th>Genero</th>
                <th>Status</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody id="tablaResultados">
        </tbody>
    </table>
    <script src="script.js"></script>
</body>
</html>