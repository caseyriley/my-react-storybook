import React, { useState, useRef } from "react";
import "./explore-filter.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap');
</style>;

const defBusinessTypes = [
  "eco-accommodations",
  "ethical experiences",
  "Resposible Travel Curators",
  "socially responsible eateries",
];

const countryNames = [
  "Hong Kong",
  "India",
  "Indonesia",
  "Kenya",
  "Laos",
  "Malaysia",
  "Philippines",
  "United States Of America",
];

const country = {
  All: {
    BusinessTypes: [
      "eco-accommodations",
      "ethical experiences",
      "Resposible Travel Curators",
      "socially responsible eateries",
    ],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  "Hong Kong": {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  India: {
    BusinessTypes: [
      "eco-accommodations",
      "ethical experiences",
      "Resposible Travel Curators",
      "socially responsible eateries",
    ],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Indonesia: {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$", "$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Kenya: {
    BusinessTypes: ["Responsible Travel Curators"],
    Prices: ["$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Laos: {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Malaysia: {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  Philippines: {
    BusinessTypes: ["eco-accommodations", "socially responsible eateries"],
    Prices: ["$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
  "United States Of America": {
    BusinessTypes: ["eco-accommodations"],
    Prices: ["$$"],
    SearchString: "SEARCH ASIAN BUSINESSES",
  },
};

export const ExploreFilter = () => {
  const [countryDropdownState, setCountryDopdownState] = useState(["All"]);
  const [countryChevronState, setCountryChevronState] = useState(false);
  const [businessChevronState, setBusinessChevronState] = useState(false);
  const [businessDropdownState, setBusinessDropdownState] = useState(["All"]);
  const [priceChevronState, setPriceChevronState] = useState(false);
  const [priceDropdownState, setPriceDropdownState] = useState(["All"]);
  const [businessTypesState, setBusinessTypesState] = useState(
    defBusinessTypes
  );
  const [priceState, setPriceState] = useState([
    "all prices",
    "under $200",
    "$200 - $500",
    "over $500",
  ]);
  const countriesRef = useRef([]);
  const businessesRef = useRef([]);
  const pricesRef = useRef([]);

  function toggleCountryChevron() {
    setCountryChevronState(!countryChevronState);
  }
  function toggleBusinessChevron() {
    setBusinessChevronState(!businessChevronState);
  }
  function togglePriceChevron() {
    setPriceChevronState(!priceChevronState);
  }
  function selectCountry(place) {
    if (countryDropdownState[0] === "All") {
      let array = [];
      array.push(place);
      setCountryDopdownState(array);
      let selectArray = countriesRef.current.childNodes;
      for (let i = 0; i < selectArray.length; i++) {
        let el = selectArray[i].firstChild;

        if (el.innerHTML === place) {
          el.classList.add("bold");
        }
      }
      const string = country[place]["BusinessTypes"];
      setBusinessTypesState(string);
    } else {
      if (countryDropdownState.includes(place)) {
        let selectArray = countriesRef.current.childNodes;
        let newDropDownState = null;
        for (let i = 0; i < selectArray.length; i++) {
          let el = selectArray[i].firstChild;
          if (el.innerHTML === place) {
            el.classList.remove("bold");
            let array = [...countryDropdownState];
            let index = countryDropdownState.indexOf(el.innerHTML);
            array.splice(index, 1);
            setCountryDopdownState(array);
            newDropDownState = array;
          }
        }
        if (countryDropdownState.length === 1) {
          setCountryDopdownState(["All"]);
          setBusinessTypesState(defBusinessTypes);
        } else if (countryDropdownState.length > 1) {
          let dropDownArray = [...newDropDownState];
          let typeArray = [];
          for (let i = 0; i < dropDownArray.length; i++) {
            let el = dropDownArray[i];
            const addArray = country[el]["BusinessTypes"];
            for (let j = 0; j < addArray.length; j++) {
              let type = addArray[j];
              if (!typeArray.includes(type)) {
                typeArray.push(type);
              }
            }
          }
          setBusinessTypesState(typeArray);
        }
      } else {
        let array = [...countryDropdownState];
        array.push(place);
        setCountryDopdownState(array);
        let selectArray = countriesRef.current.childNodes;
        for (let i = 0; i < selectArray.length; i++) {
          let el = selectArray[i].firstChild;

          if (el.innerHTML === place) {
            el.classList.add("bold");
          }
        }
        const string = country[place]["BusinessTypes"];
        if (businessTypesState === defBusinessTypes) {
          setBusinessTypesState(string);
        } else {
          let array = [...businessTypesState];
          const arrayTwo = country[place]["BusinessTypes"];
          for (let i = 0; i < arrayTwo.length; i++) {
            let el = arrayTwo[i];
            if (!array.includes(el)) {
              array.push(el);
            }
          }
          setBusinessTypesState(array);
        }
      }
    }
  }
  function deleteCountrySelection() {
    setCountryDopdownState(["All"]);
    setCountryChevronState(false);
    setBusinessChevronState(false);
    setBusinessTypesState([
      "eco-accommodations",
      "ethical experiences",
      "Resposible Travel Curators",
      "socially responsible eateries",
    ]);
  }
  function selectBusinessType(business) {
    if (businessDropdownState[0] === "All") {
      let array = [];
      array.push(business);
      setBusinessDropdownState(array);
      let selectArray = businessesRef.current.childNodes;
      for (let i = 0; i < selectArray.length; i++) {
        let el = selectArray[i].firstChild;
        if (el.innerHTML === business) {
          el.classList.add("bold");
        }
      }
    } else {
      if (businessDropdownState.includes(business)) {
        let index = businessDropdownState.indexOf(business);
        let selectArray = businessesRef.current.childNodes;
        for (let i = 0; i < selectArray.length; i++) {
          let el = selectArray[i].firstChild;

          if (el.innerHTML === business) {
            el.classList.remove("bold");
          }
        }
        let array = [...businessDropdownState];
        array.splice(index, 1);
        if (array.length < 1) {
          setBusinessDropdownState(["All"]);
        } else {
          setBusinessDropdownState(array);
        }
      } else {
        let array = [...businessDropdownState];
        array.push(business);
        setBusinessDropdownState(array);
        let selectArray = businessesRef.current.childNodes;
        for (let i = 0; i < selectArray.length; i++) {
          let el = selectArray[i].firstChild;
          if (el.innerHTML === business) {
            el.classList.add("bold");
          }
        }
      }
    }
  }
  function selectPrice(price) {
    if (priceDropdownState[0] === "All") {
      let array = [];
      array.push(price);
      setPriceDropdownState(array);
      let selectArray = pricesRef.current.childNodes;
      for (let i = 0; i < selectArray.length; i++) {
        let el = selectArray[i].firstChild.innerHTML;
        if (array.includes(el)) {
          selectArray[i].firstChild.classList.add("bold");
        }
      }
    } else {
      if (!priceDropdownState.includes(price)) {
        let array = [...priceDropdownState];
        array.push(price);
        setPriceDropdownState(array);
        let selectArray = pricesRef.current.childNodes;
        for (let i = 0; i < selectArray.length; i++) {
          let el = selectArray[i].firstChild.innerHTML;
          if (array.includes(el)) {
            selectArray[i].firstChild.classList.add("bold");
          }
        }
      } else {
        if (priceDropdownState.length === 1) {
          setPriceDropdownState(["All"]);

          let selectArray = pricesRef.current.childNodes;
          for (let i = 0; i < selectArray.length; i++) {
            selectArray[i].firstChild.classList.remove("bold");
          }
        } else if (priceDropdownState.length > 1) {
          let priceDDSArray = [...priceDropdownState];
          let selectArray = pricesRef.current.childNodes;
          let index = priceDDSArray.indexOf(price);
          priceDDSArray.splice(index, 1);
          setPriceDropdownState(priceDDSArray);
          for (let i = 0; i < selectArray.length; i++) {
            let el = selectArray[i].firstChild;
            if (el.innerHTML === price) {
              el.classList.remove("bold");
            }
          }
        }
      }
    }
  }
  function deletePriceSelection() {
    setPriceDropdownState(["All"]);
    setPriceChevronState(false);
  }

  return (
    <div className={"explore-filter"}>
      <div className={"explore-filter-top"}>
        <span className={"explore-filter-title"}>Eco Travel Filter</span>
      </div>
      <div className={"explore-filter-section"}>
        <span className={"explore-filter-section-span"}>
          COUNTRY:
          {countryDropdownState[0] !== "All"
            ? countryDropdownState.length < 2
              ? ` ${countryDropdownState[0]}`
              : " ..."
            : " All"}
        </span>
        {countryDropdownState[0] !== "All" && (
          <div
            className={"explore-filter-section-delete"}
            onClick={deleteCountrySelection}
          />
        )}
        {countryChevronState ? (
          <div class={"down-outlined turnUp"} onClick={toggleCountryChevron} />
        ) : (
          <div className={"down-outlined"} onClick={toggleCountryChevron} />
        )}
      </div>
      <div
        ref={countriesRef}
        className={`country-box-open ${
          !countryChevronState ? "box-cosed" : ""
        }`}
      >
        {countryChevronState &&
          countryNames.map((name, index) => {
            return (
              <div key={index} className={"explore-filter-selection"}>
                <span
                  className={"explore-filter-selection-span"}
                  onClick={() => {
                    selectCountry(name);
                  }}
                >
                  {name}
                </span>
              </div>
            );
          })}
      </div>
      <div className={"explore-filter-section"}>
        <span className={"explore-filter-section-span"}>
          BUSINESS TYPE: {businessDropdownState[0] !== "All" ? "..." : "All"}
        </span>
        {businessChevronState ? (
          <div class={"down-outlined turnUp"} onClick={toggleBusinessChevron} />
        ) : (
          <div className={"down-outlined"} onClick={toggleBusinessChevron} />
        )}
      </div>
      <div
        ref={businessesRef}
        className={`business-box-open ${
          !businessChevronState ? "box-cosed" : ""
        }`}
      >
        {businessChevronState &&
          businessTypesState.map((type, index) => {
            return (
              <div key={index} className={`explore-filter-selection`}>
                <span
                  className={`explore-filter-selection-span`}
                  onClick={() => selectBusinessType(type)}
                >
                  {type}
                </span>
              </div>
            );
          })}
      </div>

      <div className={"explore-filter-section"}>
        <span className={"explore-filter-section-span"}>
          PRICE: {priceDropdownState[0] === "All" ? "All" : "..."}
        </span>
        {priceDropdownState[0] !== "All" && (
          <div
            className={"explore-filter-section-delete"}
            onClick={deletePriceSelection}
          />
        )}
        {priceChevronState ? (
          <div class={"down-outlined turnUp"} onClick={togglePriceChevron} />
        ) : (
          <div className={"down-outlined"} onClick={togglePriceChevron} />
        )}
      </div>
      <div
        ref={pricesRef}
        className={`price-box-open ${!priceChevronState ? "box-cosed" : ""}`}
      >
        {priceChevronState &&
          priceState.map((price, index) => {
            return (
              <div key={index} className={"explore-filter-selection"}>
                <span
                  className={"explore-filter-selection-span ex-price"}
                  onClick={() => {
                    selectPrice(price);
                  }}
                >
                  {price}
                </span>
              </div>
            );
          })}
      </div>

      <div className={"explore-filter-last-section"}>
        <div className={"explore-filter-search"}>
          <div className={"magGlass"} />
          <input
            className={"explore-filter-input"}
            type={"text"}
            placeholder={"SEARCH ECO BUSINESSES"}
          />
        </div>
      </div>
    </div>
  );
};
