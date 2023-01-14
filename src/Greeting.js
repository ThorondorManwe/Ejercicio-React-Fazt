export default function Greeting({ title, name="User"}) {
  console.log(title);
  return <h1>{title}, dice {name}</h1>;
}
