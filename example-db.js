const mongoClient = require('mongodb').MongoClient;

const connectionString = 'mongodb+srv://<username>:<password>@cluster0.xs0zu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


mongoClient.connect(connectionUrl, async (err, client) => {
    if (err) throw err;

    await client.connect();

    await client.db(dbName).command({ ping: 1});
    console.log('Success!');

    client.close();
})