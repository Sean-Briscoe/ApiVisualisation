var form = document.getElementById("myForm")


form.addEventListener('submit', function(e){
e.preventDefault()


    var search = document.getElementById("search").value

    var orignalInput = search.split(' ').join('')
    var text ="List of their Repositories:"+"<br>"
    var textt = ""
    document.getElementById("result").innerHTML = ""
    

    //Above just receives the name
    // Below is supposed to interrogate the api repos. It uses thes query to acquire the full_name
    //Beneath that the for loop is used to print each full-name on a new line
    //Beneath that i tried to create a bar chart using the amount of commits from each repo to compare then as my data visualistion
    //To acquire the commit number i used the fact that the fetch formula puts each instance of the repo an array 
    //So the size of the array should be the amount of commits on that repo
    //Below that is my attempt at using d3



    alert(orignalInput)
    fetch("https://api.github.com/users/"+orignalInput+"/repos")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        var array =[] 
        for (i = 0; i < data.length; i++){

            fetch("https://api.github.com/repos/"+data[i].full_name + "/commits")
            .then((result) => result.json())
            .then((data) => {

                console.log(data)
                textt = data.length

            })

          text += data[i].full_name + "<br>" + "commits: " + textt
          

        }
        document.getElementById("result").innerHTML = text


        const container = d3.select("result")
            .classed("container",true);

            const bars = container.selectAll("bar")
            .data(text)
            .enter()
            .append(result)
            .classed("bar",true)
            .style("width", "20")
            .style("height", "5" * data => data.textt);

     })
     
     


     

        

    })


