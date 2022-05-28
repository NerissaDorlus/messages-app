import connectDb from "./connectDb.js";
// const collectionName = "affirmations";

//express method checking if request is valid
export const addAffirmations = async (req, res) => {
  if (!req.body || !req.body.message) {
    res.status(401).send("❌Invalid Request❌");
    return;
  }

  const db = connectDb();

  // prepare data
  const newAffirmation = {
    message: req.body.message,
  };
  try {
    const doc = await db.collection("affirmations").add(newAffirmation);
    res.status(201).send("Affirmation was added ✅" + doc.id);
  } catch (err) {
    //respond with error
    res.status(500).send(err);
  }
};
//get allRestaurants
export const getAllAffirmations = async (req, res) => {
  const db = connectDb();
  try {
    const snapshot = await db.collection("affirmations").get();
    const affirmationsArray = snapshot.docs.map((doc) => {
      let affirmation = doc.data();
      affirmation.id = doc.id;
      return affirmation;
    });
    res.send(affirmationsArray);
  } catch (err) {
    res.status(500).send(err);
  }
};
