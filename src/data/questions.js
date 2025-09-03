// Sample exam questions data
export const sampleQuestions = [
    {
        id: 1,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correctAnswer: 1,
        difficulty: "intermediate",
        topic: "algorithms"
    },
    {
        id: 2,
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correctAnswer: 2,
        difficulty: "beginner",
        topic: "javascript"
    },
    {
        id: 3,
        question: "What does REST stand for in web development?",
        options: ["Representational State Transfer", "Remote State Transfer", "Relational State Transfer", "Reactive State Transfer"],
        correctAnswer: 0,
        difficulty: "intermediate",
        topic: "web-development"
    },
    {
        id: 4,
        question: "Which HTTP method is used to update existing data?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correctAnswer: 2,
        difficulty: "beginner",
        topic: "web-development"
    },
    {
        id: 5,
        question: "What is the purpose of JWT tokens?",
        options: ["Data encryption", "User authentication", "Database queries", "File compression"],
        correctAnswer: 1,
        difficulty: "intermediate",
        topic: "authentication"
    },
    {
        id: 6,
        question: "Which React hook is used for side effects?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 1,
        difficulty: "intermediate",
        topic: "react"
    },
    {
        id: 7,
        question: "What is the default port for MongoDB?",
        options: ["3000", "5432", "27017", "8080"],
        correctAnswer: 2,
        difficulty: "beginner",
        topic: "database"
    },
    {
        id: 8,
        question: "Which CSS property is used for responsive design?",
        options: ["display", "position", "media-query", "flex"],
        correctAnswer: 2,
        difficulty: "intermediate",
        topic: "css"
    }
];

// Sample exam configurations
export const examConfigs = {
    fullStack: {
        id: "full-stack",
        name: "Full Stack Development Assessment",
        description: "Test your knowledge of React, Node.js, and databases",
        duration: 30, // minutes
        difficulty: "intermediate",
        topics: ["javascript", "react", "web-development", "database"],
        questions: sampleQuestions
    }
};

// Sample exam history for dashboard
export const sampleExamHistory = [
    {
        id: 1,
        examId: "full-stack",
        name: "JavaScript Fundamentals",
        score: 85,
        date: "2024-01-15",
        status: "completed",
        timeSpent: 25 // minutes
    },
    {
        id: 2,
        examId: "full-stack",
        name: "React.js Advanced",
        score: 92,
        date: "2024-01-10",
        status: "completed",
        timeSpent: 28 // minutes
    },
    {
        id: 3,
        examId: "full-stack",
        name: "Node.js Backend",
        score: 78,
        date: "2024-01-05",
        status: "completed",
        timeSpent: 30 // minutes
    }
];

// Performance statistics
export const performanceStats = {
    totalExams: 12,
    averageScore: 84.5,
    bestScore: 98,
    totalTimeSpent: 360, // minutes
    streakDays: 7,
    completionRate: 94.2
};