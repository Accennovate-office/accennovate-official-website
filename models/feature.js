const mongoose=require("mongoose")

const featureSchema = new mongoose.Schema({
    iconClass: String,
    title: String,
    benefits: [String],
    howWeDoIt: String,
});

module.exports = mongoose.model('Feature', featureSchema);