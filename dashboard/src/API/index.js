export const getOrders = () => {
    return fetch("http://localhost:4000/getstatus?status=pending").then((res) => res.json());
  };
  
  export const getRevenue = () => {
    return fetch("https://dummyjson.com/carts").then((res) => res.json());
  };
  
  export const getInventory = () => {
    return fetch("http://localhost:4000/getstatus?status=completed").then((res) => res.json());
  };
  
  export const getCustomers = () => {
    return fetch("http://localhost:4000/getData").then((res) => res.json());
  };

  const getById = async() => {
    return await fetch("http://localhost:4000/getById/:id").then((res) => res.json());
  };


  export const getComments = () => {
    return fetch("https://dummyjson.com/comments").then((res) => res.json());
  };

  export const updateCompleted = async () => {
    return await fetch("http://localhost:4000/update/:id").then((res) => res.json());
  }