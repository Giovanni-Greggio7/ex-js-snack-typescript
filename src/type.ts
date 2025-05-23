export type Dipendente = {
    nome: string,
    cognome: string,
    annoDiNascita: number,
    sesso: 'm' | 'f',
    anniDiServizio: number[],
    readonly emailAziendale: string,
    contratto: 'indeterminato' | 'determinato' | 'freelance'
}

export type Developer = Dipendente & {
    livelloEsperienza: 'junior' | 'mid' | 'senior',
    linguaggi?: string[],
    certificazioni: string[] 
}

export type ProjectManager = Dipendente & {
    teamSize: number | null,
    budgetGestito?: number,
    stakeholderPrincipali: string[] 
}

export type Team = {
    nome: string,
    progettoAttuale: string | null,
    budget: number,
    membri: [ProjectManager, Developer, ...Developer[]]
}