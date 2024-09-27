'use client';
import React, { useState } from 'react';
import { ModeToggle } from './theme-toggle';
import SelectLanguage from './SelectLanguage';
import Editor from '@monaco-editor/react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import { useTheme } from 'next-themes';
import { Button } from '@headlessui/react';
import { Play, Loader, TriangleAlert } from 'lucide-react';
import { compileCode } from '@/services/CompileCode';
import { initialCodeSnippets, supportedLanguages } from '@/constants/languages';

export default function EditorComponent() {
    const { theme } = useTheme();
    const [sourceCode, setSourceCode] = useState(initialCodeSnippets['javascript']);
    const [languageOption, setLanguageOption] = useState(supportedLanguages[0]);
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState([]);
    const [err, setErr] = useState(false);

    function handleOnchange(value) {
        if (value) {
            setSourceCode(value);
        }
    }

    function onSelect(value) {
        setLanguageOption(value);
        setSourceCode(initialCodeSnippets[value.language] || '');
    }

    async function executeCode() {
        setLoading(true);
        setErr(false);
        const requestData = {
            language: languageOption.language,
            version: languageOption.version,
            files: [
                {
                    content: sourceCode,
                },
            ],
        };
        try {
            const result = await compileCode(requestData);
            setOutput(result.run.output.split('\n'));
        } catch (error) {
            setErr(true);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    function handleFileUpload(event) {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const content = e.target.result;
                setSourceCode(content);
                setLanguageFromFile(file.name);
            };
            reader.readAsText(file);
        }
    }

    function setLanguageFromFile(fileName) {
        const extension = fileName.split('.').pop().toLowerCase();
        console.log('Uploaded file extension:', extension);
        const matchedLanguage = supportedLanguages.find(lang => lang.aliases.includes(extension));

        if (matchedLanguage) {
            console.log('Matched language:', matchedLanguage);
            setLanguageOption(matchedLanguage);
            setSourceCode(initialCodeSnippets[matchedLanguage.language] || '');
        } else {
            console.warn('Unsupported file type');
            alert('Unsupported file type. Please upload a valid file.');
        }
    }

    return (
        <div className="min-h-screen dark:bg-slate-900 rounded-2xl shadow-2xl py-6 px-8">
            <div className="flex items-center justify-between pb-3">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0">Zenith IDE</h2>
                <div className="flex items-center space-x-2">
                    <ModeToggle />
                    <div className="w-[230px]">
                        <SelectLanguage onSelect={onSelect} selectedLanguageOption={languageOption} />
                    </div>
                </div>
            </div>

            <div className="bg-slate-400 dark:bg-slate-950 p-3 rounded-2xl">
                <div className="dark:bg-slate-900">
                    <ResizablePanelGroup direction="horizontal" className="w-full rounded-lg border dark:bg-slate-900">
                        <ResizablePanel minSize={35} defaultSize={50}>
                            <div>
                                <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-6 py-2">
                                    <input
                                        type="file"
                                        className="cursor-pointer bg-white text-sm text-slate-700 file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                        onChange={handleFileUpload}
                                    />
                                </div>
                                <Editor
                                    theme={theme === 'dark' ? 'vs-dark' : 'vs-light'}
                                    height="90vh"
                                    value={sourceCode}
                                    onChange={handleOnchange}
                                    language={languageOption.language}
                                    options={{ padding: { top: 20, bottom: 20 } }}
                                />
                            </div>
                        </ResizablePanel>

                        <ResizableHandle withHandle />

                        <ResizablePanel minSize={35} defaultSize={50}>
                            <ResizablePanelGroup direction="vertical">
                                <ResizablePanel defaultSize={25}>
                                    <div className="space-y-3 bg-slate-300 dark:bg-slate-900 min-h-screen">
                                        <div className="flex items-center justify-between bg-slate-400 dark:bg-slate-950 px-6 py-2">
                                            <h2>Output</h2>
                                            {loading ? (
                                                <Button
                                                    disabled
                                                    size={'sm'}
                                                    className="flex p-3 rounded-lg items-center dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900"
                                                >
                                                    <Loader className="w-4 h-4 mr-2 animate-spin" />
                                                    <span>Running please wait...</span>
                                                </Button>
                                            ) : (
                                                <Button
                                                    onClick={executeCode}
                                                    size={'sm'}
                                                    className="flex p-3 rounded-lg items-center dark:bg-purple-600 dark:hover:bg-purple-700 text-slate-100 bg-slate-800 hover:bg-slate-900"
                                                >
                                                    <Play className="w-4 h-4 mr-2 " />
                                                    <span>Run</span>
                                                </Button>
                                            )}
                                        </div>

                                        <div className="px-6 space-y-2">
                                            {err ? (
                                                <div className="flex items-center space-x-2 text-red-500 border border-red-600 px-6 py-6">
                                                    <TriangleAlert className="w-5 h-5 mr-2 flex-shrink-0" />
                                                    <p className="text-xs">Failed to Compile the Code, Please try again!</p>
                                                </div>
                                            ) : (
                                                <>
                                                    {output.map((item, index) => (
                                                        <p className="text-sm" key={index}>
                                                            {item}
                                                        </p>
                                                    ))}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </ResizablePanel>

                                <ResizableHandle withHandle />

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
    );
}