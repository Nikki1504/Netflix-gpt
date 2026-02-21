import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/gpt", async (req, res) => {
  try {
    const { query } = req.body;
    const gptResponse = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a movie recommendation assistant.",
        },
        { role: "user", content: query },
      ],
    });

    const message = gptResponse.choices[0].message.content;
    res.json({ reply: message });
  } catch (error) {
    console.error("🔥 GPT Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 5050;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
