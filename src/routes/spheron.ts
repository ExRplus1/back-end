import express, { NextFunction, Request, Response } from 'express';
const { SpheronClient, ProtocolEnum } = require("@spheron/storage");
import dotenv from "dotenv"

dotenv.config()

const spheron = express.Router();

spheron.get("/initiate-upload/:bucketName", async (req, res, next) => {
  const SPHERON_TOKEN = process.env.SPHERON_TOKEN;
  console.log(SPHERON_TOKEN)
    try {
      console.log(req.params);
      const bucketName = req.params.bucketName;
      const protocol = ProtocolEnum.FILECOIN;
      const client = new SpheronClient({
        token: SPHERON_TOKEN,
      });
  
      const { uploadToken } = await client.createSingleUploadToken({
        name: bucketName,
        protocol,
      });
  
      res.status(200).json({
        uploadToken,
      });
    } catch (error) {
      console.error(error);
      next(error);
    }
  });

export default spheron;