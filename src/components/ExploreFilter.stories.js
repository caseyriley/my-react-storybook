import React from "react";
import { Story, Meta } from "@storybook/react";
import { ExploreFilter, ExploreFilterProps } from "./ExploreFilter";

export default {
  title: "Example/ExploreFilter",
  component: ExploreFilter,
};

const Template = (args) => (
  <ExploreFilter {...args} />
);

export const Asia = Template.bind({});
Asia.args = {
  countryNames: ["Hong Kong", "India", "Indonesia", "Kenya", "Laos", "Malaysia", "Philippines", "United States Of America"],
  country: {
    "All": {
      "BusinessTypes": [
        "eco-accommodations",
        "ethical experiences",
        "Resposible Travel Curators",
        "socially responsible eateries",
      ],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "Hong Kong": {
      "BusinessTypes": ["eco-accommodations"],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "India": {
      "BusinessTypes": [
        "eco-accommodations",
        "ethical experiences",
        "Resposible Travel Curators",
        "socially responsible eateries",
      ],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "Indonesia": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "Kenya": {
      "BusinessTypes": [
        "Responsible Travel Curators"
      ],
      "Prices": ["$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "Laos": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "Malaysia": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "Philippines": {
      "BusinessTypes": [
        "eco-accommodations",
        "socially responsible eateries",
      ],
      "Prices": ["$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
    "United States Of America": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$$"],
      "SearchString": "SEARCH ASIAN BUSINESSES",
    },
  },
};