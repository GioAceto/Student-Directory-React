import React from 'react'

import emily from '../assets/emily.svg'
import fiona from '../assets/fiona.svg'
import travis from '../assets/travis.svg'
import chloe from '../assets/chloe.svg'
import maya from '../assets/maya.svg'
import michael from '../assets/michael.svg'
import noah from '../assets/noah.svg'
import sarah from '../assets/sarah.svg'
import scott from '../assets/scott.svg'
import nadine from '../assets/nadine.svg'
import salim from '../assets/salim.svg'
import caleb from '../assets/caleb.svg'

const students = [
  {
    name: 'Emily',
    age: '20',
    address: 'Salem, MA',
    gpa: '3.70',
    major: 'Biochemistry',
    image: emily,
    id: '000001'
  },
  {
    name: 'Fiona',
    age: '21',
    address: 'Providence, RI',
    gpa: '3.82',
    major: 'Psychology',
    image: fiona,
    id: '000002'
  },
  {
    name: 'Travis',
    age: '20',
    address: 'Keene, NH',
    gpa: '3.50',
    major: 'Mechanical Engineering',
    image: travis,
    id: '000003'
  },
  {
    name: 'Chloe',
    age: '22',
    address: 'Bridgeport, CT',
    gpa: '3.28',
    major: 'Political Science',
    image: chloe,
    id: '000004'
  },
  {
    name: 'Maya',
    age: '19',
    address: 'Boston, MA',
    gpa: '3.80',
    major: 'Graphic Design',
    image: maya,
    id: '000005'
  },
  {
    name: 'Michael',
    age: '20',
    address: 'Boston, MA',
    gpa: '3.70',
    major: 'Biology',
    image: michael,
    id: '000006'
  },
  {
    name: 'Noah',
    age: '21',
    address: 'Portland, ME',
    gpa: '3.78',
    major: 'Civil Engineering',
    image: noah,
    id: '000007'
  },
  {
    name: 'Sarah',
    age: '20',
    address: 'Beverly, MA',
    gpa: '4.00',
    major: 'Biology',
    image: sarah,
    id: '000008'
  },
  {
    name: 'Scott',
    age: '19',
    address: 'Philadelphia, PA',
    gpa: '3.40',
    major: 'Accounting',
    image: scott,
    id: '000009'
  },
  {
    name: 'Nadine',
    age: '19',
    address: 'Montreal, QC',
    gpa: '4.00',
    major: 'Biology',
    image: nadine,
    id: '000010'
  },
  {
    name: 'Salim',
    age: '19',
    address: 'Boston, MA',
    gpa: '3.75',
    major: 'Physics',
    image: salim,
    id: '000011'
  },
  {
    name: 'Caleb',
    age: '20',
    address: 'Anaheim, CA',
    gpa: '3.20',
    major: 'Accounting',
    image: caleb,
    id: '000012'
  }
]

const StudentsContainer = () => {
  return (
    <div className="students-container" >
      {students.map((student) => {
        return (
          <Student key={student.id} student={student} />
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

export default StudentsContainer
