import React from 'react';
import './Projects.css';

export const Projects = () => {
    return (
        <section className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="job">
                <h3 className="job-title">Software Engineer</h3>
                <div className="project">
                    <h3 className="project-title">Mental health advisor chatbot</h3>
                    <p className="project-description">
                    The Mental Health Advisor Chatbot is an innovative digital assistant designed to provide accessible, empathetic, and practical support for individuals seeking to improve their mental well-being. Using natural language processing, the chatbot engages users in meaningful conversations, offering emotional support and personalized coping strategies to help manage stress, anxiety, and other challenges. It also provides valuable resources, including self-help tools, mood tracking, and cognitive behavioral techniques, empowering users to take proactive steps in their mental health journey. While offering immediate guidance and assistance, the chatbot encourages users to seek professional help when needed, ensuring they have a well-rounded support system in place
                    </p>
                    <p className="project-language"><strong>Programming Language:</strong> python, NLP</p>
                </div>
                <div className="project">
                    <h3 className="project-title">student Alumni connect</h3>
                    <p className="project-description">
                    The Student Alumni Connect platform is a dynamic networking tool designed to foster connections between current students and alumni, creating a bridge that enhances career opportunities and mentorship. This platform allows students to engage with alumni for career advice, job opportunities, and professional development insights, while alumni can offer guidance, share their experiences, and give back to the community. By facilitating meaningful interactions, the platform strengthens the alumni network, promotes knowledge sharing, and supports students in their academic and career pursuits, ensuring a lasting relationship between alumni and their alma mater.
                    </p>
                    <p className="project-language"><strong>Full Stack</strong> </p>
                </div>
            </div>
        </section>
    );
};
