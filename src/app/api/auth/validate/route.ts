import { validateToken } from "@/src/services/firebase/validate";
import { APIResponse, LoginBody } from "@/src/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const baseResponse: APIResponse = {
        self: request.nextUrl.href,
        version: "v0"
    };

    const body = (await request.json()) as LoginBody;
    console.log(body);

    if (!body.idToken) return NextResponse.json(baseResponse, { status: 401 });

    try {
        const isValidToken = await validateToken({ idToken: body.idToken });
        if (!isValidToken)
            return NextResponse.json(baseResponse, { status: 401 });
    } catch (error) {
        return NextResponse.json(baseResponse, { status: 401 });
    }

    const response = NextResponse.json(baseResponse, { status: 200 });

    return response;
}
