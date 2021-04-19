import * as express from "express";
import { router } from "./api/infrastructure/router";
const app: express.Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CROS対応（というか完全無防備：本番環境ではだめ絶対）
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  }
);

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Start on port ${port}.`);
});
