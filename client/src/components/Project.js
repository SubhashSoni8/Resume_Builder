import React, { Component } from 'react'

class Project extends Component {

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

                    <h3 className="card-title">Certificates and Skills</h3>
                    <hr />
                </div>
                <form onSubmit={this.continue}>





                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>Certificates</b></h3>
                        </div>
                        <div className="col-lg-12 text-left">
                            <label>Certificates (Separate each Certificate with a space and a comma)*</label>
                            <input type="text" name="certificate" className="form-control" defaultValue={values.status === 1 ? '' : values.certificate} onChange={handleChange} required />
                        </div>


                    </div>


                    <br />



                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>Skills</b></h3>
                            <hr />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Skill 1*</label>
                            <input type="text" name="skill1" className="form-control" defaultValue={values.status === 1 ? '' : values.skill1} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>level(Basic/Intermediate/Advance)</label>
                            <input type="text" name="level1" className="form-control" defaultValue={values.status === 1 ? '' : values.level1} onChange={handleChange} />
                        </div>

                    </div>


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Skill 2*</label>
                            <input type="text" name="skill2" className="form-control" defaultValue={values.status === 1 ? '' : values.skill2} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>level(Basic/Intermediate/Advance)</label>
                            <input type="text" name="level2" className="form-control" defaultValue={values.status === 1 ? '' : values.level2} onChange={handleChange} />
                        </div>
                    </div>


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Skill 3*</label>
                            <input type="text" name="skill3" className="form-control" defaultValue={values.status === 1 ? '' : values.skill3} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>level(Basic/Intermediate/Advance)</label>
                            <input type="text" name="level3" className="form-control" defaultValue={values.status === 1 ? '' : values.level3} onChange={handleChange} />
                        </div>
                    </div>


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Skill 4*</label>
                            <input type="text" name="skill4" className="form-control" defaultValue={values.status === 1 ? '' : values.skill4} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>level(Basic/Intermediate/Advance)</label>
                            <input type="text" name="level4" className="form-control" defaultValue={values.status === 1 ? '' : values.level4} onChange={handleChange} />
                        </div>
                    </div>


                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Skill 5*</label>
                            <input type="text" name="skill5" className="form-control" defaultValue={values.status === 1 ? '' : values.skill5} onChange={handleChange} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>level(Basic/Intermediate/Advance)</label>
                            <input type="text" name="level5" className="form-control" defaultValue={values.status === 1 ? '' : values.level5} onChange={handleChange} />
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

export default Project;
