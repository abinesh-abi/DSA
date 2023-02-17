
// https://learnersbucket.com/tutorials/data-structures/trie-data-structure-in-javascript/
class Node {
  constructor(key) {
    this.key = key;
    this.parent = null;
    this.children = {};
    this.end = false;
  }
  getWord = () => {
    let output = [];
    let node = this;
    while (node != null) {
      output.unshift(node.key);
      node = node.parent;
    }
    return output.join("");
  };
}

class Trie {
  constructor() {
    this.root = new Node(null);
  }

  insert(word) {
    let node = this.root;
    
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node(char);

        // we also assign the parent to the child node.
        node.children[char].parent = node;
      }
      node = node.children[char];
    }
    node.end = true;
  }

  constains(word) {
    let node = this.root;

    for (let char of word) {
      if (node.children[char]) {
        node = node.children[char];
      } else {
        return false;
      }
    }
    return node.end;
  }
  find(prefix){
    let node = this.root
    let output = []
    
    for(let char of prefix){
        if(node.children[char]){
            node = node.children[char]
        }else{
            return output
        }
    }
    this.findAllWords(node,output)
    return output

  }

  // recursive function to find all words in the given node.
  findAllWords(node,array){
    if(node.end){
        array.push(node.getWord())
    }

    for(let child in node.children){
        this.findAllWords(node.children[child],array)
    }
  }

  remove(word){
    let root = this.root
    if(!word)return

    // recursively finds and removes a word
    function removeWord(node,word){
        if(node.end && node.getWord() === word ){
            // check and see if node has children
            let hasChildren = Object.keys(node.children).length > 0;

            if(hasChildren) node.end = false;
            else node.parent.children = {}
            return true
        }
        // recursively remove word from all children
        for(let key in node.children){
            removeWord(node.children[key],word)
        }
        return false
    }

    removeWord(root,word)
  }
}

let trie = new Trie();
trie.insert("abi");
trie.insert("abin");
trie.insert("abinesh");
trie.insert("abishek");
trie.insert("akshay");
trie.insert("sumith");
trie.insert("sujith");
trie.insert('jastin')
// trie.remove('abi')
// console.log(trie.constains("ab"));
console.log(trie.find('abi'),'find')

// console.log(trie.root);
