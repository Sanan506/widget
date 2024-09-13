import React from "react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import { getStoredMessages } from '~/server/fileOperations.server';
import { useLoaderData } from "@remix-run/react";

// Temporary route to see the chat UI in the browser

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function Widget() {
  const content = useLoaderData<typeof loader>();

  return (
    <div>
      <h2 className="mx-auto mb-12 w-80">Card component</h2>
      <div className="mx-auto w-80 bg-white rounded-lg shadow-xl flex flex-col h-400">
      <div className="flex-grow overflow-y-auto p-2">
            {content.map((item: {id: string, content: string}, index: number) => (
                <div
                    key={item.id}
                    style={{
                        marginBottom: '0.5rem',
                        padding: '0.5rem',
                        borderBottom: index < content.length - 1 ? '1px solid #e5e7eb' : 'none'
                    }}
                >
                    {item.content}
                </div>
            ))}
        </div>
    </div>
    </div>
  );
}

export const loader = async () => await getStoredMessages();


