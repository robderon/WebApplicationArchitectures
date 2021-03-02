const { MongoClient } = require('mongodb');
const DATABASE_NAME = 'test';
const DB_URI = "mongodb://mongows:27017/${DATABASE_NAME}";
const client = new MongoClient(DB_URI);
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // just a test to see if it's working
        let adminDb = client.db("admin")
        await adminDb.command({ ping: 1 });
        console.log("Connected successfully to server");
        // print list of databases available to console.
        let listdb = await  adminDb.command( { listDatabases: 1 } );
        console.log(listdb)

    } catch (e) {
        console.error(e);
    }
}
main().catch(console.error);
