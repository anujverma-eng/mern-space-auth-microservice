import app from "./app";
import { Config } from "./config";

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
