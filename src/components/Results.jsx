import React from 'react'

export default function Results({results}) {
  return (
    <div>
        {
            results.map((results)=>(
                <div key={results.id}>
                <h2>{results.original_title}</h2>
                </div>
            ))
        }
    </div>
  )
}
