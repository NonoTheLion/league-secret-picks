export interface ChampionSheet {
    name: string;
    url: string;
    difficulty: number; 
    viability: number; 
    gamemode: string; // aram, invoc, special, all
}

export const champions = [
    {
        name: 'Maitre Yi Quantique',
        url: 'https://raw.githubusercontent.com/NonoTheLion/league-secret-picks/ressources/pdf/QuantiqueYi.pdf',
        difficulty: 1,
        viability: 4,
        gamemode: 'aram'
    },
    {
        name: 'Qiyanus Maximus',
        url: 'https://raw.githubusercontent.com/NonoTheLion/league-secret-picks/ressources/arts/Qiyannus_Maximus.png',
        difficulty: 5,
        viability: 5,
        gamemode: 'all'
    },
    {
        name: 'Khartus Capitaliste',
        url: 'https://raw.githubusercontent.com/NonoTheLion/league-secret-picks/ressources/arts/Karthus_Capitaliste.png',
        difficulty: 4,
        viability: 4,
        gamemode: 'all'
    }
]