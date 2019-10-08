var names = ["a", "b", "c"]
    d3.select("#A1")
        .append("p")
        .text(names)

var promise = d3.json("planets.json")



promise.then(
function(pimg)
{
    console.log("pimg", pimg);
    return image(pimg)
    
},
function(err)
{
    console.log("fail", err);
}
)

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
 
