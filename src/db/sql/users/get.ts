import { sql } from "drizzle-orm";
import { dzClient } from "@/src/db/index";
import {
    BaseError,
    GetUserInput,
    RequestErrorType,
    SQLInterfaceOptions,
    UserType
} from "@/src/types";

const getAll = () => {
    const statement = sql`
    SELECT 
        u.name,
        u.email,
        u.image,
        u.created_at,
        CASE WHEN f2.self IS NOT NULL THEN true ELSE false END as following
    FROM "user" u
    `;

    return {
        query: statement,
        statement: statement
    };
};

export async function getAllUsers(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    input: GetUserInput,
    options?: SQLInterfaceOptions
): Promise<UserType[] | BaseError | null> {
    if (!input.value && input.field != "all")
        return {
            error: "Incorrect input combination",
            details: "Missing value when field in not 'all'"
        };

    if (options && options.mocked) return options.mockValue;
    const generatedQuery = getAll();

    try {
        const result = await dzClient.execute(generatedQuery.query);
        const users = transformUsers(result);

        return users;
    } catch (error) {
        return {
            error: RequestErrorType.DB_QUERY_FAILED,
            details: String(error)
        };
    }
}

function transformUsers(data: Record<string, unknown>[]): UserType[] {
    return data.map((record) => {
        const transformedRecord: UserType = {
            id: record.id as string,
            name: record.name as string,
            email: record.email as string,
            image: record.image as string,
            created_at: new Date(record.created_at as string),
            following: record.following as boolean
        };
        return transformedRecord;
    });
}
