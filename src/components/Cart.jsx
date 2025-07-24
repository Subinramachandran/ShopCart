import { FaStar } from 'react-icons/fa';

const Cart = ({ cartItems = [], removeCartItems, increaseQuantity, decreaseQuantity }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {/* Placeholder image box */}
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={index < item.rating ? 'text-yellow-400' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mt-1">Price: ₹{item.price}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 sm:mt-0">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 px-2 rounded text-sm"
                    >
                      −
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 px-2 rounded text-sm"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-sm font-bold text-gray-800">₹{item.price * item.quantity}</span>
                  <button
                    onClick={() => removeCartItems(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                    title="Remove"
                  >
                    ❌
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xl font-bold text-gray-800">Total: ₹{total.toFixed(2)}</p>
          {cartItems.length > 0 && (
            <a
              href="/checkout"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Checkout
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
