const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',  // Sostituisci con l'host corretto se necessario
  user: 'alNodeServer',       // Sostituisci con il tuo nome utente
  password: 'PassNode78@x69'  // Sostituisci con la tua password
});

// Connessione al server MySQL
connection.connect((error) => {
  if (error) {
    console.error('Errore nella connessione al server MySQL: ' + error.stack);
    return;
  }
  console.log('Connessione al server MySQL avvenuta con successo.');

  // Query per ottenere l'elenco dei database
  connection.query('SHOW DATABASES', (error, results) => {
    if (error) {
      console.error('Errore nella query: ' + error.stack);
      return;
    }

    // I risultati contengono una serie di righe, ognuna con il nome del database
    console.log('Elenco dei database:');
    results.forEach((row) => {
      console.log(row.Database);
    });

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
