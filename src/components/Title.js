import React from 'react'

export default function Title({name,title}) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-title text-center">
        <h2 className="text-lowercase text-bright">
          {name} <strong>{title}</strong>
        </h2>
        <hr width="75%" />
      </div>
    </div>
  )
}
