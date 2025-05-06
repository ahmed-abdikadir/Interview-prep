// DOM Elements
const startInterviewBtn = document.getElementById('start-interview');
const freeTrialBtn = document.getElementById('free-trial');
const basicPlanBtn = document.getElementById('basic-plan');
const premiumPlanBtn = document.getElementById('premium-plan');
const interviewModal = document.getElementById('interview-modal');
const closeModalBtn = document.querySelector('.close');
const startSessionBtn = document.getElementById('start-session');
const interviewSettings = document.querySelector('.interview-settings');
const interviewSession = document.getElementById('interview-session');
const interviewCompleted = document.getElementById('interview-completed');
const currentQuestion = document.getElementById('current-question');
const answerInput = document.getElementById('answer-input');
const submitAnswerBtn = document.getElementById('submit-answer');
const skipQuestionBtn = document.getElementById('skip-question');
const nextQuestionBtn = document.getElementById('next-question');
const endInterviewBtn = document.getElementById('end-interview');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackText = document.getElementById('feedback-text');
const contentScore = document.getElementById('content-score');
const structureScore = document.getElementById('structure-score');
const relevanceScore = document.getElementById('relevance-score');
const contentScoreValue = document.getElementById('content-score-value');
const structureScoreValue = document.getElementById('structure-score-value');
const relevanceScoreValue = document.getElementById('relevance-score-value');
const finalScore = document.getElementById('final-score');
const interviewSummary = document.getElementById('interview-summary');
const viewDetailedReportBtn = document.getElementById('view-detailed-report');
const tryAnotherBtn = document.getElementById('try-another');
const upgradeFromResultsBtn = document.getElementById('upgrade-from-results');

// Question Database
const questionDatabase = {
    general: {
        entry: [
            "Tell me about yourself.",
            "Why do you want to work for our company?",
            "What are your strengths and weaknesses?",
            "Where do you see yourself in five years?",
            "Describe a challenge you faced at work and how you handled it.",
            "Why should we hire you?",
            "What do you know about our company?",
            "How do you handle stress and pressure?",
            "Describe your work ethic.",
            "Tell me about a time you made a mistake and how you dealt with it."
        ],
        mid: [
            "Tell me about a time you had to deal with a difficult coworker.",
            "Describe a project where you demonstrated leadership skills.",
            "How do you prioritize tasks when you have multiple deadlines?",
            "What has been your most significant professional achievement?",
            "How do you stay updated with industry trends?",
            "Describe a situation where you had to make a difficult decision.",
            "How do you handle feedback and criticism?",
            "Tell me about a time you went above and beyond for a job.",
            "How would your colleagues describe your work style?",
            "What motivates you professionally?"
        ],
        senior: [
            "Describe a situation where you had to lead a team through a difficult change.",
            "Tell me about a time you had to make a strategic decision with limited information.",
            "How do you mentor junior team members?",
            "Describe a time when you failed at something and what you learned.",
            "How do you balance quality and timely delivery in your work?",
            "Tell me about a project where you had to influence stakeholders without direct authority.",
            "How do you create a positive team culture?",
            "What's your approach to solving complex problems?",
            "Describe a situation where you had to adapt to a significant change.",
            "How do you stay motivated during long-term projects?"
        ]
    },
    technical: {
        entry: [
            "What programming languages are you most comfortable with?",
            "Explain the difference between frontend and backend development.",
            "How would you explain a database to someone non-technical?",
            "Describe your experience with version control systems.",
            "What is your approach to debugging code?",
            "How do you ensure your code is maintainable?",
            "What do you know about agile development?",
            "Describe a small project you've worked on from start to finish.",
            "How do you keep up with new technologies?",
            "What would you do if you found a bug in production code?"
        ],
        mid: [
            "Explain the concept of RESTful APIs and when you would use them.",
            "How do you approach testing your code?",
            "Describe a time you optimized a slow-performing piece of code.",
            "What design patterns have you used and why?",
            "How do you handle technical debt in a project?",
            "Explain how you would design a scalable web application.",
            "Describe your experience with cloud services.",
            "How do you approach code reviews?",
            "Tell me about a challenging technical problem you solved recently.",
            "How do you balance feature development with code maintenance?"
        ],
        senior: [
            "How do you make architectural decisions when designing systems?",
            "Describe how you would design a distributed system.",
            "How do you approach system performance optimization?",
            "Tell me about how you ensure security in your software.",
            "How do you balance technical excellence with business requirements?",
            "Describe a time you had to make a significant technical compromise and why.",
            "How do you evaluate new technologies for potential adoption?",
            "Explain your approach to designing for reliability and fault tolerance.",
            "How do you maintain technical quality across a large codebase or team?",
            "Describe how you've implemented continuous integration/continuous deployment."
        ]
    },
    leadership: {
        entry: [
            "Describe a time when you took initiative on a project.",
            "How do you handle working in a team?",
            "Tell me about a time you had to resolve a conflict within a team.",
            "How do you approach delegating tasks?",
            "Describe your communication style.",
            "How do you provide feedback to teammates?",
            "Tell me about a time you influenced others to adopt your idea.",
            "How do you approach learning new skills?",
            "Describe a situation where you had to adapt to a change quickly.",
            "How do you build relationships with team members?"
        ],
        mid: [
            "Describe your approach to managing a project with limited resources.",
            "How do you motivate team members?",
            "Tell me about a time you had to make an unpopular decision.",
            "How do you balance autonomy and guidance when leading a team?",
            "Describe a time you helped someone improve their performance.",
            "How do you approach setting goals for your team?",
            "Tell me about a situation where you had to navigate office politics.",
            "How do you foster innovation within a team?",
            "Describe how you've handled a situation with a poor performer.",
            "How do you ensure your team meets deadlines?"
        ],
        senior: [
            "How do you align your team's goals with broader organizational objectives?",
            "Describe how you've built and led high-performing teams.",
            "How do you handle making decisions that involve risk or uncertainty?",
            "Tell me about a time you had to lead during a crisis or significant change.",
            "How do you develop leadership capabilities in others?",
            "Describe how you manage competing priorities across multiple teams.",
            "How do you ensure diversity and inclusion within your team?",
            "Tell me how you've turned around an underperforming team.",
            "How do you approach strategic planning and execution?",
            "Describe how you measure and improve team performance over time."
        ]
    }
};

// Feedback Templates
const feedbackTemplates = [
    {
        content: "Your answer provides good specific examples, which is excellent. Consider structuring your response using the STAR method (Situation, Task, Action, Result) to make it even more impactful.",
        structure: "The organization of your answer is clear, with a good introduction and conclusion. To improve, try to make stronger transitions between your main points.",
        relevance: "Your answer is directly relevant to the question asked, which shows good listening skills. You've addressed all key aspects of the question."
    },
    {
        content: "Your answer includes some good points, but could benefit from more concrete examples. Interviewers appreciate specific situations that demonstrate your skills in action.",
        structure: "Your answer has a basic structure, but could be more organized. Try to clearly state your main point first, then provide supporting evidence.",
        relevance: "Your answer partially addresses the question, but seems to miss some key elements the interviewer was likely looking for."
    },
    {
        content: "Your content is comprehensive and shows deep knowledge of the subject. The examples you provided effectively illustrate your experience.",
        structure: "Your answer is very well-structured, making it easy to follow your logic. You have a clear beginning, middle, and end to your response.",
        relevance: "Your answer is perfectly aligned with what the interviewer was asking, and you've even anticipated follow-up points."
    }
];

// State management
let currentInterviewType = 'general';
let currentPositionLevel = 'entry';
let currentCompanyType = 'tech';
let questionQueue = [];
let currentQuestionIndex = 0;
let userResponses = [];
let freeTrialUsed = false;
let isPremiumUser = false;

// Event Listeners
startInterviewBtn.addEventListener('click', openInterviewModal);
freeTrialBtn.addEventListener('click', () => {
    if (freeTrialUsed) {
        showUpgradePrompt();
    } else {
        openInterviewModal();
    }
});
basicPlanBtn.addEventListener('click', showUpgradePrompt);
premiumPlanBtn.addEventListener('click', showUpgradePrompt);
closeModalBtn.addEventListener('click', closeInterviewModal);
startSessionBtn.addEventListener('click', startInterview);
submitAnswerBtn.addEventListener('click', submitAnswer);
skipQuestionBtn.addEventListener('click', skipQuestion);
nextQuestionBtn.addEventListener('click', nextQuestion);
endInterviewBtn.addEventListener('click', endInterview);
viewDetailedReportBtn.addEventListener('click', showUpgradePrompt);
tryAnotherBtn.addEventListener('click', resetInterview);
upgradeFromResultsBtn.addEventListener('click', showUpgradePrompt);

// Window event to close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === interviewModal) {
        closeInterviewModal();
    }
});

// Functions
function openInterviewModal() {
    interviewModal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Reset to settings view
    interviewSettings.style.display = 'block';
    interviewSession.style.display = 'none';
    interviewCompleted.style.display = 'none';
    
    // Get selected values from dropdowns
    const interviewTypeSelect = document.getElementById('interview-type');
    const companyTypeSelect = document.getElementById('company-type');
    const positionLevelSelect = document.getElementById('position-level');
    
    currentInterviewType = interviewTypeSelect.value;
    currentCompanyType = companyTypeSelect.value;
    currentPositionLevel = positionLevelSelect.value;
}

function closeInterviewModal() {
    interviewModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

function startInterview() {
    // Get selected values
    const interviewTypeSelect = document.getElementById('interview-type');
    const positionLevelSelect = document.getElementById('position-level');
    
    currentInterviewType = interviewTypeSelect.value;
    currentPositionLevel = positionLevelSelect.value;
    
    // Hide settings, show interview session
    interviewSettings.style.display = 'none';
    interviewSession.style.display = 'block';
    
    // Load questions and start interview
    loadQuestions();
    showNextQuestion();
    
    // Mark free trial as used
    if (!isPremiumUser) {
        freeTrialUsed = true;
    }
}

function loadQuestions() {
    // Reset state
    questionQueue = [];
    currentQuestionIndex = 0;
    userResponses = [];
    
    // Get questions based on selected criteria
    const questions = questionDatabase[currentInterviewType][currentPositionLevel];
    
    // Shuffle array to get random questions
    const shuffledQuestions = shuffleArray([...questions]);
    
    // For free trial, limit to 1 question
    if (!isPremiumUser) {
        questionQueue = shuffledQuestions.slice(0, 1);
    } else {
        questionQueue = shuffledQuestions;
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showNextQuestion() {
    // Clear previous answers
    answerInput.value = '';
    
    // Hide feedback, show question
    feedbackContainer.style.display = 'none';
    
    if (currentQuestionIndex < questionQueue.length) {
        // Show typing indicator briefly
        currentQuestion.style.display = 'none';
        document.querySelector('.typing-indicator').style.display = 'block';
        
        setTimeout(() => {
            // Hide typing indicator, show question
            document.querySelector('.typing-indicator').style.display = 'none';
            currentQuestion.style.display = 'block';
            currentQuestion.textContent = questionQueue[currentQuestionIndex];
        }, 1500);
    } else {
        // End of interview
        showInterviewResults();
    }
}

function submitAnswer() {
    if (answerInput.value.trim() === '') {
        alert('Please provide an answer before submitting.');
        return;
    }
    
    // Save response
    userResponses.push({
        question: questionQueue[currentQuestionIndex],
        answer: answerInput.value,
        skipped: false
    });
    
    // Show feedback
    provideFeedback();
}

function skipQuestion() {
    // Save as skipped
    userResponses.push({
        question: questionQueue[currentQuestionIndex],
        answer: "",
        skipped: true
    });
    
    // Move to next question
    currentQuestionIndex++;
    showNextQuestion();
}

function provideFeedback() {
    // Show feedback container
    feedbackContainer.style.display = 'block';
    
    // Simulate AI analysis with random scores
    const contentScoreNum = Math.floor(Math.random() * 4) + 7; // 7-10
    const structureScoreNum = Math.floor(Math.random() * 5) + 6; // 6-10
    const relevanceScoreNum = Math.floor(Math.random() * 3) + 8; // 8-10
    
    // Update progress bars with animation
    setTimeout(() => {
        contentScore.style.width = `${contentScoreNum * 10}%`;
        contentScoreValue.textContent = `${contentScoreNum}/10`;
        
        structureScore.style.width = `${structureScoreNum * 10}%`;
        structureScoreValue.textContent = `${structureScoreNum}/10`;
        
        relevanceScore.style.width = `${relevanceScoreNum * 10}%`;
        relevanceScoreValue.textContent = `${relevanceScoreNum}/10`;
    }, 500);
    
    // Select feedback template based on answer quality
    const feedbackIndex = Math.floor(Math.random() * feedbackTemplates.length);
    const feedback = feedbackTemplates[feedbackIndex];
    
    // Generate personalized feedback
    const personalizedFeedback = `
        <h4>Content</h4>
        <p>${feedback.content}</p>
        <h4>Structure</h4>
        <p>${feedback.structure}</p>
        <h4>Relevance</h4>
        <p>${feedback.relevance}</p>
        <h4>Improvement Tips</h4>
        <p>Focus on quantifying your achievements and using the STAR method to structure your responses. Consider practicing with more industry-specific examples.</p>
    `;
    
    feedbackText.innerHTML = personalizedFeedback;
}

function nextQuestion() {
    currentQuestionIndex++;
    showNextQuestion();
}

function endInterview() {
    showInterviewResults();
}

function showInterviewResults() {
    // Hide interview session, show completion
    interviewSession.style.display = 'none';
    interviewCompleted.style.display = 'block';
    
    // Calculate average score
    let totalScore = 0;
    let validResponses = 0;
    
    userResponses.forEach(response => {
        if (!response.skipped) {
            // Simulate score between 70-95
            const responseScore = Math.floor(Math.random() * 26) + 70;
            totalScore += responseScore;
            validResponses++;
        }
    });
    
    const averageScore = validResponses > 0 ? Math.floor(totalScore / validResponses) : 0;
    
    // Update UI with score
    finalScore.textContent = averageScore;
    
    // Generate summary
    generateInterviewSummary(averageScore);
    
    // For free users, show upgrade prompt
    if (!isPremiumUser) {
        document.querySelector('.upgrade-prompt').style.display = 'block';
    } else {
        document.querySelector('.upgrade-prompt').style.display = 'none';
    }
}

function generateInterviewSummary(score) {
    let summary = '';
    
    if (score >= 90) {
        summary = "Excellent performance! Your answers were clear, structured, and provided specific examples that effectively highlighted your skills and experience. You're ready for real interviews with minimal additional preparation.";
    } else if (score >= 80) {
        summary = "Good performance! Your answers demonstrated solid preparation and relevant experience. To improve, focus on providing more quantifiable achievements and structuring your responses using the STAR method more consistently.";
    } else if (score >= 70) {
        summary = "Satisfactory performance. You covered the basics well, but your answers could benefit from more specific examples and better structure. Practice constructing more concise, impactful responses to common questions.";
    } else {
        summary = "You have a good foundation, but need more practice. Focus on preparing specific examples from your experience, using the STAR method, and keeping your responses focused on the question asked.";
    }
    
    interviewSummary.textContent = summary;
}

function resetInterview() {
    // Go back to settings
    interviewSettings.style.display = 'block';
    interviewCompleted.style.display = 'none';
    interviewSession.style.display = 'none';
}

function showUpgradePrompt() {
    alert("This feature is available in our premium plans. Sign up for a subscription to unlock all features!");
}
