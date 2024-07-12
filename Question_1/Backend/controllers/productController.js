const axios = require('axios');

exports.getTopProducts = async (req, res) => {
  try {
    const { company, category, minPrice, maxPrice, top } = req.query;
    const response = await axios.get(
      `http://20.244.56.144/test/companies/${company}/categories/${category}/products`,
      {
        params: { minPrice, maxPrice },
        headers: {
          'Authorization': req.headers['authorization']
        }
      }
    );
    
    let products = response.data;
    products.sort((a, b) => b.rating - a.rating);
    products = products.slice(0, parseInt(top, 10));

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products', error: error.message });
  }
};