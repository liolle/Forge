"use client";
import React, { MouseEvent } from "react";
import { Button } from "../../ui/button";
import { googleSignIn } from "@/src/services/firebase/auth";
import { useRouter } from "next/navigation";

const SignInButton = () => {
    const router = useRouter();
    const handleSignIn = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const user = await googleSignIn();
        if (!user) return;

        const token = await user.getIdToken(true);

        const response = await fetch("/api/auth/signin", {
            method: "POST",
            body: JSON.stringify({ accessToken: token })
        });

        if (response.status != 200) return;

        router.push("/home");
    };
    return <Button onClick={handleSignIn}> Sign In</Button>;
};

export default SignInButton;
