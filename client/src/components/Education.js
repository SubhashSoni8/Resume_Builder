import React, { Component } from 'react'

export default class Education extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (

            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>

                    



                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_school} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year*</label>
                            <input type="text" name="edu1_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_year} onChange={handleChange} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>CGPA*</label>
                            <input type="text" name="edu1_cgpa" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_cgpa} onChange={handleChange} required/>
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Qualification*</label>
                            <input type="text" name="edu1_qualification" className="form-control" defaultValue={values.status === 1 ? '' : values.edu1_qualification} onChange={handleChange} required />
                        </div>
                    </div>


                    <br />

                    


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>School</label>
                            <input type="text" name="edu2_school" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_school} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>12th Passing Year</label>
                            <input type="text" name="edu2_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_year} onChange={handleChange} />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>12th Percentage</label>
                            <input type="text" name="edu2_percent" className="form-control" defaultValue={values.status === 1 ? '' : values.edu2_percent} onChange={handleChange} />
                        </div>

                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>10th Passing Year</label>
                            <input type="text" name="edu3_year" className="form-control" defaultValue={values.status === 1 ? '' : values.edu3_year} onChange={handleChange} />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>10th Percentage</label>
                            <input type="text" name="edu3_percent" className="form-control" defaultValue={values.status === 1 ? '' : values.edu3_percent} onChange={handleChange} />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                        <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                        <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>
                    </div>
                    <br />

                </form>

            </div>
        )
    }
}
