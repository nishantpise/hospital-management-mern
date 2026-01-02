import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Root route FIRST
app.get("/", (req, res) => {
  res.send("Hospital Management Backend is running 🚀");
});

// ✅ Use Render port safely
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
