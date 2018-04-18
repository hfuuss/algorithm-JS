function List(){
	this.listSize = 0; //列表的个数
	this.pos = 0;//列表当前的位置
	this.dataStore = [];//初始化一个空数组来保存列表
	this.clear = clear; //清空列表中所有的元素
	this.find = find; //找到列中的索引
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if (this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt,1);
		--this.listSize;
		return true;
	}
	return false;
}

function length() {
	return this.listSize;
}

function toString(){
	return this.dataStore;
}

function insert(element, after) {
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1,0,element);
		++this.listSize;
		return true;
	}
	return false;
}

function clear() {
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

function contains(element) {
	for (var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.end = this.listSize - 1;
}
function prev() {
	if(this.pos > 0) {
		--this.pos;
	}
}

function next() {
	if(this.pos < this.listSize - 1){
		++this.pos;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}


//test instance
var names = new List();
names.append('a');
names.append('b');
names.append('c');
names.append('d');
names.append('e');
names.append('f');

names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
