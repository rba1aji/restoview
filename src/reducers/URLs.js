// import API_KEY from './API_KEY'
const API_KEY='GCWOJApE54Gk8LXrDZhnhxdapaJUA5Ub'
export function placeByIdUrl(id) {
  return `https://api.tomtom.com/search/2/place.json?entityId=${id}&key=${API_KEY}&view=IN`;
}
