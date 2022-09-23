
export function toRna(Dna: string): string {
    let DNA = Dna.split('')
    for (let i = 0; i < DNA.length; i++) {
        if (DNA[i] === 'G') {
            DNA[i] = 'C'
        }
        else if (DNA[i] === 'C') {
            DNA[i] = 'G'
        }
        else if (DNA[i] === 'T') {
            DNA[i] = 'A'
        }
        else if (DNA[i] === 'A') {
            DNA[i] = 'U'
        }
    }
    return DNA.join()
}

