const Students = (connection, Sequelize) => {
  return connection.define('students', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    age: { type: Sequelize.INTEGER, allowNull: false },
    address: { type: Sequelize.STRING },
    gpa: { type: Sequelize.DECIMAL(3, 2), allowNull: false },
    major: { type: Sequelize.STRING, allowNull: false },
    image: { type: Sequelize.STRING, allowNull: false }
  }, { paranoid: true })
}

module.exports = Students