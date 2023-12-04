// pushData.js

const mongoose = require('mongoose');
const Service = require('./models/service');
const Feature = require('./models/feature');

mongoose.connect('mongodb+srv://accennovateoffice:m9uATuSaLy6GBCnC@cms.g49104b.mongodb.net/acc?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

async function cleanAndPushData() {
    try {
        // Remove existing data in the Service and Feature collections
        await Service.deleteMany({});
        await Feature.deleteMany({});

        // Your services and features data
        const services = [
            {
                name: 'Facebook Ads Mastery',
                description: 'Supercharge your online advertising with our Facebook Ads Mastery service. We\'ll create and manage strategic Facebook Ads campaigns to help you reach your target audience, boost brand awareness, and achieve your marketing goals effectively.',
                features: [
                    {
                        iconClass: 'fa fa-bullhorn fa-3x',
                        title: 'Strategic Campaign Creation',
                        benefits: [
                            'Reach potential customers where they spend their time online', 
                            'Drive more traffic to your website and increase conversions'
                        ],
                        howWeDoIt: 'Our experts will design customized Facebook Ads campaigns tailored to your business objectives. We\'ll identify the right audience, ad formats, and placements to ensure your ads resonate with the right people.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-braille',
                        title: 'Budget Optimization',
                        benefits: [
                            'Make the most of your ad spend to achieve the best results', 
                            'Maximize ROI by allocating your budget strategically'
                        ],
                        howWeDoIt: 'We\'ll carefully manage your ad budget, adjusting bids and targeting settings to ensure your ads are cost-effective and deliver the desired outcomes.',
                    },
                    // Add more feature objects as needed
                ],
            },
            {
                name: 'Google Business Growth Partner',
                description: 'Elevate your business\'s online presence and reputation on Google with our comprehensive Google Business Growth Partner service. We\'re here to enhance your visibility, engage with customers, and drive more business your way.',
                features: [
                    {
                        iconClass: 'fa fa-bullhorn fa-3x',
                        title: 'Google Business Profile Enhancement',
                        benefits: [
                            'Make a great first impression on potential customers, increasing the chances they\'ll choose your business', 
                            'Boost your local search rankings, so you appear higher in Google search results'
                        ],
                        howWeDoIt: 'Our expert team will meticulously review and optimize your Google Business Profile, ensuring it\'s complete, accurate, and appealing to both customers and search engines. We\'ll update images, descriptions, categories, and contact information to maximize your online presence.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-braille',
                        title: 'Reputation Management',
                        benefits: [
                            'Build trust and credibility with a strong online reputation', 
                            'Attract more customers who read positive reviews from others'
                        ],
                        howWeDoIt: 'We\'ll monitor customer reviews regularly and respond professionally to both positive and negative feedback. Our team will also provide guidance on how to encourage more positive reviews and address any issues to maintain a positive image.',
                    },
                    // Add more feature objects as needed
                ],
            },
            // Add more service objects as needed
        ];

        // Extract features from services
        const extractedFeatures = services.flatMap(service => service.features);

        // Insert the features data into the Feature collection
        const insertedFeatures = await Feature.insertMany(extractedFeatures);

        // Insert the services data into the Service collection
        // const servicesWithFeatures = services.map(service => {
        //     service.features = insertedFeatures.map(feature => feature._id);
        //     // return service;
        //     const newService = new Service(service);
        //     // Manually call save to trigger the pre-save middleware
        //     return newService.save();
        // });
        // Insert the services data into the Service collection
        const servicesWithFeatures = services.map((service, index) => {
            service.features = insertedFeatures.slice(index * 2, (index + 1) * 2).map(feature => feature._id);
            // return service;
            const newService = new Service(service);
            // Manually call save to trigger the pre-save middleware
            return newService.save();
        });

        // await Service.insertMany(servicesWithFeatures);
        await Promise.all(servicesWithFeatures);

        console.log('Data cleaned and pushed successfully.');
    } catch (error) {
        console.error('Error cleaning and pushing data:', error);
    } finally {
        mongoose.connection.close();
    }
}

cleanAndPushData();
