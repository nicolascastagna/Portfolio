import React, { useEffect } from "react";
import { projects } from "../data/data";

interface Props {
  setActiveCategory: (category: string) => void;
  activeCategory: string;
  setFiltered: any;
}

function Filter({ setActiveCategory, activeCategory, setFiltered }: Props) {
  useEffect(() => {
    if (activeCategory === "All") {
      setFiltered(projects);
      return;
    }
    const filtered = projects.filter((item) =>
      item.category.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  console.log(projects);

  return (
    <div className="filter-container">
      <button
        className={activeCategory === "All" ? "active" : ""}
        onClick={() => setActiveCategory("All")}
      >
        All
      </button>
      <button
        className={activeCategory === "front-end" ? "active" : ""}
        onClick={() => setActiveCategory("front-end")}
      >
        Front-End
      </button>
      <button
        className={activeCategory === "back-end" ? "active" : ""}
        onClick={() => setActiveCategory("back-end")}
      >
        Back-End
      </button>
      <button
        className={activeCategory === "fullstack" ? "active" : ""}
        onClick={() => setActiveCategory("fullstack")}
      >
        Full Stack
      </button>
      <button
        className={activeCategory === "application-mobile" ? "active" : ""}
        onClick={() => setActiveCategory("application-mobile")}
      >
        Applications mobile
      </button>
    </div>
  );
}

export default Filter;
