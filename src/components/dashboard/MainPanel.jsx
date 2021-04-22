import React from "react";
import Navbar from "./Navbar";

export default function MainPanel(props) {
  return (
    <React.Fragment>
      <div className="main-panel">
        <Navbar />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="header">
                    <h4 className="title">Email Statistics</h4>
                    <p className="category">Last Campaign Performance</p>
                  </div>
                  <div className="content">
                    <div
                      id="chartPreferences"
                      className="ct-chart ct-perfect-fourth"
                    ></div>

                    <div className="footer">
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> Open
                        <i className="fa fa-circle text-danger"></i> Bounce
                        <i className="fa fa-circle text-warning"></i>{" "}
                        Unsubscribe
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-clock-o"></i> Campaign sent 2 days
                        ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8">
                <div className="card">
                  <div className="header">
                    <h4 className="title">Users Behavior</h4>
                    <p className="category">24 Hours performance</p>
                  </div>
                  <div className="content">
                    <div id="chartHours" className="ct-chart"></div>
                    <div className="footer">
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> Open
                        <i className="fa fa-circle text-danger"></i> Click
                        <i className="fa fa-circle text-warning"></i> Click
                        Second Time
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-history"></i> Updated 3 minutes ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="card ">
                  <div className="header">
                    <h4 className="title">2014 Sales</h4>
                    <p className="category">All products including Taxes</p>
                  </div>
                  <div className="content">
                    <div id="chartActivity" className="ct-chart"></div>

                    <div className="footer">
                      <div className="legend">
                        <i className="fa fa-circle text-info"></i> Tesla Model S
                        <i className="fa fa-circle text-danger"></i> BMW 5
                        Series
                      </div>
                      <hr />
                      <div className="stats">
                        <i className="fa fa-check"></i> Data information
                        certified
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card ">
                  <div className="header">
                    <h4 className="title">Tasks</h4>
                    <p className="category">Backend development</p>
                  </div>
                  <div className="content">
                    <div className="table-full-width">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="checkbox">
                                <input id="checkbox1" type="checkbox" />
                                <label for="checkbox1"></label>
                              </div>
                            </td>
                            <td>
                              Sign contract for "What are conference organizers
                              afraid of?"
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Edit Task"
                                className="btn btn-info btn-simple btn-xs"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Remove"
                                className="btn btn-danger btn-simple btn-xs"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox">
                                <input id="checkbox2" type="checkbox" checked />
                                <label for="checkbox2"></label>
                              </div>
                            </td>
                            <td>
                              Lines From Great Russian Literature? Or E-mails
                              From My Boss?
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Edit Task"
                                className="btn btn-info btn-simple btn-xs"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Remove"
                                className="btn btn-danger btn-simple btn-xs"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox">
                                <input id="checkbox3" type="checkbox" />
                                <label for="checkbox3"></label>
                              </div>
                            </td>
                            <td>
                              Flooded: One year later, assessing what was lost
                              and what was found when a ravaging rain swept
                              through metro Detroit
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Edit Task"
                                className="btn btn-info btn-simple btn-xs"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Remove"
                                className="btn btn-danger btn-simple btn-xs"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox">
                                <input id="checkbox4" type="checkbox" checked />
                                <label for="checkbox4"></label>
                              </div>
                            </td>
                            <td>
                              Create 4 Invisible User Experiences you Never Knew
                              About
                            </td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Edit Task"
                                className="btn btn-info btn-simple btn-xs"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Remove"
                                className="btn btn-danger btn-simple btn-xs"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox">
                                <input id="checkbox5" type="checkbox" />
                                <label for="checkbox5"></label>
                              </div>
                            </td>
                            <td>Read "Following makes Medium better"</td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Edit Task"
                                className="btn btn-info btn-simple btn-xs"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Remove"
                                className="btn btn-danger btn-simple btn-xs"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="checkbox">
                                <input id="checkbox6" type="checkbox" checked />
                                <label for="checkbox6"></label>
                              </div>
                            </td>
                            <td>Unfollow 5 enemies from twitter</td>
                            <td className="td-actions text-right">
                              <button
                                type="button"
                                rel="tooltip"
                                title="Edit Task"
                                className="btn btn-info btn-simple btn-xs"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                type="button"
                                rel="tooltip"
                                title="Remove"
                                className="btn btn-danger btn-simple btn-xs"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="footer">
                      <hr />
                      <div className="stats">
                        <i className="fa fa-history"></i> Updated 3 minutes ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <nav className="pull-left">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
            <p className="copyright pull-right">
              &copy; 22/15/21{" "}
              <a href="http://www.creative-tim.com">Creative Tim</a>, made with
              love for a better web
            </p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
