import {DanceMove} from "../../../app/boogie/api/models";

export const MOVES : DanceMove[] = [
    {
        name : 'Spinta da lato',
        description: 'Ci si tiene per mano, dal lato si tira verso la parte opposta e poi si muove la ballerina fino a dietro',
        labels: ['Boogie Woogie'],
        src: 'spintalato'
    },
    {
        name : 'Giro con gambe incrociato',
        description: 'La coppia gira attorno ad un cerchio tenendosi e incrociando le gambe',
        labels: ['Boogie Woogie'],
        src: 'incrociato'
    },
    {
        name: 'Casquè con ballerina di spalle',
        description: 'Casquè fatto girando la ballerina con partenza di mani incrociate.',
        labels: ['Boogie Woogie'],
        src: 'casce'
    },
    {
        name: 'Giro e spinta dietro',
        description: 'Si prendono entrambe le mani, rock step, imbracciatura da dietro e spinta immediata dietro lato della ballerina.',
        labels: ['Boogie Woogie'],
        src: 'spintadietro'
    },
    {
        name: 'Blocco spalla imbracciatura',
        description: 'Si fa imbracciatura, si blocca la spalla e si ruota la ballerina a ritmo.',
        labels: ['Boogie Woogie'],
        src: 'bloccoimbracciatura'
    }
];
