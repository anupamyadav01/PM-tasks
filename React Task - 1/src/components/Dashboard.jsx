import { useState } from "react";

const Dashboard = () => {
  const [salePrice, setSatePrice] = useState(0);
  const [soldPriceList, setSalePriceList] = useState([]);
  const [totalSoldPrice, setTotalSoldPrice] = useState(0);
  const [showError, setShowError] = useState(false);
  const [totalProfit, setTotalProfit] = useState(0);

  const handleOnSubmit = () => {
    if (salePrice < 100 || salePrice > 300) {
      setShowError(true);
    }
    setSalePriceList([...soldPriceList, salePrice]);
    setTotalSoldPrice((prev) => prev + salePrice);
    const totalProfitVal = salePrice - 100;
    setTotalProfit((prev) => prev + totalProfitVal);
  };

  return (
    <div
      className=" w-[80%] mx-auto py-10 h-full
    "
    >
      <h1
        className="text-3xl font-semibold mb-4
      "
      >
        Task Three
      </h1>
      <p>
        Storing input textbox value into an array, displaying that array list,
        then calculating total sale price & total profit using Javascript
      </p>
      <div className="mt-5 flex flex-col items-start gap-2">
        <p className="mb-4">Product Original Price: 100</p>
        <label>Sale Price *</label>
        <input
          type="number"
          onChange={(e) => setSatePrice(+e.target.value)}
          className="border border-gray-300 px-2 py-2"
        />
        {showError && (
          <p className="text-red-500 text-sm">
            Sale price should be between 100 and 300
          </p>
        )}
        <button
          onClick={handleOnSubmit}
          className="p-2 bg-blue-600 px-4 rounded-lg text-white"
        >
          Submit
        </button>
      </div>

      {/* showing results  */}
      <div className="mt-6 text-gray-800">
        <h2 className="text-2xl font-semibold ">Output Result:</h2>
        <div>
          <p className="font-medium text-xl">Sold Price List</p>
          <ul className="list-disc pl-8">
            {soldPriceList.length > 0 &&
              soldPriceList.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold">Total sold price</p>
          <p>{totalSoldPrice}</p>
        </div>
        <div>
          <p className="text-xl font-semibold">Total profit</p>
          <p>{totalProfit}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
