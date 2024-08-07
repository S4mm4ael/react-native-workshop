const apiKey = process.env.EXPO_PUBLIC_API_KEY;

function getMapPreview(lat: number, lng: number) {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${apiKey}&signature=YOUR_SIGNATURE`;
  return imagePreview;
}

export {getMapPreview};