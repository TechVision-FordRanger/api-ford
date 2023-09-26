import { ValidationPipe } from "@nestjs/common";
import { CorsOptions } from "@nestjs/common/interfaces/external/cors-options.interface";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
      // const ops = ["http://localhost:56068"];
      // for (let i = 10000; i < 99999; i++) {
      //   ops.push("http://localhost:" + i);
      // }
      // const allowedOrigins = ops;
      // if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      //   callback(null, true);
      // } else {
      //   callback(new Error("Not allowed by CORS"));
      // }
      callback(null, true);
    },
    credentials: false,
  };

  const config = new DocumentBuilder()
    .setTitle("TechVision - FORD API")
    .setDescription("docs")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.enableCors(corsOptions);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000 || process.env.PORT);
}
bootstrap();
