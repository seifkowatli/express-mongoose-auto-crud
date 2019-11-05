const connecDB = require("./config/db");
const app = require("./app");

// Connect to database
connecDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));