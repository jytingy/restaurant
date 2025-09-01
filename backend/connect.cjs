const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "./config.env" });

async function main() {
  const Db = process.env.ATLAS_URI;
  const client = new MongoClient(Db);

  try {
    await client.connect();

    // get all collections in "Journal" database
    const collections = await client.db("my_web").collections();

    collections.forEach((collection) =>
      console.log(collection.collectionName) 
    );

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main();
