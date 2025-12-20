export const courses = [
  {
    id: 1,
    title: "Diploma in Data Science and AI",
    level: "diploma",
    category: "data-science",
    duration: "12 Months",
    mode: "Hybrid Learning",
    rating: 4.8,
    students: 450,
    price: "₹99,999",
    monthlyPrice: "₹8,499",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    description:
      "Comprehensive program covering Python, Machine Learning, Deep Learning, and AI fundamentals with hands-on projects.",
    fullDescription:
      "This comprehensive 12-month diploma program is designed for professionals and fresh graduates who want to build a strong foundation in Data Science and AI. The curriculum combines theoretical knowledge with practical hands-on experience through real-world projects. You will learn industry-standard tools and techniques used by top tech companies.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience in machine learning and data science",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "AI Fundamentals",
      "Data Visualization",
      "SQL",
    ],
    whatYouWillLearn: [
      "Master Python programming for data science",
      "Build and deploy machine learning models",
      "Understand deep neural networks and AI concepts",
      "Work with real-world datasets and projects",
      "SQL database management and optimization",
      "Data visualization and storytelling",
      "Learn Python fundamentals and how to write efficient code for data analysis.",
      "Understand data structures and algorithms for processing and analyzing data.",
      "Master SQL for querying, managing, and optimizing databases.",
      "Build a complete data cleaning pipeline from raw data to usable datasets.",
      "Explore supervised and unsupervised machine learning techniques in depth.",
      "Apply feature engineering to improve model performance.",
      "Develop, train, and evaluate machine learning models for real-world problems.",
      "Understand neural networks, including CNNs for computer vision and NLP for text analysis.",
      "Work with transformers and advanced deep learning architectures.",
      "Build and deploy deep learning applications for image and language tasks.",
      "Learn MLOps best practices for deploying and maintaining models in production.",
      "Explore advanced AI architectures and their applications in industry.",
      "Complete a capstone project that integrates all skills learned in the program."
    ],
    curriculum: [
      {
        section: "Foundation",
        lectures: [
          { title: "Introduction to Python", duration: "20 hours", type: "video" },
          { title: "Data Structures & Algorithms", duration: "15 hours", type: "video" },
          { title: "SQL Fundamentals", duration: "12 hours", type: "video" },
          { title: "Project: Data Cleaning Pipeline", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "Machine Learning",
        lectures: [
          { title: "Supervised Learning", duration: "16 hours", type: "video" },
          { title: "Unsupervised Learning", duration: "14 hours", type: "video" },
          { title: "Feature Engineering", duration: "10 hours", type: "video" },
          { title: "Project: ML Model Development", duration: "12 hours", type: "project" }
        ]
      },
      {
        section: "Deep Learning & AI",
        lectures: [
          { title: "Neural Networks Fundamentals", duration: "18 hours", type: "video" },
          { title: "CNNs and Computer Vision", duration: "16 hours", type: "video" },
          { title: "NLP and Transformers", duration: "14 hours", type: "video" },
          { title: "Project: Deep Learning Application", duration: "10 hours", type: "project" }
        ]
      },
      {
        section: "Advanced Topics & Capstone",
        lectures: [
          { title: "MLOps and Deployment", duration: "12 hours", type: "video" },
          { title: "Advanced AI Architectures", duration: "10 hours", type: "video" },
          { title: "Capstone Project", duration: "40 hours", type: "project" }
        ]
      }
    ],
    requirements: [
      "Basic knowledge of mathematics (algebra, statistics)",
      "Familiarity with any programming language is beneficial",
      "Laptop with minimum 8GB RAM",
      "Commitment to 10-12 hours per week"
    ],
    targetAudience: [
      "Fresh graduates looking to start a career in Data Science",
      "Working professionals wanting to transition to Data Science",
      "Entrepreneurs interested in data-driven decision making",
      "Anyone passionate about AI and Machine Learning"
    ],
    includes: [
      "120+ hours of video content",
      "40+ hands-on projects",
      "Industry-standard tools and libraries",
      "Lifetime access to course materials",
      "Recognized diploma certificate",
      "Job assistance and placement support",
      "1-on-1 mentoring sessions"
    ],
    reviews: [
      {
        name: "Rahul Kumar",
        rating: 5,
        comment: "Excellent course! The instructors are very knowledgeable and the projects are really practical.",
        date: "2024-11-15"
      },
      {
        name: "Priya Singh",
        rating: 4.5,
        comment: "Great content and good pace. Would have liked more real-world industry examples.",
        date: "2024-11-10"
      }
    ]
  },
  {
    id: 2,
    title: "Advanced Certificate in Data Science and AI",
    level: "advanced",
    category: "data-science",
    duration: "8 Months",
    mode: "Online",
    rating: 4.9,
    students: 380,
    price: "₹79,999",
    monthlyPrice: "₹10,000",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    description:
      "Advanced training in neural networks, NLP, computer vision, and production ML systems.",
    fullDescription:
      "This advanced 8-month certificate program is for experienced data scientists and ML engineers who want to master cutting-edge techniques in deep learning and AI. Focus on production-ready systems and real-world applications.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Neural Networks", "NLP", "Computer Vision", "MLOps", "Advanced AI"],
    whatYouWillLearn: [
      "Master advanced neural network architectures",
      "Build production-grade NLP systems",
      "Implement computer vision solutions",
      "Deploy models at scale with MLOps",
      "Work with transformers and modern deep learning",
      "Understand RNNs and LSTMs for sequence modeling.",
      "Apply attention mechanisms to improve deep learning models.",
      "Build sequence modeling projects from scratch.",
      "Master transformer architecture for NLP and deep learning.",
      "Work with BERT and GPT models for advanced language tasks.",
      "Develop NLP applications using state-of-the-art models.",
      "Learn advanced CNNs for computer vision tasks.",
      "Implement object detection and segmentation in real-world projects.",
      "Build and deploy complete vision systems.",
      "Deploy models at scale using MLOps best practices.",
      "Monitor and A/B test models in production environments.",
      "Complete a capstone project building a production ML system."
    ],
    curriculum: [
      {
        section: "Advanced Neural Networks",
        lectures: [
          { title: "RNNs and LSTMs", duration: "16 hours", type: "video" },
          { title: "Attention Mechanisms", duration: "12 hours", type: "video" },
          { title: "Project: Sequence Modeling", duration: "10 hours", type: "project" }
        ]
      },
      {
        section: "NLP and Transformers",
        lectures: [
          { title: "Transformer Architecture", duration: "18 hours", type: "video" },
          { title: "BERT and GPT Models", duration: "14 hours", type: "video" },
          { title: "Project: NLP Application", duration: "12 hours", type: "project" }
        ]
      },
      {
        section: "Computer Vision",
        lectures: [
          { title: "Advanced CNNs", duration: "16 hours", type: "video" },
          { title: "Object Detection & Segmentation", duration: "14 hours", type: "video" },
          { title: "Project: Vision System", duration: "12 hours", type: "project" }
        ]
      },
      {
        section: "MLOps & Deployment",
        lectures: [
          { title: "Model Deployment and Serving", duration: "12 hours", type: "video" },
          { title: "Monitoring and A/B Testing", duration: "10 hours", type: "video" },
          { title: "Capstone: Production System", duration: "20 hours", type: "project" }
        ]
      }
    ],
    requirements: [
      "Strong foundation in Python and machine learning",
      "Experience with at least one deep learning framework",
      "Comfortable with linear algebra and calculus",
      "10+ hours per week commitment"
    ],
    targetAudience: [
      "Data scientists with 2+ years experience",
      "ML engineers wanting to specialize in deep learning",
      "PhD students in computer science/AI",
      "Tech professionals transitioning to advanced ML roles"
    ],
    includes: [
      "100+ hours of advanced video content",
      "30+ advanced projects",
      "Access to GPU compute resources",
      "Lifetime access to updated materials",
      "Advanced certificate",
      "Industry network and mentoring"
    ],
    reviews: [
      {
        name: "Amit Patel",
        rating: 5,
        comment: "Best advanced ML course I've taken. The capstone project was fantastic.",
        date: "2024-11-08"
      }
    ]
  },
  {
    id: 3,
    title: "Diploma in Data Analytics and AI",
    level: "diploma",
    category: "data-analytics",
    duration: "10 Months",
    mode: "Hybrid Learning",
    rating: 4.7,
    students: 520,
    price: "₹89,999",
    monthlyPrice: "₹9,000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    description:
      "Master data analysis, statistical modeling, and AI-powered analytics for business decisions.",
    fullDescription:
      "This 10-month diploma program equips you with the skills to become a data analyst using advanced analytics tools and AI techniques. Learn to extract insights from data and drive business decisions.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: [
      "SQL & Databases",
      "Excel Analytics",
      "Tableau",
      "Statistical Analysis",
      "Predictive Analytics",
    ],
    whatYouWillLearn: [
      "Master SQL for complex data queries",
      "Advanced Excel analytics and dashboards",
      "Create compelling visualizations with Tableau",
      "Statistical analysis and hypothesis testing",
      "Build predictive models for business",
      "Master SQL for advanced data queries and database management.",
      "Use Excel's advanced features for analytics and dashboard creation.",
      "Understand statistical basics for data analysis and hypothesis testing.",
      "Build a complete data warehouse project from scratch.",
      "Learn Tableau fundamentals for data visualization.",
      "Design interactive dashboards for business intelligence.",
      "Use Power BI for business analytics and reporting.",
      "Develop business dashboards for real-world scenarios.",
      "Apply regression analysis for predictive modeling.",
      "Build and evaluate classification models.",
      "Forecast time series data for business planning.",
      "Complete a capstone analytics project integrating all skills."
    ],
    curriculum: [
      {
        section: "Data Foundations",
        lectures: [
          { title: "SQL Mastery", duration: "18 hours", type: "video" },
          { title: "Excel Advanced Features", duration: "12 hours", type: "video" },
          { title: "Statistical Basics", duration: "10 hours", type: "video" },
          { title: "Project: Data Warehouse", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "Analytics & Visualization",
        lectures: [
          { title: "Tableau Fundamentals", duration: "16 hours", type: "video" },
          { title: "Dashboard Design", duration: "12 hours", type: "video" },
          { title: "Power BI Basics", duration: "10 hours", type: "video" },
          { title: "Project: Business Dashboard", duration: "10 hours", type: "project" }
        ]
      },
      {
        section: "Predictive Analytics",
        lectures: [
          { title: "Regression Analysis", duration: "14 hours", type: "video" },
          { title: "Classification Models", duration: "12 hours", type: "video" },
          { title: "Time Series Forecasting", duration: "10 hours", type: "video" },
          { title: "Capstone: Analytics Project", duration: "15 hours", type: "project" }
        ]
      }
    ],
    requirements: [
      "Basic computer literacy",
      "High school level mathematics",
      "Interest in data and analytics",
      "8-10 hours per week availability"
    ],
    targetAudience: [
      "Business professionals wanting to leverage data",
      "Recent graduates looking for analytics careers",
      "Marketing/Sales professionals interested in data",
      "Anyone aspiring to become a data analyst"
    ],
    includes: [
      "100+ hours of video content",
      "35+ analytics projects",
      "Industry tools access (Tableau, Power BI)",
      "Lifetime course access",
      "Recognized diploma certificate",
      "Career coaching sessions"
    ],
    reviews: []
  },
  {
    id: 4,
    title: "Advanced Certification in Data Analytics and AI",
    level: "advanced",
    category: "data-analytics",
    duration: "7 Months",
    mode: "Online",
    rating: 4.8,
    students: 290,
    price: "₹69,999",
    monthlyPrice: "₹10,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    description:
      "Advanced analytics, big data processing, and AI-driven decision systems for senior professionals.",
    fullDescription:
      "An intensive 7-month program for analytics professionals looking to master big data technologies and advanced AI-driven analytics.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Big Data", "Apache Spark", "AI Analytics", "Cloud Analytics"],
    whatYouWillLearn: [
      "Master Apache Spark for big data processing and analytics.",
      "Perform advanced analytics on leading cloud platforms.",
      "Develop AI-driven business intelligence solutions.",
      "Build real-time analytics systems for business needs.",
      "Work with distributed data processing using Apache Spark.",
      "Implement cloud-based analytics pipelines and dashboards.",
      "Apply AI techniques to business intelligence and reporting.",
      "Design and deploy real-time analytics for fast decision making."
    ],
    curriculum: [
      {
        section: "Big Data & Spark",
        lectures: [
          { title: "Apache Spark Fundamentals", duration: "14 hours", type: "video" },
          { title: "Distributed Data Processing", duration: "12 hours", type: "video" },
          { title: "Project: Big Data Pipeline", duration: "10 hours", type: "project" }
        ]
      },
      {
        section: "Cloud Analytics",
        lectures: [
          { title: "Cloud Platforms for Analytics", duration: "12 hours", type: "video" },
          { title: "Building Analytics Dashboards", duration: "10 hours", type: "video" },
          { title: "Project: Cloud Analytics Dashboard", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "AI Business Intelligence",
        lectures: [
          { title: "AI for Business Intelligence", duration: "10 hours", type: "video" },
          { title: "Automated Reporting Systems", duration: "8 hours", type: "video" },
          { title: "Project: AI BI Solution", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "Real-Time Analytics",
        lectures: [
          { title: "Real-Time Data Processing", duration: "10 hours", type: "video" },
          { title: "Fast Decision Systems", duration: "8 hours", type: "video" },
          { title: "Project: Real-Time Analytics", duration: "8 hours", type: "project" }
        ]
      }
    ],
    requirements: [],
    targetAudience: [],
    includes: [],
    reviews: []
  },
  {
    id: 5,
    title: "Certification in Data Analytics and AI",
    level: "certificate",
    category: "data-analytics",
    duration: "5 Months",
    mode: "Online",
    rating: 4.6,
    students: 680,
    price: "₹49,999",
    monthlyPrice: "₹10,000",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop",
    description:
      "Essential analytics skills with AI integration, perfect for beginners and career switchers.",
    fullDescription:
      "A beginner-friendly 5-month certification program covering essential analytics skills and AI fundamentals.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Data Basics", "Python Basics", "Power BI", "AI Tools"],
    whatYouWillLearn: [
      "Understand the basics of data analytics and its applications.",
      "Learn Python fundamentals for analytics tasks.",
      "Master Power BI for data modeling and dashboard creation.",
      "Integrate AI tools for analytics automation.",
      "Build real-world analytics projects from scratch.",
      "Create interactive dashboards and reports for business insights."
    ],
    curriculum: [
      {
        section: "Data Analytics Basics",
        lectures: [
          { title: "Introduction to Data Analytics", duration: "8 hours", type: "video" },
          { title: "Python Basics for Analytics", duration: "10 hours", type: "video" },
          { title: "Project: Data Analysis with Python", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "Power BI & Dashboards",
        lectures: [
          { title: "Power BI Fundamentals", duration: "10 hours", type: "video" },
          { title: "Data Modeling in Power BI", duration: "8 hours", type: "video" },
          { title: "Project: Business Dashboard", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "AI Tools & Automation",
        lectures: [
          { title: "AI Tools for Analytics", duration: "8 hours", type: "video" },
          { title: "Automation in Analytics", duration: "6 hours", type: "video" },
          { title: "Project: Automated Analytics", duration: "6 hours", type: "project" }
        ]
      }
    ],
    requirements: [],
    targetAudience: [],
    includes: [],
    reviews: []
  },
  {
    id: 6,
    title: "Applied Data Analytics with Python & SQL",
    level: "certificate",
    category: "data-analytics",
    duration: "4 Months",
    mode: "Online",
    rating: 4.7,
    students: 540,
    price: "₹39,999",
    monthlyPrice: "₹10,000",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop",
    description:
      "Hands-on training in data analysis using Python and SQL for real-world business applications.",
    fullDescription:
      "A practical 4-month course focused on Python and SQL for data analysis in real business scenarios.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Python", "SQL", "Pandas", "Data Analysis", "ETL"],
    whatYouWillLearn: [
      "Master Python and SQL for data analysis tasks.",
      "Use Pandas for data manipulation and cleaning.",
      "Understand ETL processes for business data.",
      "Apply analytics to real-world business scenarios.",
      "Build and present analytics projects using Python and SQL."
    ],
    curriculum: [
      {
        section: "Python & SQL Fundamentals",
        lectures: [
          { title: "Python for Data Analysis", duration: "10 hours", type: "video" },
          { title: "SQL for Data Analytics", duration: "10 hours", type: "video" },
          { title: "Project: Data Analysis with SQL", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "Pandas & Data Manipulation",
        lectures: [
          { title: "Pandas Basics", duration: "8 hours", type: "video" },
          { title: "Data Cleaning Techniques", duration: "8 hours", type: "video" },
          { title: "Project: Data Cleaning", duration: "6 hours", type: "project" }
        ]
      },
      {
        section: "ETL & Applied Analytics",
        lectures: [
          { title: "ETL Processes", duration: "8 hours", type: "video" },
          { title: "Applied Analytics Projects", duration: "8 hours", type: "video" },
          { title: "Project: Business Analytics", duration: "8 hours", type: "project" }
        ]
      }
    ],
    requirements: [],
    targetAudience: [],
    includes: [],
    reviews: []
  },
  {
    id: 7,
    title: "Business Intelligence with Power BI",
    level: "certificate",
    category: "data-analytics",
    duration: "3 Months",
    mode: "Online",
    rating: 4.8,
    students: 720,
    price: "₹29,999",
    monthlyPrice: "₹7,500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    description:
      "Master Power BI for creating interactive dashboards and business intelligence reports.",
    fullDescription:
      "A focused 3-month program to master Power BI tool for creating professional dashboards and BI reports.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Power BI", "DAX", "Data Modeling", "Dashboards", "Reporting"],
    whatYouWillLearn: [
      "Master advanced data visualization techniques.",
      "Create interactive visualizations with Tableau and D3.js.",
      "Apply design principles for effective data storytelling.",
      "Build and present interactive data stories for business.",
      "Develop real-world visualization projects from scratch."
    ],
    curriculum: [
      {
        section: "Tableau & Data Storytelling",
        lectures: [
          { title: "Tableau Advanced Techniques", duration: "10 hours", type: "video" },
          { title: "Data Storytelling Principles", duration: "8 hours", type: "video" },
          { title: "Project: Tableau Story", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "D3.js & Interactive Viz",
        lectures: [
          { title: "D3.js Fundamentals", duration: "8 hours", type: "video" },
          { title: "Building Interactive Visualizations", duration: "8 hours", type: "video" },
          { title: "Project: Interactive Viz", duration: "6 hours", type: "project" }
        ]
      },
      {
        section: "Design & Business Applications",
        lectures: [
          { title: "Design Principles for Visualization", duration: "8 hours", type: "video" },
          { title: "Business Applications of Viz", duration: "8 hours", type: "video" },
          { title: "Project: Business Data Story", duration: "6 hours", type: "project" }
        ]
      }
    ],
    requirements: [],
    targetAudience: [],
    includes: [],
    reviews: []
  },
  {
    id: 8,
    title: "Data Science for Product Managers",
    level: "certificate",
    category: "data-science",
    duration: "3 Months",
    mode: "Online",
    rating: 4.6,
    students: 410,
    price: "₹34,999",
    monthlyPrice: "₹11,666",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    description:
      "Learn data-driven decision making and analytics essentials for product management roles.",
    fullDescription:
      "A specialized 3-month course for product managers to understand data science and make data-driven decisions.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Product Analytics", "A/B Testing", "Metrics", "User Behavior", "Data Strategy"],
    whatYouWillLearn: [
      "Understand the fundamentals of product analytics and user metrics.",
      "Design and interpret A/B tests for product features.",
      "Develop data-driven strategies for product growth.",
      "Apply user behavior analysis to improve product decisions.",
      "Communicate insights effectively to stakeholders."
    ],
    curriculum: [
      {
        section: "Product Analytics Basics",
        lectures: [
          { title: "Introduction to Product Analytics", duration: "6 hours", type: "video" },
          { title: "User Metrics and KPIs", duration: "5 hours", type: "video" },
          { title: "Project: Product Metrics Dashboard", duration: "4 hours", type: "project" }
        ]
      },
      {
        section: "A/B Testing & Experimentation",
        lectures: [
          { title: "A/B Testing Fundamentals", duration: "6 hours", type: "video" },
          { title: "Designing Experiments", duration: "5 hours", type: "video" },
          { title: "Project: Feature Experiment", duration: "4 hours", type: "project" }
        ]
      },
      {
        section: "Data-Driven Product Strategy",
        lectures: [
          { title: "User Behavior Analysis", duration: "5 hours", type: "video" },
          { title: "Data-Driven Decision Making", duration: "5 hours", type: "video" },
          { title: "Project: Product Growth Plan", duration: "4 hours", type: "project" }
        ]
      }
    ],
    requirements: [
      "Basic understanding of product management concepts",
      "Interest in data-driven decision making",
      "No prior coding experience required"
    ],
    targetAudience: [
      "Product managers seeking to leverage data",
      "Aspiring product leaders",
      "Business analysts interested in product roles",
      "Startup founders and entrepreneurs"
    ],
    includes: [
      "30+ hours of video content",
      "3 hands-on projects",
      "Downloadable resources",
      "Certificate of completion",
      "Access to alumni community"
    ],
    reviews: [
      {
        name: "Sneha Kapoor",
        rating: 4.7,
        comment: "Very practical and relevant for product managers. Loved the hands-on projects!",
        date: "2024-11-12"
      }
    ]
  },
  {
    id: 9,
    title: "Advanced Data Visualization Techniques",
    level: "advanced",
    category: "data-analytics",
    duration: "4 Months",
    mode: "Online",
    rating: 4.9,
    students: 350,
    price: "₹44,999",
    monthlyPrice: "₹11,250",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
    description:
      "Advanced techniques for creating compelling data visualizations and storytelling with data.",
    fullDescription:
      "Master advanced visualization techniques and data storytelling in this 4-month intensive program.",
    instructor: {
      name: "Dr. Shagun",
      title: "Lead Instructor, Data Science",
      bio: "PhD in AI with 15+ years of industry experience",
      image: "/uploads/Shagun4-removebg-preview (1).png",
      credentials: ["PhD in AI", "15+ Years Experience"]
    },
    topics: ["Tableau", "D3.js", "Data Storytelling", "Design Principles", "Interactive Viz"],
    whatYouWillLearn: [
      "Master advanced data visualization techniques.",
      "Create interactive visualizations with Tableau and D3.js.",
      "Apply design principles for effective data storytelling.",
      "Build and present interactive data stories for business.",
      "Develop real-world visualization projects from scratch."
    ],
    curriculum: [
      {
        section: "Tableau & Data Storytelling",
        lectures: [
          { title: "Tableau Advanced Techniques", duration: "10 hours", type: "video" },
          { title: "Data Storytelling Principles", duration: "8 hours", type: "video" },
          { title: "Project: Tableau Story", duration: "8 hours", type: "project" }
        ]
      },
      {
        section: "D3.js & Interactive Viz",
        lectures: [
          { title: "D3.js Fundamentals", duration: "8 hours", type: "video" },
          { title: "Building Interactive Visualizations", duration: "8 hours", type: "video" },
          { title: "Project: Interactive Viz", duration: "6 hours", type: "project" }
        ]
      },
      {
        section: "Design & Business Applications",
        lectures: [
          { title: "Design Principles for Visualization", duration: "8 hours", type: "video" },
          { title: "Business Applications of Viz", duration: "8 hours", type: "video" },
          { title: "Project: Business Data Story", duration: "6 hours", type: "project" }
        ]
      }
    ],
    requirements: [
      "Basic knowledge of data analysis",
      "Interest in data visualization",
      "No prior coding experience required"
    ],
    targetAudience: [
      "Data analysts and scientists",
      "Business intelligence professionals",
      "Designers interested in data storytelling",
      "Anyone wanting to master data visualization"
    ],
    includes: [
      "40+ hours of video content",
      "3 real-world projects",
      "Downloadable datasets",
      "Certificate of completion",
      "Access to visualization community"
    ],
    reviews: [
      {
        name: "Rohit Sharma",
        rating: 4.9,
        comment: "The best visualization course I've taken. The D3.js section is a game changer!",
        date: "2024-11-18"
      }
    ]
  },
];

export function getCourseById(id) {
  return courses.find(course => course.id === parseInt(id));
}
