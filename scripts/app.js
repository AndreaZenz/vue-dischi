/*
    -dobbiamo recuperare la lista degli album dal server
        -url da chiamare  "https://flynn.boolean.careers/exercises/api/array/music"
    -una volta effettuata la chiamata, il server mi ritorna un JSON di questo tipo :
        "success": true
        "response":  [{
            /array di oggetti con le seguenti chiavi
                // "poster": 
                // "title": 
                // "author": 
                // "genre": 
                // "year": 
        }]
    -da questi dati dovrò recuperare il valore della chiave "response"
    -i dati recuperati devo andarli a salvare in una variabile.
        -questa variabile andrà utilizzata nell'html e quindi dovrà essere creata all'interno di : data
        -quale sarà il valore iniziale di questa variabile?  
        (se decido di utilizzare un array vuoto per mostrare il loading facciamo riferimento al length === 0)
        (se invece lo setto come null, allora nell'html portò usare !nomeVariabile la negazione)
*/
new Vue({
    el: "#app",
    data: {
        albumList:[],
        filteredData:[],
    },
    methods: {
        getGeneresList(){
            const finalList = []

            albumList.forEach((element)=>{
                if(finalList.includes(element.genre)){
                    finalList.push(element.genre)
                }
        })

        },
        onSelectChange(event){
            const select = event.currentTarget
            // select.value
            // this.filteredData = 
        }
    },
    mounted() {
        /*
        tramite axios recuperiamo i dati del server.
        */
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                //array di oggetti con le seguenti chiavi
                // "poster": 
                // "title": 
                // "author": 
                // "genre": 
                // "year": 
                const albumList = resp.data.response;
                this.albumArrays.push(resp.data.response)
                this.filteredData.push(resp.data.response.genre)
                /*
                una volta ricevuti i dati dal server posso prima ancora di salvarli nella variabile di Vue posso eseguire il sort in modo da salvare poi i dati già ordinati
                */
            });

        
    },
});