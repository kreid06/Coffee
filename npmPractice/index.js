const promise = require('bluebird');

const intitOptions = {
    promiseLib: promise,
};

const config = {
    host: 'localhost',
    port: 5432,
    database: 'super_awesome_application',
    user: 'kevin01'
};

const pgp = require('pg-promise')(intitOptions);

const db = pgp(config);

db.query('select * from restaurant').then((results) =>  {
    results.forEach(function (r) {
      console.log(r.id, r.name);
    });
  });