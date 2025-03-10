const Data = require("../models/Data");
const fs = require("fs");
const csv = require("csv-parser");

const getAllData = async (req, res) => {
  try {
    const data = await Data.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching data", error: error.message });
  }
};

const uploadData = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    await Data.deleteMany({});

    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => results.push({ data }))
      .on("end", async () => {
        try {
          await Data.insertMany(results);
          fs.unlinkSync(req.file.path);
          res.json({
            message: "File processed successfully",
            count: results.length,
          });
        } catch (error) {
          res
            .status(500)
            .json({ message: "Error saving data", error: error.message });
        }
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error processing file", error: error.message });
  }
};

module.exports = {
  getAllData,
  uploadData,
};
