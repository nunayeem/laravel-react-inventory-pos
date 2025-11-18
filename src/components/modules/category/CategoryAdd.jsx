import React, { useState } from 'react'
import BreadCrumb from '../../partials/BreadCrumb'
import { Link } from 'react-router-dom'

const CategoryAdd = () => {
    const [inputs, setInputs] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState({})

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        
        setInputs(values => ({...values, [name] : value}))

        console.log(value)
    }

    const handleCategoryCreate = () => {
        setIsLoading(true)
        console.log(inputs)
        // setTimeout(setIsLoading(false), 5000)
    }
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
                <div className='row'>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                        <label for='name' className='form-label'>Name</label>
                        <input className={errors.name != undefined ? 'form-control is-invalid' : 'form-control'} value={inputs.value} id='name' onChange={handleInput} type="text" name='name' placeholder='Enter Category Name' />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mt-2">
                        <label for='slug' className='form-label'>Slug</label>
                        <input className={errors.slug != undefined ? 'form-control is-invalid' : 'form-control'} value={inputs.value} id='slug' onChange={handleInput} type="text" name='slug' placeholder='Enter Slug' />
                    </div>
                </div>

                <button className='btn btn-primary mt-2 center'
                    disabled={isLoading}
                    onClick={handleCategoryCreate}
                    dangerouslySetInnerHTML={{
                        __html: isLoading
                        ? '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Saving...'
                        : "Add Category",
                    }}
                >
                    
                </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default CategoryAdd
