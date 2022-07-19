import React from 'react';
import { Rating } from 'react-simple-star-rating';
import FetchCloudDataByAPIData from '../pages/RestaurantPage/FetchCloudDataByAPIData';

export default function StarRating(props) {
  const cloudData = FetchCloudDataByAPIData(props.resto);

  return (
    <>
      <Rating
        ratingValue={(cloudData?.ratings?.star / 5) * 500}
        readonly="true"
        size="25px"
      />
      <p>views: {cloudData?.views}</p>
    </>
  );
}

//onsnapshot
// const { cloudData, setCloudData } = AppState();
// const docRef = doc(db, 'restaurants', props.resto.id);
// const docRef = restoDocRef(props.resto.id);

// console.log(t);

// function HandleUndefined() {
//   const newDocData = {
//     views: 0,
//     ratings: {
//       star: 5,
//       collection: {
//         overall: [{}],
//         food: [{}],
//         service: [{}],
//         quality: [{}],
//         valueForMoney: [{}],
//       },
//     },
//     reviews: [{}],
//     address: props.resto.address,
//     openingHours: props.resto.openingHours ? props.resto.openingHours : null,
//     photos: [{}],
//   };

//   setDoc(docRef, newDocData)
//     .then((res) => {
//       unsubscribe();
//     })
//     .catch((err) => {
//       console.log(err, props.resto.id);
//     });
// }

// // function FetchData() {

// const unsubscribe = onSnapshot(docRef, (doc) => {
//   if (doc.data()) {
//     setCloudData(doc.data());
//   } else {
//     HandleUndefined();
//   }
// });
// // }

// useEffect(() => {
//   return () => {
//     unsubscribe();
//   };
// }, []);
