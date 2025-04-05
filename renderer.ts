import { createTRPCClient } from "@trpc/client";
import { ipcLink } from "trpc-electron/renderer";
import type { AppRouter } from "./main.ts";

const trpc = createTRPCClient<AppRouter>({ links: [ipcLink()] });

document
	.querySelector("[data-click=ping]")
	?.addEventListener("click", async () => {
		const display = document.querySelector("[data-display=pongs]");

		if (display instanceof HTMLElement) {
			console.log("attempting ping");
			display.innerHTML += `<br/>${await trpc.ping.query()}`;
		}
	});
