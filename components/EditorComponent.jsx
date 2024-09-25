import React from "react";
import { ModeToggle } from "./theme-toggle";

export default function EditorComponent () {
    return (
        <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
            <h2>Editor Component</h2>
            <ModeToggle />
        </div>
    )
}