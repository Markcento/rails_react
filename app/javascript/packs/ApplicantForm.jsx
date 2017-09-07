import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import AutoField from 'uniforms-bootstrap4/AutoField'
import AutoForm from 'uniforms-bootstrap4/AutoForm';
import ApplicationFormSchema from "./schemas/ApplicationFormSchema"
import SubmitField from 'uniforms-bootstrap4/SubmitField'

export default class ApplicantForm extends React.Component {
  render() {
    return(

      <AutoForm schema={ApplicationFormSchema}>

        <AutoField name="city" />

        <AutoField name="state" />
        <div className="super-special-class">
          <SubmitField className="super-special-class-with-suffix" />
        </div>
      </AutoForm>


    )
  }
};
