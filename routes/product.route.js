const router = express.Router();
import express from "express";

import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from "../controllers/product.controller.js";

router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct);

export default router;