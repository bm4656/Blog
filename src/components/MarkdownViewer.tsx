import { Content } from 'next/font/google';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <ReactMarkdown className='prose lg:prose-xl' remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  );
}
