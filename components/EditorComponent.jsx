'use client'
import React from "react";
import { ModeToggle } from "./theme-toggle";
import SelectLanguage from "./SelectLanguage";
import Editor from '@monaco-editor/react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
import { useTheme } from "next-themes";
import { Button } from "@headlessui/react";
import { Play } from "lucide-react";

export default function EditorComponent () {

    const { theme } = useTheme();

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
            <div className="bg-slate-400 dark:bg-slate-950 p-3 rounded-2xl">
                <div className="dark:bg-slate-900">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="w-full rounded-lg border dark:bg-slate-900"
                    >
                    <ResizablePanel minSize={35} defaultSize={50}>
                    <Editor theme={theme === "dark" ? "vs-dark" : "vs-light"} height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel minSize={35} defaultSize={50}>
                        <ResizablePanelGroup direction="vertical">
                        <ResizablePanel defaultSize={25}>
                            <div className="space-y-3 bg-slate-300 dark:bg-slate-900 min-h-screen">
                                <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-6 py-2">
                                    <h2>Output</h2>
                                    <Button size={"sm"} className="dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900">
                                        <Play className="w-4 h-4 mr-2"/>
                                        <span>Run</span>
                                    </Button>
                                </div>
                                <div className="px-6">
                                    <h2>h</h2>
                                </div>
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle/>
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