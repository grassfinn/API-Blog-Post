const fox = document.getElementById('fox');

const backupImg = {
  image: 'https://randomfox.ca/images/47.jpg',
  link: 'https://randomfox.ca/?i=47',
};

async function getFox() {
  const response = await fetch('https://randomfox.ca/floof/?ref=apilist.fun');
  const data = await response.json();
  console.log(data);
  return data;
}

getFox()
  .then((item) => {
    fox.setAttribute('src', item.image);
  })
  .catch((err) => {
    alert('Something went wrong! Enjoy this picture of a fox instead!');
    // set up default image
    console.error(err);
    fox.setAttribute('src', backupImg.image);
  });
