import { Component } from "react";


export default class FormModal extends Component{

  render(){
    return(
      <form>
      <div className="container">
        <div className="row py-2 px-5">
          <input
            type="text"
            className="form-control"
            placeholder="digite seu nome"
          />
        </div>
        <div className="row py-2 px-5">
          <input
            type="text"
            className="form-control"
            placeholder="digite seu email"
          />
        </div>
        <div className="row px-5">
          <div className="col-md-6 py-3">
            <button
              type="button"
              className="btn btn-primary px-5"
            >
              enviar
            </button>
          </div>
        </div>
      </div>
    </form>
    )
  }
}