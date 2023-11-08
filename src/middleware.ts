/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "./types";

export async function middleware(request: NextRequest) {
    const forge_cookie = request.cookies.get("Forge_cookie")?.value;

    if (!forge_cookie)
        return NextResponse.redirect(`${process.env.ORIGIN}/signin`);

    const validateBody = {
        idToken: forge_cookie
    };

    const response = await fetch(`${process.env.ORIGIN}/api/auth/validate`, {
        method: "POST",
        body: JSON.stringify(validateBody)
    });

    if (response.status != 200)
        return NextResponse.redirect(`${process.env.ORIGIN}/signin`);

    return NextResponse.next();
}

export const config = {
    matcher: ["/home"]
};
