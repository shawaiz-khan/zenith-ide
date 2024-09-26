'use client'
import React from "react";
import { ModeToggle } from "./theme-toggle";
import SelectLanguage from "./SelectLanguage";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"

export default function EditorComponent () {
    return (
        <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
            <div className="flex items-center justify-between pb-3">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Zenith IDE</h2>
                <div className="flex items-center space-x-2">
                    <ModeToggle />
                    <div className="w-[230px]">
                        <SelectLanguage />
                    </div>
                </div>
            </div>
            <div className="bg-slate-400 dark:bg-slate-950 p-3">
                <div className="dark:bg-slate-900">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="w-full rounded-lg border md:min-w-[450px]"
                    >
                    <ResizablePanel defaultSize={50}>
                        <div className="flex h-[200px] items-center justify-center p-6">
                        <span className="font-semibold">One</span>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={50}>
                        <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={25}>
                            <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Two</span>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel defaultSize={75}>
                            <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Three</span>
                            </div>
                        </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
                    
                </div>
            </div>
        </div>
    )
}