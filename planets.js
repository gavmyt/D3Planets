var names = ["a", "b", "c"]
    d3.select("#A1")
        .append("p")
        .text(names)

var promise = d3.json("planets.json")



promise.then(
function(pimg)
{
    console.log("pimg", pimg);
    image(pimg)
    list(pimg)
    emptyT(pimg)
    C2(pimg)
    C3(pimg)
    
},
function(err)
{
    console.log("fail", err);
}
)
//B3
var image = function(planets)
{
    d3.select("#B3")
        .selectAll("img")
        .data(planets)
        .enter()
        .append("img")
        .attr("src", function(planets2)
        {
              return planets2.img;
              })
}
//B4
var list = function(listName)
{
var listName = d3.select("#B4")

        .append("ol")
        .selectAll("li")
        .data(listName)
        .enter()
        .append("li")
    listName.append("span")
        .text(function(d)             
    {
        return d.name;
        
    })
    listName.append("name")
        .attr("src", function(d)
    {
        return d.name;          
    })
}


//C1
var emptyT = function(planets3)
{
var tr = d3.select("#C1")
    .append("table")
    .selectAll("tr")
    .data(planets3)
    .enter()
    .append("tr")
}

//C2
var C2 = function(planet4)
{
var C2table = d3.select("#C2")
    .append("table")

var rows = C2table.selectAll("tr")
    .data(planet4)
    .enter()
    .append("tr")

    rows.append("td")
    
    .text(function(d)
{
          return d.name;
})
}

//C3
var C3 = function(planet5)
{
var C3table = d3.select("#C3")
    .append("table")

var rows = C3table.selectAll("tr")
    .data(planet5)
    .enter()
    .append("tr")

    rows.append("td")
    
    .text(function(d)
{
          return d.name;         
    })

    rows.append("td")
    
    .text(function(d)
{
          return d.img;         
    })
    rows.append("td")
   
    .text(function(d)
{          
          return d.distance
    })

    rows.append("td")
   
    .text(function(d)
{          
          return d.density
    })
    rows.append("td")
   
    .text(function(d)
{          
          return d.moons
    })
    rows.append("td")
   
    .text(function(d)
{          
          return d.radius
    })
}