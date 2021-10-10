import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';

const students = [
  {
    name: 'Emily',
    age: '20',
    address: 'Salem, MA',
    gpa: '3.70',
    major: 'Biochemistry',
    image: 'emily.svg',
    id: '000001'
  },
  {
    name: 'Fiona',
    age: '21',
    address: 'Providence, RI',
    gpa: '3.82',
    major: 'Psychology',
    image: 'fiona.svg',
    id: '000002'
  },
  {
    name: 'Travis',
    age: '20',
    address: 'Keene, NH',
    gpa: '3.50',
    major: 'Mechanical Engineering',
    image: 'travis.svg',
    id: '000003'
  },
  {
    name: 'Chloe',
    age: '22',
    address: 'Bridgeport, CT',
    gpa: '3.28',
    major: 'Political Science',
    image: 'chloe.svg',
    id: '000004'
  },
  {
    name: 'Maya',
    age: '19',
    address: 'Boston, MA',
    gpa: '3.80',
    major: 'Graphic Design',
    image: 'maya.svg',
    id: '000005'
  },
  {
    name: 'Michael',
    age: '20',
    address: 'Boston, MA',
    gpa: '3.70',
    major: 'Biology',
    image: 'michael.svg',
    id: '000006'
  },
  {
    name: 'Noah',
    age: '21',
    address: 'Portland, ME',
    gpa: '3.78',
    major: 'Civil Engineering',
    image: 'noah.svg',
    id: '000007'
  },
  {
    name: 'Sarah',
    age: '20',
    address: 'Beverly, MA',
    gpa: '4.00',
    major: 'Biology',
    image: 'sarah.svg',
    id: '000008'
  },
  {
    name: 'Scott',
    age: '19',
    address: 'Philadelphia, PA',
    gpa: '3.40',
    major: 'Accounting',
    image: 'scott.svg',
    id: '000009'
  },
  {
    name: 'Nadine',
    age: '19',
    address: 'Montreal, QC',
    gpa: '4.00',
    major: 'Biology',
    image: 'nadine.svg',
    id: '000010'
  },
  {
    name: 'Salim',
    age: '19',
    address: 'Boston, MA',
    gpa: '3.75',
    major: 'Physics',
    image: 'salim.svg',
    id: '000011'
  },
  {
    name: 'Caleb',
    age: '20',
    address: 'Anaheim, CA',
    gpa: '3.20',
    major: 'Accounting',
    image: 'caleb.svg',
    id: '000012'
  }
]

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
        <StudentsContainer />
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

const StudentsContainer = () => {
  return (
    <div className="students-container" >
      {students.map((student) => {
        return (
          <Student student={student} />
        )
      })}
    </div>
  )
}

const Student = (props) => {
  const { name, age, address, gpa, major, image, id } = props.student
  return (
    <div className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={image} alt="student pic"></img>
      <div className="data-list">
        <h3>Age: {age}</h3>
        <h3>Home Address: {address}</h3>
        <h3>GPA: {gpa}</h3>
        <h3>Major: {major}</h3>
        <h3>Student ID: {id}</h3>
        <div className="separation"></div>
      </div>
    </div>
  )
}





ReactDOM.render(<App />, document.getElementById('root'));
