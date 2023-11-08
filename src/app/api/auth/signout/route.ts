import { APIResponse } from "@/src/types";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
    const baseResponse: APIResponse = {
        self: request.nextUrl.href,
        version: "v0"
    };
    const response = NextResponse.json(baseResponse, { status: 200 });
    response.cookies.delete("Forge_cookie");

    return response;
}

export async function POST(request: NextRequest) {
    const baseResponse: APIResponse = {
        self: request.nextUrl.href,
        version: "v0"
    };

    const cookieStore = cookies();
    cookieStore.delete("Forge_cookie");

    return NextResponse.json(baseResponse, { status: 200 });
}
