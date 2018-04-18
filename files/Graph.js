function Vertex(label) { //表示顶点
    this.label = label;
    this.wasVisited = false;
}

function Graph(v) {
    this.vertices = v; //顶点个数
    this.edges = 0; //边的个数
    this.adj = []; //领接表
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push(undefined); //初始化为undefined
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = []; // 表示访问过的点
    this.edgeTo = []; //保存某个顶点的所有边
    this.pathTo = pathTo;
    this.hasPathTo = hashPathTo;
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] != null) {
                // console.log(i, j, this.adj[i][j]);
                console.log(i + " -> " + this.adj[i][j] + ' ');
            }
        }
        // console.log('\n');
    }
}



//深度搜索
//图的搜索，有关点和线之间的关系。一般是通过领接表
//来搜索一个点到另外一个点的距离
function dfs(v) {
    this.marked[v] = true;
    // 用于输出的 if 语句在这里不是必须的
    if (this.adj[v] != null) {
        console.log("Visited vertex: " + v);
    }
    for (var w in this.adj[v]) {
        // console.log('w',this.adj[v][w]);
        if (!this.marked[this.adj[v][w]]) {
            // console.log('visited');
            this.dfs(this.adj[v][w]);
        }
    }
}

//广度优先搜索
function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
        var v = queue.shift(); // 从队首移除
        if (v != null) {
            console.log("Visisted vertex: " + v);
        }
        for (var w in this.adj[v]) {
            if (!this.marked[this.adj[v][w]]) {
                this.edgeTo[this.adj[v][w]] = v;//需要一个数组来保存从一个顶点到下一个顶点的所有边。
                this.marked[this.adj[v][w]] = true;
                queue.push(this.adj[v][w]);
            }
        }
    }
}

//代码有问题，在能找到路径的情况下没啥问题
function pathTo(v) {
    var source = 0;//是从0开始查找的
    // if (!this.hasPathTo(v)) {
    //     return undefined;
    // }
    var path = [];//是一个栈，到这找
    for (var i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(source);
    return path;
}

function hashPathTo(v) {
    return this.marked[v];
}
//最短路径测试
g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.bfs(0);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
    if (paths.length > 1) {
        console.log(paths.pop() + '-');
    } else {
        console.log(paths.pop());
    }
}
// DFS
// var g = new Graph(5);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 4);
// g.showGraph();
// g.dfs(0);

//BFS
// var g = new Graph(5);
// g.addEdge(0, 1);
// g.addEdge(0, 2);
// g.addEdge(1, 3);
// g.addEdge(2, 4);
// g.showGraph();
// g.bfs(0);


//查找最短路径