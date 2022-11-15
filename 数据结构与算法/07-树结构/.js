// (node.key > key) && (node = node.left)
let node = { key: 20, left: { name: "left" }, right: { name: "right" } };
let key = 19;
(node.key > key) && (node = node.left);
