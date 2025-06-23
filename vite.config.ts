import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import netlify from "@netlify/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
  server: {
    allowedHosts: ["5173-jjaijg-mycommercechecko-kzlkb54vgnp.ws-us120.gitpod.io",
      "8888-jjaijg-mycommercechecko-kzlkb54vgnp.ws-us120.gitpod.io"
    ]
  }
});
