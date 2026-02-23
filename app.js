import express from "express";

import HttpError from "./middleware/HttpError.js";

const app = express();

app.use(express.json());

let taskList = [
  {
    id: 1,
    task: "learn",
    description: "you have to learn new thinks daily",
  },
  {
    id: 2,
    task: "practice",
    description: "you have practice daily",
  },
];

app.get("/taskList", (req, res) => {
  if (taskList.length <= 0) {
    return res.status(200).json("Your Task List Is Empty");
  }
  res
    .status(200)
    .json({ message: "task list data retrieved successfully", taskList });
});

// now getting data using specific id

app.get("", (req, res) => {
  const id = Number(req.params.id);

  const task = taskList.find((t) => t.id === id);

  if (!task) {
    return res.status(404).json("task data with this id not found");
  }
  res.status(200).json(task);
});


app.get("/", (req, res) => {
  res.status(200).json("Hello From Server");
});

//  undefined rout handling

app.use((req, res, next) => {
  next(new HttpError("requested route not found", 404));
});

//centralized error handling

app.use((error, req, res, next) => {
  if (res.headersSent) {
    next(error);
  }
  res.status(error.statusCode || 500).json({
    message:
      error.message || "internal server error please try again some later",
  });
});

const port = 5000;

app.listen(port, () => {
  console.log("Sever Listing On", port);
});
