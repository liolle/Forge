import { APIResponse, LoginBody } from "@/src/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const baseResponse: APIResponse = {
        self: request.nextUrl.href,
        version: "v0"
    };

    const body = (await request.json()) as LoginBody;

    if (!body.accessToken)
        return NextResponse.json(baseResponse, { status: 401 });

    const response = NextResponse.json(baseResponse, { status: 200 });
    // response.cookies.set("Forge_cookie", "test");
    response.cookies.set({
        name: "Forge_cookie",
        value: body.accessToken
    });

    return response;
}