import React from "react";
import { ModeToggle } from "./theme-toggle";
import SelectLanguage from "./SelectLanguage";

export default function EditorComponent () {
    return (
        <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
            <div className="flex items-center justify-between">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Zenith IDE</h2>
                <div className="flex items-center space-x-2">
                    <ModeToggle />
                    <div className="w-[230px]">
                        <SelectLanguage />
                    </div>
                </div>
            </div>
        </div>
    )
}