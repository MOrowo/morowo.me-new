require('dotenv').config();
const { MongoClient } = require('mongodb');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster1.fjwos.mongodb.net/Cluster1?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Insert data in this format, { name: "value", link: "value"}
async function insertToDB(data) {
  // if the key already exist, try to random a new one
  client.connect(async (err) => {
    if (err) throw err;

    const collection = client.db('mapping').collection('link');

    await collection.insertOne(data);
    console.log('Successfully inserted data');

    client.close();
  });
}

async function findDataUsingKey(key) {
  return await new Promise((callback) => {
    let value = '';
    client.connect(async (err) => {
      if (err) throw err;

      const collection = client.db('mapping').collection('link');

      await collection.find({ name: key }).toArray(function (err, result) {
        try {
          value = result[0].link;
          callback(value);
        } catch (e) {
          if (e instanceof TypeError) {
            callback(null);
          }
        }
      });
      client.close();
    });
  });
}

// ;(async()=>{
//   console.log(await findDataUsingKey("8b34aj"))
// })()
export { findDataUsingKey, insertToDB };
