import { MongoClient } from "mongodb";

// api/new-meetup
// only POST requests to this route would atually trigger this code in here

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // since this code will never end up on the cliend side, we don't need to wory about security problems such as env file
    const client = await MongoClient.connect(
      "mongodb+srv://fumina237:Na3579fumi@cluster0.s2s5v.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    // data in mongodb is just a object
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    // you can error handling under here as well
    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
