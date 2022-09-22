// Server side code...
export default function handler(req, res) {
  console.log('handler');
  // console.log('req:', req);
  // console.log('res:', res);
  res.status(200).json({ text: 'Hellooooooooooo' });
}