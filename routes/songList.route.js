const router = express.Router();
import express from "express";

import {
  getSongList,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
  deleteAllSongs,
  updateNowPlaying,
  clearNowPlaying,
} from "../controllers/songList.controller.js";

router.get("/", getSongList);

router.get("/:id", getSongById);

router.post("/", createSong);

router.put("/:id", updateSong);

router.put("/start/:id", updateNowPlaying);

router.put("/stop", clearNowPlaying);

router.delete("/:id", deleteSong);

router.delete("/", deleteAllSongs);

export default router;
