"use client";
import React, { MouseEvent } from "react";
import { Button } from "../../ui/button";
import { googleSignOut } from "@/src/services/firebase/auth";
import { useRouter } from "next/navigation";

const SignOut = () => {
    const router = useRouter();
    const handleSignOut = async (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        googleSignOut();

        await fetch("/api/auth/signout");
        router.push("/");
    };
    return <Button onClick={handleSignOut}> Sign out</Button>;
};

export default SignOut;
