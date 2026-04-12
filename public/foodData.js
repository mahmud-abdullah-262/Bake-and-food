export default async function getFood(){
  const foodPromise = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
  const data = await foodPromise.json()
  const foods = data.data
  return foods;
}