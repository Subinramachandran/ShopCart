import React, { useState } from 'react';

const Checkout = ({ setCartItems }) => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment success
    setSuccess(true);
    if (setCartItems) setCartItems([]);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700 dark:text-blue-400">Payment</h2>
      {success ? (
        <div className="text-center text-green-600 dark:text-green-400 font-bold text-lg py-8">
          Payment Successful!<br />Thank you for your purchase.
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Card Number</label>
            <input type="text" id="cardNumber" maxLength={16} placeholder="1234 5678 9012 3456" className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600" required />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Expiry</label>
              <input type="text" id="expiry" maxLength={5} placeholder="MM/YY" className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600" required />
            </div>
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">CVV</label>
              <input type="password" id="cvv" maxLength={4} placeholder="123" className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600" required />
            </div>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">Pay Now</button>
        </form>
      )}
      <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
        <span>Use any test card number for demo (e.g. 4242 4242 4242 4242)</span>
      </div>
    </div>
  );
};

export default Checkout;
