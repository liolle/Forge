import SignInButton from "@/src/components/client/buttons/SignIn";
import React from "react";

export default async function SignInPage() {
    return (
        <main className="flex min-h-screen  flex-col items-center justify-between gap-2 bg-bgc text-content">
            <section className=" flex h-full w-full flex-1 items-center justify-center">
                <SignInButton />
            </section>
        </main>
    );
}
