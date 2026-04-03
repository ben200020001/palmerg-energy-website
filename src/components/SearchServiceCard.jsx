import React from "react";

export default function SearchServiceCard({ title, category, description, image }) {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-primary font-semibold mb-2">{category}</p>
        <h3 className="text-sm font-semibold mb-2">{title}</h3>
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </div>
  );
}