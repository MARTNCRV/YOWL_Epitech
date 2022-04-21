import axios from "axios";

// **************
// USERS
// **************
export async function getAllUsers() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/users/index",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function readUser(id) {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/users/" + id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function registerUser(username, email, phone, password) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:8000/register",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
      "X-CSRF-TOKEN": "d4xwYJRmw4mtlkZbWnfjurzsGmqNB26QFv4kiMpO",
    },
    data: {
      username: username,
      email: email,
      phone: phone,
      password: password,
    },
  };
  try {
    const response = await axios(config);
    console.log(100, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function loginUser(email, password) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:8000/login",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
    data: {
      email: email,
      password: password,
    },
  };
  try {
    const response = await axios(config);
    console.log(101, response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
// **************
// REVIEWS
// **************
export async function getAllReviews() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/reviews/index",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getReviewsByPlaceId(id) {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/reviews/place/" + id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function addReview(title, content, rate, place_id) {
  var config = {
    method: "post",
    url: "http://127.0.0.1:8000/reviews/create",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
    data: {
      title: title,
      content: content,
      rate: rate,
      user_id: 1,
      place_id: place_id,
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function averageRateByPlaceId(id) {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/dashboard/place/rateav/" + id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
// **************
// CATEGORIES
// **************
export async function getAllCategories() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/categories/index",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
// **************
// EVENTS
// **************
export async function getAllEvents(page = null, limit = null) {
  var config = {
    method: "get",
    url:
      "http://127.0.0.1:8000/events/index" +
      "?page=" +
      page +
      "&limit=" +
      limit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
// **************
// PLACES
// **************
export async function getAllPlaces() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/places/index",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getPlaceById(id) {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/places/" + id,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getAllSchools(page = null, limit = null) {
  var config = {
    method: "get",
    url:
      "http://127.0.0.1:8000/places/schools" +
      "?page=" +
      page +
      "&limit=" +
      limit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getAllCompanies(page = null, limit = null) {
  var config = {
    method: "get",
    url:
      "http://127.0.0.1:8000/places/companies" +
      "?page=" +
      page +
      "&limit=" +
      limit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getAllCoworkings(page = null, limit = null) {
  var config = {
    method: "get",
    url:
      "http://127.0.0.1:8000/places/coworkings" +
      "?page=" +
      page +
      "&limit=" +
      limit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getAllBars(page = null, limit = null) {
  var config = {
    method: "get",
    url:
      "http://127.0.0.1:8000/places/bars" + "?page=" + page + "&limit=" + limit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function getAllShops(page = null, limit = null) {
  var config = {
    method: "get",
    url:
      "http://127.0.0.1:8000/places/shops" +
      "?page=" +
      page +
      "&limit=" +
      limit,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
// **************
// DASHBOARD
// **************
export async function countAllUsers() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/dashboard/users/all",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function countLastUsers() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/dashboard/users/last",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function countAdminUsers() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/dashboard/users/admin",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function countAllReviews() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/dashboard/reviews/all",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
export async function countLastReviews() {
  var config = {
    method: "get",
    url: "http://127.0.0.1:8000/dashboard/reviews/last",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer 18|IN9R0BdpOttnXX80bVxZbg4Rx6tQuBSnOZRVxhXl",
    },
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    return error;
  }
}
