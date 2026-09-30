import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { speak } from '../lib/speech/tts'
import { Children, isValidElement, type ReactNode } from 'react'

function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node)
  if (Array.isArray(node)) return node.map(textOf).join('')
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children)
  return ''
}

const hasLatin = (s: string) => /[a-záéíóúñü]/i.test(s) && !/[一-鿿]/.test(s)

/** Markdown with GFM tables; bold Spanish text is tappable to hear it. */
export function Markdown({ children, className = '' }: { children: string; className?: string }) {
  return (
    <div className={`prose-oliva ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          strong: ({ children: c }) => {
            const t = textOf(Children.toArray(c))
            if (!hasLatin(t)) return <strong>{c}</strong>
            return (
              <strong role="button" tabIndex={0} className="cursor-pointer underline decoration-dotted decoration-2 underline-offset-4" onClick={() => speak(t)} title="点击朗读">
                {c}
              </strong>
            )
          },
          table: ({ children: c }) => (
            <div className="table-wrap">
              <table>{c}</table>
            </div>
          ),
          a: ({ children: c, href }) => (
            <a href={href} target="_blank" rel="noreferrer" className="font-bold text-primary-ink underline">
              {c}
            </a>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}
