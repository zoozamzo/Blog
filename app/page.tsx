import fetchVerse from "./logic/fetchVerse";
import Header from "@/components/Header";

export default async function Home() {
  const result= await fetchVerse('Genesis', "1", "3")
  
  return (
    <Header verse={result}/>
  );
}
 