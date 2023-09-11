const express=express();
const app = express();

import OS from "os";

app.get("/", async (req, res) => {
    const status = {
      uptime: process.uptime(),
      message: "Server is running...",
      process_id: process.pid,
      date: new Date(),
      platform: OS.platform(),
      processor: OS.cpus()[0].model,
      architecture: OS.arch(),
      thread_count: OS.cpus().length,
      total_memory: `${(OS.totalmem() / 1e9).toFixed(2)} GB`,
      free_memory: `${(OS.freemem() / 1e9).toFixed(2)} GB`,
    };
  
    res.status(200).send(status);
  });

  const PORT=3000

  app.listen(PORT, console.log("Server is running at port : " + PORT));