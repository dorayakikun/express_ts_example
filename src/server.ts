import * as errorHandler from "errorhandler";

import { app } from "./app";

app.use(errorHandler());

const server = app.listen(app.get("port"), () => {
  /* eslint-disable */
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
  /* eslint-enable */
});

export default server;
