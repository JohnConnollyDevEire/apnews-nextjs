'use client'

import { useImmer } from 'use-immer'

const buttonStyle = {
  border: '1px solid #c4c4c4',
  backgroundColor: '#f0f0f0',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '5px',
  transition: 'all 0.15s ease-in-out',
}

export default function GraphqlPageObject({
  pageType,
  pageSlug,
  pageData,
  fullQuery,
}: {
  pageType: string
  pageSlug: string
  pageData: any
  fullQuery: string
}) {
  const [copied, setCopied] = useImmer<string | boolean>(false)

  const copyToClipboard = (text: string, title: string) => {
    navigator.clipboard.writeText(text)
    setCopied(title)
  }

  return (
    <div
      style={{
        backgroundColor: '#f0f0f0',
        color: '#000d8f',
      }}
    >
      <hr />
      <div style={{ padding: '20px' }}>
        <h2>
          {pageType} Server Side GraphQL for route: <code>{pageSlug}</code>
        </h2>

        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            style={buttonStyle}
            onClick={() =>
              copyToClipboard(JSON.stringify(pageData, null, 2), 'Page Data')
            }
          >
            Copy Page Data
          </button>
          <button
            style={buttonStyle}
            onClick={() => copyToClipboard(fullQuery, 'Full Query')}
          >
            Copy Full Query
          </button>

          {copied && (
            <>
              <div
                style={{
                  display: 'block',
                  width: '2px',
                  background: '#d8d8d8',
                  height: '25px',
                }}
              ></div>
              <div style={{ color: 'green' }}>
                Copied {copied} to clipboard.
              </div>
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-10">
          <pre className="whitespace-pre-wrap break-all">
            {JSON.stringify(pageData, null, 2)}
          </pre>
          <code>
            <pre className="whitespace-pre-wrap break-all">{fullQuery}</pre>
          </code>
        </div>
      </div>
      <hr />
    </div>
  )
}
