import pg from "pg";

var conString =
  "postgres://qrfmxpkt:Gao2TzTgWc87uawC84o0sG04eJSqG205@salt.db.elephantsql.com/qrfmxpkt";

var client = new pg.Client(conString);

client.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  return console.error("Connected");
});

export default client;
