// Importa el módulo 'mysql2'
const mysql = require('mysql2');

// Crea una conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: 'proyecto-final-dev-mydatabase-zcc6qq65kk4t.cd3etiwxzacx.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: '12345678',
    database: 'SD_restaurante'
});

// Conecta a la base de datos MySQL
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a la base de datos:', error);
        return;
    }
    console.log('Conexión a la base de datos establecida');

    // Aquí puedes realizar operaciones con la base de datos, como consultas SQL
    // o cualquier otra operación que necesites

    // Ejemplo de consulta SQL SELECT
    connection.query('SELECT * FROM Cliente', (error, results, fields) => {
        if (error) {
            console.error('Error al realizar la consulta:', error);
            return;
        }
        console.log('Resultados:', results);
    });

    // Cierra la conexión a la base de datos cuando hayas terminado
    connection.end();
});

