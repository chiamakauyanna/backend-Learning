import { v4 as uuidv4 } from "uuid";

let items = [
  {
    name: "Watch",
    description: "Stylish wristwatch",
    inStock: true,
    id: "8bf9f7a7-da3b-4ee1-95dc-5afbfd500d5f",
  },
];

export const getItems = (req, res) => {
  try {
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const getItem = (req, res) => {
  try {
    const { id } = req.params;
    const foundItem = items.find((item) => item.id === id);

    if (!foundItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(foundItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createItem = (req, res) => {
  try {
    const { name, description, inStock } = req.body;

    if (
      typeof name !== "string" ||
      typeof description !== "string" ||
      typeof inStock !== "boolean"
    ) {
      return res.status(400).json({
        message: "Invalid request data. Expected 'name' and 'description' as strings and 'inStock' as boolean.",
      });
    }

    const newItem = {
      id: uuidv4(),
      name,
      description,
      inStock,
    };

    items.push(newItem);
    res.status(201).json({ message: "Item created", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const updateItem = (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, inStock } = req.body;

    const foundItem = items.find((item) => item.id === id);
    if (!foundItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    if (name && typeof name !== "string") {
      return res.status(400).json({ message: "'name' must be a string" });
    }

    if (description && typeof description !== "string") {
      return res.status(400).json({ message: "'description' must be a string" });
    }

    if (inStock !== undefined && typeof inStock !== "boolean") {
      return res.status(400).json({ message: "'inStock' must be a boolean" });
    }

    if (name) foundItem.name = name;
    if (description) foundItem.description = description;
    if (inStock !== undefined) foundItem.inStock = inStock;

    res.status(200).json({ message: "Item updated", item: foundItem });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const deleteItem = (req, res) => {
  try {
    const { id } = req.params;
    const index = items.findIndex((item) => item.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Item not found" });
    }

    items.splice(index, 1);
    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
