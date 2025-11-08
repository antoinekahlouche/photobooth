Bun.serve({
    port: 80,
    async fetch(req) {
        const path = new URL(req.url).pathname;

        if (path === "/") return new Response(Bun.file("./index.html"));

        if (path === "/bg.png") return new Response(Bun.file("./bg.png"));

        if (req.method === "POST" && path === "/upload") {
            const formdata = await req.formData();
            const file = formdata.get("file");
            if (!file) return new Response("No file provided", { status: 400 });
            await Bun.write("./data/" + Date.now() + "-" + file.name, file);
            return new Response("Success");
        }

        return new Response("Page not found", { status: 404 });
    },
});
