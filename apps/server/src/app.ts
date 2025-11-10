import express, { Express } from "express";
import session from "express-session";
import morgan from "morgan";
import cors from "cors";
import passport from "./passport";
import router from "./routes";
import { SESSION_SECRET } from "./config";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.set("port", port);

app.use("/api", router);

export default app;
