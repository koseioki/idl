import ReactMarkdown from "react-markdown";
import Article from './article.md?raw';


export function TestPage() {
    return (
        <> 
            <head>
                <title>Test Page - Intersectional Design Lab</title>
            </head>
            <main id="main-content">
                <h1>Test Page</h1>
                <p>This is a test page.</p>
                <ReactMarkdown>
                    {Article}
                </ReactMarkdown>

         
            </main>
        </>
    );
}