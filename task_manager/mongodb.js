//crud opps

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task_manager";

// const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable");
    }
    // console.log("connected!!");
    const db = client.db(databaseName);

    db.collection("tasks")
      .deleteOne({
        description: "take out the trash",
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));

    // db.collection("users")
    //   .deleteMany({
    //     age: 2,
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => console.log(e));

    // db.collection("tasks")
    //   .updateMany({ completed: false }, { $set: { completed: true } })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("61e594a20f574f3553284340"),
    //     },
    //     {
    //       $set: { name: "Fin" },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((e) => {
    //     console.log(e.message);
    //   });

    // db.collection("users").findOne(
    //! how to fetch by id!
    //   { _id: new ObjectId("61e59c70b328a798eddda86a") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("unable to find user");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 2 })
    //   .count((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, tasks) => {
    //     console.log(tasks);
    //   });

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Ori",
    //     age: 23,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert");
    //     }

    //     console.log(result.insertedId, "this");
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Liad",
    //       age: 34,
    //     },
    //     {
    //       name: "Yarden",
    //       age: 30,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to return");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "empty/fill dishwasher",
    //       completed: true,
    //     },
    //     {
    //       description: "take out the trash",
    //       completed: false,
    //     },
    //     {
    //       description: "fold/do laundry",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert many items");
    //     }

    //     console.log(result.insertedIds);
    //   }
    // );
  }
);
