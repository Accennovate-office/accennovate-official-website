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
        // await Service.deleteMany({});
        // await Feature.deleteMany({});

        // Your services and features data
        const services = [
            // {   // Service 1
            //     name: 'Facebook Ads Mastery',
            //     description: 'Supercharge your online advertising with our Facebook Ads Mastery service. We\'ll create and manage strategic Facebook Ads campaigns to help you reach your target audience, boost brand awareness, and achieve your marketing goals effectively.',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Strategic Campaign Creation',
            //             benefits: [
            //                 'Reach potential customers where they spend their time online', 
            //                 'Drive more traffic to your website and increase conversions'
            //             ],
            //             howWeDoIt: 'Our experts will design customized Facebook Ads campaigns tailored to your business objectives. We\'ll identify the right audience, ad formats, and placements to ensure your ads resonate with the right people.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Budget Optimization',
            //             benefits: [
            //                 'Make the most of your ad spend to achieve the best results', 
            //                 'Maximize ROI by allocating your budget strategically'
            //             ],
            //             howWeDoIt: 'We\'ll carefully manage your ad budget, adjusting bids and targeting settings to ensure your ads are cost-effective and deliver the desired outcomes.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Ad Creatives and Copywriting',
            //             benefits: [
            //                 'Capture the attention of potential customers with compelling ad content', 
            //                 'Improve click-through rates and increase the chances of conversions'
            //             ],
            //             howWeDoIt: 'Our creative team will craft engaging ad creatives and write persuasive ad copy that resonates with your target audience, driving more clicks and interactions.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Performance Tracking and Optimization',
            //             benefits: [
            //                 'Stay informed about how your ads are performing', 
            //                 'Continuously improve your campaigns to achieve better results'
            //             ],
            //             howWeDoIt: 'We\'ll monitor the performance of your Facebook Ads campaigns, tracking metrics such as clicks, impressions, and conversions. We\'ll use this data to refine your campaigns for maximum effectiveness.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'A/B Testing (Optional)',
            //             benefits: [
            //                 'Discover what works best for your audience through experimentation', 
            //                 'Optimize your ad content and strategies for better results'
            //             ],
            //             howWeDoIt: 'If you choose, we can conduct A/B tests to compare different ad elements and strategies, ensuring your campaigns are always optimized for the best performance.',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We begin by understanding your business, target audience, and marketing objectives. Then, we create a tailored Facebook Ads strategy that aligns with your goals and budget. Our experienced team will continuously monitor and optimize your campaigns to deliver the best possible results',
            //     whyChooseUs: [
            //         'Maximize the impact of your online advertising on Facebook',
            //         'Tap into our expertise in Facebook Ads and digital marketing',
            //         'Receive detailed reports on your campaign\'s performance',
            //         'Get dedicated support to answer your questions and address concerns promptly',
            //     ],
            //     pricing: 'Our pricing is flexible and customized to your advertising goals. Whether you\'re looking to launch a small campaign or scale up your online advertising efforts, we have the right plan for you',
            //     readyTitle: 'Ready to Supercharge Your Facebook Ads Campaigns?',
            //     readyDescription: 'Don\'t miss out on valuable opportunities. Let us manage your Facebook Ads campaigns to drive more traffic and conversions while you focus on growing your business',
            // },
            // {   // Service 2
            //     name: 'Google Business Growth Partner',
            //     description: 'Elevate your business\'s online presence and reputation on Google with our comprehensive Google Business Growth Partner service. We\'re here to enhance your visibility, engage with customers, and drive more business your way.',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Google Business Profile Enhancement',
            //             benefits: [
            //                 'Make a great first impression on potential customers, increasing the chances they\'ll choose your business', 
            //                 'Boost your local search rankings, so you appear higher in Google search results'
            //             ],
            //             howWeDoIt: 'Our expert team will meticulously review and optimize your Google Business Profile, ensuring it\'s complete, accurate, and appealing to both customers and search engines. We\'ll update images, descriptions, categories, and contact information to maximize your online presence.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Reputation Management',
            //             benefits: [
            //                 'Build trust and credibility with a strong online reputation', 
            //                 'Attract more customers who read positive reviews from others'
            //             ],
            //             howWeDoIt: 'We\'ll monitor customer reviews regularly and respond professionally to both positive and negative feedback. Our team will also provide guidance on how to encourage more positive reviews and address any issues to maintain a positive image.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Engaging Content Creation',
            //             benefits: [
            //                 'Keep your audience interested and informed about your business', 
            //                 'Showcase your unique offerings and promotions, encouraging more visits'
            //             ],
            //             howWeDoIt: 'Our content experts will craft and share engaging posts, including photos, updates, and special offers, on your Google Business Profile. We\'ll work closely with you to highlight your business\'s personality and strengths to captivate your audience.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Analytics and Reporting',
            //             benefits: [
            //                 'Gain insights into your online performance and customer interactions', 
            //                 'Make data-driven decisions to further improve your online strategy'
            //             ],
            //             howWeDoIt: 'We\'ll regularly monitor the performance of your Google Business Profile, tracking key metrics such as views, clicks, calls, and direction requests. Our detailed reports will provide you with actionable insights to refine your online presence continuously.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'Google Ads Integration (Optional)',
            //             benefits: [
            //                 'Reach a wider audience and drive immediate traffic to your business', 
            //                 'Maximize your return on investment by targeting potential customers effectively'
            //             ],
            //             howWeDoIt: 'If you choose the optional Google Ads integration, our advertising specialists will create and manage location-based Google Ads campaigns. We\'ll carefully optimize your ad spend to ensure you get the best results, attracting potential customers actively looking for your products or services.',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We start by understanding your business and goals. Then, we customize our services to meet your specific needs. Our experienced team will manage your Google Business Profile effectively, ensuring it\'s a valuable asset for attracting customers.',
            //     whyChooseUs: [
            //         'Improve your online visibility and stand out from competitors',
            //         'Gain access to our local SEO expertise and stay ahead of Google\'s algorithms',
            //         'Receive transparent reports to track your progress',
            //         'Enjoy dedicated support to address any questions or concerns promptly',
            //     ],
            //     pricing: 'Our pricing is flexible and tailored to your business\'s size and objectives. Whether you have a single location or multiple branches, we have the right plan for you',
            //     readyTitle: 'Ready to Boost Your Google Presence and Reap These Benefits?',
            //     readyDescription: 'Don\'t miss out on potential customers. Let us take care of your Google Business Profile, so you can focus on what you do best – running your business.',
            // },
            // {   // Service 3
            //     name: 'Meta Platform Transformation',
            //     description: 'Elevate your digital presence and engage with your audience on the Meta Platform (formerly known as Facebook) with our Meta Platform Transformation service. We\'ll revamp your profile, optimize your content strategy, and harness the full potential of this influential platform.',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Profile Revamp',
            //             benefits: [
            //                 'Enhance your Meta Platform profile to leave a memorable impression', 
            //                 'Make it easier for customers to find and connect with you'
            //             ],
            //             howWeDoIt: 'Our experts will review and update your Meta Platform profile, ensuring it\'s complete, visually appealing, and optimized for search.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Content Strategy Optimization',
            //             benefits: [
            //                 'Craft and share content that resonates with your target audience', 
            //                 'Increase engagement, likes, and shares'
            //             ],
            //             howWeDoIt: 'We\'ll design a content strategy tailored to your business goals, curating and creating posts that capture the attention of your audience and encourage interaction.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Audience Engagement',
            //             benefits: [
            //                 'Build a loyal community of followers', 
            //                 'Strengthen your brand\'s presence and reputation'
            //             ],
            //             howWeDoIt: 'We\'ll actively engage with your audience, responding to comments and messages promptly, and nurturing positive relationships with your followers.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Data-Driven Insights',
            //             benefits: [
            //                 'Gain a deeper understanding of your Meta Platform performance', 
            //                 'Make informed decisions to optimize your social media strategy'
            //             ],
            //             howWeDoIt: 'We\'ll track key metrics like post reach, engagement, and audience demographics, providing you with valuable insights to refine your content and strategy.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'Advertising Strategy (Optional)',
            //             benefits: [
            //                 'Reach a wider audience and drive targeted traffic', 
            //                 'Maximize your ROI through strategic advertising'
            //             ],
            //             howWeDoIt: 'If desired, we can create and manage Meta Platform ad campaigns, ensuring your ad budget is used efficiently to attract potential customers.',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We start by understanding your business objectives, target audience, and unique value proposition. Then, we tailor our services to align with your specific needs. Our experienced team will manage your Meta Platform presence, turning it into a dynamic asset for your business.',
            //     whyChooseUs: [
            //         'Maximize your influence on the Meta Platform',
            //         'Tap into our expertise in social media and content strategy',
            //         'Receive comprehensive reports on your Meta Platform performance',
            //         'Get dedicated support to address your questions and concerns',
            //     ],
            //     pricing: 'Our pricing is adaptable and customized to your social media goals. Whether you\'re starting small or aiming for substantial growth, we have the right plan for your business',
            //     readyTitle: 'Ready to Transform Your Meta Platform Presence?',
            //     readyDescription: 'Don\'t miss out on the opportunities offered by the Meta Platform. Let us manage your Meta Platform transformation while you focus on expanding your digital reach and impact.',
            // },
            // {   // Service 4
            //     name: 'Google Business Management Service',
            //     description: 'Enhance your online presence and reputation on Google with our comprehensive Google Business Management service. We\'ll optimize your Google Business Profile, manage reviews, post engaging content, and monitor analytics to drive more customers to your business.',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Google Business Profile Optimization',
            //             benefits: [
            //                 'Ensure your Google Business Profile is complete and accurate', 
            //                 'Optimize images, descriptions, categories, and contact information for maximum visibility'
            //             ],
            //             howWeDoIt: '',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Review Management',
            //             benefits: [
            //                 'Respond to reviews professionally and promptly', 
            //                 'Encourage positive reviews and address negative ones to build trust'
            //             ],
            //             howWeDoIt: '',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Engaging Content Creation',
            //             benefits: [
            //                 'Craft and post engaging content (photos, updates, offers) regularly', 
            //                 'Showcase your business\'s personality and unique selling points'
            //             ],
            //             howWeDoIt: '',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Analytics and Reporting',
            //             benefits: [
            //                 'Monitor your Google Business Profile\'s performance', 
            //                 'Analyze key metrics such as views, clicks, calls, and direction requests'
            //             ],
            //             howWeDoIt: '',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'Google Ads Integration (Optional)',
            //             benefits: [
            //                 'Create and manage location-based Google Ads campaigns to reach potential customers', 
            //                 'Optimize ad spend for maximum ROI'
            //             ],
            //             howWeDoIt: '',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We start by understanding your business and your goals. Then, we tailor our services to meet your specific needs. Our experienced team will manage your Google Business Profile, ensuring it\'s not just a listing but a powerful tool to attract customers.',
            //     whyChooseUs: [
            //         'Proven track record of improving online visibility and driving foot traffic',
            //         'Expertise in local SEO and Google\'s algorithms',
            //         'Transparent reporting to track progress',
            //         'Dedicated support to address your questions and concerns',
            //     ],
            //     pricing: 'Our pricing is flexible and customized to your business size and goals. Whether you have a single location or a multi-location business, we have the right plan for you',
            //     readyTitle: 'Ready to Boost Your Online Presence on Google?',
            //     readyDescription: 'Don\'t miss out on potential customers. Let us take care of your Google Business Profile so you can focus on what you do best – running your business.',
            // },
            // {   // Service 5
            //     name: 'Social Media and Online Presence Setup',
            //     description: 'Enhance your online presence and connect with your target audience across multiple platforms with our Social Media and Online Presence Setup service. We\'ll establish your presence on Google Business, Facebook, Instagram, LinkedIn, and WhatsApp Business to boost your brand visibility and engagement',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Google Business Setup',
            //             benefits: [
            //                 'Improve your local search visibility and credibility', 
            //                 'Attract more local customers and drive foot traffic'
            //             ],
            //             howWeDoIt: 'We\'ll create and optimize your Google Business profile, ensuring accurate information, attractive visuals, and encouraging customer reviews',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Facebook Page Setup',
            //             benefits: [
            //                 'Connect with a massive global audience', 
            //                 'Establish a professional and engaging Facebook presence'
            //             ],
            //             howWeDoIt: 'We\'ll set up your Facebook Page, customize it with your branding, and configure essential settings to get you started',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Instagram Page Setup',
            //             benefits: [
            //                 'Leverage the power of visual storytelling',
            //                 'Showcase your products or services through captivating visuals'
            //             ],
            //             howWeDoIt: 'We\'ll create and optimize your Instagram business profile, ensuring it aligns with your brand\'s image and goals',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'LinkedIn Page Setup',
            //             benefits: [
            //                 'Build professional connections and B2B relationships', 
            //                 'Establish a strong presence in the business community'
            //             ],
            //             howWeDoIt: 'We\'ll set up your LinkedIn Company Page, populate it with relevant content, and ensure it reflects your business\'s professionalism',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'WhatsApp Business Setup',
            //             benefits: [
            //                 'Enhance customer communication and support', 
            //                 'Provide convenient and instant interaction with your audience'
            //             ],
            //             howWeDoIt: 'We\'ll configure your WhatsApp Business account, set up automated responses, and integrate it seamlessly with your online presence',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We kickstart your online journey by understanding your brand, target audience, and online goals. Our team will create and optimize profiles on each platform, ensuring a cohesive and professional image.',
            //     whyChooseUs: [
            //         'Expand your online reach across multiple platforms',
            //         'Leverage our expertise in social media setup and optimization',
            //         'Start engaging with your audience more effectively from day one',
            //         'Receive guidance on best practices for each platform',
            //     ],
            //     pricing: 'Our pricing is adaptable to your specific needs and goals. Whether you\'re a small business looking to establish a digital footprint or a larger enterprise seeking to enhance your online presence, we have a tailored plan for you',
            //     readyTitle: 'Ready to Elevate Your Online Presence?',
            //     readyDescription: 'Don\'t miss out on the opportunities that a strong online presence can bring. Let us set up and optimize your profiles on Google Business, Facebook, Instagram, LinkedIn, and WhatsApp Business, so you can start connecting with your audience on multiple fronts while focusing on your business\'s growth',
            // },
            // {   // Service 6 - 2 features
            //     name: 'Festival Visual Package',
            //     description: 'Elevate your brand\'s presence during festivals with our Festival Visual Package. We provide a comprehensive solution, offering you a year\'s worth of festival-themed graphics and images for all 66 major festivals in India. Make a lasting impression and engage with your audience on these special occasions',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Year-Long Festival Graphics',
            //             benefits: [
            //                 'Maintain a consistent and festive brand image', 
            //                 'Stand out and connect with your audience during all major festivals'
            //             ],
            //             howWeDoIt: 'Our talented design team will create visually appealing festival graphics that align with your brand\'s identity, ensuring your presence remains vibrant and relevant throughout the year',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Festival Images a Day Before',
            //             benefits: [
            //                 'Stay prepared for every festival in advance', 
            //                 'Be timely and relevant by sharing festival images a day before each event'
            //             ],
            //             howWeDoIt: 'We\'ll provide you with high-quality festival images a day before each major festival, enabling you to schedule and share them seamlessly with your audience',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We start by understanding your brand\'s values and messaging. Then, we align our festival visuals with your brand identity to ensure consistency and appeal. Our goal is to help you maintain a festive and engaging presence year-round',
            //     whyChooseUs: [
            //         'Access a year\'s worth of festival visuals in one package',
            //         'Save time and effort by preparing for festivals in advance',
            //         'Enjoy high-quality and professionally designed festival graphics',
            //         'Maintain a festive and relevant brand image',
            //     ],
            //     pricing: 'Our pricing is flexible and tailored to your specific needs. Whether you\'re a business looking to create a strong festival presence or an organization aiming to connect with your audience during Indian festivals, we have the right package for you',
            //     readyTitle: 'Ready to Transform Your Festival Presence?',
            //     readyDescription: 'Don\'t miss the opportunity to engage with your audience during India\'s 66 major festivals. Let us provide you with a year\'s worth of festival-themed graphics and images, allowing you to make a lasting impact and celebrate each festival with your audience in style',
            // },
            // {   // Service 7
            //     name: 'Video Content Mastery',
            //     description: 'Revolutionize your online presence with our Video Content Mastery service. We specialize in creating and optimizing compelling video content to help you engage your audience, enhance brand recognition, and achieve your marketing objectives effectively',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Strategic Video Creation',
            //             benefits: [
            //                 'Reach and captivate your target audience through dynamic video content', 
            //                 'Drive increased engagement and conversions',
            //             ],
            //             howWeDoIt: 'Our skilled video production team will craft tailored video content aligned with your business goals. We\'ll identify the right themes, styles, and platforms to ensure your videos resonate with your intended viewers',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Budget Optimization',
            //             benefits: [
            //                 'Make the most of your video production budget for optimal results', 
            //                 'Maximize ROI by strategically allocating your resources'
            //             ],
            //             howWeDoIt: 'We\'ll manage your video production budget meticulously, ensuring that every aspect of video creation is cost-effective and delivers the desired outcomes',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Creative Storytelling and Editing',
            //             benefits: [
            //                 'Capture the imagination of your audience with engaging storytelling',
            //                 'Improve viewer retention and boost conversion rates'
            //             ],
            //             howWeDoIt: 'Our creative team will develop captivating video concepts and edit videos with finesse. We\'ll ensure that your video content not only looks visually stunning but also conveys a compelling narrative',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Performance Tracking and Optimization',
            //             benefits: [
            //                 'Stay informed about how your videos are performing', 
            //                 'Continuously enhance your video strategies for better results'
            //             ],
            //             howWeDoIt: 'We\'ll monitor the performance of your video content, tracking metrics such as views, engagement, and conversion rates. We\'ll use this data to refine your video strategies for maximum impact',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'A/B Testing (Optional)',
            //             benefits: [
            //                 'Discover what resonates best with your audience through experimentation', 
            //                 'Optimize your video content and strategies for superior results'
            //             ],
            //             howWeDoIt: 'If you choose, we can conduct A/B tests to compare different video elements and strategies, ensuring your video content always delivers exceptional results',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We begin by comprehending your brand, target audience, and marketing goals. Then, we craft a tailored video content strategy that aligns with your objectives and resources. Our experienced team will continuously assess and enhance your video content to deliver the finest results',
            //     whyChooseUs: [
            //         'Maximize the impact of your online presence through compelling video content',
            //         'Tap into our expertise in video production and digital marketing',
            //         'Receive detailed reports on your video content\'s performance',
            //         'Get dedicated support to answer your questions and address concerns promptly',
            //     ],
            //     pricing: 'Our pricing is adaptable and customized to your video content goals. Whether you require a single video or an ongoing video content strategy, we have the right plan for you',
            //     readyTitle: 'Ready to Transform Your Video Content?',
            //     readyDescription: 'Don\'t miss out on the power of engaging video content. Let us manage your video production and optimization to enhance your online presence, increase engagement, and achieve your marketing goals while you focus on business growth',
            // },
            // {   // Service 8
            //     name: 'Webinar and Streaming Excellence',
            //     description: 'Elevate your online events with our Webinar and Streaming Excellence service. We specialize in setting up, managing, and optimizing high-quality webinars and live streaming sessions. Make a lasting impression, engage your audience, and achieve your event goals effectively.',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Webinar Setup and Planning',
            //             benefits: [
            //                 'Host professional webinars tailored to your audience', 
            //                 'Maximize audience engagement and knowledge sharing',
            //             ],
            //             howWeDoIt: 'Our team will help you plan and set up webinars, selecting the right platform, configuring settings, and creating promotional materials to ensure your event is a success.',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Live Streaming Management',
            //             benefits: [
            //                 'Deliver seamless live streaming experiences to your audience', 
            //                 'Reach a wider audience and increase brand exposure'
            //             ],
            //             howWeDoIt: 'We\'ll handle the technical aspects of live streaming, from camera setup to streaming platform management, ensuring your live events run smoothly',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Content Creation and Promotion',
            //             benefits: [
            //                 'Create engaging content to captivate your audience',
            //                 'Increase event attendance and participation'
            //             ],
            //             howWeDoIt: 'Our content creation team will design visually appealing presentations, promotional materials, and social media campaigns to generate buzz around your webinars and live streams',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Audience Engagement Strategies',
            //             benefits: [
            //                 'Keep your audience actively involved and interested', 
            //                 'Enhance the overall experience and achieve event goals'
            //             ],
            //             howWeDoIt: 'We\'ll employ interactive features, Q&A sessions, and audience polling to foster engagement and ensure your audience remains engaged throughout your event',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'Performance Tracking and Optimization',
            //             benefits: [
            //                 'Understand how your webinars and live streams are performing', 
            //                 'Continuously improve your event strategies for better results'
            //             ],
            //             howWeDoIt: 'We\'ll monitor event metrics, such as attendance, engagement, and post-event surveys, to fine-tune your webinar and live streaming strategies for maximum impact',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We begin by understanding your event objectives, target audience, and content requirements. Then, we create a tailored plan that aligns with your goals. Our experienced team will handle all aspects of webinar and live streaming management, ensuring your events are professional and successful',
            //     whyChooseUs: [
            //         'Host flawless webinars and live streams that impress your audience',
            //         'Leverage our expertise in event planning and live streaming technology',
            //         'Receive detailed reports on your event\'s performance',
            //         'Get dedicated support to address your event-related questions and concerns promptly',
            //     ],
            //     pricing: 'Our pricing is flexible and customized to your event needs. Whether you\'re planning a single webinar or a series of live streaming events, we have the right plan for you.',
            //     readyTitle: 'Ready to Elevate Your Webinars and Live Streams?',
            //     readyDescription: 'Don\'t miss the opportunity to create memorable online events. Let us manage your webinar and live streaming setup, ensuring professional, engaging, and successful events that leave a lasting impact on your audience while you focus on delivering valuable content',
            // },
            // {   // Service 9
            //     name: 'Blog Creation Expertise',
            //     description: 'Enhance your online presence and engage your audience with our Blog Creation Expertise service. We specialize in crafting informative, engaging, and SEO-friendly blog content to help you share valuable information, build authority in your niche, and achieve your content marketing goals effectively',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Content Strategy and Planning',
            //             benefits: [
            //                 'Develop a content plan aligned with your brand\'s objectives', 
            //                 'Deliver consistent and relevant blog posts to your audience',
            //             ],
            //             howWeDoIt: 'Our content strategists will work with you to identify key topics, target audience interests, and SEO opportunities, creating a content roadmap that guides our blog creation efforts',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'High-Quality Blog Writing',
            //             benefits: [
            //                 'Publish well-researched, engaging, and informative blog posts', 
            //                 'Attract and retain readers while establishing your authority'
            //             ],
            //             howWeDoIt: 'Our expert writers will craft compelling blog articles that resonate with your audience, providing valuable insights, solutions, and information on topics relevant to your industry or niche',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'SEO Optimization',
            //             benefits: [
            //                 'Improve search engine visibility and drive organic traffic',
            //                 'Enhance the discoverability of your blog content'
            //             ],
            //             howWeDoIt: 'We\'ll optimize each blog post for SEO, including keyword research, on-page optimization, and meta tags, to ensure your content ranks well on search engines',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Visual Enhancement',
            //             benefits: [
            //                 'Make your blog posts visually appealing and engaging', 
            //                 'Increase reader engagement and shareability'
            //             ],
            //             howWeDoIt: 'Our design team can create eye-catching visuals, infographics, and custom images to complement your blog content, making it more attractive and shareable',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'Performance Tracking and Optimization',
            //             benefits: [
            //                 'Monitor the performance of your blog posts', 
            //                 'Continuously improve your content strategy for better results'
            //             ],
            //             howWeDoIt: 'We\'ll track metrics such as traffic, engagement, and conversions, and use this data to refine your content strategy and improve the effectiveness of your blog posts',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We start by understanding your brand, target audience, and content marketing goals. Then, we develop a tailored content strategy that aligns with your objectives. Our experienced team will handle all aspects of blog creation, from topic ideation to publication',
            //     whyChooseUs: [
            //         'Publish high-quality, SEO-optimized blog content',
            //         'Tap into our expertise in content strategy and writing',
            //         'Receive detailed reports on your blog post performance',
            //         'Get dedicated support to address your content-related questions and concerns promptly',
            //     ],
            //     pricing: 'Our pricing is adaptable and customized to your content needs. Whether you require occasional blog posts or ongoing content creation, we have the right plan for you',
            //     readyTitle: 'Ready to Elevate Your Blogging Efforts?',
            //     readyDescription: 'Don\'t miss out on the power of valuable blog content. Let us manage your blog creation, ensuring you consistently deliver informative and engaging articles that resonate with your audience while you focus on your core business activities',
            // },
            // {   // Service 10 - 6 features
            //     name: 'Website Building Excellence',
            //     description: 'Empower your online presence with our Website Building Excellence service. We specialize in creating stunning, user-friendly websites that cater to your unique business needs. From design to functionality, we ensure your website leaves a lasting impression, drives engagement, and helps you achieve your digital goals effectively',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Custom Website Design',
            //             benefits: [
            //                 'Create a visually appealing website that represents your brand', 
            //                 'Stand out from the competition and leave a memorable impression',
            //             ],
            //             howWeDoIt: 'Our skilled designers will work closely with you to develop a custom website design that aligns with your brand identity, ensuring a unique and attractive online presence',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Responsive and User-Friendly Development',
            //             benefits: [
            //                 'Build a website that offers an excellent user experience on all devices', 
            //                 'Maximize audience engagement and reduce bounce rates'
            //             ],
            //             howWeDoIt: 'We\'ll develop your website using responsive design principles, making it accessible and functional across desktops, tablets, and mobile devices',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Content Management System (CMS) Integration',
            //             benefits: [
            //                 'Gain control over your website\'s content and updates',
            //                 'Easily manage and update your website\'s information'
            //             ],
            //             howWeDoIt: 'We\'ll integrate a user-friendly CMS (e.g., WordPress, Drupal) into your website, allowing you to edit and publish content effortlessly',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'E-commerce Functionality (Optional)',
            //             benefits: [
            //                 'Transform your website into a powerful online store', 
            //                 'Expand your reach and generate revenue through online sales'
            //             ],
            //             howWeDoIt: 'If needed, we\'ll incorporate e-commerce capabilities, enabling you to sell products or services directly from your website',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-check',
            //             title: 'SEO Optimization',
            //             benefits: [
            //                 'Improve search engine visibility and drive organic traffic', 
            //                 'Attract more visitors and potential customers'
            //             ],
            //             howWeDoIt: 'We\'ll optimize your website for SEO, including keyword research, on-page optimization, and technical SEO to ensure your site ranks well on search engines',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Performance Monitoring and Optimization',
            //             benefits: [
            //                 'Keep your website running smoothly and efficiently', 
            //                 'Ensure a seamless user experience and fast loading times'
            //             ],
            //             howWeDoIt: 'We\'ll monitor your website\'s performance, address any issues promptly, and continuously optimize it for speed, security, and functionality',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We begin by understanding your business, target audience, and digital objectives. Then, we create a tailored website strategy and design that aligns with your goals. Our experienced development team will bring your vision to life, ensuring your website is not only visually appealing but also functional and effective',
            //     whyChooseUs: [
            //         'Get a professionally designed and user-friendly website',
            //         'Tap into our expertise in web design and development',
            //         'Receive ongoing support and maintenance for your website',
            //         'Enjoy a seamless and engaging online presence',
            //     ],
            //     pricing: 'Our pricing is adaptable and customized to your website needs. Whether you require a simple informational site or a complex e-commerce platform, we have the right plan for you',
            //     readyTitle: 'Ready to Build Your Online Presence?',
            //     readyDescription: 'Don\'t miss out on the opportunities that a well-designed website can bring. Let us create and manage your website, ensuring it reflects your brand, engages your audience, and helps you achieve your digital goals while you focus on growing your business',
            // },
            // {   // Service 11 - 4 features
            //     name: 'Quora Reputation Enhancement',
            //     description: 'Enhance your online reputation and build trust with potential customers through our Quora Reputation Enhancement service. We specialize in strategically adding questions and providing positive answers about your business, improving your credibility and visibility on the Quora platform',
            //     features: [
            //         {
            //             iconClass: 'fa fa-bullhorn fa-3x',
            //             title: 'Strategic Question Placement',
            //             benefits: [
            //                 'Influence the questions potential customers ask about your business', 
            //                 'Shape the narrative and highlight your strengths',
            //             ],
            //             howWeDoIt: 'We strategically place questions on Quora that reflect positively on your business, creating a curated narrative that showcases your strengths and expertise',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-braille',
            //             title: 'Positive Answer Provision',
            //             benefits: [
            //                 'Provide informative and favorable responses to inquiries about your business', 
            //                 'Build trust and credibility among Quora users searching for information'
            //             ],
            //             howWeDoIt: 'We provide detailed and well-researched answers to the questions we\'ve strategically placed, ensuring that the responses highlight your business\'s strengths and expertise',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-copyright',
            //             title: 'Multiple Account Engagement (Confidential)',
            //             benefits: [
            //                 'Reach a wider audience while maintaining anonymity',
            //                 'Increase the visibility and credibility of your business on Quora'
            //             ],
            //             howWeDoIt: 'We engage with questions and answers from multiple Quora accounts, amplifying the reach and impact of the information we provide about your business',
            //         },
            //         {
            //             iconClass: 'fa fa-3x fa-industry',
            //             title: 'Reputation Monitoring',
            //             benefits: [
            //                 'Keep track of your online reputation on Quora', 
            //                 'Respond proactively to inquiries and comments'
            //             ],
            //             howWeDoIt: 'We monitor Quora for mentions and discussions related to your business, ensuring that your online reputation remains positive and responsive',
            //         },
            //         // Add more feature objects as needed
            //     ],
            //     approach: 'We begin by understanding your business, its strengths, and the narrative you want to create on Quora. Then, we strategically place questions and provide positive answers to shape the perception of your business. Our actions are designed to enhance your online reputation discreetly and effectively',
            //     whyChooseUs: [
            //         'Improve your online reputation and credibility on Quora',
            //         'Leverage our expertise in Quora reputation management',
            //         'Gain visibility among potential customers seeking information',
            //         'Enjoy a discreet and proactive approach to online reputation enhancement',
            //     ],
            //     pricing: 'Our pricing is flexible and tailored to your reputation enhancement needs. Whether you want to improve your Quora presence for a specific duration or maintain a long-term strategy, we have the right plan for you',
            //     readyTitle: 'Ready to Enhance Your Online Reputation on Quora?',
            //     readyDescription: 'Don\'t miss out on the opportunities that positive Quora interactions can bring. Let us discreetly manage your Quora reputation, shaping the narrative and building trust with potential customers while you focus on providing exceptional products or services',
            // },
            // NOTE - All 11 services & it's features pushed to database
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
            let featuresCount = 4 // Change it to 2 / 4 / 5 / 6 as per need (This applies for all records)
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
