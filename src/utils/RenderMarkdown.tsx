import ReactMarkdown from "react-markdown";

export function RenderMarkdown({ mdFile }: { mdFile: string }) {
    return (
        <ReactMarkdown>
            {mdFile}
        </ReactMarkdown>
    ); 
}