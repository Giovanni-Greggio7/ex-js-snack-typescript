export type Dipendente = {
    nome: string,
    cognome: string,
    annoDiNascita: number,
    sesso: 'm' | 'f',
    anniDiServizio: number[],
    readonly emailAziendale: string,
    contratto: 'indeterminato' | 'determinato' | 'freelance'
}