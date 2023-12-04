const mongoose=require("mongoose")

const serviceSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    slug: { type: String, unique: true, required: true },
    shortName: { type: String, unique: true, required: true },
    description: String,
    features: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Feature' }], // howWeCanHelp section
    approach: String,
    whyChooseUs: [{ type: String }],
    pricing: String,
    readyTitle: String,
    readyDescription: String,
}, {
    validateBeforeSave: false,
});

// Pre-save hook to generate a slug based on the name before saving the document
serviceSchema.pre('save', function (next) {
    // Check if the name has been modified, or if it's a new service
    if (this.isModified('name') || !this.slug) {
        // Generate the slug based on the name
        this.slug = generateSlug(this.name);

        // Generate the shortName based on the first two words of the name
        this.shortName = generateShortName(this.name);

        console.log('Generated slug:', this.slug);
        console.log('Generated shortName:', this.shortName);
    }

    next();
});

// Function to generate a slug from a given string (e.g., service name)
function generateSlug(sourceString) {
    return sourceString
        .toLowerCase()
        .replace(/\s+/g, '-')  // Replace spaces with dashes
        .replace(/[^\w\-]+/g, '')  // Remove non-word characters
        .replace(/\-\-+/g, '-')  // Replace multiple dashes with a single dash
        .replace(/^-+/, '')  // Remove leading dashes
        .replace(/-+$/, '');  // Remove trailing dashes
}

// Function to generate a shortName from the first two words of a given string (e.g., service name)
function generateShortName(sourceString) {
    const words = sourceString.split(/\s+/);
    return words.slice(0, 2).join(' ');
}

// Create Mongoose model
module.exports = mongoose.model('Service', serviceSchema);