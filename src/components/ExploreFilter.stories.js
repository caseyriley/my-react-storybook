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
      "Prices": ["under $200", "under $400", "under $600", "under $800", "under $1000", "over $1000"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "Hong Kong": {
      "BusinessTypes": ["eco-accommodations"],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "India": {
      "BusinessTypes": [
        "eco-accommodations",
        "ethical experiences",
        "Resposible Travel Curators",
        "socially responsible eateries",
      ],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "Indonesia": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$", "$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "Kenya": {
      "BusinessTypes": [
        "Responsible Travel Curators"
      ],
      "Prices": ["$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "Laos": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "Malaysia": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "Philippines": {
      "BusinessTypes": [
        "eco-accommodations",
        "socially responsible eateries",
      ],
      "Prices": ["$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
    "United States Of America": {
      "BusinessTypes": [
        "eco-accommodations",
      ],
      "Prices": ["$$"],
      "SearchString": "SEARCH ECO BUSINESSES",
    },
  },
};