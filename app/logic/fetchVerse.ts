import axios from "axios";

async function fetchVerse(book: string, chapter:string, verse: string):Promise<string> {
    try {
        const url = 'https://api.esv.org/v3/passage/text/?q=' + book + "+" +  chapter + ":" + verse;
        
        const res = await axios.get(url,{
            headers: {
                'Authorization': 'Token e04f8b87f8a98e90d1b52f1bd8fe09cac8a78c2d'
            }
        });

        const result:string = res.data.passages[0];

        return result;

    } catch (error) {
        return "";
    }
}

export default fetchVerse;