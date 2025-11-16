import React from 'react'

const BreadCrumb = (props) => {
  return (
    <div>
      <h1 className="mt-4">Dashboard</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">{props.title}</li>
      </ol>
    </div>
  )
}

export default BreadCrumb
