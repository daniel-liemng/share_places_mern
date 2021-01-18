const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./db");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Routes
app.get("/", (req, res) => res.send("API"));

app.use("/api/users", require("./routes/userRoute"));
app.use("/api/places", require("./routes/placeRoute"));

// Route Not Found middleware
const routeNotFoundMiddleware = require("./middleware/routeNotFoundMiddleware");
app.use(routeNotFoundMiddleware);

// Error handler middleware - Anonymous error
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
