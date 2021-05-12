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
        albumList: [],
        filteredData: [],
        generesList: [],

    },
    methods: {
        getGeneresList() {
            this.generesList = [];
            this.albumList.forEach((element) => {
                if (!this.generesList.includes(element.genre)) {
                    this.generesList.push(element.genre);
                }
            });
        },

        // come cambio questa funzione in una computed? 
        
        onSelectChange(event) {
            if (!event || !event.currentTarget.value) {
                this.filteredData = this.albumList;
                return;
            }
            const select = event.currentTarget;
            select.value;
            this.filteredData = this.albumList.filter(album => album.genre === select.value);
        },
        sortedYears() {
            this.albumList.sort(function (oggettoA, oggettoB) { return oggettoB.year - oggettoA.year; });
        },
    },
    mounted() {
        /*
        tramite axios recuperiamo i dati del server.
        */
        axios
            .get("https://flynn.boolean.careers/exercises/api/array/music")
            .then(resp => {
                this.albumList.push(...resp.data.response);
                this.getGeneresList();
                this.onSelectChange();
                this.sortedYears();
            });


        /*
        una volta ricevuti i dati dal server posso prima ancora di salvarli nella variabile di Vue posso eseguire il sort in modo da salvare poi i dati già ordinati
        */
    }
});