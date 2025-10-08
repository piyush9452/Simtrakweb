import React, { useEffect, useRef, useState } from "react";
import "./ReviewSlider.css";

const Reviews: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);



// Scroll animation effect
useEffect(() => {
  const elements = document.querySelectorAll(".Review-hero, .card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // ek hi baar animation chale
        }
      });
    },
    { threshold: 0.2 } // 20% visible hote hi trigger
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);






  // --- Helpers ---
  const getVisibleCount = () => {
    if (window.innerWidth <= 576) return 1; // mobile
    if (window.innerWidth <= 992) return 2; // tablet
    return 4; // desktop
  };

  const computeCardWidth = () => {
    if (!sliderRef.current) return 0;
    const style = getComputedStyle(sliderRef.current);
    const gap = parseInt(style.gap) || 0;
    const first = sliderRef.current.querySelector<HTMLDivElement>(".card");
    return (first?.offsetWidth || 0) + gap;
  };

  const clampIndex = (idx: number) => {
    const cards = sliderRef.current?.querySelectorAll(".card") || [];
    const max = Math.max(0, cards.length - visibleCards);
    return Math.min(Math.max(0, idx), max);
  };

  // --- Core ---
  const showSlide = (index: number) => {
    setSlideIndex(clampIndex(index));
  };

  const moveSlide = (step: number) => {
    showSlide(slideIndex + step);
  };

  // --- Init & Resize ---
  const initSlider = () => {
    setVisibleCards(getVisibleCount());
    setCardWidth(computeCardWidth());
    setSlideIndex((prev) => clampIndex(prev));
  };

  useEffect(() => {
    initSlider();
    window.addEventListener("resize", initSlider);
    return () => window.removeEventListener("resize", initSlider);
  }, []);

  // --- Reviews Data (same as your HTML) ---
  const reviews = [
    {
      stars: "★★★★★",
      title: "Such a sweet pair!",
      text: "I fell for Noodle on Tiktok and enjoyed their videos so much. This cute book is a gentle taste of our loved duo.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUerMxx9vODZJSvLTyaCvwsb3buTYmkqdbesg09PZWE4Tf06gTC%3Ds120-c-rp-mo-ba4-br100",
      username: "Molly",
      date: "January 22",
    },
    {
      stars: "★★★★★",
      title: "Must have",
      text: "Absolutely love this book! A must have on your bookshelf and love it even more that Noodle is based on Jonathan’s actual dog.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjW9CZgObkm4yovst3tC4YvLrgxYc9Bu909wLkcg45x3OPPMbu6k%3Ds120-c-rp-mo-br100",
      username: "murphybaker",
      date: "January 16",
    },
    {
      stars: "★★★★★",
      title: "Great story!",
      text: "My kids request this book often. A great story about the loving bond between a pug and his owner. It teaches children too.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUhj9QrIcGtiupDKW7XCmrfygZNKMzZohpREkyi3E7O0gS2TVM%3Ds120-c-rp-mo-ba2-br100",
      username: "Alisia Endris",
      date: "January 14",
    },
    {
      stars: "★★★★★",
      title: "Great story!",
      text: "My kids request this book often. A great story about the loving bond between a pug and his owner. It teaches children too.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUhj9QrIcGtiupDKW7XCmrfygZNKMzZohpREkyi3E7O0gS2TVM%3Ds120-c-rp-mo-ba2-br100",
      username: "Alisia Endris",
      date: "January 14",
    },
    {
      stars: "★★★★★",
      title: "Great story!",
      text: "My kids request this book often. A great story about the loving bond between a pug and his owner. It teaches children too.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUhj9QrIcGtiupDKW7XCmrfygZNKMzZohpREkyi3E7O0gS2TVM%3Ds120-c-rp-mo-ba2-br100",
      username: "Alisia Endris",
      date: "January 14",
    },
    {
      stars: "★★★★★",
      title: "Great story!",
      text: "My kids request this book often. A great story about the loving bond between a pug and his owner. It teaches children too.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUhj9QrIcGtiupDKW7XCmrfygZNKMzZohpREkyi3E7O0gS2TVM%3Ds120-c-rp-mo-ba2-br100",
      username: "Alisia Endris",
      date: "January 14",
    },
    {
      stars: "★★★★★",
      title: "Great story!",
      text: "My kids request this book often. A great story about the loving bond between a pug and his owner. It teaches children too.",
      img: "https://phosphor.utils.elfsightcdn.com/?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa-%2FALV-UjUhj9QrIcGtiupDKW7XCmrfygZNKMzZohpREkyi3E7O0gS2TVM%3Ds120-c-rp-mo-ba2-br100",
      username: "Alisia Endris",
      date: "January 14",
    },
    // add more cards like your HTML
  ];

  return (
    <section className="slider">
     <div className="Review-hero">
        <h1>
          <span className="Review-hero-main">Reviews & </span>
          <span className="Review-hero-accent"> Ratings</span>
        </h1>
        
      </div>
      <div className="slider-container">
        {/* Arrows */}
        <div className="arrow left" onClick={() => moveSlide(-1)}>
          &#10094;
        </div>
        <div className="arrow right" onClick={() => moveSlide(1)}>
          &#10095;
        </div>

        {/* Wrapper */}
        <div
          className="slider-wrapper"
          ref={sliderRef}
          style={{ transform: `translateX(${-slideIndex * cardWidth}px)` }}
        >
          {reviews.map((r, i) => (
            <div className="card" key={i}>
              <div className="stars">{r.stars}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
              <div className="user-info">
                <img src={r.img} alt={r.username} />
                <div className="username">
                  {r.username}
                  <img
                    src="https://img.icons8.com/fluency/48/000000/verified-badge.png"
                    alt="verified"
                  />
                </div>
                <div className="date">{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="dots">
        {Array.from({
          length: Math.max(1, reviews.length - visibleCards + 1),
        }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === slideIndex ? "active" : ""}`}
            onClick={() => showSlide(i)}
          />
        ))}
      </div>
    </section>
  );
};





export default Reviews;