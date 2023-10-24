const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'alNodeServer', // Sostituisci con il tuo nome utente
  password: 'PassNode78@x69', // Sostituisci con la tua password
});

// Connessione al server MySQL
connection.connect((error) => {
  if (error) {
    console.error('Errore nella connessione al server MySQL: ' + error.stack);
    return;
  }
  console.log('Connessione al server MySQL avvenuta con successo.');

  // Query per creare un database
  connection.query('CREATE DATABASE IF NOT EXISTS hrdev', (error) => {
    if (error) {
      console.error('Errore nella creazione del database: ' + error.stack);
      return;
    }
    console.log('Database creato con successo.');

    // Sostituisci questa parte con le query per creare le tabelle
    // Esempio:
    connection.query('USE hrdev');
    connection.query(`
      CREATE TABLE IF NOT EXISTS developers (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255)
      )
    `);

    // Chiudi la connessione
    connection.end((error) => {
      if (error) {
        console.error('Errore nella chiusura della connessione: ' + error.stack);
        return;
      }
      console.log('Connessione al server MySQL chiusa.');
    });
  });
});
