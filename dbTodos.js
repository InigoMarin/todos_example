import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    name: String,
    checked: Boolean
});

export default mongoose.model('todoContent',todoSchema);

