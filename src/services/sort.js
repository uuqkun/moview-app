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

    getAllValues() {
        const values = [];

        for (const entry of this.table) {
            if (entry) {
                values.push(...entry.map((e) => e.value));
            }
        }

        return values;
    }
    
    getAllValuesByHashKey(hashTable, hashKey) {
        const index = hashTable.hash(hashKey);

        if (!hashTable.table[index]) {
            return [];
        }

        return hashTable.table[index].filter((entry) => entry.key === hashKey);
    }
}