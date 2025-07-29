const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.post('/bfhl', (req, res) => {
  const { data } = req.body;

 
  const user_id = "shivam_gupta_1514";
  const email = "shivam2309.be22@chitkara.edu.in";
  const roll_number = "2210992309";

 
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id,
      email,
      roll_number,
      message: "'data' field must be an array"
    });
  }

  
  if (data.length === 0) {
    return res.status(400).json({
      is_success: false,
      user_id,
      email,
      roll_number,
      message: "'data' cannot be empty"
    });
  }


  const invalidItem = data.find(item => typeof item !== 'string' && typeof item !== 'number');
  if (invalidItem !== undefined) {
    return res.status(400).json({
      is_success: false,
      user_id,
      email,
      roll_number,
      message: "All elements in 'data' must be strings or numbers only"
    });
  }

 
  const even_numbers = [];
  const odd_numbers = [];
  const alphabets = [];
  const special_characters = [];
  let sum = 0;
  let concat = '';

  for (const item of data) {
    const strItem = String(item).trim();

    if (/^-?\d+$/.test(strItem)) {
      const num = parseInt(strItem);
      sum += num;
      (num % 2 === 0 ? even_numbers : odd_numbers).push(strItem);
    } else if (/^[a-zA-Z]+$/.test(strItem)) {
      alphabets.push(strItem.toUpperCase());
      concat += strItem;
    } else {
      special_characters.push(strItem);
    }
  }


  const reversed = concat.split('').reverse();
  let concat_string = '';
  reversed.forEach((char, i) => {
    concat_string += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  });

  return res.status(200).json({
    is_success: true,
    user_id,
    email,
    roll_number,
    even_numbers,
    odd_numbers,
    alphabets,
    special_characters,
    sum: String(sum),
    concat_string
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
