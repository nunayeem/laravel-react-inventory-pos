import React, { useState } from "react";
import BreadCrumb from "../../partials/BreadCrumb";
import { Link } from "react-router-dom";
import axios from "axios";
import Config from "../../../config/Config";
import { toast, ToastContainer } from "react-toastify";


const CategoryAdd = () => {
  const [inputs, setInputs] = useState({
    status: 1,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if(name == 'name'){
      let slug = value
      slug = slug.toLowerCase()
      slug = slug.replaceAll(' ', '-')
      setInputs((values) => ({ ...values, slug: slug }));
    }
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlePhoto = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();

    reader.onloadend = () => {
      setInputs((values) => ({ ...values, photo: reader.result }));
    };

    reader.readAsDataURL(file);
  };

  const handleCategoryCreate = () => {
    setIsLoading(true); // Start loading before API call

    axios
      .post(`${Config.BASE_URL}/category`, inputs, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {

        toast.success(`${res.data.message}`, {
          theme: 'colored'
        })

        setIsLoading(false); 

        setErrors({});
      })
      .catch((error) => {
        setIsLoading(false); 

        if(error.response?.status === 400){
          toast.error("API route not found! Check your Laravel routes.");
          return
        }

        if(error.response?.status === 500){
          toast.error('Internal Server Error')
          console.log(error.response.data.message);
          setErrors({})
          return
        }

        if (error.response?.status === 401) {
            toast.error("Unauthorized! Please login again.", {
              theme: "colored",
            });
            return;
        }

        // Laravel validation errors
        if (error.response?.status === 422) {
          setErrors(error.response.data.errors);
          return;
        }

        console.log(error.response?.data || error);
        
      });
  };


  return (
    <div>
      <ToastContainer/>
      <BreadCrumb title={"Add Category"} />
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header flex">
              <div className="d-flex align-items-center justify-content-between">
                <h5>Add Category</h5>
                <Link to={"/category"} className="btn btn-primary">
                  List
                </Link>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                {/* Name */}
                <div className="col-lg-6 mt-2">
                  <label className="form-label">Name</label>
                  <input
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={inputs.name || ""}
                    name="name"
                    onChange={handleInput}
                    type="text"
                    placeholder="Enter Category Name"
                  />

                  {
                    errors.name ? (
                      <div className="invalid-feedback">
                        {errors.name[0]}
                      </div>
                    ) : ''
                  }
                </div>

                {/* Slug */}
                <div className="col-lg-6 mt-2">
                  <label className="form-label">Slug</label>
                  <input
                    className={`form-control ${errors.slug ? "is-invalid" : ""}`}
                    value={inputs.slug || ""}
                    name="slug"
                    onChange={handleInput}
                    type="text"
                    placeholder="Enter Slug"
                  />

                  {
                    errors.slug && (
                    <div className="invalid-feedback">
                      {errors.slug[0]}
                    </div>
                    )
                  }
                </div>

                {/* Serial */}
                <div className="col-lg-6 mt-2">
                  <label className="form-label">Serial</label>
                  <input
                    className={
                      errors.serial ? "form-control is-invalid" : "form-control"
                    }
                    value={inputs.serial || ""}
                    name="serial"
                    onChange={handleInput}
                    type="number"
                    placeholder="Enter Serial Number"
                  />

                  {
                    errors.serial && (
                      <div className="invalid-feedback">
                        {
                          errors.serial[0]
                        }
                      </div>
                    )
                  }
                </div>

                {/* Status */}
                <div className="col-lg-6 mt-2">
                  <label className="form-label">Status</label>
                  <select
                    className={`form-control ${errors.status ? 'is-invalid' : ''}`}
                    value={inputs.status}
                    name="status"
                    onChange={handleInput}
                  >
                    <option disabled>Select Status</option>
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </select>
                </div>

                {/* Description */}
                <div className="col-lg-6 mt-2">
                  <label className="form-label">Description</label>
                  <textarea
                    className={
                      errors.description
                        ? "form-control is-invalid"
                        : "form-control"
                    }
                    value={inputs.description || ""}
                    name="description"
                    onChange={handleInput}
                    placeholder="Enter Description"
                  ></textarea>
                </div>

                {/* Photo Upload */}
                <div className="col-lg-6 mt-2">
                  <label className="form-label">Photo</label>
                  <input
                    className={
                      errors.photo ? "form-control is-invalid" : "form-control"
                    }
                    type="file"
                    name="photo"
                    onChange={handlePhoto}
                    accept="image/*"
                  />

                  {/* Preview */}
                  {inputs.photo && (
                    <div className="mt-2">
                      <img
                        src={inputs.photo}
                        alt="Preview"
                        style={{ height: "100px", borderRadius: "5px" }}
                      />
                    </div>
                  )}
                </div>
              </div>

              <button
                className="btn btn-primary mt-2"
                disabled={isLoading}
                onClick={handleCategoryCreate}
                dangerouslySetInnerHTML={{
                  __html: isLoading
                    ? '<span class="spinner-border spinner-border-sm"></span> Saving...'
                    : "Add Category",
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdd;
