"use client";

import { useMemo, useState } from "react";
import { TemplateCard } from "./TemplateCard";
import { Template } from "@/types/database";

interface FilterableTemplatesProps {
  templates: Template[];
}

const FilterableTemplates: React.FC<FilterableTemplatesProps> = ({ templates }) => {
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<"all" | "free" | "paid">("all");

  // Extract categories from template names
  const categories = useMemo(() => {
    const cats = new Map<string, number>();
    templates.forEach((template) => {
      const categoryMatch = template.name.match(/^(\w+)\s+Template/i);
      if (categoryMatch && categoryMatch[1]) {
        const cat = categoryMatch[1].toLowerCase();
        cats.set(cat, (cats.get(cat) || 0) + 1);
      }
    });

    // Convert to array with counts
    return Array.from(cats.entries()).map(([name, count]) => ({
      name,
      count,
      displayName: name.charAt(0).toUpperCase() + name.slice(1),
    }));
  }, [templates]);

  const filteredTemplates = useMemo(() => {
    let filtered = [...templates];

    // Filter by price (free/paid)
    if (priceFilter === "free") {
      filtered = filtered.filter((template) => template.price === "Free");
    } else if (priceFilter === "paid") {
      filtered = filtered.filter((template) => template.price !== "Free");
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((template) => {
        const categoryMatch = template.name.match(/^(\w+)\s+Template/i);
        if (categoryMatch && categoryMatch[1]) {
          return selectedCategories.includes(categoryMatch[1].toLowerCase());
        }
        return false;
      });
    }

    return filtered;
  }, [templates, priceFilter, selectedCategories]);

  const toggleCategory = (categoryName: string) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setPriceFilter("all");
  };

  const handleCategoryClick = () => {
    setShowCategoryFilters(!showCategoryFilters);
  };

  const togglePriceFilter = (type: "free" | "paid") => {
    if (priceFilter === type) {
      setPriceFilter("all");
    } else {
      setPriceFilter(type);
    }
  };

  const hasActiveFilters = selectedCategories.length > 0 || priceFilter !== "all";

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header section - responsive layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center justify-between sm:justify-start">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">Filter Templates</h2>

              {/* Clear All Filters Button - Mobile only (right side) */}
              <div className="lg:hidden">
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="ml-4 px-4 py-1 rounded-lg border border-gray-700 bg-transparent text-white font-medium transition-all duration-300 ease-in-out hover:border-blue-600 whitespace-nowrap text-sm"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>

            {/* Filter buttons - responsive container */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center">
              {/* Clear All Filters Button - Desktop only (left side) */}
              <div className="hidden lg:block order-first mr-4">
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={clearAllFilters}
                    className="px-5 py-3 rounded-lg border border-gray-700 bg-transparent text-white font-medium transition-all duration-300 ease-in-out hover:border-blue-600 whitespace-nowrap text-base"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {/* Price Filter Buttons - responsive stacking */}
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <button
                  type="button"
                  onClick={() => togglePriceFilter("free")}
                  className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border font-medium transition-all duration-300 ease-in-out whitespace-nowrap text-sm sm:text-base ${
                    priceFilter === "free"
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-transparent text-white border-gray-700 hover:border-blue-600"
                  }`}
                >
                  Free
                  <span className="hidden sm:inline"> Templates</span>
                </button>

                <button
                  type="button"
                  onClick={() => togglePriceFilter("paid")}
                  className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border font-medium transition-all duration-300 ease-in-out whitespace-nowrap text-sm sm:text-base ${
                    priceFilter === "paid"
                      ? "bg-blue-600 text-white border-blue-600 shadow-md"
                      : "bg-transparent text-white border-gray-700 hover:border-blue-600"
                  }`}
                >
                  Paid
                  <span className="hidden sm:inline"> Templates</span>
                </button>

                <button
                  type="button"
                  onClick={handleCategoryClick}
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
            {/* Price Filter Badge */}
            {priceFilter !== "all" && (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 sm:py-2 bg-blue-600/20 text-primary rounded-full text-xs sm:text-sm whitespace-nowrap">
                {priceFilter === "free" ? "Free" : "Paid"}
                <span className="hidden sm:inline"> Templates</span>
                <button
                  type="button"
                  onClick={() => setPriceFilter("all")}
                  className="hover:text-primary/80 text-lg leading-none"
                >
                  ×
                </button>
              </span>
            )}

            {/* Category Filter Badges */}
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
            Showing <span className="font-semibold">{filteredTemplates.length}</span> of{" "}
            <span className="font-semibold">{templates.length}</span> templates
            {priceFilter !== "all" && ` (${priceFilter})`}
          </p>
        </div>

        {/* Templates Grid - Responsive columns */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {filteredTemplates.map((template: Template, index) => (
              <div
                key={template.id}
                className={`transition-all duration-500 ease-in-out template-card-animate stagger-${index % 10}`}
              >
                <TemplateCard template={template} />
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
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No templates found</h3>
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

export default FilterableTemplates;
