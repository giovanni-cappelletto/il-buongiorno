# IL BUONGIORNO - Il giornalino dell'Istituto Don Bosco
Hey, ciao! 
Questa è la repository del [giornalino dell'istituto Don Bosco](https://il-buongiorno.vercel.app/).
È un progetto open source, quindi, se ti va, scarica i file e inizia a smanettare!

Se invece sei qui per caso e non sai scrivere codice, ma hai qualche idea da implementare scrivi a giovanni.cappelletto@my.donboscopadova.it

## Admin | Come aggiungere una nuova edizione
Ecco come inserire una nuova edizione in pochi semplici passi:
1. [Comprimi il PDF](https://www.ilovepdf.com/it/comprimere_pdf) per rimanere entro il limite di memoria a disposizione (25 MB)
2. Prepara la preview del PDF. \
Per avere immagini di grandezza e aspect-ratio uguali: 
    - Fai uno screenshot della prima pagina del PDF
    - Vai su [Figma](https://figma.com) e crea un nuovo progetto

    ![Crea un nuovo progetto][create]
    - Clicca F e subito dopo clicca nuovamente nella parte centrale della pagina (dovresti vedere che si è creato un quadrato/rettangolo)
    - A questo punto vai sul lato destro ed inserisci i seguenti valori: **W**: 734 - **H**: 1039 
    - Inserisci all'interno di questo rettangolo l'immagine in modo che lo occupi completamente. Infine clicca su *Export Frame 1*

    ![Crea un nuovo progetto][sidebar]

3. Entra nella repository [*il-buongiorno*](https://github.com/donboscopadova/il-buongiorno)
4. Entra nella cartella *pdf* e successivamente in quella dell'anno corrispondente all'edizione che stai per caricare e clicca *Add file* in alto a destra. \
5. Clicca *Upload files*
![Crea un nuovo progetto][uploadFiles]
6. A questo punto trascina il file nel riquadro apposito, aspetta che finisca l'upload e clicca *Commit changes*
![Crea un nuovo progetto][dragFiles]

Ripeti, quindi, questo processo anche per inserire la tua preview (ovviamente questa volta dovrai andare sulla cartella *preview*, che si trova all'interno di *images*).

Bene, hai aggiunto quelli che in gergo tecnico vengono chiamati *static files*! Ora non rimane solo che permettere di vedere/scaricare questi file dal sito web. Non preoccuparti la parte "complessa" l'hai superata, ora basta non sbagliare a scrivere! \
Per fare ciò, quindi:
1. Vai nel *root* (cartella principale) ed entra dentro il file *periodical.js*, un file che ho creato apposta per rendere il più semplice possibile la creazione di nuovi giornalini!
2. Clicca sull'icona della matita in alto a destra per modificare il file \
![Crea un nuovo progetto][modifyPeriodical]
3. Scorri giù fino a riga 84, dove trovi un codice simile al seguente: 
```
const cards = [{
    title: 'Si vis pacem, para pacem',
    editionNumber: 1,
    pageNumber: 40, 
    month: 'Aprile',
    year: 2022
}, {
    title: 'Il latte dei sogni',
    editionNumber: 2,
    pageNumber: 40, 
    month: 'Novembre',
    year: 2022
}]
```

4. Inserisci un nuovo evento, quindi, come segue:
```
const cards = [{
    title: 'Si vis pacem, para pacem',
    editionNumber: 1,
    pageNumber: 40, 
    month: 'Aprile',
    year: 2022
}, {
    title: 'Il latte dei sogni',
    editionNumber: 2,
    pageNumber: 40, 
    month: 'Novembre',
    year: 2022
}, {
    title: 'Racconti dalle ombre',
    editionNumber: 3,
    pageNumber: 32, 
    month: 'Marzo',
    year: 2023
}]
```
5. Clicca *Commit changes...* in alto a destra \
![Attua modifiche][commitChanges]
6. Specifica cosa hai modificato/aggiunto in *Commit message* e, infine, clicca nuovamente su *Commit changes* \
![Attua modifiche][uploadChanges]

Voilà! Non ti resta, quindi, che andare sul [sito](https://il-buongiorno.vercel.app/) e goderti la lettura della nuova edizione!

*In caso di bug o qualsiasi tipo di problema scrivimi: giovanni.cappelletto@my.donboscopadova.it*

*PS:* Può essere che in futuro aggionerò il sito in modo da tale da evitare di farti mettere mano al codice. Finché non lo farò, questo è il modo più semplice per aggiungere nuove edizioni.

<!-- Immagini -->
[create]: ./markdown/create.png
[sidebar]: ./markdown/sidebar.png
[addFile]: ./markdown/addFile.png
[uploadFiles]: ./markdown/uploadFiles.png
[dragFiles]: ./markdown/dragFiles.png
[modifyPeriodical]: ./markdown/modifyPeriodical.png
[commitChanges]: ./markdown/commitChanges.png
[uploadChanges]: ./markdown/uploadChanges.png
