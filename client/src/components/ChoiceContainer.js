import React, { useState } from 'react'
import { AddStudentForm, UpdateStudentForm, DeleteStudentForm } from '../forms'

const ChoiceContainer = () => {
  const [formResult, setFormResult] = useState(AddStudentForm)

  const handleFormChange = (event) => {
    if (event.target.value === "update") {
      setFormResult(UpdateStudentForm)
    } else if (event.target.value === "delete") {
      setFormResult(DeleteStudentForm)
    } else if (event.target.value === "add") {
      setFormResult(AddStudentForm)
    }
  }

  return (
    <>
      <div className="choice-container">
        <label>I want to:</label>
        <select id="select" onChange={handleFormChange}>
          <option value="add">add a student</option>
          <option value="update">edit a student</option>
          <option value="delete">delete a student</option>
        </select>
      </div>
      {formResult}
    </>
  )
}

export default ChoiceContainer