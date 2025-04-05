import path from "node:path";
import url from "node:url";

import { initTRPC } from "@trpc/server";
import { app, BrowserWindow } from "electron";
// this import causes the break
import { createIPCHandler } from "trpc-electron/main";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const trpc = initTRPC.create();
const router = trpc.router({ ping: trpc.procedure.query(() => "pong") });

app.whenReady().then(() => {
	const appWindow = new BrowserWindow({
		webPreferences: { preload: path.resolve(dirname, "preload.cjs") },
	});

	createIPCHandler({ router, windows: [appWindow] });
	appWindow.loadFile(path.resolve(dirname, "app.html"));
	appWindow.webContents.openDevTools();
});

export type AppRouter = typeof router;
