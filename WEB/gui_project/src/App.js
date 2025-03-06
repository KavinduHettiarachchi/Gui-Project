import React, { useRef, useState } from "react";
import "./App.css";

// Sidebar component
const Sidebar = ({ menuRef, beveragesRef, packagesRef, contactRef, feedbackRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sidebar">
      <h1>Rice Mania</h1>
      <ul>
        <li onClick={() => scrollToSection(menuRef)}>Our Menu</li>
        <li onClick={() => scrollToSection(beveragesRef)}>Beverages</li>
        <li onClick={() => scrollToSection(packagesRef)}>Packages</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact Us</li>
        <li onClick={() => scrollToSection(feedbackRef)}>Feedback</li>
      </ul>
    </div>
  );
};

// Menu component
const Menu = ({ sectionRef, addToOrder }) => {
  const items = ["Chicken Fried Rice", "Seafood Rice", "Mongolian Rice", "Nasi Goreng", "Veg Rice", "Rice and Curry"];

  return (
    <div className="menu" ref={sectionRef}>
      <h2>Menu</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Beverages component
const Beverages = ({ sectionRef, addToOrder }) => {
  const drinks = ["Coca Cola", "Pepsi", "Lemonade", "Iced Tea", "Coffee", "Milkshake"];

  return (
    <div className="menu" ref={sectionRef}>
      <h2>Beverages</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            {drink} <button onClick={() => addToOrder(drink)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Packages component
const Packages = ({ sectionRef }) => {
  return (
    <div className="menu" ref={sectionRef}>
      <h2>Packages</h2>
      <p>We offer family and combo meal packages at discounted rates!</p>
    </div>
  );
};

// Contact Us component
const ContactUs = ({ sectionRef }) => {
  return (
    <div className="menu" ref={sectionRef}>
      <h2>Contact Us</h2>
      <p>Email: support@ricemania.com</p>
      <p>Phone: +94 123 456 789</p>
      <p>Address: 123, Food Street, Colombo, Sri Lanka</p>
    </div>
  );
};

// Feedback component
const Feedback = ({ sectionRef }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitFeedback = () => {
    if (comment.trim() === "") {
      alert("Please enter a comment before submitting.");
    } else {
      alert(`Thank you for your feedback!\nYour comment: ${comment}`);
      setComment("");
    }
  };

  return (
    <div className="menu" ref={sectionRef}>
      <h2>Feedback</h2>
      <p>We value your feedback! Please share your experience with us.</p>

      <textarea
        placeholder="Write your thoughts here..."
        value={comment}
        onChange={handleCommentChange}
        rows="6"
        cols="50"
      />
      <br />
      <button onClick={handleSubmitFeedback}>Submit Feedback</button>
    </div>
  );
};

// App component
const App = () => {
  const menuRef = useRef(null);
  const beveragesRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);
  const feedbackRef = useRef(null);

  const [order, setOrder] = useState({
    menuItems: [],
    beverages: []
  });

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    contact: ""
  });

  // Function to add item to the order
  const addToOrder = (item) => {
    const isMenuItem = ["Chicken Fried Rice", "Seafood Rice", "Mongolian Rice", "Nasi Goreng", "Veg Rice", "Rice and Curry"].includes(item);
    const isBeverage = ["Coca Cola", "Pepsi", "Lemonade", "Iced Tea", "Coffee", "Milkshake"].includes(item);

    if (!isMenuItem && !isBeverage) {
      return;
    }

    const existingItem = isMenuItem
      ? order.menuItems.find((orderItem) => orderItem.name === item)
      : order.beverages.find((orderItem) => orderItem.name === item);

    if (existingItem) {
      alert("Item already in your order!");
      return;
    }

    const newItem = { name: item, quantity: 1, price: 5.99 }; // Assuming each item has the same price for simplicity
    if (isMenuItem) {
      setOrder((prevState) => ({
        ...prevState,
        menuItems: [...prevState.menuItems, newItem]
      }));
    } else {
      setOrder((prevState) => ({
        ...prevState,
        beverages: [...prevState.beverages, newItem]
      }));
    }
  };

  // Handle user details change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle order submission
  const placeOrder = async () => {
    if (order.menuItems.length === 0 && order.beverages.length === 0) {
      alert("Please add items to your order.");
      return;
    }
    if (!userDetails.name || !userDetails.address || !userDetails.contact) {
      alert("Please provide your name, address, and contact number.");
      return;
    }

    const orderItems = [
      ...order.menuItems.map((item) => ({
        foodId: "dummyFoodId", // Adjust as needed
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      ...order.beverages.map((item) => ({
        foodId: "dummyBeverageId", // Adjust as needed
        name: item.name,
        quantity: item.quantity,
        price: item.price
      }))
    ];

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "dummyUserId", // Replace with actual user ID
          items: orderItems
        })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully!");
        console.log(data);
        setOrder({ menuItems: [], beverages: [] });
        setUserDetails({ name: "", address: "", contact: "" });
      } else {
        alert("Failed to place order: " + data.message);
      }
    } catch (error) {
      alert("Error placing order.");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Sidebar
        menuRef={menuRef}
        beveragesRef={beveragesRef}
        packagesRef={packagesRef}
        contactRef={contactRef}
        feedbackRef={feedbackRef}
      />
      <div className="content">
        <Menu sectionRef={menuRef} addToOrder={addToOrder} />
        <Beverages sectionRef={beveragesRef} addToOrder={addToOrder} />
        <Packages sectionRef={packagesRef} />
        <ContactUs sectionRef={contactRef} />
        <Feedback sectionRef={feedbackRef} />
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>
        <p><strong>Menu Items:</strong></p>
        {order.menuItems.length > 0 ? (
          <ul>
            {order.menuItems.map((item, index) => (
              <li key={index}>{item.name} (x{item.quantity})</li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}

        <p><strong>Beverages:</strong></p>
        {order.beverages.length > 0 ? (
          <ul>
            {order.beverages.map((item, index) => (
              <li key={index}>{item.name} (x{item.quantity})</li>
            ))}
          </ul>
        ) : (
          <p>None</p>
        )}

        <div className="user-details-form">
          <h4>Enter Your Details</h4>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={userDetails.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Your Address"
            value={userDetails.address}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Your Contact Number"
            value={userDetails.contact}
            onChange={handleInputChange}
          />
        </div>

        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default App;

 // Function to add item to the order
 /*
  const addToOrder = (item) => {
    if (order.menuItems.includes(item) || order.beverages.includes(item)) {
      alert("Item already in your order!");
      return;
    }

    if (["Chicken Fried Rice", "Seafood Rice", "Mongolian Rice", "Nasi Goreng", "Veg Rice", "Rice and Curry"].includes(item)) {
      setOrder((prevState) => ({
        ...prevState,
        menuItems: [...prevState.menuItems, item]
      }));
    } else {
      setOrder((prevState) => ({
        ...prevState,
        beverages: [...prevState.beverages, item]
      }));
    }
  };

  // Handle user details change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle order submission
  const placeOrder = () => {
    if (order.menuItems.length === 0 && order.beverages.length === 0) {
      alert("Please add items to your order.");
      return;
    }
    if (!userDetails.name || !userDetails.address || !userDetails.contact) {
      alert("Please provide your name, address, and contact number.");
      return;
    }
    
    alert(`Order placed!\nName: ${userDetails.name}\nAddress: ${userDetails.address}\nContact: ${userDetails.contact}
            \nMenu Items: ${order.menuItems.join(", ")}\nBeverages: ${order.beverages.join(", ")}`);
    setOrder({
      menuItems: [],
      beverages: []
    });
    setUserDetails({
      name: "",
      address: "",
      contact: ""
    });
  };

  return (
    <div className="container">
    <Sidebar menuRef={menuRef} beveragesRef={beveragesRef} packagesRef={packagesRef} contactRef={contactRef} feedbackRef={feedbackRef} />
    <div className="content">
      <Menu sectionRef={menuRef} addToOrder={addToOrder} />
      <Beverages sectionRef={beveragesRef} addToOrder={addToOrder} />
    </div>

    <div className="order-summary">
      <h2>Your Order</h2>
      {order.map((item, index) => (
        <p key={index}>{item.name} - Quantity: {item.quantity} - ${item.price.toFixed(2)}</p>
      ))}

      <h4>Enter Your Details</h4>
      <input type="text" name="name" placeholder="Your Name" value={userDetails.name} onChange={handleInputChange} />
      <input type="text" name="address" placeholder="Your Address" value={userDetails.address} onChange={handleInputChange} />
      <input type="text" name="contact" placeholder="Your Contact Number" value={userDetails.contact} onChange={handleInputChange} />

      <button onClick={placeOrder}>Place Order</button>
    </div>
  </div>
);
};
export default App;

/*
import React, { useRef, useState } from "react";
import "./App.css";

// Sidebar component
const Sidebar = ({ menuRef, beveragesRef, packagesRef, contactRef, feedbackRef }) => {
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="sidebar">
      <h1>Rice Mania</h1>
      <ul>
        <li onClick={() => scrollToSection(menuRef)}>Our Menu</li>
        <li onClick={() => scrollToSection(beveragesRef)}>Beverages</li>
        <li onClick={() => scrollToSection(packagesRef)}>Packages</li>
        <li onClick={() => scrollToSection(contactRef)}>Contact Us</li>
        <li onClick={() => scrollToSection(feedbackRef)}>Feedback</li>
      </ul>
    </div>
  );
};

// Menu component
const Menu = ({ sectionRef, addToOrder }) => {
  const items = ["Chicken Fried Rice", "Seafood Rice", "Mongolian Rice", "Nasi Goreng", "Veg Rice", "Rice and Curry"];

  return (
    <div className="menu" ref={sectionRef}>
      <h2>Menu</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => addToOrder(item)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Beverages component
const Beverages = ({ sectionRef, addToOrder }) => {
  const drinks = ["Coca Cola", "Pepsi", "Lemonade", "Iced Tea", "Coffee", "Milkshake"];

  return (
    <div className="menu" ref={sectionRef}>
      <h2>Beverages</h2>
      <ul>
        {drinks.map((drink, index) => (
          <li key={index}>
            {drink} <button onClick={() => addToOrder(drink)}>Add to Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const menuRef = useRef(null);
  const beveragesRef = useRef(null);
  const packagesRef = useRef(null);
  const contactRef = useRef(null);
  const feedbackRef = useRef(null);

  const [order, setOrder] = useState({
    menuItems: [],
    beverages: []
  });

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    contact: ""
  });

  const addToOrder = (item) => {
    if (order.menuItems.includes(item) || order.beverages.includes(item)) {
      alert("Item already in your order!");
      return;
    }

    if (["Chicken Fried Rice", "Seafood Rice", "Mongolian Rice", "Nasi Goreng", "Veg Rice", "Rice and Curry"].includes(item)) {
      setOrder((prevState) => ({ ...prevState, menuItems: [...prevState.menuItems, item] }));
    } else {
      setOrder((prevState) => ({ ...prevState, beverages: [...prevState.beverages, item] }));
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const placeOrder = async () => {
    if (!userDetails.name || !userDetails.address || !userDetails.contact || (order.menuItems.length === 0 && order.beverages.length === 0)) {
      alert("Please complete all fields and add items to your order.");
      return;
    }

    try {
      const userResponse = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userDetails),
      });

      if (!userResponse.ok) throw new Error("Failed to save user details");

      const userData = await userResponse.json();

      const orderResponse = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userData._id, items: [...order.menuItems, ...order.beverages] }),
      });

      if (!orderResponse.ok) throw new Error("Failed to place order");

      alert("Order placed successfully!");
      setOrder({ menuItems: [], beverages: [] });
      setUserDetails({ name: "", address: "", contact: "" });
    } catch (error) {
      alert("An error occurred while placing your order.");
    }
  };

  return (
    <div className="container">
      <Sidebar menuRef={menuRef} beveragesRef={beveragesRef} packagesRef={packagesRef} contactRef={contactRef} feedbackRef={feedbackRef} />
      <div className="content">
        <Menu sectionRef={menuRef} addToOrder={addToOrder} />
        <Beverages sectionRef={beveragesRef} addToOrder={addToOrder} />
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>
        <input type="text" name="name" placeholder="Your Name" value={userDetails.name} onChange={handleInputChange} />
        <input type="text" name="address" placeholder="Your Address" value={userDetails.address} onChange={handleInputChange} />
        <input type="text" name="contact" placeholder="Your Contact Number" value={userDetails.contact} onChange={handleInputChange} />
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default App;*/

