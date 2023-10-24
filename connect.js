const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: '',
  password: '',
  database: '',
});

connection.connect((error) => {
  if (error) {
    console.error('Errore nella connessione al server MySQL:', error);
    return;
  }

  console.log('Connessione al server MySQL riuscita.');

  // Puoi iniziare a eseguire query o altre operazioni sul database qui

  // Esempio di query
  connection.query('SELECT * FROM developers', (error, results, fields) => {
    if (error) {
      console.error('Errore nella query:', error);
    } else {
      console.log('Risultati:', results);
    }

    // Chiudi la connessione al server MySQL quando hai finito
    connection.end();
  });
});
