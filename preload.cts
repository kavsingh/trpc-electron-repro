const { exposeElectronTRPC } = require("trpc-electron/main");

process.once("loaded", exposeElectronTRPC);
