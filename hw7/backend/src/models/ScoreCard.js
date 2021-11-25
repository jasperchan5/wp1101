import mongoose from 'mongoose'

const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name: String,
    subject: String,
    score: String
});
const Student = mongoose.model('Student',studentSchema);

export default Student;