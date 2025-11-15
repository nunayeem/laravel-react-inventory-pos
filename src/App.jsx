import './assets/css/styles.css'
import '@bootstrap/dist/css/bootstrap.min.css'
import '@bootstrap/dist/js/bootstrap.bundle'
import Footer from './components/partials/Footer';
import Nav from './components/partials/Nav';
import Sidebar from './components/partials/Sidebar';

function App() {

  return (
    <>
      <Nav/>
      <div id="layoutSidenav">
        <Sidebar/>

        <div id="layoutSidenav_content">
          <main>
              <div className="container-fluid px-4">
                  <h1 className="mt-4">Dashboard</h1>
                  <ol className="breadcrumb mb-4">
                      <li className="breadcrumb-item active">Dashboard</li>
                  </ol>
                  <div className="row">
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-primary text-white mb-4">
                              <div className="card-body">Primary Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-warning text-white mb-4">
                              <div className="card-body">Warning Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-success text-white mb-4">
                              <div className="card-body">Success Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-xl-3 col-md-6">
                          <div className="card bg-danger text-white mb-4">
                              <div className="card-body">Danger Card</div>
                              <div className="card-footer d-flex align-items-center justify-content-between">
                                  <a className="small text-white stretched-link" href="#">View Details</a>
                                  <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-area me-1"></i>
                                  Area Chart Example
                              </div>
                              <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                          </div>
                      </div>
                      <div className="col-xl-6">
                          <div className="card mb-4">
                              <div className="card-header">
                                  <i className="fas fa-chart-bar me-1"></i>
                                  Bar Chart Example
                              </div>
                              <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                          </div>
                      </div>
                  </div>
                  <div className="card mb-4">
                      <div className="card-header">
                          <i className="fas fa-table me-1"></i>
                          DataTable Example
                      </div>
                      <div className="card-body">
                          <table id="datatablesSimple">
                              <thead>
                                  <tr>
                                      <th>Name</th>
                                      <th>Position</th>
                                      <th>Office</th>
                                      <th>Age</th>
                                      <th>Start date</th>
                                      <th>Salary</th>
                                  </tr>
                              </thead>
                              <tfoot>
                                  <tr>
                                      <th>Name</th>
                                      <th>Position</th>
                                      <th>Office</th>
                                      <th>Age</th>
                                      <th>Start date</th>
                                      <th>Salary</th>
                                  </tr>
                              </tfoot>
                              <tbody>
                                  <tr>
                                      <td>Tiger Nixon</td>
                                      <td>System Architect</td>
                                      <td>Edinburgh</td>
                                      <td>61</td>
                                      <td>2011/04/25</td>
                                      <td>$320,800</td>
                                  </tr>
                                  <tr>
                                      <td>Garrett Winters</td>
                                      <td>Accountant</td>
                                      <td>Tokyo</td>
                                      <td>63</td>
                                      <td>2011/07/25</td>
                                      <td>$170,750</td>
                                  </tr>
                                  <tr>
                                      <td>Ashton Cox</td>
                                      <td>Junior Technical Author</td>
                                      <td>San Francisco</td>
                                      <td>66</td>
                                      <td>2009/01/12</td>
                                      <td>$86,000</td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
