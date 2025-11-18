import { Helmet } from "react-helmet";

const BreadCrumb = (props) => {
  return (
    <div>
        <Helmet>
            <title>{props.title} | React POS</title>
        </Helmet>

      <h4 className="mt-4">Dashboard</h4>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active">{props.title}</li>
      </ol>
    </div>
  )
}

export default BreadCrumb
