import { useState } from "react";

const buyData = {
  residential: [
    "Property for Sale in Jaipur",
    "Flats in Jaipur",
    "Studio Apartments in Jaipur",
    "Resale House in Jaipur",
    "Villas for Sale in Jaipur",
    "House for Sale in Jaipur",
    "Penthouse in Jaipur",
    "Ready To Move Flats in Jaipur",
    "Resale Flats in Jaipur",
  ],
  bhk: [
    "1 BHK Flats in Jaipur",
    "2 BHK Flats in Jaipur",
    "3 BHK Flats in Jaipur",
    "4 BHK Flats in Jaipur",
    "1 BHK House for Sale in Jaipur",
    "2 BHK House for Sale in Jaipur",
    "3 BHK House for Sale in Jaipur",
    "4 BHK House for Sale in Jaipur",
    "2 BHK Villa for Sale in Jaipur",
    "3 BHK Villa for Sale in Jaipur",
    "4 BHK Villa for Sale in Jaipur",
  ],
  flat: [
    "Flats for Sale in Jagatpura",
    "Flats for Sale in Malviya Nagar",
    "Flats for Sale in Vaishali Nagar",
    "Flats for Sale in Pratap Nagar",
    "Flats for Sale in Mansarovar",
    "Flats for Sale in Bani Park",
    "Flats for Sale in Raja Park",
    "Flats for Sale in C-Scheme",
    "Flats for Sale in Ajmer Road",
    "Flats for Sale in Pratap Nagar",
  ],
  house: [
    "House for Sale in Malviya Nagar",
    "House for Sale in Mansarovar",
    "House for Sale in Vaishali Nagar",
    "House for Sale in Jhotwara",
    "House for Sale in Jagatpura",
    "House for Sale in Pratap Nagar",
    "House for Sale in Shyam Nagar",
    "House for Sale in Niwaru Road",
    "House for Sale in Kalwar Road",
    "House for Sale in Nirman Nagar",
  ],
};

const rentData = {
  residential: [
    "Property for Rent in Jaipur",
    "Flats for Rent in Jaipur",
    "Studio Apartments for Rent in Jaipur",
    "Independent House for Rent in Jaipur",
    "Villas for Rent in Jaipur",
  ],
  bhk: [
    "1 BHK Flats for Rent in Jaipur",
    "2 BHK Flats for Rent in Jaipur",
    "3 BHK Flats for Rent in Jaipur",
    "4 BHK Flats for Rent in Jaipur",
  ],
  flat: [
    "Flats for Rent in Mansarovar",
    "Flats for Rent in Malviya Nagar",
    "Flats for Rent in Vaishali Nagar",
    "Flats for Rent in Jagatpura",
  ],
  house: [
    "House for Rent in Mansarovar",
    "House for Rent in Malviya Nagar",
    "House for Rent in Vaishali Nagar",
    "House for Rent in Jagatpura",
  ],
};

export function PropertyOptionsSection() {
  const [activeTab, setActiveTab] = useState("buy");
  const data = activeTab === "buy" ? buyData : rentData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <h2 className="text-3xl font-semibold text-gray-900 relative inline-block mb-10">
          Property Options in Jaipur
          <span className="absolute left-0 -bottom-3 w-12 h-1 bg-yellow-400 rounded-full"></span>
        </h2>

        {/* ================= TABS ================= */}
        <div className="flex gap-10 border-b mb-10">
          {["buy", "rent"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-lg font-medium capitalize relative
                ${
                  activeTab === tab
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 -bottom-[1px] w-full h-[3px] bg-red-600 rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-gray-700">

          {/* COLUMN 1 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Popular Residential Searches
            </h4>
            <ul className="space-y-3">
              {data.residential.map((item, i) => (
                <li key={i} className="hover:text-red-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Popular BHK Searches
            </h4>
            <ul className="space-y-3">
              {data.bhk.map((item, i) => (
                <li key={i} className="hover:text-red-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Popular Flat Searches
            </h4>
            <ul className="space-y-3">
              {data.flat.map((item, i) => (
                <li key={i} className="hover:text-red-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Popular House Searches
            </h4>
            <ul className="space-y-3">
              {data.house.map((item, i) => (
                <li key={i} className="hover:text-red-600 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
