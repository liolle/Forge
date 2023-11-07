// more module info:   https://www.typescriptlang.org/docs/handbook/2/modules.html
import { dzClient } from "./indexbis.js";

export const SETUP_QUERIES = [];

async function main() {
    console.log("SetUp started");

    for (const query of SETUP_QUERIES) {
        await dzClient.execute(query);
    }

    console.log("SetUp ended");
    process.exit(0);
}

main().catch((err) => {
    console.log(err);
    process.exit(0);
});
