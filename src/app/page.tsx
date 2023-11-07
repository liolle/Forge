import React from "react";
import { TEMPLATE_VERSION } from "@/src/types";
import Image from "next/image";
import { cn } from "../lib/utils";
import CButton from "../components/client/CButton";

export default function Home() {
    return (
        <main className="flex min-h-screen  flex-col items-center justify-between gap-2 bg-white-main p-2">
            <section className=" flex h-full w-full select-none justify-center rounded-lg border-2 border-dashed border-blue-main px-2 py-1">
                <span className=" hover:text-blue-main">
                    <a
                        href="https://github.com/liolle/Nextjs-template"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Nextjs Template {TEMPLATE_VERSION}
                    </a>
                </span>
            </section>

            <section className=" flex flex-1 flex-col items-center justify-center gap-5 ">
                <Image
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3NZMfe-sJp_4h82eiU28rOetc46skyCDOw&usqp=CAU`}
                    alt="ICON"
                    width={30}
                    height={30}
                ></Image>
                <CButton>Refresh</CButton>
            </section>
            <section className=" flex flex-1 items-center justify-center gap-1 ">
                <div
                    className={cn(
                        " w-50 flex h-20 flex-col justify-between rounded-lg bg-red-600",
                        "bg-neutral-200 px-2 py-1"
                    )}
                >
                    <span className=" hover:text-blue-main">
                        <a
                            href="https://www.npmjs.com/package/tailwind-merge"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            tailwind-merge
                        </a>
                    </span>
                    <span className=" hover:text-blue-main">
                        <a
                            href="https://www.npmjs.com/package/clsx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            clsx
                        </a>
                    </span>
                </div>
            </section>
        </main>
    );
}
