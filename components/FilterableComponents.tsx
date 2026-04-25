"use client";

import { useMemo, useState } from "react";
import { ComponentCard } from "./ComponentCard";
import { Component } from "@/types/database";

interface FilterableComponentsProps {
  components: Component[];
}

const FilterableComponents: React.FC<FilterableComponentsProps> = ({ components }) => {
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Map<string, number>();
    components.forEach((component) => {
      cats.set(component.category, (cats.get(component.category) || 0) + 1);
    });
    return Array.from(cats.entries()).map(([name, count]) => ({
      name,
      count,
      displayName: name.charAt(0).toUpperCase() + name.slice(1),
    }));
  }, [components]);

  // Filter components
  const filteredComponents = useMemo(() => {
    let filtered = [...components];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((component) => selectedCategories.includes(component.category));
    }

    return filtered;
  }, [components, selectedCategories]);

  // Toggle category selection
  const toggleCategory = (categoryName: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((c) => c !== categoryName) : [...prev, categoryName],
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
  };

  const hasActiveFilters = selectedCategories.length > 0;

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header section - responsive layout */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Filter Components</h2>

            {/* Filter buttons - responsive container */}
            <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border border-gray-700 bg-transparent text-white font-medium transition-all duration-300 ease-in-out hover:border-blue-600 whitespace-nowrap text-sm sm:text-base"
                >
                  Clear all filters
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowCategoryFilters(!showCategoryFilters)}
                className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border font-medium transition-all duration-300 ease-in-out whitespace-nowrap text-sm sm:text-base ${
                  showCategoryFilters || selectedCategories.length > 0
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-transparent text-white border-gray-700 hover:border-blue-600"
                }`}
              >
                <span className="hidden sm:inline">Filter by </span>Category
              </button>
            </div>
          </div>

          {/* Category Filter Container - Smooth Animation */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showCategoryFilters ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="p-4 sm:p-6 bg-transparent border border-gray-700 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-white mb-4">Select Categories</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    type="button"
                    onClick={() => toggleCategory(category.name)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out transform border hover:border-blue-600 whitespace-nowrap ${
                      selectedCategories.includes(category.name)
                        ? "bg-blue-600 text-white shadow-md border-blue-600"
                        : "bg-transparent text-white border-gray-700"
                    }`}
                  >
                    {category.displayName}
                    <span className="ml-1">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Display - Animated */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategories.map((category) => {
              const cat = categories.find((c) => c.name === category);
              return (
                <span
                  key={category}
                  className="inline-flex items-center gap-1 px-3 py-1.5 sm:py-2 bg-blue-600/20 text-primary rounded-full text-xs sm:text-sm whitespace-nowrap"
                >
                  {cat?.displayName || category}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className="hover:text-primary/80 text-lg leading-none"
                  >
                    ×
                  </button>
                </span>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="max-w-7xl mx-auto mb-6 transition-opacity duration-500">
          <p className="text-gray-300 text-sm sm:text-base">
            Showing <span className="font-semibold">{filteredComponents.length}</span> of{" "}
            <span className="font-semibold">{components.length}</span> components
          </p>
        </div>

        {/* Components Grid - Responsive columns */}
        {filteredComponents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {filteredComponents.map((component, index) => (
              <div
                key={component.id}
                className={`transition-all duration-500 ease-in-out component-card-animate stagger-${index % 10}`}
              >
                <ComponentCard component={component} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16 bg-transparent border border-gray-700 rounded-xl max-w-7xl mx-auto transition-all duration-500 ease-in-out empty-state-fade-in">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">No components found</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto px-4 text-sm sm:text-base">
              Try adjusting your filters to find what you&apos;re looking for
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="px-5 py-2.5 sm:px-6 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:border-blue-600 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterableComponents;
