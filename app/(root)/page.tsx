import "@/app/components/hello"
import Hello from "@/app/components/hello";

export default function Home() {
  console.log("am i server or client component?")

  return (

      <>
        <h1 className="text-3xl">Hello World!</h1>
        <Hello></Hello>
      </>

      );
}
