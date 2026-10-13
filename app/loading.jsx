import React from 'react'

function Loading() {
  return (
    <section
      className="mx-auto max-w-7xl px-5 py-10"
      aria-busy="true"
      aria-label="Mahsulotlar yuklanmoqda"
    >
      <div className="h-9 w-48 animate-pulse rounded-md bg-slate-200" />
      <div className="mt-2 mb-7 h-5 w-28 animate-pulse rounded-md bg-slate-200" />

      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <li
            key={i}
            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
          >
            <div className="aspect-square animate-pulse bg-slate-200" />

            <div className="flex flex-1 flex-col p-4">
              <div className="h-4 w-20 animate-pulse rounded bg-slate-200" />
              <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-200" />
              <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-slate-200" />

              <div className="mt-5 flex items-center justify-between">
                <div className="h-6 w-28 animate-pulse rounded bg-slate-200" />
                <div className="h-4 w-14 animate-pulse rounded bg-slate-200" />
              </div>

              <div className="mt-4 h-9 w-full animate-pulse rounded-lg bg-slate-200" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Loading