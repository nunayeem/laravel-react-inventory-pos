import React, { useState, useEffect } from "react";
import BreadCrumb from "../../partials/BreadCrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Config from "../../../config/Config";
import CategoryPhotoModel from "../../partials/modals/CategoryPhotoModel";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CategoryList = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalPhoto, setModalPhoto] = React.useState('');

  const [categories, setCategories] = useState([]);
  const [meta, setMeta] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  // GET page from URL
  const queryParams = new URLSearchParams(location.search);
  const currentPage = queryParams.get("page") || 1;

  const getCategories = async (page = 1) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.get(`${Config.BASE_URL}/category?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setCategories(res.data.data);
      setMeta(res.data.meta);

      // Update URL
      navigate(`?page=${page}`, { replace: true });
    } catch (err) {
      console.error("Error fetching categories:", err);
      setError("Failed to load categories!");
    } finally {
      setLoading(false);
    }
  };

  const handleModalPhoto = (photo) => {
    setModalPhoto(photo);
    setModalShow(true);
  }

  useEffect(() => {
    getCategories(currentPage);
  }, [currentPage]);

  return (
    <div>
      <BreadCrumb title={"Category List"} />

      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-sm">
            <div className="card-header d-flex align-items-center justify-content-between">
              <h5 className="m-0">Category List</h5>
              <Link to={"/category/create"} className="btn btn-primary btn-sm">
                + Add Category
              </Link>
            </div>

            <div className="card-body">
              {/* Loading Skeleton */}
              {loading && (
                <table className="table table-striped table-hover table-bordered">
                  <tbody>
                    {[...Array(10)].map((_, i) => (
                      <tr key={i}>
                        <td colSpan="11">
                          <div
                            style={{
                              height: "25px",
                              background: "#e0e0e0",
                              borderRadius: "5px",
                              animation: "pulse 1.5s infinite",
                            }}
                          ></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {/* Error */}
              {error && <p className="text-danger text-center">{error}</p>}

              {/* Table Content */}
              {!loading && !error && (
                <>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Slug</th>
                          <th>Photo</th>
                          <th>Description</th>
                          <th>Serial</th>
                          <th>Status</th>
                          <th>Created By</th>
                          <th>Created At</th>
                          <th>Updated</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {categories.length > 0 ? (
                          categories.map((category, index) => (
                            <tr key={category.id}>
                              <td>{(currentPage - 1) * 10 + index + 1}</td>
                              <td>{category.name || "N/A"}</td>
                              <td>{category.slug}</td>
                              <td>
                                {category.photo ? (
                                  <img
                                    onClick={() => handleModalPhoto(category.photo)}
                                    src={category.photo}
                                    alt="Category"
                                    width="50"
                                    height="50"
                                  />
                                ) : (
                                  "No Image"
                                )}
                              </td>
                              <td>{category.description}</td>
                              <td>{category.serial}</td>
                              <td>
                                <span
                                  className={`badge bg-${
                                    category.status === "Active"
                                      ? "success"
                                      : "danger"
                                  }`}
                                >
                                  {category.status}
                                </span>
                              </td>
                              <td>{category.created_by}</td>
                              <td>{category.created_at}</td>
                              <td>{category.updated_at}</td>

                              <td>
                                <Link
                                  to={`/category/edit/${category.id}`}
                                  className="btn btn-sm btn-warning me-2"
                                >
                                  Edit
                                </Link>

                                <button
                                  onClick={() =>
                                    window.confirm("Are you sure?")
                                  }
                                  className="btn btn-sm btn-danger"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="11" className="text-center">
                              No categories found!
                            </td>
                          </tr>
                        )}
                      </tbody>

                      <tfoot>
                        <tr>
                          <th>Total Categories</th>
                          <th>{meta.total}</th>
                        </tr>
                      </tfoot>
                    </table>

                    <CategoryPhotoModel 
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      title="Category Photo"
                      photo={modalPhoto}
                      />
                  </div>

                  {/* Pagination */}
                  <div className="d-flex gap-2 mt-3">
                    {meta.links?.map((link, index) => (
                      <button
                        key={index}
                        disabled={!link.url}
                        className={`btn btn-sm ${
                          link.active ? "btn-primary" : "btn-outline-primary"
                        }`}
                        onClick={() => {
                          const page = link.url?.split("=")[1];
                          if (page) getCategories(page);
                        }}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Skeleton Animation Style */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
};

export default CategoryList;
