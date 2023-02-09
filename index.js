const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/TASK_API_TEST", () => {
  console.log("Connected to Database successfully");
});

const tasks = require("./routes/task");
app.use(tasks);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
