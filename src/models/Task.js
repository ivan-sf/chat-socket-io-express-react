import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    userId: { type: String, required: false },
},{
    timestamps: true,
    versionKey: false,
});

export default model('Task', taskSchema);
