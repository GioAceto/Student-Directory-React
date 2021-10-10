import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Student Directory</h1>
      </header>
      <div className="app-container-inner">
        <div className="modify-container">
          <TopContainer />
          <AddStudentForm />
          <UpdateStudentForm />
          <DeleteStudentForm />
        </div>
      </div>
    </div>
  )
}

const TopContainer = () => {
  return (
    <div className="top-container">
      <h2>Directory Editor</h2>
      <ChoiceContainer />
    </div>
  )
}

const ChoiceContainer = () => {
  return (
    <div className="choice-container">
      <label>I want to:</label>
      <select id="select">
        <option value="add">add a student</option>
        <option value="update">edit a student</option>
        <option value="delete">delete a student</option>
      </select>
    </div>
  )
}

const AddStudentForm = () => {
  return (
    <form className="addForm">
      <div className="input-container">
        <label for="add-name">Name:</label>
        <input type="text" id="add-name" name="name" />
        <label for="add-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="add-age" name="age" />
        <label for="add-address">Address:</label>
        <input type="text" id="add-address" name="address" />
        <label for="add-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="add-gpa" name="gpa" />
        <label for="add-major">Major:</label>
        <input type="text" id="add-major" name="major" />
        <label for="add-image">Image:</label>
        <input type="text" id="add-image" name="image" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

const UpdateStudentForm = () => {
  return (
    <form className="updateForm">
      <div className="input-container">
        <label for="update-name">Name:</label>
        <input type="text" id="update-name" name="name" />
        <label for="update-age">Age:</label>
        <input type="number" step="1" min="14" max="100" id="update-age" name="age" />
        <label for="update-address">Address:</label>
        <input type="text" id="update-address" name="address" />
        <label for="update-gpa">GPA:</label>
        <input type="number" step="0.01" min="0" max="4.00" id="update-gpa" name="gpa" />
        <label for="update-major">Major:</label>
        <input type="text" id="update-major" name="major" />
        <label for="update-image">Image:</label>
        <input type="text" id="update-image" name="image" />
        <label for="update-id">Student ID:</label>
        <input type="text" maxlength="6" id="update-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}

const DeleteStudentForm = () => {
  return (
    <form className="deleteForm">
      <div className="input-container">
        <label for="delete-id">Student ID:</label>
        <input type="text" maxlength="6" id="delete-id" />
      </div>
      <div className="submit-container">
        <button className="submit" type="submit">Submit Change</button>
      </div>
    </form>
  )
}




ReactDOM.render(<App />, document.getElementById('root'));
