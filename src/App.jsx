import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // 1. Basic Usage - Simple state
  const [count, setCount] = useState(0);

  // 2. String State
  const [name, setName] = useState("");

  // 3. Boolean State
  const [isToggled, setIsToggled] = useState(false);

  // 4. Array State
  const [items, setItems] = useState(["Apple", "Banana"]);

  // 5. Object State
  const [user, setUser] = useState({ name: "John", age: 25 });

  // 6. Multiple States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 7. Lazy Initialization (expensive computation)
  const [expensiveValue, setExpensiveValue] = useState(() => {
    console.log("Expensive calculation running only once!");
    return Array.from({ length: 1000 }, (_, i) => i).reduce((a, b) => a + b, 0);
  });

  // 8. Functional Updates
  const [counter, setCounter] = useState(0);

  // Handler Functions
  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleUpdateUser = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const incrementWithFunctionalUpdate = () => {
    // This is safer when multiple updates might happen
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const incrementWithoutFunctionalUpdate = () => {
    // This will only increment by 1, not 3!
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  return (
    <>
      <div>
        <h2>1. Basic Number State</h2>
        const [count, setCount] = useState(0);
      </div>
      <br />
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <hr />
      <div>
        <h2>2. String State</h2>
        <br />
        const [name, setName] = useState('');
      </div>

      <br />

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name..."
        />
        <p>You typed: {name || "(nothing yet)"}</p>
      </div>

      <hr />

      <div>
        <h2>3. Boolean State (Toggle)</h2>
      </div>
      <div>
        const [isToggled, setIsToggled] = useState(false);
        <button onClick={() => setIsToggled(!isToggled)}>
          {isToggled ? "ON" : "OFF"}
        </button>
      </div>

      <hr />

      <div>
        <h2>4. Array State</h2>
      </div>
      <div>
        const [items, setItems] = useState(['Apple', 'Banana']);
        <br />
        setItems([...items, newItem]); // Add
        <br />
        setItems(items.filter((_, i) ={">"} i !== index)); // Remove
      </div>
      <div>
        <button onClick={handleAddItem}>Add Item</button>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <hr />

      <div>
        <h2>5. Object State</h2>
      </div>
      <div>
        const [user, setUser] = useState({`{ name: 'John', age: 25 }`});
        <br />
        setUser({`{ ...user, [field]: value }`}); // Update specific field
      </div>
      <div>
        Name:
        <input
          type="text"
          value={user.name}
          onChange={(e) => handleUpdateUser("name", e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={user.age}
          onChange={(e) =>
            handleUpdateUser("age", parseInt(e.target.value) || 0)
          }
          className="w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <p>Current State</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
