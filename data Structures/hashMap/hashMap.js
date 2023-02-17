class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for (const i in key) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        let index = this.hash(key)
        const bucket = this.table[index]
        if(!bucket) return this.table[index]= [[key,value]]

        const sameKeyItem = bucket.find(val=>val[0] === key)
        if(sameKeyItem) sameKeyItem[1] = value
        else bucket.push([key,value])
    }

    get(key){
        let index = this.hash(key)
        const bucket = this.table[index]
        
        if(bucket) {
            const sameKeyItem = bucket.find(val=>val[0]=== key)
            if(sameKeyItem) return sameKeyItem[1]
        }
        return null
    }

    remove(key){
        if(!key)return
        let index = this.hash(key)
        const bucket = this.table[index]
        if(bucket) {
            const sameKeyItem = bucket.find(val=>val[0]=== key)
            if(sameKeyItem) 
                return bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
    }

    display(){
        let table = this.table
        for(let val of table){
            if(!val)continue
            for(let h of val){
                console.log({[h[0]]:h[1]})
            }
        }
    }

}

let table = new HashTable(10)

table.set('abc','hello')
table.set('bac','he')
table.set('cab','adsfdf')
table.set('ab','hhhhhh')
table.set('hi','Hello')

table.display()
