import SignOut from "@/src/components/client/buttons/SignOut";
import React from "react";

export default async function Home() {
    return (
        <main className="flex min-h-screen  flex-col items-center justify-between gap-2 bg-bgc text-content">
            <section className=" flex h-full w-full flex-1 items-center justify-center">
                <span>Home Protected</span>
                <SignOut />
            </section>
        </main>
    );
}
