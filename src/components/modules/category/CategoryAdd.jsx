import React from 'react'
import BreadCrumb from '../../partials/BreadCrumb'
import { Link } from 'react-router-dom'

const CategoryAdd = () => {
  return (
    <div>
      <BreadCrumb title={'Add Category'} />
      <div className="row">

        <div className="col-md-12">
          <div className="card">
            <div className='card-header flex'>
                <div className='d-flex align-items-center justify-content-between'> 
                    <h5>Add Category</h5>
                    <Link to={'/category'} className='btn btn-primary'>List</Link>
                </div>
            </div>
            <div className="card-body">

            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryAdd
