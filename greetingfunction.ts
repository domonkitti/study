type GreetingProps = {
    name: string;
    age: number;
    format?: string
  };
  
const alice = {
    name: "Alice",
    age: 18,
    format: "table"
};
  
const bob = {
    name: "Bob",
    age: 18,
};

const printGreeting = ({ name, age, format = "default" }: GreetingProps): void => {
    console.log(`greeting({ name: "${name}", age: ${age}, format: "${format}" })`);
}
  
printGreeting(alice); 
printGreeting(bob);   
