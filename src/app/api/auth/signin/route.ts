import { APIResponse, LoginBody } from "@/src/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const baseResponse: APIResponse = {
        self: request.nextUrl.href,
        version: "v0"
    };

    const body = (await request.json()) as LoginBody;

    if (!body.idToken) return NextResponse.json(baseResponse, { status: 401 });
    console.log("BODY TOKEN OK");

    const response = NextResponse.json(baseResponse, { status: 200 });
    response.cookies.set({
        name: "Forge_cookie",
        value: body.idToken,
        httpOnly: true,
        secure: true
    });

    return response;
}
