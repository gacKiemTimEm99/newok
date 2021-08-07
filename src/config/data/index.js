const mongoose = require("mongoose");
const address = "mongodb://localhost:27017/booking_ticket";
const addressClound =
  "mongodb+srv://phatdeptrai:1LxvXKKlYL79oA82@mymonggodb.ef5hd.mongodb.net/ticket_booking?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(addressClound, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connect successfully>>");
  } catch (error) {
    console.log("connect fail");
  }
}

module.exports = { connect };
