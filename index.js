// const firebaseConfig = {
//     apiKey: "AIzaSyCDBKDkemkAv5zu500sh7djz0b747P80oE",
//     authDomain: "rsta-de997.firebaseapp.com",
//     projectId: "rsta-de997",
//     storageBucket: "rsta-de997.appspot.com",
//     messagingSenderId: "95340766105",
//     appId: "1:95340766105:web:6c4a3d6a9b90eb7e296908",
//     measurementId: "G-V2XSEQY36M"
// };

//   const app = firebase.initializeApp(firebaseConfig);

//   const storage = firebase.storage();
//   const imagesRef = storage.ref().child('myimages');

//   let count = 0;


// const images = [];

// imagesRef.listAll().then((res) => {
//     res.items.forEach((itemRef) => {
//         itemRef.getDownloadURL().then((url) => {
//             images.push(url);
//             // Check if this is the last image and then call the function to display images
//             if (images.length === res.items.length) {
//                 displayImagesOneByOne(images, 0);
//             }
//         }).catch((error) => {
//             console.log('Error getting download URL: ', error);
//         });
//     });
// }).catch((error) => {
//     console.log('Error fetching images: ', error);
// });


// console.log(images)

// const delayBetweenImages = 1000; // Delay in milliseconds between each image


// function displayImagesOneByOne(images, index) {
//     if(index===images.length){
//         index = 0;
//     }
//     if (index < images.length) {
//     const img = new Image();
//     img.src = images[index];
//     img.onload = function() {
//       document.getElementById('article').innerHTML = ''; // Clear previous image
//       document.getElementById('article').appendChild(img); // Assuming your div has an id 'article'
//       setTimeout(function() {
//         displayImagesOneByOne(images, index + 1); // Call the function recursively for the next image
//       }, delayBetweenImages);
//     };
//     img.onerror = function() {
//       console.error('Error loading image:', img.src);
//       displayImagesOneByOne(images, index + 1); // Skip to the next image on error
//     };
//   }
// }

// // Start displaying images
// displayImagesOneByOne(images, 0);

const firebaseConfig = {
  apiKey: "AIzaSyCDBKDkemkAv5zu500sh7djz0b747P80oE",
  authDomain: "rsta-de997.firebaseapp.com",
  projectId: "rsta-de997",
  storageBucket: "rsta-de997.appspot.com",
  messagingSenderId: "95340766105",
  appId: "1:95340766105:web:6c4a3d6a9b90eb7e296908",
  measurementId: "G-V2XSEQY36M"
};

const app = firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const imagesRef = storage.ref().child('myimages');

imagesRef.listAll().then((res) => {
  res.items.forEach((itemRef) => {
      itemRef.getDownloadURL().then((url) => {
          displayImage(url);
      }).catch((error) => {
          console.log('Error getting download URL: ', error);
      });
  });
}).catch((error) => {
  console.log('Error fetching images: ', error);
});

function displayImage(url) {
  const gallery = document.getElementById('gallery');
  const img = document.createElement('img');
  img.src = url;
  gallery.appendChild(img);
}