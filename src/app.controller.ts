import { Controller, Post, Res, Body, Get } from "@nestjs/common";
import { Response } from "express";
import * as jsPDF from "jspdf";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
