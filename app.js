document.getElementById('my-button').addEventListener('click', function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php', true);


    xhr.onload = function(){
        if(xhr.status === 200){
            alert(xhr.responseText);
            
        }else{
            document.getElementById('result').innerHTML = 'Error fetching data';
        }
    };


    xhr.onerror = function(){
        document.getElementById('result').innerHTML = 'Request Failed';
    };

    xhr.send();
});
    
 