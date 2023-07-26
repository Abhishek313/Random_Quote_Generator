function generate(){
    var quotes={
       "Deepak Chopra":"“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",

       "Albert Einstien":"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",

       "Pierce Brown":"Man cannot be freed by the same injustice that enslaved it.",

       "Mdeline Miller":"Bury us, and mark our names above. Let us be free.",

       "Aaron Lauritsen":"There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.",

       
 
    }

    var authors=Object.keys(quotes);

    console.log(authors);

    var author=authors[Math.floor(Math.random()*authors.length)];

    var quote=quotes[author];

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author








}