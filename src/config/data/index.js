const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://phatdeptrai:1LxvXKKlYL79oA82@mymonggodb.ef5hd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("connect successfully>>");
  } catch (error) {
    console.log("connect fail");
  }
}

module.exports = { connect };
