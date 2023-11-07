let projectInfoArr = [
    {
        id : "showbox01",
        siteName : "Show Box",
        editedImage : "../../Resources/Web Projects/show box edited.png",
        techStack : ["NodeJS", "ExpressJS", "ReactJS", "MongoDB", "Cloudinary", "JWT tokens","ContextAPI", "React-router-dom", "React-Carousel Library", "React-parallax-tilt"],
        duration : "1 month.",
        projectLink : "https://show-box.netlify.app/",
        code : "https://github.com/Spacious74/book-my-show-clone",
        challenges : [
            "At backend side the biggest challange was to upload movie posters using cloudinary and multer.",
            "Some syntax errors and runtime errors stressed me a lot.",
            "Facing issues while connecting to MongoDB Atlas.",
            "Network error : Problems with network communication, such as API calls failing due to timeouts, DNS resolution issues, or server unavailability.",
            "Fetching theatres and movies according to the user location is still not resolved."
        ],
        learnings : [
            "How to manage authorization according to client role.",
            "Properly handling errors and exceptions, logging them, and providing meaningful feedback to users for a user-friendly application.",
            "How to design the database schema for movie booking applications.",
            "Managing the application's state efficiently, especially when handling user sessions, booking data, and real-time updates.",
            "Creating an intuitive and user-friendly interface that allows users to browse movies, select seats, and complete bookings without confusion is a significant challenge.",
        ]
    }, 
    {
        id : "shopping02",
        siteName : "Shopping Bag",
        editedImage : "../../Resources/Web Projects/shopping bag edited.png",
        techStack : ["NodeJS", "ExpressJS", "ReactJS", "MongoDB","Cloudinary","Multer","JWT tokens","ContextAPI", "React-router-dom", "React-Carousel Library"],
        duration : "2 months while learning.",
        projectLink : "https://shopping-bag-dotcom.netlify.app/",
        code : "https://github.com/Spacious74/ecommerce_backend",
        challenges : [
            "In this project I had faced problems with the cart and product management system, while user is not logged in and then send products data to the db when user logged in.",
            "Faced some problems with the search and filtering system of products.",
            "Optimization the frontend for performance and responsiveness not resolved yet.",
            "Syntax errors and runtime errors are the most common issues that I have also faced and wasted time in it.",
            "Payment gateways, My Orders, Customer support like features are still not supported."
        ],
        learnings : [
            "Cart and Product management system with localstorage and contextAPI.",
            "Shopping cart and product database Schema.",
            "User authentication and authorization with JWT token management system.",
            "Optimized filtering and searching system.",
            "The user experience and interface of the shopping applications.",
            "Efficient image rendering system."
        ]
    },
    {
        id : "googlesearch03",
        siteName : "Google Search Clone",
        editedImage : "../../Resources/Web Projects/google search clone edited.png",
        techStack : ["ReactJS","ContextAPI", "React-router-dom", "Axios"],
        duration: "1 week",
        projectLink : "https://new-googles.netlify.app/",
        code : "https://github.com/Spacious74/new-googles",
        challenges : [
            "Authenticating and integrating with the complex Google Search API.",
            "Dealing with rate limits and quotas(issue not resolved yet) and API key management.",
            "Real time search suggestions(autocomplete not supported) and difficulty in synchronizing with user input.",
            "Pagination feature is incomplete because of Rate limits and quotas in google search API."
        ],
        learnings : [
            "API Key management with google search API",
            "Most important point first checkout the rate limits of api and make a tempObj file of results returned by API first time.",
            "Axios library and its features and methods with different parameters."
        ]
    }, 
    {
        id : "quizapp04",
        siteName : "Quiz App",
        editedImage : '../../Resources/Web Projects/quiz app edited.png',
        techStack : ["Reactjs", "ContextAPI","HTML", "CSS", "Javascript"],
        duration : "10 days",
        projectLink : "https://spacious74.github.io/Quiz-App/",
        code : "https://github.com/Spacious74/Quiz-App",
        learnings : [
            "React State management",
            "How to store temp data in local storage",
            "React hooks"
        ]
    }, 
    {
        id : "iPhone05",
        siteName : "iPhone14 Webpage clone",
        editedImage : "./Resources/Web Projects/iPhone edited.png",
        techStack : ["Reactjs", "HTML", "CSS", "JavaScript"],
        duration : "10 to 15 days",
        projectLink : "https://spacious74.github.io/iPhoneLandingPage/",
        code : "https://github.com/Spacious74/iPhoneLandingPage",
        learnings : [
            "How to create a brand advertising webpage.",
            "Unique layout design that follows the UI fundamentals",
        ]
    }, 
    {
        id : "todo06",
        siteName : "Todo Application",
        editedImage : './Resources/Web Projects/todo raw.png',
        techStack : ["ReactJS","HTML", "CSS", "JavaScript"],
        duration : "10 days approx.",
        projectLink : "https://spacious74.github.io/ToDoUI/",
        code : "https://github.com/Spacious74/ToDoUI"
    },
    {
        id : "stonepaper07",
        siteName : "Stone Paper Scissor",
        editedImage : "./Resources/Web Projects/stone paper edited.png",
        techStack : ["Reactjs", "HTML", "CSS", "JavaScript"],
        duration : "5 days approx.",
        projectLink : "https://spacious74.github.io/stone-paper-scissor/",
        code : "https://github.com/Spacious74/stone-paper-scissor"
    },
    {
        id : "tictac08",
        siteName : "Tic Tack Toe",
        editedImage :  "./Resources/Web Projects/tic tac edited.png",
        techStack : ["Reactjs", "HTML", "CSS", "JavaScript"],
        duration : "3 days",
        projectLink : "https://spacious74.github.io/Tic-Tac-Toe/",
        code : "https://github.com/Spacious74/Tic-Tac-Toe",
    },
    {
        id : "spline09",
        siteName : "Spline3d Graphics",
        editedImage : "./Resources/Web Projects/spline.png",
        techStack : ["Spline", "HTML", "CSS", "Three.js", "Javascript"],
        duration : "3 months",
        projectLink : "https://spacious74.github.io/spline-3d-graphics/",
        code : "https://github.com/Spacious74/spline-3d-graphics"
    },
    {
        id : "wordpress10",
        siteName : "Codiology",
        editedImage : "./Resources/Web Projects/wordpress edited.png",
        techStack : ["WordPress"],
        projectLink : "https://a1codiology.wordpress.com/",
        duration : "5 days(development)"
    },
    {
        id : "protype11",
        siteName : "Protype",
        editedImage : "./Resources/Web Projects/protype mockup.png",
        techStack : ["React"],
        duration : "3 days",
        projectLink : "https://spacious74.github.io/typing-software/",
        code : "https://github.com/Spacious74/typing-software.git"
    }
]

export default projectInfoArr