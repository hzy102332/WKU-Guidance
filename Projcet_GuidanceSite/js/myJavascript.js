let NO_PARENT = -1;
function dijkstra(adjacencyMatrix,startVertex)
{
    let nVertices = adjacencyMatrix[0].length;
        // shortestDistances[i] will hold the shortest distance from src to i
        let shortestDistances = new Array(nVertices);
        // added[i] will true if vertex i is
        // included / in shortest path tree or shortest distance from src to i is finalized
        let added = new Array(nVertices);
        // Initialize all distances as INFINITE and added[] as false
        for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++)
        {
            shortestDistances[vertexIndex] = Number.MAX_VALUE;
            added[vertexIndex] = false;
        }
        // Distance of source vertex from itself is always 0
        shortestDistances[startVertex] = 0;
        // Parent array to store shortest path tree
        let parents = new Array(nVertices);
        // The starting vertex does not have a parent
        parents[startVertex] = NO_PARENT;
        // Find shortest path for all vertices
        for (let i = 1; i < nVertices; i++)
        {
            // Pick the minimum distance vertex from the set of vertices not yet
            // processed. nearestVertex is always equal to startNode in first iteration.
            let nearestVertex = -1;
            let shortestDistance = Number.MAX_VALUE;
            for (let vertexIndex = 0; vertexIndex < nVertices; vertexIndex++)
            {
                if (!added[vertexIndex] && shortestDistances[vertexIndex] <
                    shortestDistance)
                {
                    nearestVertex = vertexIndex;
                    shortestDistance = shortestDistances[vertexIndex];
                }
            }
            // Mark the picked vertex as processed
            added[nearestVertex] = true;
            // Update dist value of the adjacent vertices of the picked vertex.
            for (let vertexIndex = 0;
                    vertexIndex < nVertices;
                    vertexIndex++)
            {
                let edgeDistance = adjacencyMatrix[nearestVertex][vertexIndex];
                
                if (edgeDistance > 0
                    && ((shortestDistance + edgeDistance) < shortestDistances[vertexIndex]))
                {
                    parents[vertexIndex] = nearestVertex;
                    shortestDistances[vertexIndex] = shortestDistance +
                                                    edgeDistance;
                }}}
        // printSolution(startVertex, shortestDistances, parents);
		return parents;
}

// function printSolution(startVertex,distances,parents)
// {
//     let nVertices = distances.length;
//         document.write("Vertex  Distance Path");
        
//         for (let vertexIndex = 0;
//                 vertexIndex < nVertices;
//                 vertexIndex++)
//         {
//             if (vertexIndex != startVertex)
//             {
//                 document.write("<br>" + startVertex + " -> ");
//                 document.write(vertexIndex + "   ");
//                 document.write(distances[vertexIndex] + "   ");
//                 printPath(vertexIndex, parents);
//             }
//         }
// }

// function printPath(currentVertex,parents)
// {
//     // Base case : Source node has
//         // been processed
//         if (currentVertex == NO_PARENT)
//         {
//             return;
//         }
//         printPath(parents[currentVertex], parents);
//         document.write(currentVertex + " ");
// }


// let graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
//         [4, 0, 8, 0, 0, 0, 0, 11, 0],
//         [0, 8, 0, 7, 0, 4, 0, 0, 2],
//         [0, 0, 7, 0, 9, 14, 0, 0, 0],
//         [0, 0, 0, 9, 0, 10, 0, 0, 0],
//         [0, 0, 4, 14, 10, 0, 2, 0, 0],
//         [0, 0, 0, 0, 0, 2, 0, 1, 6],
//         [8, 11, 0, 0, 0, 0, 1, 0, 7],
//         [0, 0, 2, 0, 0, 0, 6, 7, 0]
//         ];
// dijkstra(graph,0)

// This code is contributed by rag2127.


// Function to get graph from php file
// function getjson() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', './test.php', true);
//     xhr.onreadystatechange = function() {
//         if(xhr.readyState == 4) {
//             var resText = xhr.responseText;
//             // console.log(resText);
//             // console.log(typeof resText);

//             var arr = resText.split("],");
//             // console.log(arr.length);
//             var len = arr.length;
//             var newGraph = Array.from({length:len},()=>Array(len).fill(0));

//             // var testStr = arr[0];



//             for (var i = 0; i < arr.length; i++) {
//                 var str = arr[i];
//                 var k = 0;
//                 for (var j = 0; j < str.length; j++) {
//                     if (str[j] != ']' && str[j] != '[' && str[j] != ',') {
//                         newGraph[i][k] = Number(str[j]);
//                         k++;

//                     }
//                 }
//             }

//             // console.log(newGraph);
//             graph = newGraph;

//             console.log(graph);

//             // dijkstra(newGraph, 0);

            

//             // var jsonstr = eval(resText);
//             // loadjson(jsonstr);
//         }
//     };
//     xhr.send(null);
// }


// By default, there are only and must be 4 pictures
// in each folder 
var fileNo = 4;
// Ugly function to get the index of
// the correponding picture in the graph.
// By default, there are 4 pictures in a folder
function getIndexOfThisFile(file_id, folder_id) {
    var index = folder_id * fileNo + file_id;
    return index;
}
function getFolderIdByIndex(index) {
    var folder_id = Math.floor(index / fileNo);
    return folder_id;
}
function getFileIdByIndex(index) {
    var file_id = index % fileNo;
    return file_id;
}
// There is a limitation by using fileNo
function turnLeft(file_id) {
    file_id += 1;
    if (file_id >= fileNo) {
        file_id = 0;
        return file_id;
    }
    return file_id;
}

function turnRight(file_id) {
    file_id -= 1;
    if (file_id < 0) {
        file_id = fileNo - 1;
        return file_id;
    }
    return file_id;
}

function turnBack(file_id) {
    file_id = turnLeft(file_id);
    file_id = turnLeft(file_id);
    return file_id;
}

function go(file_id, folder_id) {
    // var graph = getjson();
    var thisIndex = getIndexOfThisFile(file_id, folder_id);
    // console.log(graph);
    for (i = 0; i < graph.length; i++) {
        if (folder_id == getFolderIdByIndex(i)) {
            continue;}
        else {
            if (graph[thisIndex][i] != 0) {
                return i;
                break;
			}
            else {
                continue;
            }}}
	return thisIndex;
}
