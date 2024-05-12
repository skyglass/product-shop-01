"use client";
import { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";

const priceRanges = [
  { min: 0, max: 20, label: "Under $20" },
  { min: 20, max: 50, label: "$20 - $50" },
  { min: 50, max: 100, label: "$50 - $100" },
  { min: 50, max: 100, label: "$100 - $200" },
  { min: 50, max: 100, label: "$200 - $500" },
  { min: 50, max: 100, label: "$500 - $900" },
];

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterQuery, setFilterQuery] = useState("");
  const [filterResults, setFilterResults] = useState([]);
  // price range
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const router = useRouter();

  const fetchFilterResults = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.API}/product/filter?filterQuery=${filterQuery}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setFilterResults(data);
      // console.log("search results => ", data);
      router.push(`/filter?filterQuery=${filterQuery}`);
    } catch (error) {
      console.error("Error fetching filter results:", error);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        filterQuery,
        setFilterQuery,
        filterResults,
        setFilterResults,
        fetchFilterResults,
        selectedPriceRange,
        setSelectedPriceRange,
        priceRanges,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
