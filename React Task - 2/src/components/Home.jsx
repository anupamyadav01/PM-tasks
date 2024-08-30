import { useState } from "react";

const Home = () => {
  const [showError, setShowError] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [productsList, setProductsList] = useState([]);

  const handleOnSubmit = () => {
    if (!productName) {
      setShowError(true);
      return;
    }
    setProductsList([
      ...productsList,
      {
        name: productName,
        price: price,
      },
    ]);

    calculateTotalPrice();
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    productsList.forEach((item) => (totalPrice += item.price));
    setPrice((prev) => prev + totalPrice);
  };
  console.log(productsList);

  return (
    <div
      className=" w-[80%] mx-auto py-10 h-full
    "
    >
      <h1
        className="text-3xl font-semibold mb-4
      "
      >
        Task Four
      </h1>
      <p>
        Storing input textbox value into an array, displaying that array list,
        then calculating total sale price & total profit using Javascript
      </p>
      <div className="mt-5 flex flex-col items-start gap-2 w-[50%]">
        <div className="flex flex-col w-full">
          <label>Product Name *</label>
          <input
            type="text"
            onChange={(e) => setProductName(e.target.value)}
            className="border border-gray-300 w-full px-2 py-2"
          />
          {showError && (
            <p className="text-red-500 text-sm">Product Name is required</p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label>Product Price *</label>
          <input
            type="number"
            onChange={(e) => setPrice(+e.target.value)}
            className="border border-gray-300 w-full px-2 py-2"
          />
        </div>

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
          <p className="font-medium text-xl">Sale Price</p>
          <ul className="list-disc pl-8">
            {productsList.length > 0 &&
              productsList.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.price}
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className="text-xl font-semibold">Total Price</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
