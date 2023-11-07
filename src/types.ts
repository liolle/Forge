/**
 * TYPES
 */
import * as z from "zod";

export const TEMPLATE_VERSION = "v0.0.8";

//-->Entity
export type UserType = {
    id: string;
    name: string;
    email: string;
    image: string;
    created_at: Date;
    following?: boolean;
};

export type GetUserInput = {
    self: string;
    field: "name" | "id" | "email" | "all";
    value?: string;
};

export type SQLInterfaceOptions = {
    mocked: boolean;
    mockValue: UserType[] | null;
};

//ZOD//

export const EmailRegistration = z.object({
    email: z.string().email()
});

export const EmailValidation = z.object({
    code: z.string().min(1, "Input needed")
});

//ERROR//

export type BaseError = {
    error: string;
    details: string;
};

//Type checking function//
export const isBaseError = (obj: unknown): obj is BaseError => {
    if (!obj) return false;
    return (
        typeof obj === "object" &&
        "error" in obj &&
        typeof obj.error === "string" &&
        "details" in obj
    );
};

export const isUserType = (obj: unknown): obj is UserType => {
    if (!obj) return false;
    return (
        typeof obj === "object" &&
        "name" in obj &&
        typeof obj.name === "string" &&
        "email" in obj &&
        typeof obj.email === "string" &&
        "image" in obj &&
        typeof obj.image === "string" &&
        "created_at" in obj &&
        typeof obj.created_at === "object" &&
        "following" in obj &&
        typeof obj.following === "boolean"
    );
};

export enum RequestErrorType {
    API_REQUEST_FAILED = "API request failed",
    API_AUTH_ERROR = "API authentication error",
    API_NOT_FOUND = "API resource not found",
    API_TIMEOUT = "API request timed out",
    API_RATE_LIMIT_EXCEEDED = "API rate limit exceeded",
    API_MISSING_ARG = "API request is missing some arguments",
    API_UNSUPPORTED_ACTION = "API actions not supported",

    DB_CONNECTION_ERROR = "Database connection error",
    DB_QUERY_FAILED = "Database query failed",
    DB_DUPLICATE_ENTRY = "Duplicate database entry",
    DB_RECORD_NOT_FOUND = "Database record not found",
    DB_TRANSACTION_ERROR = "Database transaction error"
}

export const NameObjects = [
    "Cascade",
    "Phoenix",
    "Nebula",
    "Horizon",
    "Mirage",
    "Dragon",
    "Odyssey",
    "Pinnacle",
    "Comet",
    "Aurora",
    "Eclipse",
    "Infinity",
    "Zenith",
    "Serenity",
    "Apple",
    "Banana",
    "Cherry",
    "Grape",
    "Kiwi",
    "Mango",
    "Orange",
    "Peach",
    "Pear",
    "Strawberry",
    "Watermelon",
    "Pineapple",
    "Blueberry",
    "Raspberry",
    "Blackberry",
    "Radiant",
    "Whispering",
    "Majestic",
    "Vibrant",
    "Enchanted",
    "Luminous",
    "Mystical",
    "Serene",
    "Wandering",
    "Cosmic",
    "Tranquil",
    "Energetic",
    "Celestial",
    "Harmonious",
    "Galactic",
    "Lion",
    "Tiger",
    "Elephant",
    "Zebra",
    "Giraffe",
    "Kangaroo",
    "Panda",
    "Koala",
    "Hippopotamus",
    "Dolphin",
    "Octopus",
    "Butterfly",
    "Hawk",
    "Owl",
    "Turtle"
];
