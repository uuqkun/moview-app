export class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }

    hash(key) {
        return key % this.size;
    }

    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = new Array();
        }

        this.table[index].push({ key, value });
    }

    get(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return null;
        }

        for (const entry of this.table[index]) {
            if (entry.key === key) {
                return entry.value;
            }
        }

        return null;
    }

    delete(key) {
        const index = this.hash(key);

        if (!this.table[index]) {
            return;
        }

        for (let i = 0; i < this.table[index].length; i++) {
            const entry = this.table[index][i];

            if (entry.key === key) {
                this.table[index].splice(i, 1);
                return;
            }
        }
    }

    displayTable(hashTable, key) {
        const index = hashTable.hash(key);

        for (let i = 0; i < this.size; i++) {
            console.log(`Index ${i}:`);


            const value = hashTable.table[index].filter((entry) => entry.key === key)
            console.log(value)

            if (hashTable.table[index]) {
                let value = hashTable.table[index].filter((entry) => entry.key === key)
                console.log(value)

                // console.log(`  - Key: ${this.table[index].}, Value: ${value}`);

            } else {
                console.log('  - Empty');
            }
        }
    }

    getAllValuesByHashKey(hashTable, hashKey) {
        const index = hashTable.hash(hashKey);

        if (!hashTable.table[index]) {
            return [];
        }

        return hashTable.table[index].filter((entry) => entry.key === hashKey);
    }
}