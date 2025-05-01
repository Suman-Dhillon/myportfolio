"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import './home.css';

const Home = () => {
    return (
        <>
        <div className="stars-container">
                {/* Falling stars elements */}
                {[...Array(25)].map((_, i) => (
                    <div key={i} className="star" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 5}s`,
                        opacity: Math.random() * 0.5 + 0.1,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`
                    }} />
                ))}

            <section className="home-section">
                <div className="home-container">
                    <div className="home-content">
                        <h1 className="home-title">SOFTWARE DEVELOPER</h1>
                        <p className="home-intro">
                            Hi there! 
                            <span> 👋🏻 </span>
                            I'm Sumandeep
                        </p>
                        <p> 
                            A passionate and driven software developer with a focus on web development and designing. I enjoy building creative and efficient solutions to real-world problems.
                        </p>
                    </div>
                    
                    <div className="home-actions">
                        <a href="#contact" className="action-button hire-button">Hire Me</a>
                        <a href="#projects" className="action-button search-button">Search</a>
                    </div>
                </div>
            </section>
            
          </div>  
        </>
    );
};

export default Home;