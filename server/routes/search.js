const routes = require("express").Router();

routes.post("/", async (req, res) => {
  const { searchTerm } = req.body;

  try {
    const ads = await ad.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: "$company",
      },
       {
        $match: {
          $or: [
            {"company.name": { $regex: searchTerm, $options: "i" },},
            { primaryText: { $regex: searchTerm, $options: "i" } },
            { headline: { $regex: searchTerm, $options: "i" } },
            { description: { $regex: searchTerm, $options: "i" } },
          ],
        },
      },
    ]);

    res.status(200).json(ads);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = routes;
