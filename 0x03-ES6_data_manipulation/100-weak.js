const weakMap = new WeakMap();

// Define the queryAPI function
const queryAPI = (endpoint) => {
  let count = weakMap.get(endpoint) || 0;

  count += 1;

  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  return endpoint;
};

// Export the queryAPI function
export { weakMap, queryAPI };