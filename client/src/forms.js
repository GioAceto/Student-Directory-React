import React, { useState } from 'react'

export const AddStudentForm = () => {
  return (
    <form className="addForm">
      <div className="input-container">
        <label htmlFor="add-name">Name:</label>
        <input type="text" id="add-name" name="name" />
        <label htmlFor="add-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="add-age" name="age" />
        <label htmlFor="add-address">Address:</label>
        <input type="text" id="add-address" name="address" />
        <label htmlFor="add-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="add-gpa" name="gpa" />
        <label htmlFor="add-major">Major:</label>
        <input type="text" id="add-major" name="major" />
        <label htmlFor="add-image">Image:</label>
        <input type="text" id="add-image" name="image" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

export const UpdateStudentForm = () => {
  return (
    <form className="updateForm">
      <div className="input-container">
        <label htmlFor="update-name">Name:</label>
        <input type="text" id="update-name" name="name" />
        <label htmlFor="update-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="update-age" name="age" />
        <label htmlFor="update-address">Address:</label>
        <input type="text" id="update-address" name="address" />
        <label htmlFor="update-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="update-gpa" name="gpa" />
        <label htmlFor="update-major">Major:</label>
        <input type="text" id="update-major" name="major" />
        <label htmlFor="update-image">Image:</label>
        <input type="text" id="update-image" name="image" />
        <label htmlFor="update-id">Student ID:</label>
        <input type="text" maxLength="6" id="update-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

export const DeleteStudentForm = () => {
  return (
    <form className="deleteForm">
      <div className="input-container">
        <label htmlFor="delete-id">Student ID:</label>
        <input type="text" maxLength="6" id="delete-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}