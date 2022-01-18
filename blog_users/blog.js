const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blog";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("unable");
    }
    const db = client.db(databaseName);

    // db.collection("users")
    //   .insertMany([
    //     {
    //       name: "Liad",
    //       email: "liad@liad.com",
    //       posts: [],
    //     },
    //     {
    //       name: "Yarden",
    //       email: "yarden@yarden.com",
    //       posts: [],
    //     },
    //   ])
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));

    db.collection("comments")
      .insertOne({
        comment: "Another comment!",
        postId: ObjectId("61e6a2da1b0f79bff21c3d6d"),
        comment: "",
        userId: ObjectId("61e69c6e0d1a1356906cc3cd"),
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    // db.collection("posts")
    //   .insertMany([
    //     {
    //       title: "First post",
    //       content: "",
    //       userId: ObjectId("61e69c6e0d1a1356906cc3cd"),
    //       likes: [],
    //       comments: [],
    //     },
    //     {
    //       title: "Second post",
    //       content: "",
    //       userId: ObjectId("61e69c6e0d1a1356906cc3cd"),
    //       likes: [],
    //       comments: [],
    //     },
    //   ])
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
  }
);
