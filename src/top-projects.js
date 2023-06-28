import React from "react";
import './static/css/projects.css';
function TopProjects() {
    const proj_lst = [
        {
            "title": "Just Audio",
            "tech": "MongoDB, ExpressJS, ReactJS, NodeJS",
            "desc": "Developed a robust web application leveraging ReactJS for frontend, NodeJS and ExpressJS for backend, and MongoDB as the underlying database. Empowered users to seamlessly upload music, which was stored in encoded format through backend APIs, utilizing MongoDB Atlas Cluster. Managed unstructured data, encompassing metadata, images, and music data across three distinct collections",
            "src": ""
        },
        {
            "title": "Gallery - A stock photo web application",
            "tech": "Django, AWS, SQLite, Kubernetes, AI",
            "desc": "Developed and implemented a stock photo website utilizing AWS S3 for secure storage and efficient content delivery. AI for better search and explicit content filtration using AWS Rekognition Utilized Kubernetes for container orchestration to ensure scalability and high availability of the website. Designed and implemented the backend using Django with boto3 and MongoDB, ensuring efficient data management and seamless user experience.",
            "src": ""
        },
        {
            "title": "Detection and study of Glitches in Gravitational Waves using Advanced Deep Learning Algorithms",
            "tech": "GAN, Deep CNN, OpenCV, Django, VAE",
            "desc": "Utilized advanced deep learning methodologies such as GANs, VAEs, and Deep CNNs to analyze and classify glitch signals. Architected a novel computer vision technique for glitch extraction, achieving exceptional accuracy of 99.37%. Deployed the solution on the Django framework with an intuitive user interface.",
            "src": ""
        },
        {
            "title": "Let's Detect - Object Detection and segregation Mobile App",
            "tech": "Django, Android Studio, YoloV5, OpenCV",
            "desc": "Developed an Android application using Java with the ability to detect objects within images directly on the mobile device. Implemented a Django web server to act as a backend for the mobile app. Utilized YOLO V5 and computer vision techniques, including OpenCV, End-to-End API, PyTorch, and Base64, to perform computations for deep learning and computer vision tasks on the server side.",
            "src": ""
        },
    ]
    return (
        <>
            <div className="main-div">
                <div className="project-grid">
                    {proj_lst.map((e) => {
                        return (
                            <div className="project-card">
                                <div className="proj-demo">

                                    <h2 id="proj-title">{e.title}</h2>
                                    <video src={e.src}></video>
                                </div>
                                <div className="proj-content">
                                    <h3 id="techstack">Tech Stack: {e.tech}</h3>
                                    <p id="proj-decs">{e.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <h2 id="project">Top Projects</h2>
            </div>
        </>
    )
}

export default TopProjects;