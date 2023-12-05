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
            {   // Service 1
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
                    {
                        iconClass: 'fa fa-3x fa-copyright',
                        title: 'Ad Creatives and Copywriting',
                        benefits: [
                            'Capture the attention of potential customers with compelling ad content', 
                            'Improve click-through rates and increase the chances of conversions'
                        ],
                        howWeDoIt: 'Our creative team will craft engaging ad creatives and write persuasive ad copy that resonates with your target audience, driving more clicks and interactions.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-industry',
                        title: 'Performance Tracking and Optimization',
                        benefits: [
                            'Stay informed about how your ads are performing', 
                            'Continuously improve your campaigns to achieve better results'
                        ],
                        howWeDoIt: 'We\'ll monitor the performance of your Facebook Ads campaigns, tracking metrics such as clicks, impressions, and conversions. We\'ll use this data to refine your campaigns for maximum effectiveness.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-check',
                        title: 'A/B Testing (Optional)',
                        benefits: [
                            'Discover what works best for your audience through experimentation', 
                            'Optimize your ad content and strategies for better results'
                        ],
                        howWeDoIt: 'If you choose, we can conduct A/B tests to compare different ad elements and strategies, ensuring your campaigns are always optimized for the best performance.',
                    },
                    // Add more feature objects as needed
                ],
                approach: 'We begin by understanding your business, target audience, and marketing objectives. Then, we create a tailored Facebook Ads strategy that aligns with your goals and budget. Our experienced team will continuously monitor and optimize your campaigns to deliver the best possible results',
                whyChooseUs: [
                    'Maximize the impact of your online advertising on Facebook',
                    'Tap into our expertise in Facebook Ads and digital marketing',
                    'Receive detailed reports on your campaign\'s performance',
                    'Get dedicated support to answer your questions and address concerns promptly',
                ],
                pricing: 'Our pricing is flexible and customized to your advertising goals. Whether you\'re looking to launch a small campaign or scale up your online advertising efforts, we have the right plan for you',
                readyTitle: 'Ready to Supercharge Your Facebook Ads Campaigns?',
                readyDescription: 'Don\'t miss out on valuable opportunities. Let us manage your Facebook Ads campaigns to drive more traffic and conversions while you focus on growing your business',
            },
            {   // Service 2
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
                    {
                        iconClass: 'fa fa-3x fa-copyright',
                        title: 'Engaging Content Creation',
                        benefits: [
                            'Keep your audience interested and informed about your business', 
                            'Showcase your unique offerings and promotions, encouraging more visits'
                        ],
                        howWeDoIt: 'Our content experts will craft and share engaging posts, including photos, updates, and special offers, on your Google Business Profile. We\'ll work closely with you to highlight your business\'s personality and strengths to captivate your audience.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-industry',
                        title: 'Analytics and Reporting',
                        benefits: [
                            'Gain insights into your online performance and customer interactions', 
                            'Make data-driven decisions to further improve your online strategy'
                        ],
                        howWeDoIt: 'We\'ll regularly monitor the performance of your Google Business Profile, tracking key metrics such as views, clicks, calls, and direction requests. Our detailed reports will provide you with actionable insights to refine your online presence continuously.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-check',
                        title: 'Google Ads Integration (Optional)',
                        benefits: [
                            'Reach a wider audience and drive immediate traffic to your business', 
                            'Maximize your return on investment by targeting potential customers effectively'
                        ],
                        howWeDoIt: 'If you choose the optional Google Ads integration, our advertising specialists will create and manage location-based Google Ads campaigns. We\'ll carefully optimize your ad spend to ensure you get the best results, attracting potential customers actively looking for your products or services.',
                    },
                    // Add more feature objects as needed
                ],
                approach: 'We start by understanding your business and goals. Then, we customize our services to meet your specific needs. Our experienced team will manage your Google Business Profile effectively, ensuring it\'s a valuable asset for attracting customers.',
                whyChooseUs: [
                    'Improve your online visibility and stand out from competitors',
                    'Gain access to our local SEO expertise and stay ahead of Google\'s algorithms',
                    'Receive transparent reports to track your progress',
                    'Enjoy dedicated support to address any questions or concerns promptly',
                ],
                pricing: 'Our pricing is flexible and tailored to your business\'s size and objectives. Whether you have a single location or multiple branches, we have the right plan for you',
                readyTitle: 'Ready to Boost Your Google Presence and Reap These Benefits?',
                readyDescription: 'Don\'t miss out on potential customers. Let us take care of your Google Business Profile, so you can focus on what you do best – running your business.',
            },
            {   // Service 3
                name: 'Meta Platform Transformation',
                description: 'Elevate your digital presence and engage with your audience on the Meta Platform (formerly known as Facebook) with our Meta Platform Transformation service. We\'ll revamp your profile, optimize your content strategy, and harness the full potential of this influential platform.',
                features: [
                    {
                        iconClass: 'fa fa-bullhorn fa-3x',
                        title: 'Profile Revamp',
                        benefits: [
                            'Enhance your Meta Platform profile to leave a memorable impression', 
                            'Make it easier for customers to find and connect with you'
                        ],
                        howWeDoIt: 'Our experts will review and update your Meta Platform profile, ensuring it\'s complete, visually appealing, and optimized for search.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-braille',
                        title: 'Content Strategy Optimization',
                        benefits: [
                            'Craft and share content that resonates with your target audience', 
                            'Increase engagement, likes, and shares'
                        ],
                        howWeDoIt: 'We\'ll design a content strategy tailored to your business goals, curating and creating posts that capture the attention of your audience and encourage interaction.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-copyright',
                        title: 'Audience Engagement',
                        benefits: [
                            'Build a loyal community of followers', 
                            'Strengthen your brand\'s presence and reputation'
                        ],
                        howWeDoIt: 'We\'ll actively engage with your audience, responding to comments and messages promptly, and nurturing positive relationships with your followers.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-industry',
                        title: 'Data-Driven Insights',
                        benefits: [
                            'Gain a deeper understanding of your Meta Platform performance', 
                            'Make informed decisions to optimize your social media strategy'
                        ],
                        howWeDoIt: 'We\'ll track key metrics like post reach, engagement, and audience demographics, providing you with valuable insights to refine your content and strategy.',
                    },
                    {
                        iconClass: 'fa fa-3x fa-check',
                        title: 'Advertising Strategy (Optional)',
                        benefits: [
                            'Reach a wider audience and drive targeted traffic', 
                            'Maximize your ROI through strategic advertising'
                        ],
                        howWeDoIt: 'If desired, we can create and manage Meta Platform ad campaigns, ensuring your ad budget is used efficiently to attract potential customers.',
                    },
                    // Add more feature objects as needed
                ],
                approach: 'We start by understanding your business objectives, target audience, and unique value proposition. Then, we tailor our services to align with your specific needs. Our experienced team will manage your Meta Platform presence, turning it into a dynamic asset for your business.',
                whyChooseUs: [
                    'Maximize your influence on the Meta Platform',
                    'Tap into our expertise in social media and content strategy',
                    'Receive comprehensive reports on your Meta Platform performance',
                    'Get dedicated support to address your questions and concerns',
                ],
                pricing: 'Our pricing is adaptable and customized to your social media goals. Whether you\'re starting small or aiming for substantial growth, we have the right plan for your business',
                readyTitle: 'Ready to Transform Your Meta Platform Presence?',
                readyDescription: 'Don\'t miss out on the opportunities offered by the Meta Platform. Let us manage your Meta Platform transformation while you focus on expanding your digital reach and impact.',
            },
            {   // Service 4
                name: 'Google Business Management Service',
                description: 'Enhance your online presence and reputation on Google with our comprehensive Google Business Management service. We\'ll optimize your Google Business Profile, manage reviews, post engaging content, and monitor analytics to drive more customers to your business.',
                features: [
                    {
                        iconClass: 'fa fa-bullhorn fa-3x',
                        title: 'Google Business Profile Optimization',
                        benefits: [
                            'Ensure your Google Business Profile is complete and accurate', 
                            'Optimize images, descriptions, categories, and contact information for maximum visibility'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-braille',
                        title: 'Review Management',
                        benefits: [
                            'Respond to reviews professionally and promptly', 
                            'Encourage positive reviews and address negative ones to build trust'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-copyright',
                        title: 'Engaging Content Creation',
                        benefits: [
                            'Craft and post engaging content (photos, updates, offers) regularly', 
                            'Showcase your business\'s personality and unique selling points'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-industry',
                        title: 'Analytics and Reporting',
                        benefits: [
                            'Monitor your Google Business Profile\'s performance', 
                            'Analyze key metrics such as views, clicks, calls, and direction requests'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-check',
                        title: 'Google Ads Integration (Optional)',
                        benefits: [
                            'Create and manage location-based Google Ads campaigns to reach potential customers', 
                            'Optimize ad spend for maximum ROI'
                        ],
                        howWeDoIt: '',
                    },
                    // Add more feature objects as needed
                ],
                approach: 'We start by understanding your business and your goals. Then, we tailor our services to meet your specific needs. Our experienced team will manage your Google Business Profile, ensuring it\'s not just a listing but a powerful tool to attract customers.',
                whyChooseUs: [
                    'Proven track record of improving online visibility and driving foot traffic',
                    'Expertise in local SEO and Google\'s algorithms',
                    'Transparent reporting to track progress',
                    'Dedicated support to address your questions and concerns',
                ],
                pricing: 'Our pricing is flexible and customized to your business size and goals. Whether you have a single location or a multi-location business, we have the right plan for you',
                readyTitle: 'Ready to Boost Your Online Presence on Google?',
                readyDescription: 'Don\'t miss out on potential customers. Let us take care of your Google Business Profile so you can focus on what you do best – running your business.',
            },
            {   // Service 5
                name: 'Social Media and Online Presence Setup',
                description: 'Enhance your online presence and connect with your target audience across multiple platforms with our Social Media and Online Presence Setup service. We\'ll establish your presence on Google Business, Facebook, Instagram, LinkedIn, and WhatsApp Business to boost your brand visibility and engagement',
                features: [
                    {
                        iconClass: 'fa fa-bullhorn fa-3x',
                        title: 'Google Business Setup',
                        benefits: [
                            'Improve your local search visibility and credibility', 
                            'Attract more local customers and drive foot traffic'
                        ],
                        howWeDoIt: 'We\'ll create and optimize your Google Business profile, ensuring accurate information, attractive visuals, and encouraging customer reviews',
                    },
                    {
                        iconClass: 'fa fa-3x fa-braille',
                        title: 'Facebook Page Setup',
                        benefits: [
                            'Connect with a massive global audience', 
                            'Encourage positive reviews and address negative ones to build trust'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-copyright',
                        title: '',
                        benefits: [
                            'Craft and post engaging content (photos, updates, offers) regularly', 
                            'Showcase your business\'s personality and unique selling points'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-industry',
                        title: '',
                        benefits: [
                            'Monitor your Google Business Profile\'s performance', 
                            'Analyze key metrics such as views, clicks, calls, and direction requests'
                        ],
                        howWeDoIt: '',
                    },
                    {
                        iconClass: 'fa fa-3x fa-check',
                        title: '',
                        benefits: [
                            'Create and manage location-based Google Ads campaigns to reach potential customers', 
                            'Optimize ad spend for maximum ROI'
                        ],
                        howWeDoIt: '',
                    },
                    // Add more feature objects as needed
                ],
                approach: '',
                whyChooseUs: [
                    'Proven track record of improving online visibility and driving foot traffic',
                    'Expertise in local SEO and Google\'s algorithms',
                    'Transparent reporting to track progress',
                    'Dedicated support to address your questions and concerns',
                ],
                pricing: '',
                readyTitle: '',
                readyDescription: '',
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
            let featuresCount = 2
            service.features = insertedFeatures.slice(index * featuresCount, (index + 1) * featuresCount).map(feature => feature._id);
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
