import React from "react";

export const intersectionObserver = (components: React.ReactNode[]) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show'))
    })
};